import Image from "next/image";
import React from "react";
import Home2 from "@/public/climate2.png";
import { Navbar } from "@/components/Navbar";
import { OrganicHeroSection } from "@/app/organic-farming/_components/OrganicHeroSection";
import { ClimateHeroSection } from "./ClimateHeroSection";
import { ClimateArticle } from "./ClimateArticle";

export const ClimatePageComponents = () => {
  return (
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
        <Navbar />
      </div>
      {/* Hero heading */}
      {/* d:left-[2%] lg:left-[15%] xl:left-[25%] 3xl:left-[34%] */}
      <div className=" absolute top-[28%] w-full ">
        {/* <OrganicHeroSection /> */}
        <ClimateHeroSection />
      </div>
      {/* Showcase */}
      <div className=" absolute left-[0%] top-[75%] z-30 -mt-12 3xl:-mt-2 w-full">
        {/* <Showcase /> */}
        {/* <SustainabilityArticle /> */}
        {/* <OrganicDetails /> */}
        <ClimateArticle />
      </div>
    </div>
  );
};
