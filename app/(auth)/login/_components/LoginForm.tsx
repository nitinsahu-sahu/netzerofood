"use client";
import React, { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackButton } from "@/components/back-button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { LoginAction } from "@/actions/login";
import { useRouter } from "next/navigation";
import Logo from "../../../../public/hompage.png"; // Import the background image

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      LoginAction(values).then((data) => {
        if (data?.success) {
          router.push("/");
          window.location.reload();
        }
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Logo.src})` }} // Use the imported image as background
    >
      <div className="flex items-center justify-center h-full px-4 py-20">
        <div className="max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 space-y-6">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white">Login</h1>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4 max-w-xl mx-auto">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John.Doe@example.com"
                          type="email"
                          className="bg-white bg-opacity-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="*******"
                          type="password"
                          className="bg-white bg-opacity-50"
                        />
                      </FormControl>
                      <div className="flex flex-row items-center justify-between">
                        <Button
                          size={"sm"}
                          variant={"link"}
                          asChild
                          className="px-0 font-normal text-[#D18F52] hover:text-indigo-500"
                        >
                          <Link href="/reset">Forgot password?</Link>
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button or other actions */}
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="flex w-full justify-center rounded-md bg-[#D18F52] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </Button>
              </div>
            </form>
            <div className="mt-3">
              <BackButton label="Don't have an account?" href="/register" />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
