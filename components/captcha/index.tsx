// Import necessary modules and components
"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";


// Define the ContactUs component
export const GoogleRecaptcha= () => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LcSJFMqAAAAAJswptrlpSzULnDC7qh2gNysIMIv"
        onChange={(value) => console.log("Captcha value:", value)}
      />
    </div>
  );
};
