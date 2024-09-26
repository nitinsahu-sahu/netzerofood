import Image from "next/image";
import React from "react";
// import goals from "@/public/goals.png"; // Replace with actual image paths
import farming from "@/public/goalfood.png"; // Replace with actual image paths
import progress from "@/public/goal3.png"; // Replace with actual image paths
import community from "@/public/goaloutside.png";
import one from "@/public/1.png";
import two from "@/public/2.png";
import three from "@/public/3.png";
import four from "@/public/4.png";
import fifth from "@/public/5.png";
import six from "@/public/6.png";
import seven from "@/public/7.png";
import eight from "@/public/8.png";
import nine from "@/public/9.png";
import ten from "@/public/10.png";
import eleven from "@/public/11.png";
import twelve from "@/public/12.png";
import thirteen from "@/public/13.png";
import fourteen from "@/public/14.png";
import fifteen from "@/public/15.png";
import sixteen from "@/public/16.png";
import seventeen from "@/public/17.png";
import { EmailSection } from "@/app/social-goverence/_components/EmailSection";
import { pages } from "@/app/social-goverence/_components/Showcase";
import Footer from "@/components/Footer";

const goals = [
  { id: 1, name: "No Poverty", color: "bg-red-500", icon: one },
  { id: 2, name: "Zero Hunger", color: "bg-orange-400", icon: two },
  {
    id: 3,
    name: "Good Health and Well-Being",
    color: "bg-green-500",
    icon: three,
  },
  { id: 4, name: "Quality Education", color: "bg-red-700", icon: four },
  { id: 5, name: "Gender Equality", color: "bg-red-500", icon: fifth },
  {
    id: 6,
    name: "Clean Water and Sanitation",
    color: "bg-blue-300",
    icon: six,
  },
  {
    id: 7,
    name: "Affordable and Clean Energy",
    color: "bg-yellow-400",
    icon: seven,
  },
  {
    id: 8,
    name: "Decent Work and Economic Growth",
    color: "bg-red-700",
    icon: eight,
  },
  {
    id: 9,
    name: "Industry, Innovation and Infrastructure",
    color: "bg-orange-500",
    icon: nine,
  },
  { id: 10, name: "Reduced Inequalities", color: "bg-pink-500", icon: ten },
  {
    id: 11,
    name: "Sustainable Cities and Communities",
    color: "bg-orange-500",
    icon: eleven,
  },
  {
    id: 12,
    name: "Responsible Consumption and Production",
    color: "bg-yellow-500",
    icon: twelve,
  },
  { id: 13, name: "Climate Action", color: "bg-green-600", icon: thirteen },
  { id: 14, name: "Life Below Water", color: "bg-blue-400", icon: fourteen },
  { id: 15, name: "Life on Land", color: "bg-green-500", icon: fifteen },
  {
    id: 16,
    name: "Peace, Justice and Strong Institutions",
    color: "bg-blue-800",
    icon: sixteen,
  },
  {
    id: 17,
    name: "Partnerships for the Goals",
    color: "bg-blue-600",
    icon: seventeen,
  },
];

export const SustainableGoalArticle = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-12 text-center sm:text-left">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row space-x-3 md:ml-20 lg:ml-16">
            <div className="flex flex-col items-center sm:items-start mt-7 space-y-2 ">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p>Introduction</p>
                <div className="border-t-2 md:border-t-0 lg:border-r-2 border-emerald-600 h-5 w-full md:w-auto mt-2 md:mt-0 ml-2"></div>
              </div>
              <p className="text-gray-700">Agroecology</p>
            </div>
            <header className="mt-4 lg:mt-0">
              <h1 className="text-4xl font-bold text-green-900">
                Organic Farming & Food
              </h1>
              <p className="mt-4 text-gray-700">
                The Sustainable Development Goals (SDGs) are a collection of 17
                global goals adopted by the United Nations in 2015. They aim to
                achieve a better and more sustainable future for all by 2030.
                The SDGs address various global challenges, including poverty,
                inequality, climate change, environmental degradation, peace,
                and justice.
              </p>
            </header>
          </div>

          {/* SDG Goals Section */}
          <section className="space-y-6 md:ml-20 lg:ml-[182px]">
            <h2 className="text-xl font-bold text-green-900">
              The 17 Sustainable Development Goals are as follows:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 ml-4 sm:ml-10 md:ml-0 ">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  // className={`${goal.color} rounded-lg p-4 flex flex-col items-center`}
                >
                  <Image
                    src={goal.icon}
                    alt={goal.name}
                    width={120}
                    height={120}
                    className="mb-2"
                  />
                  {/* <p className="text-white font-bold text-center">{goal.name}</p> */}
                </div>
              ))}
            </div>
          </section>

          {/* Organization Section */}
          <section className="space-y-6 md:ml-20 lg:ml-[180px]">
            <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={farming}
                  alt="Farming"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className=" text-sm lg:text-base">
                <p className="">
                  Net Zero Foods, an organization working to end extreme
                  poverty, predominantly focuses on SDG1 (No Poverty) and SDG2
                  (Zero Hunger). SDG2 is particularly critical as it underpins
                  many other goals.
                </p>
                <p className="">
                  Without ensuring access to nutritious food, improvements in
                  health or education will be limited. Net Zero Foods also works
                  to reduce global food waste, which is a key contributor to
                  poverty and food insecurity.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Section */}
          <section className="space-y-6 md:ml-20 lg:ml-[180px] ">
            <div className="flex flex-col items-center sm:items-start md:flex-row  space-y-4 md:space-y-0 md:space-x-6">
              <div className=" lg:mr-14 space-y-2 text-sm lg:text-base  ">
                <p className=" font-medium lg:text-base ">
                  While progress has been made in reducing extreme poverty and
                  improving global well-being, the world is off track to meet
                  the SDGs by 2030.
                </p>
                <p>
                  Challenges such as rising hunger levels, increasing
                  inequality, and the impact of the COVID-19 pandemic have
                  hindered progress. Reductions in aid funding, such as the
                  UK&apos;s cuts to nutrition programs, have further exacerbated
                  the situation. It is crucial for countries to prioritize
                  poverty eradication and invest in sustainable development
                  efforts to achieve the SDGs.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={community}
                  alt="Progress"
                  width={320}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="space-y-6 md:ml-20 lg:ml-[180px]">
            <div className="flex flex-col items-center sm:items-start md:flex-row  space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={progress}
                  alt="Community"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className=" space-y-3 lg:pt-4">
                <p className=" font-medium">
                  Net Zero Foods continues to respond to global challenges and
                  supports vulnerable communities in developing countries.
                </p>
                <p>
                  They emphasize the importance of health and nutrition in
                  addressing the root causes of poverty and work to provide
                  knowledge and resources to improve the well-being of
                  individuals and families.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Email Section */}
      <div className="my-20">
        <EmailSection />
      </div>

      {/* Read Other Pages */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold mb-6">Read other pages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pages.map((page, index) => (
            <div key={index} className="max-w-xs w-full md:w-1/3 lg:w-1/4">
              <div className="relative">
                <Image
                  src={page.src}
                  alt={page.title}
                  width={390}
                  height={240}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {page.title}
                  </h3>
                  <a href={page.link} className="text-white flex items-center">
                    Read More <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
      {/* Bottom Heading */}
      <div className="bg-[#656B4E] h-[49px] w-full flex flex-col items-center justify-center">
        <p className="flex flex-row items-center justify-center text-neutral-100">
          Copyright 2024 | All rights reserved
        </p>
      </div>
    </>
  );
};
