import * as z from "zod";
import nlp from "compromise";

// export const ContactUsSchema = z.object({
//   Name: z.string(),
//   email: z.string().email(),
//   message: z.string(),
//   phoneNumber: z.string(),
//   subject: z.string(),
// });
// List of abusive words to be filtered
const bannedWords = ["abuse", "badword1", "badword2"]; // Add more words as needed
const validateMessage = (message: string) => {
  const doc: any = nlp(message);

  // Check for abusive words
  for (const word of bannedWords) {
    if (message.toLowerCase().includes(word)) {
      return false;
    }
  }

  // Ensure there are proper sentences
  const sentences = doc.sentences();
  if (sentences.length === 0) {
    return false;
  }

  // Ensure each sentence has at least one noun and one verb
  let hasProperStructure = true;
  sentences.forEach((sentence: any) => {
    const nouns = sentence.nouns().out("array");
    const verbs = sentence.verbs().out("array");
    if (nouns.length === 0 || verbs.length === 0) {
      hasProperStructure = false;
    }
  });

  if (!hasProperStructure) {
    return false;
  }

  // Ensure minimum word count
  const wordCount = doc.wordCount();
  if (wordCount < 10) {
    return false;
  }

  // Ensure variety in content
  const uniqueWords = new Set(doc.out("array"));
  if (uniqueWords.size < wordCount / 2) {
    return false;
  }

  return true;
};

export const ContactUsSchema = z.object({
  Name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message cannot exceed 1000 characters")
    .refine(validateMessage, {
      message: "Message contains inappropriate or nonsensical content",
    }),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject cannot exceed 100 characters"),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});
