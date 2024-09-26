import Image from "next/image";
import React from "react";
import logo from "@/public/leboule.png";
import boulevard from "@/public/boulevard.png";

const LeBoulevard = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={boulevard}
          alt="Boulevard Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 p-4 bg-black bg-opacity-50">
        <Image
          src={logo}
          alt="Logo"
          height={200}
          width={200}
          className="animate-bounce"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-wide">Coming Soon</h1>
          <p className="mt-4 text-lg font-light">
            We are working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeBoulevard;
