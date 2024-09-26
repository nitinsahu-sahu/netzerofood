import Image from "next/image";
import React from "react";
import veg from "@/public/veg.png";
import animal from "@/public/animal.png";
import { EmailSection } from "./EmailSection";
import first from "@/public/first.png";
import second from "@/public/second.png";
import third from "@/public/third.png";
import Footer from "@/components/Footer";

export const pages = [
  {
    src: first, // Replace with your image paths
    title: "Why Net Zero Foods",
    link: "/zero-food",
  },
  {
    src: second, // Replace with your image paths
    title: "Climate Change",
    link: "/sustainable-meat",
  },
  {
    src: third, // Replace with your image paths
    title: "Organic Farming",
    link: "/organic-farming",
  },
];
export const Showcase = () => {
  return (
    <>
      <div className="bg-white h-full max-w-5xl mx-auto rounded-tr-3xl rounded-tl-3xl shadow-2xl pb-8">
        <div className="w-full">
          {/* First Box */}
          <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-12 space-x-0 md:space-x-3 space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <div className="flex flex-col md:flex-row items-center justify-between mx-1">
                <p>Introduction</p>
                <div className="border-t-2 md:border-t-0 md:border-r-2 border-emerald-600 h-5 w-full md:w-auto mt-2 md:mt-0"></div>
              </div>
              <p>Environmental</p>
              <p>Social</p>
              <p>Governance</p>
            </div>
            <div className="space-y-2 font-medium text-center md:text-left">
              <p>
                We believe that the biggest driver of change is in human habit
                and human action, and by establishing firm foundations rooted in
                the need for change, based on our food system, we can influence
                and help drive a positive redevelopment of the broken system.
              </p>
              <p>
                The changes begin with soil, and soil health ~ and understanding
                that the soil microbiome is closely linked with our own, and
                that if we continue with unsustainable farming practices, we
                will continue to degrade our public and planetary health.
              </p>
              <p className="font-bold">
                Our very existence is formed upon the basis of achieving total
                environmental restoration, total social inclusion and support in
                our communities together with upholding a 100% record in our
                company objectives driven by a responsibility for sustainability
                and net zero food system. Or ESG..
              </p>
              <p>
                ESG is the acronym used for Environmental, Social, and
                (Corporate) Governance. These three areas are key factors when
                measuring the sustainability and ethical impact of a company’s
                operations. At Net Zero Foods, we produce an annual
                sustainability report in order to demonstrate to our
                governments, consumers, and our potential investors, in order to
                demonstrate our commitment to our goals.
              </p>
            </div>
          </div>

          {/* Second Box */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full pl-8 pr-6 md:pl-44 space-y-4 md:space-y-0">
            <div className="w-full md:w-auto">
              <Image
                src={veg}
                alt=""
                width={500}
                height={320}
                className="rounded-lg"
              />
            </div>
            {/* Right side */}
            <div className="flex flex-col space-y-2 sm:text-center md:text-left md:ml-8">
              <div className="text-3xl">
                <h1 className="font-bold">Social</h1>
              </div>
              <div className="space-y-1">
                <p>
                  Social criteria examines how people are treated by our
                  business, and focuses on:
                </p>
                <ol className="list-disc font-bold pl-5">
                  <li>Equal opportunities</li>
                  <li>Health and safety</li>
                  <li>Human rights</li>
                  <li>Customer and product responsibility</li>
                  <li>Modern slavery and child labour</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full pl-8 md:pl-44 my-14 space-y-4 md:space-y-0">
            <div className="flex flex-col max-w-full md:max-w-[400px]">
              <div className="text-3xl">
                <h1 className="font-bold">Governance</h1>
              </div>
              <div>
                <p className="">
                  Governance criteria explores how our corporation polices
                  itself and how it is governed, including:
                </p>
                <ol className="list-disc pl-5">
                  <li>Compliance</li>
                  <li>Management diversity and structure</li>
                  <li>Business ethics</li>
                  <li>Shareholder democracy</li>
                  <li>Corruption and bribery</li>
                  <li>Donations and political lobbying emissions</li>
                  <li>Local communities</li>
                  <li>Deforestation</li>
                  <li>Animal welfare</li>
                  <li>Waste and pollution</li>
                </ol>
              </div>
            </div>
            {/* Image */}
            <div className="w-full md:w-auto pr-6">
              <Image
                src={animal}
                alt=""
                width={370}
                height={320}
                className="rounded-lg"
              />
            </div>
          </div>
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
