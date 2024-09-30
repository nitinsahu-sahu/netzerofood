import Image from "next/image";
import React from "react";
import divider from "@/public/Divider.png";

export const OrderHeroSection = () => {
  return (
    <div className=" max-w-5xl mx-auto space-y-4 ">
      {/* heading */}
      <div className=" text-white font-bold">
        <h1 className=" text-3xl text-center sm:text-3xl pl-8 sm:pl-8 md:pl-0 md:text-4xl lg:text-5xl">
          Order here
        </h1>
      </div>
      {/* Divider Image */}
      <div className=" flex flex-row items-center justify-center pl-8 sm:pl-0">
        <Image
          src={divider}
          alt="Divider"
          width={380}
          height={200}
          className=" w-[230px] sm:w-[380px] 3xl:w-[600px]"
        />
      </div>
    </div>
  );
};
