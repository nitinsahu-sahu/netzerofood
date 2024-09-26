"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.png";
import { Button } from "../ui/button";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCurrentUser } from "@/lib/use-current-user";
import { signOut } from "next-auth/react";
import { currentUser } from "@/lib/currentUser";
import { User } from "@prisma/client";
interface NavbarProps {
  user: User;
}

export const Navbar = ({ user }: any) => {
  console.log("🚀 ~ Navbar ~ user:", user);
  const router = useRouter();
  const pathname = usePathname();
  console.log("🚀 ~ Navbar ~ pathname:", pathname);
  const [reloaded, setReloaded] = useState(false);

  const handleImage = () => {
    router.push("/");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100); // Adjust the delay as needed
    // console.log("Pushed ----->");
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" text-white flex flex-row justify-between items-center px-11 py-4 xl:p-4 w-full ">
        <div onClick={handleImage} className=" ">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="rounded-full hover:cursor-pointer"
          />
        </div>
        <div className=" hidden xl:flex uppercase  flex-row items-center space-x-4 font-Truculenta ">
          <p
            onClick={() => router.push("/zero-food")}
            className=" hover:cursor-pointer hover:opacity-60 3xl:text-lg"
          >
            Why Net zero foods
          </p>
          <p
            onClick={() => router.push("/climate")}
            className=" hover:cursor-pointer hover:opacity-60 3xl:text-lg "
          >
            climate change
          </p>
          <p
            onClick={() => router.push("/organic-farming")}
            className=" hover:cursor-pointer hover:opacity-60 3xl:text-lg "
          >
            organic farming
          </p>
          <p
            onClick={() => router.push("/social-goverence")}
            className=" hover:cursor-pointer hover:opacity-60 3xl:text-lg "
          >
            social governance
          </p>
          <Button
            onClick={() => router.push("/contact-us")}
            className=" bg-white text-black font-bold text-lg rounded-3xl hover:bg-gray-400 hover:text-black 3xl:text-lg font-Truculenta uppercase "
          >
            Contact us
          </Button>
          <div className=" flex flex-row items-center space-x-3 3xl:text-lg">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <BiLogoGmail />
          </div>
          {user ? (
            <>
              <Button onClick={() => signOut()} variant={"destructive"}>
                Logout
              </Button>
            </>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <div
                    onClick={() => router.push("/register")}
                    className=" flex flex-row items-center space-x-3 3xl:text-lg hover:cursor-pointer hover:opacity-70 duration-300 ease-in-out"
                  >
                    <div className=" bg-white h-8 w-8 flex flex-row items-center justify-center rounded-full">
                      <FaUser size={20} className=" text-black" />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Do you wanna register ?</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <Sheet>
          <SheetTrigger>
            <div className=" block xl:hidden">
              <RxHamburgerMenu size={30} />
            </div>
          </SheetTrigger>
          <SheetContent side={"top"}>
            <div className=" uppercase flex flex-col items-center justify-center h-full space-y-8 text-black text-center">
              <p
                onClick={() => router.push("/zero-food")}
                className=" hover:cursor-pointer  hover:border-b-2 hover:border-black"
              >
                Why Net zero foods
              </p>
              <p
                onClick={() => router.push("/climate")}
                className=" hover:cursor-pointer hover:border-b-2 hover:border-black "
              >
                climate change
              </p>
              <p
                onClick={() => router.push("/organic-farming")}
                className=" hover:cursor-pointer hover:border-b-2 hover:border-black "
              >
                organic farming
              </p>
              <p
                onClick={() => router.push("/social-goverence")}
                className=" hover:cursor-pointer hover:border-b-2 hover:border-black "
              >
                social governance
              </p>
              <Button
                onClick={() => router.push("/contact-us")}
                className=" bg-black text-white font-bold text-lg rounded-3xl hover:bg-gray-400 hover:text-black z-30"
              >
                Contact us
              </Button>
              <div className=" flex flex-row items-center space-x-3">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <BiLogoGmail />
              </div>
              {user ? (
                <>
                  <Button onClick={() => signOut()} variant={"destructive"}>
                    Logout
                  </Button>
                </>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <div
                        onClick={() => router.push("/register")}
                        className=" flex flex-row items-center space-x-3 3xl:text-lg hover:cursor-pointer hover:opacity-70 duration-300 ease-in-out"
                      >
                        <div className=" bg-white h-8 w-8 flex flex-row items-center justify-center rounded-full">
                          <FaUser size={20} className=" text-black" />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Do you wanna register ?</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
