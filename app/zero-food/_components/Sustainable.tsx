// components/SustainabilityArticle.js
import Image from "next/image";
import React from "react";
import nature from "@/public/nature.png"; // Replace with actual image paths
import food from "@/public/food.png"; // Replace with actual image paths
import pollution from "@/public/pollution.png"; // Replace with actual image paths
import farm from "@/public/farm.png"; // Replace with actual image paths
import { EmailSection } from "@/app/social-goverence/_components/EmailSection";
import Footer from "@/components/Footer";
import { pages } from "@/app/social-goverence/_components/Showcase";

const SustainabilityArticle = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <article className="bg-white rounded-lg shadow-2xl p-6 space-y-6">
          {/* First section */}
          <div className=" flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row  sm:space-x-3 md:ml-2 lg:ml-32 ">
            <div className=" flex flex-col items-center text-right mt-8 ">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p>Introduction</p>
                <div className="border-t-2 md:border-t-0 md:border-r-2 border-emerald-600 h-5 w-full md:w-auto mt-2 md:mt-0 ml-2"></div>
              </div>
              <p>Our aim</p>
            </div>
            <header className="space-y-4 text-center sm:text-left">
              <h1 className="text-4xl font-bold  max-w-[500px]">
                Sadly, the United Kingdom is not in good shape when it comes to
                nature, farming and sustainability.
              </h1>
              <p>
                In fact, it is one of the most nature depleted countries in the
                world.{" "}
              </p>
              <p>
                It is our current food system and overall diet which is driving
                nature loss, polluting waterways and depleting soils at home and
                overseas, and as consumers we have a duty and responsibility to
                consider a sea change, and to develop an awareness of which
                foods are more ‘carbon-light’ and which are more sustainable
              </p>
              <p>
                is very is harmful for our planet. Pesticides and plastics are
                also very detrimental and in most case are toxic for our soils
                and rivers. Hormones, chemicals and highly processed foods are
                all contributors to poor diet and health issues for people and
                planet.
              </p>
              <p>
                However there are ways in which we can adjust our habits and
                preferences and our choices can have enormous effects on the
                damage we inflict.
              </p>
            </header>
          </div>
          {/*  */}

          {/* Food Section */}
          <section className=" text-center sm:text-left  space-y-4 md:ml-32 lg:ml-[245px]">
            <h2 className="text-2xl font-bold ">
              At Net Zero Foods, we have developed our focus to help consumers
              to choose more sustainable options.
            </h2>
            <p className="">
              As humans, we often find it easy to make changes once we have
              tried them for ourselves. Therefore, Net Zero Foods focuses on
              creating products that are as healthy for the environment as they
              are for the individual.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={food}
                  alt="Food"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                We call it a vegan diet, we call it usually meat free. These
                diets help in choosing more sustainable foods that are naturally
                balanced, and most importantly, significantly reduces our carbon
                footprint. This is the necessary development of our food
                industry to align with net zero goals.
              </p>
            </div>
          </section>
          {/*  */}
          {/* Pollution Section */}
          <section className=" text-center sm:text-left space-y-4 md:ml-32 lg:ml-[245px]">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className=" order-2 md:order-1">
                By reducing food miles and supporting local farmers, we can make
                a significant impact on reducing our carbon emissions. The
                closer the food source, the less we need to rely on
                transportation that contributes to greenhouse gas emissions.
              </p>
              <div className="flex-shrink-0 order-1 md:order-2">
                <Image
                  src={pollution}
                  alt="Pollution"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>
          {/* Farm Section */}
          <section className=" text-center sm:text-left space-y-4 md:ml-32 lg:ml-[245px]">
            <h2 className="text-2xl font-bold ">
              Therefore in choosing more sustainable diets, consuming foods
              which are grown locally, in season and without pesticides, are
              very much a move in the right direction.
            </h2>
            <p className="">
              Alongside our movement towards climate action, we are experiencing
              a public health crisis in the UK. Processed foods are becoming a
              norm, and we need to return to fresh, wholesome foods to regain
              our health. This involves supporting sustainable practices that do
              not harm the environment.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={farm}
                  alt="Farm"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                At Net Zero Foods, we work to demonstrate and show that adopting
                a healthy sustainable diet can be a practical choice for
                everyone. We are dedicated to helping our planet and improving
                our well-being.
              </p>
            </div>
            <div className=" w-full bg-[#7C8C03] text-white p-4 rounded-xl text-center">
              <p>
                At Net Zero Foods, we want to demonstrate and show that
                achieving a healthy sustainable diet, for the uk population is
                possible, without everyone having to go vegan or vegetarian, or
                having to give up the foods we enjoy.
              </p>
            </div>
          </section>
        </article>
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

export default SustainabilityArticle;
