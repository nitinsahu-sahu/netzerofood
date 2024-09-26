import Image from "next/image";
import React from "react";
import email from "@/public/email.png";
import { GoogleRecaptcha } from "@/components/captcha";

export const EmailSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            src={email}
            alt="Email"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md mx-auto h-full rounded-lg p-6 bg-white shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-black">
            Sign up to our Newsletter
          </h2>
          <p className="text-gray-600 mb-4">
            Get important messages straight to your inbox
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-600">
                I accept all the{" "}
                <a href="#" className=" text-black">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <GoogleRecaptcha />
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
