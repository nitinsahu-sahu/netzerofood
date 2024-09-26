"use server";
import { mailOptions, transporter } from "./nodemailer";

const generateContachUsContent = (
  name: any,
  email: any,
  phone: any,
  subject: any,
  message: any
) => {
  return `
        <p>Dear ${name},</p>
        <p>Email : ${email} </p>
        <p>Number : ${phone}</p>
        <p>Number : ${subject}</p>
        <p><strong>${message}</strong></p>
      `;
};

const emailSendContact = async (
  name: any,
  email: any,
  phone: any,
  subject: any,
  message: any
) => {
  const emailContent = generateContachUsContent(
    name,
    email,
    phone,
    subject,
    message
  );
  const recipients = [
    "info@netzerofoods.org",
    "pascal@netzerofoods.org",
    "contact@netzerofoods.org",
    "sales@netzerofoods.org",
  ];

  const finalMailOptions = {
    ...mailOptions, // Assuming mailOptions is predefined with sender details
    html: emailContent,
    // to: "pascal@netzerofoods.org",
    to: recipients.join(", "),
    subject: `${subject}`,
  };

  try {
    const info = await transporter.sendMail(finalMailOptions);
    console.log("Email sent:", info);
  } catch (error) {
    console.error("Email error:", error);
  }
};

/**
 *
 * @param name
 * @param email
 * @param phone
 * @param subject
 * @param message
 */
export async function sendContactEmail(
  name: any,
  email: any,
  phone: any,
  subject: any,
  message: any
) {
  try {
    await emailSendContact(name, email, phone, subject, message);
    console.log("Email sent successfully.");
    return {
      success: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      error: `${error}`,
    };
  }
}
