import Image from "next/image";
import React from "react";
import Logo from "@/public/organic-burger.png";
import Burger from "@/public/burger.png";

const Burgerpage = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Burger}
          alt="Burger Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 p-4 bg-black bg-opacity-50">
        <Image
          src={Logo}
          alt="Organic Burger Logo"
          height={200}
          width={200}
          className="animate-pulse"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-wide">Organic Burger</h1>
          <p className="mt-4 text-lg font-light">
            Delicious, Healthy, and Organic Burgers for Everyone!
          </p>
        </div>
        <div className="text-center mt-8">
          <h2 className="text-4xl font-semibold animate-bounce">Coming Soon</h2>
        </div>
      </div>
    </div>
  );
};

export default Burgerpage;
