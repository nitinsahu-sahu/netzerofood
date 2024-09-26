import Image from "next/image";
import React from "react";
import Home2 from "@/public/homepage2.png";
import { Navbar } from "@/components/Navbar";
import { SocialHeroSection } from "./SocialHeroSection";
import { Showcase } from "./Showcase";
import { EmailSection } from "./EmailSection";
import { currentUser } from "@/lib/currentUser";

export const SocialPageComponent = async () => {
  const user: any = await currentUser();
  return (
    <>
      <div className=" relative h-[780px] w-full ">
        <Image
          src={Home2}
          alt="Home2"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
        />
        {/* bg overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        {/* navbar */}
        <div className=" absolute  z-30 w-full">
          <Navbar user={user?.data} />
        </div>
        {/* Hero heading */}
        <div className=" absolute top-[28%] w-full">
          <SocialHeroSection />
        </div>
        {/* Showcase */}
        <div className=" absolute left-[0%] top-[75%] z-30 -mt-12 w-full">
          <Showcase />
        </div>
      </div>
    </>
  );
};
