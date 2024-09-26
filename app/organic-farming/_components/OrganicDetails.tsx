import Image from "next/image";
import React from "react";
import support from "@/public/support.png";
import plant from "@/public/plant.png";
import Footer from "@/components/Footer";
import { pages } from "@/app/social-goverence/_components/Showcase";
import { EmailSection } from "@/app/social-goverence/_components/EmailSection";

export const OrganicDetails = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <article className="bg-white rounded-lg shadow-2xl p-10 space-y-6 text-center sm:text-left ">
          {/* First Section */}
          <div className=" flex flex-col items-center sm:items-start sm:flex-row  sm:space-x-3 md:ml-20 lg:ml-28">
            <div className="flex flex-col mt-7 ">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p>Introduction</p>
                <div className="border-t-2 md:border-t-0 md:border-r-2 border-emerald-600 h-5 w-full md:w-auto mt-2 md:mt-0 ml-2"></div>
              </div>

              <div className="text-gray-700">Agroecology</div>
            </div>
            <header className="space-y-4">
              <h1 className="text-4xl font-bold ">Organic Farming & Food</h1>
              <p className="">
                Organic farming prohibits the use of chemical fertilizers,
                pesticides, growth hormones and feed additives of livestock
                activities.
              </p>
              <p className="">
                A combination of organic farming and new technologies is of
                utmost importance to reduce the limitations and challenges of
                organic farming.
              </p>
              <p className="">
                The innovative methods and new approaches making new trends
                toward sustainability farming system and enhances the
                agricultural productivity, and quality of life of many farmers
                in an environmentally friendly way. In other words, organic
                farming mirrors the sustainability concepts of Global
                Agriculture.
              </p>
            </header>
          </div>

          {/* Food Section */}
          <section className="space-y-4 md:ml-[200px] lg:ml-[233px]">
            <div className=" relative w-full h-[310px] bg-red-400 rounded-xl">
              <Image
                src={support}
                alt="support"
                fill
                priority={true}
                quality={100}
              />
            </div>
            <p className=" font-medium">
              Certified organic farms are inspected on an annual basis to
              legally verify farmers meet these high standards. So organic is a
              great way to connect citizens and farmers who are using
              agroecological methods and support the growth of agroecology.
            </p>
          </section>
          {/* Support Section */}
          <section className="space-y-4 md:ml-[200px] lg:ml-[233px]">
            <h2 className="text-4xl font-bold">
              How can I support agroecology?
            </h2>
            <p className="text-gray-700">
              The easiest way you can support agroecological farming is to
              engage with your local farmers and growers. Learn about their
              farming practices, join a local veg box scheme or buy organic.
            </p>
            <p className="text-gray-700">
              Organic food is clearly labelled and provides a guarantee that
              your products have been produced to some of the highest
              environmental standards.
            </p>
            <p className="text-gray-700">
              However, to achieve an agroecological future, everybody – farmers,
              caterers, shops and citizens – needs to support a new way of
              thinking about food, farming and the environment.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4  lg:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={plant}
                  alt="Support"
                  width={300}
                  height={200}
                  className="rounded-lg w-full lg:w-[300px]"
                  quality={100}
                />
              </div>
              <p className="text-gray-700">
                With the support of the organic community, we continuously make
                the case for agroecology in Government, so policymakers
                understand the opportunities it offers for climate, nature and
                our health. We’re lobbying for more support, empowerment and
                advice for farmers, so they are able to explore how they can
                transition to agroecology.
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
