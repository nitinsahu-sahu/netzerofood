import Image from "next/image";
import React from "react";
import divider from "@/public/Divider.png";

export const OrganicHeroSection = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-4 ">
      {/* heading */}
      <div className=" text-white font-bold">
        <h1 className=" text-3xl text-center sm:text-3xl sm:pl-8 md:pl-0 md:text-4xl lg:text-5xl">
          Organic Farming
        </h1>
      </div>
      {/* Divider Image */}
      <div className=" flex flex-row items-center justify-center">
        <Image
          src={divider}
          alt="Divider"
          width={380}
          height={200}
          className=" w-[230px] sm:w-[380px] 3xl:w-[600px]"
        />
      </div>
      <div className=" max-w-[730px] 3xl:max-w-[800px] sm:mx-auto flex flex-row items-center justify-center bg-black/30 text-white mx-3 p-3 sm:p-6 rounded-lg">
        <p className=" text-sm sm:text-base 3xl:text-2xl font-Truculenta">
          Agroecology is an umbrella term that covers lots of agricultural
          practices that you may be more familiar with, like organic, biodynamic
          or permaculture.
        </p>
      </div>
    </div>
  );
};
