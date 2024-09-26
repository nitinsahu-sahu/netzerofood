import { ContactUS } from "@/components/ContactUS";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import home from "@/public/hompage.png";
import Footer from "@/components/Footer";
import { pages } from "../social-goverence/_components/Showcase";
import { currentUser } from "@/lib/currentUser";

const ContactUs = async () => {
  const user: any = await currentUser();
  return (
    <div className=" relative h-screen w-full">
      <Image
        src={home}
        alt="home"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        quality={100}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
      {/* Navbar */}
      <div className=" absolute  z-30 w-full">
        <Navbar user={user?.data} />
      </div>
      {/* Contact us */}
      <div className=" max-w-7xl mx-auto p-6">
        <ContactUS />
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
      <div className="">
        <Footer />
      </div>
      {/* bottom heading */}
      <div className=" bg-[#656B4E] h-[49px] w-full flex flex-col items-center justify-center">
        <p className=" flex flex-row items-center justify-center text-neutral-100">
          Copyright 2024 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
