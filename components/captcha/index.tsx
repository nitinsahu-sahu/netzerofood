// Import necessary modules and components
"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";


// Define the ContactUs component
export const GoogleRecaptcha= () => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lfco08qAAAAAJSgM7OaCKInN0yYd_XYotxfs2Ef"
        onChange={(value) => console.log("Captcha value:", value)}
      />
    </div>
  );
};
