"use client";
import React from "react";
import Image from "next/image";
import divider from "@/public/Divider.png";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/lib/use-current-user";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <div className=" text-white flex flex-col items-start space-y-2 3xl:space-y-4  ">
      <div className=" capitalize text-3xl sm:text-5xl font-bold 3xl:text-7xl">
        <h1>Net Zero Foods</h1>
      </div>
      {/* Divider Image */}
      <div className=" ">
        <Image
          src={divider}
          alt="Divider"
          width={380}
          height={200}
          className=" w-[230px] sm:w-[380px] 3xl:w-[600px]"
        />
      </div>
      <div className=" max-w-[650px] 3xl:max-w-[800px]">
        <p className=" text-sm sm:text-base 3xl:text-2xl font-Truculenta">
          Net Zero is a commitment that all countries within the United Nations
          have agreed upon, in order to achieve a net zero carbon system by
          2050. This is so that we can cut our harmful emissions and replace
          current systems with more sustainable solutions.
        </p>
      </div>
      {/* Button */}
      <div className="flex items-center justify-center ">
        <button
          onClick={() => router.push("/order")}
          className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-full border border-white border-opacity-30 text-white font-bold tracking-wide hover:bg-opacity-30 transition-all duration-300 text-sm sm:text-base 3xl:text-3xl"
        >
          Place An Order &rarr;
        </button>
      </div>
    </div>
  );
};
