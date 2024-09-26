// Import necessary modules and components
"use client";
import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ContactUsSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendContactEmail } from "@/lib/mail";
import { toast } from "sonner";
import { GoogleRecaptcha } from "./captcha";

// Define the ContactUs component
export const ContactUS = () => {
  const [isPending, startTransaction] = useTransition();
  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      Name: "",
      email: "",
      message: "",
      phoneNumber: "",
      subject: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactUsSchema>) {
    if (values) {
      startTransaction(() => {
        sendContactEmail(
          values.Name,
          values.email,
          values.phoneNumber,
          values.subject,
          values.message
        ).then((data) => {
          if (data.success) {
            form.reset();
            toast.success(data.success);
          }
          if (data.error) {
            toast.error(data.error);
          }
        });
      });
    }
  }

  return (
    <div className="flex flex-col items-center  text-white py-10 mt-20 px-4 md:px-0">
      <div className="relative max-w-5xl w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg -z-10"></div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-2/5">
            <h1 className="text-4xl font-bold mb-4 text-black sm:text-white">
              Contact Us
            </h1>
            <p className="mb-4 text-black sm:text-white">
              We&apos;d love to hear from you! If you have any questions,
              comments, or suggestions, please do not hesitate to contact us.
            </p>
            <p className="mb-8 text-black sm:text-white">
              We value your opinions and are committed to providing you with the
              best product possible.
            </p>
            <p className="mb-2 text-black sm:text-white">
              <strong>Address:</strong>
            </p>
            <p className="mb-4 text-black sm:text-white">
              85 Great Portland Street, London, W1W 7LT, United Kingdom
            </p>
            <p className="mb-2 text-black sm:text-white">
              <strong>Email:</strong>
            </p>
            <p className=" text-black sm:text-white  text-wrap text-sm sm:text-base">
              pascal@netzerofoods.org
            </p>
            <p className=" text-black sm:text-white text-wrap text-sm sm:text-base">
              info@netzerofoods.org
            </p>
            <p className=" text-black sm:text-white text-wrap text-sm sm:text-base">
              contact@netzerofoods.org
            </p>
            <p className=" text-black sm:text-white text-wrap text-sm sm:text-base">
              sales@netzerofoods.org
            </p>
          </div>
          <div className="w-full md:w-3/5 bg-white p-8 rounded-lg shadow-md text-black">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="form-textarea p-2 mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border border-black"
                          placeholder="Your Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Add reCAPTCHA component */}
                <GoogleRecaptcha />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Assuming you have a Textarea component
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>((props, ref) => (
  <textarea
    ref={ref}
    {...props}
    className="form-textarea p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
));

Textarea.displayName = "Textarea";