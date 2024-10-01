import React from "react";
import burger from "@/public/burger-comming-soon.png";
import boulevard from "@/public/boulevard-comming-soon.png";
// import kombucha from "@/public/robot.png";
import kombucha from "@/public/robot-kombucha-comming-soon.png";
import Image from "next/image";
import { EmailSection } from "@/app/social-goverence/_components/EmailSection";
import { pages } from "@/app/social-goverence/_components/Showcase";
import Footer from "@/components/Footer";

const brands = [
  {
    src: kombucha,
    title: "ROBOT Kombucha",
    link: "https://www.robotkombucha.co.uk",
    domain: "www.robotkombucha.co.uk",
  },
  {
    src: burger,
    title: "The Organic Burger Co",
    link: "/burger",
    domain: "www.organicburger.co.uk",
  },
  {
    src: boulevard,
    title: "Le Boulevard",
    link: "/le-boulevard",
    domain: "www.leboulevard.co.uk",
  },
  
];

export const OrderBrands = () => {
  return (
    <>
      <div className=" bg-white rounded-tl-3xl rounded-tr-3xl max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mx-3 my-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={brand.src}
                alt={brand.title}
                className="w-full h-[480px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {brand.title}
                </h3>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 flex items-center space-x-1"
                >
                  <span>{brand.domain}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-9.5 9.5m0 0H7m6.5-9.5L21 3m-8.5 13.5V21m0-8.5L3 21"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Email Section */}
      <div className="my-20">
        <EmailSection />
      </div>
      {/* Read Other Pages */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold mb-6">Read other pages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pages.map((page, index) => (
            <div key={index} className="max-w-xs w-full md:w-1/3 lg:w-1/4">
              <div className="relative">
                <Image
                  src={page.src}
                  alt={page.title}
                  width={390}
                  height={240}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {page.title}
                  </h3>
                  <a href={page.link} className="text-white flex items-center">
                    Read More <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
      {/* Bottom Heading */}
      <div className="bg-[#656B4E] h-[49px] w-full flex flex-col items-center justify-center">
        <p className="flex flex-row items-center justify-center text-neutral-100">
          Copyright 2024 | All rights reserved
        </p>
      </div>
    </>
  );
};
