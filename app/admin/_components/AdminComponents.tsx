"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

export const AdminComponents = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* <nav className="bg-gradient-to-br from-emerald-800 to-emerald-600 w-full lg:w-1/5 p-4 lg:h-screen shadow-lg animate-slide-in-left">
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <ul className="text-white space-y-4 w-full">
            <li className="flex items-center space-x-2 p-2 hover:bg-emerald-700 rounded-md cursor-pointer transition-all duration-200">
              <FaHome />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-emerald-700 rounded-md cursor-pointer transition-all duration-200">
              <FaUser />
              <span>Users</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-emerald-700 rounded-md cursor-pointer transition-all duration-200">
              <FaCog />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-2 p-2 hover:bg-emerald-700 rounded-md cursor-pointer transition-all duration-200">
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </nav> */}
      <main className="flex-1 p-8">
        <div className="flex flex-col items-center justify-center h-full space-y-6 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 text-center md:text-5xl lg:text-6xl">
            Welcome, Admin!
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-xl">
            Manage your application settings, users, and other administrative
            tasks from here.
          </p>
          <Link href={"https://pasal-du-bois-admin.vercel.app/"}>
            <Button className="transform transition-transform duration-300 hover:scale-110">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </main>
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
