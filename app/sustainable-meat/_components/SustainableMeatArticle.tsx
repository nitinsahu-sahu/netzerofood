// components/SustainableMeatArticle.js
import Image from "next/image";
import React from "react";
import wildlife from "@/public/wildlife.png"; // Replace with actual image paths
import biodiversity from "@/public/butterfly.png"; // Replace with actual image paths
import produce from "@/public/veg2.png"; // Replace with actual image paths
import brown from "@/public/brown.png";
import { EmailSection } from "@/app/social-goverence/_components/EmailSection";
import { pages } from "@/app/social-goverence/_components/Showcase";
import Footer from "@/components/Footer";

const SustainableMeatArticle = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <article className="bg-white rounded-lg shadow-lg p-6 space-y-12 text-center sm:text-left">
          {/* Header Section */}
          <div className=" flex flex-col lg:flex-row space-x-3  lg:ml-32">
            <div className="flex flex-col items-center lg:items-center mt-7 space-y-2 ">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p>Introduction</p>
                <div className="border-t-2 md:border-t-0 lg:border-r-2 border-emerald-600 h-5 w-full md:w-auto mt-2 md:mt-0 ml-2"></div>
              </div>
              <div className="">
                <p className="text-gray-700">Sustainable Meat</p>
              </div>
            </div>
            <header className="mt-4 lg:mt-0">
              <h1 className=" md:text-3xl lg:text-4xl font-bold ">
                The undeniable case for sustainable meat: Supporting nature and
                nourishing our planet
              </h1>
              <p className="mt-4">
                The importance of sustainable meat production is becoming
                increasingly evident. As the demand for meat grows, it is
                essential to adopt practices that support the environment and
                promote health.
              </p>
              <p className="mt-2">
                Sustainable meat practices involve methods that reduce
                environmental impact, such as regenerative farming, which can
                help restore soil health and sequester carbon. These methods
                ensure that meat production does not deplete natural resources.
              </p>
            </header>
          </div>

          {/* First Section */}
          <section className="space-y-6  lg:ml-[250px]">
            <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src={wildlife}
                  alt="Wildlife"
                  width={350}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className=" flex flex-col  ">
                <h1 className=" text-xl 3xl:text-2xl font-bold">
                  Organic farming, in particular, has shown to be beneficial for
                  wildlife and soil carbon.
                </h1>
                <p className="  text-sm ">
                  Organic farms are more biologically diverse and have been
                  found to have 50% more wildlife and 44% more soil carbon on
                  average. Organic manures also improve soil structure and
                  resilience against drought and flooding. While no farming
                  system is perfect, the evidence suggests that livestock can be
                  part of the solution.
                </p>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="space-y-6 lg:ml-[250px]">
            <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-6">
              <div className="">
                <h3 className=" text-2xl 3xl:text-3xl font-semibold">
                  There are concerns about the impact of livestock on land use
                  and biodiversity.
                </h3>
                <div className=" text-sm">
                  <p>
                    However, studies have shown that with the right policies and
                    farming incentives, organic farming can feed everyone a
                    healthy diet while still allowing for habitat restoration
                    and ecological regeneration. By committing a portion of
                    farmland to nature and carbon, we can raise bird populations
                    and store carbon, all while maintaining food production.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={biodiversity}
                  alt="Biodiversity"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Third Section */}
          <div className=" space-y-6 lg:ml-[250px]">
            <div className=" flex flex-col ">
              <div className="">
                <h3 className=" text-3xl font-bold max-w-[460px]">
                  It is important to acknowledge that changes in diet are
                  necessary for a sustainable future.
                </h3>
              </div>
              {/* paragraph */}
              <div className=" space-y-2 text-sm">
                <p>
                  Modelling at a European level has shown that shifting towards
                  organic farming can feed everyone while reducing the
                  consumption of ruminant meat by 30-50%. This shift, along with
                  reducing intensive farming practices, especially in pig and
                  chicken production, can contribute to a more nature-friendly
                  and humane farming system
                </p>
                <p>
                  While there are valid criticisms of extensive grazing
                  practices, there is potential for both organic and non-organic
                  grazing systems to support wildlife and restore grasslands.
                  Restoring meadows and integrating trees and hedges into the
                  farmed landscape can create opportunities for biodiversity.
                  Collaboration between farmers and farmer-led research is key
                  to enhancing both conventional and agroecological systems.
                </p>
                <p>
                  There are no simple solutions, and trade-offs need to be
                  negotiated. However, organic and agroecological farming offer
                  hope for a nature-friendly future. These farming systems are
                  delivering benefits for people and the planet today and should
                  be supported as blueprints for sustainable agriculture. With
                  the right policies and support, farmers can be empowered to
                  address the climate and nature crises we face.
                </p>
              </div>
              {/* Image */}
              <div className=" mt-3">
                <Image src={brown} alt="Brown" />
              </div>
            </div>
          </div>

          {/* Final Section
        <section className="space-y-6 ml-[250px]">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <Image
                src={produce}
                alt="Produce"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="text-gray-700">
              <p>
                While a sustainable approach to meat consumption is essential,
                it is equally important to support the growth of plant-based
                foods. By diversifying our diets and supporting sustainable
                agricultural practices, we can ensure a more resilient and
                nutritious food system.
              </p>
              <p className="mt-2">
                Our collective efforts can drive meaningful change, promoting
                health, protecting the environment, and supporting farmers who
                adopt sustainable practices. Together, we can build a more
                sustainable future.
              </p>
            </div>
          </div>
        </section> */}
          <div className="flex flex-col md:flex-row items-start md:space-x-6 lg:ml-[250px]">
            <div className="md:w-1/2">
              <Image
                src={produce}
                alt="Produce"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className=" font-medium text-sm">
                Livestock plays a crucial role in agroecological systems, which
                are farming approaches that prioritize working with nature and
                minimizing synthetic inputs. Here are some key roles that
                livestock can play in agroecology:
              </p>
              <div className="space-y-8">
                <div className="flex flex-col items-start  ">
                  <div className="relative w-[92%] ">
                    <div className=" bg-[#8C7158] text-white font-bold  h-12 w-12 flex items-center justify-center ">
                      1
                    </div>
                    <div className="absolute left-11 top-0 border-b-2 border-[#8C7158] w-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Soil Health and Fertility:
                    </h3>
                    <p className=" text-sm">
                      Livestock, especially grazing animals, can help build
                      healthy, living soils. In rotation systems, where grass
                      lays are used to naturally build fertility, ruminant
                      animals graze on the grass and convert it into food.
                    </p>
                    <p className=" text-sm">
                      This process avoids the need for high-energy synthetic
                      fertilizers or mechanical mowing, contributing to soil
                      health and fertility.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="relative w-[92%]">
                    <div className="bg-[#8C7158] text-white font-bold h-12 w-12 flex items-center justify-center">
                      2
                    </div>
                    <div className="absolute left-11 top-0 border-b-2 border-[#8C7158] w-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Habitat Management:
                    </h3>
                    <p className=" text-sm">
                      Livestock can act as managers of habitats, increasing
                      biodiversity and regenerating soils. They can be used to
                      graze on land that may not be suitable for cropping, such
                      as unimproved upland areas.
                    </p>
                    <p className=" text-sm">
                      By grazing and browsing, livestock can help maintain and
                      restore diverse habitats, capturing carbon and supporting
                      low-impact food production.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="relative w-[92%]">
                    <div className="bg-[#8C7158] text-white font-bold h-12 w-12 flex items-center justify-center">
                      3
                    </div>
                    <div className="absolute left-11 top-0 border-b-2 border-[#8C7158] w-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Waste and By-Product Utilization:
                    </h3>
                    <p className=" text-sm">
                      Animals with a single-chambered stomach, like pigs and
                      chickens, can consume by-products and waste streams,
                      creating “closed loop” systems.
                    </p>
                    <p className=" text-sm">
                      This means they can utilize resources that would otherwise
                      go to waste and help cycle nutrients back into the land.
                      Their manures can contribute to soil fertility, reducing
                      the need for synthetic fertilizers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraphs */}
          <div className=" flex flex-col lg:ml-[250px] ">
            <div className="">
              <p className=" font-semibold">
                While livestock can play a beneficial role in agroecological
                systems like organic farming,
              </p>
            </div>
            <div className=" space-y-3">
              <p>
                it&apos;s important to note that much of the meat and dairy
                products available in supermarkets come from intensive systems.
                These intensive systems have various negative impacts, such as
                inefficient land use, imported feed crops associated with land
                conversion, high greenhouse gas emissions, and excessive
                antibiotic use.
              </p>
              <p>
                To transition to agroecology, diets would need to shift towards
                consuming less intensively farmed meat and dairy, and more
                organic and pasture-fed ruminant meat and dairy, as well as a
                greater emphasis on plant-based foods. By supporting
                agroecological systems and avoiding intensively farmed products,
                individuals can contribute to the necessary system change and
                help farmers sustainably manage livestock
              </p>
              <p>
                food, as well as offering organic and sustainable plant-based
                alternatives to counter any harmful emissions such as methane,
                which could be derived from beef
              </p>
              <p>
                We believe there is no better solution for maintaining and
                supporting a healthy and sustainable land and diet and that we
                have studied and we conclude therefore that our food is the most
                sustainable and healthy for people and planet. In choosing to
                but.
              </p>
              <p className=" font-semibold">
                In choosing to buy food from Net Zero Foods, you are making the
                choice for a more sustainable and healthy food system for people
                and planet.
              </p>
            </div>
          </div>
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

export default SustainableMeatArticle;
