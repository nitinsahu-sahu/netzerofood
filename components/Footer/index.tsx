"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/footerlogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-white py-10 text-black">
      <div className="container mx-auto px-4">
        <div className="flex  w-full flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex flex-col items-center justify-center md:justify-start ">
            <Image
              src={logo}
              alt="Net Zero Foods"
              className="mb-4 text-black"
              width={120}
              height={120}
            />
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaXTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex flex-col  justify-center md:justify-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 ">Who we are</h3>
            <ul>
              <li className="mb-2">
                <a href="/zero-food">Why Net Zero Foods</a>
              </li>
              <li className="mb-2">
                <a href="/climate">Climate Change</a>
              </li>
              <li className="mb-2">
                <a href="/organic-farming">Organic Farming</a>
              </li>
              <li className="mb-2">
                <a href="/contact-us">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/social-goverence">Environmental Social Governance</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex flex-col  justify-center md:justify-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Our brands</h3>
            <ul>
              <li className="mb-2">
                <a href="/burger">
                  The Organic Burger Co <span>&rarr;</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/le-boulevard">
                  Le Boulevard <span>&rarr;</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.robotkombucha.co.uk">
                  ROBOT Kombucha <span>&rarr;</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col  justify-center md:justify-start text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <a href="/privacy-policy">Terms & conditions</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy">Privacy policy</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy">Cookies policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
