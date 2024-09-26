import Image from "next/image";
import React from "react";
import home from "@/public/hompage.png";
import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";
import Footer from "../Footer";
import { currentUser } from "@/lib/currentUser";

export const HomePageComponent = async () => {
  const user: any = await currentUser();
  console.log(user);
  return (
    <>
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
        {/* navbar */}
        <div className=" absolute  z-30 w-full">
          <Navbar user={user?.data} />
        </div>
        {/* HomePage */}
        <div className=" absolute top-[45%] left-[11%] 3xl:left-[26%]  ">
          <HeroSection />
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
    </>
  );
};
