import { SocialHeroSection } from "@/app/social-goverence/_components/SocialHeroSection";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import React from "react";
// import order from "@/public/order.png";
import order from "@/public/order-here.jpg";
import { OrderHeroSection } from "./OrderHeroSection";
import { OrderBrands } from "./OrderBrands";
import { currentUser } from "@/lib/currentUser";

export const OrderPageComponents = async () => {
  const user: any = await currentUser();
  return (
    <div className=" relative h-[780px] w-full ">
      <Image
        src={order}
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
      <div className=" absolute  top-[28%] w-full ">
        <OrderHeroSection />
      </div>
      {/* Showcase */}
      <div className=" absolute left-[0%] top-[73%] z-30 -mt-12 w-full">
        {/* <Showcase /> */}
        <OrderBrands />
      </div>
    </div>
  );
};
