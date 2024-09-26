import { EmailSection } from "@/app/social-goverence/_components/EmailSection";
import { pages } from "@/app/social-goverence/_components/Showcase";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

export const ClimateArticle = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-2xl p-10 space-y-6">
          <div className="text-center sm:text-left space-y-4">
            <h1 className="text-2xl font-bold">
              Climate Change and Food Insecurity
            </h1>
            <p>
              <strong>
                Since the year 2022, the global food insecurity crisis has seen
                a significant increase in the number of affected individuals.
              </strong>{" "}
              In 2019, there were 135 million people affected in 53 countries,
              whereas in 2022, the number rose to 345 million in 82 countries.
              This alarming rise can be attributed to the adverse effects of
              rising temperatures on food supplies. Extreme weather events,
              natural disasters, and economic and social disruptions are some of
              the consequences of rising temperatures that have negatively
              impacted food production.
            </p>
            <h2 className="text-xl font-semibold">
              Impact of Climate Change on Food Security
            </h2>
            <p>
              To combat these challenges, it is crucial for food supply systems
              to incorporate climate change considerations at both individual
              and community levels. Climate change directly and significantly
              affects food insecurity. As global temperatures continue to rise,
              the production of food becomes more difficult and uncertain due to
              changes in weather patterns, extreme weather events, and other
              environmental disturbances. These challenges have far-reaching
              implications for food supplies worldwide.
            </p>
            <p>
              Rising temperatures, increased frequency of droughts, decreased
              soil fertility, and crop destruction caused by floods or storms
              all contribute to the difficulties faced in food production. The
              effects of climate change on food security are particularly
              evident in developing countries. The health of citizens and the
              livelihoods of small farmers are both adversely affected. Changing
              climate conditions, such as droughts or flooding, lead to degraded
              food availability, posing a risk of malnutrition among vulnerable
              populations who struggle to access nutritious foods.
            </p>
            <p>
              Furthermore, food insecurity has a significant financial impact on
              small farmers in these regions. Their inability to generate
              sufficient income to meet basic needs or invest in food-related
              inputs, such as fertilizers or seeds, exacerbates the problem.
              Global food insecurity has been on the rise, as reported by the
              World Bank. The number of people suffering from acute food
              insecurity increased from 135 million in 2019 to 345 million in 82
              countries by June 2022. This increase is attributed to various
              factors such as the war in Ukraine, supply chain disruptions, and
              the ongoing economic repercussions of the COVID-19 pandemic, which
              have led to record-high food prices.
            </p>
            <h2 className="text-xl font-semibold">
              Strategies to Mitigate Food Insecurity
            </h2>
            <p>
              To mitigate the effects of climate change on food security,
              proactive measures must be taken by governments and organizations.
              Strategies for food production and access need to be developed to
              withstand extreme weather events and climate variability. These
              efforts should include investments in agricultural infrastructure,
              diversification of crops and food sources, long-term food storage
              systems, and training for local farmers on sustainable agriculture
              techniques. By addressing the impacts of climate change on food
              insecurity today, we can ensure a future where food availability
              is not threatened by a changing climate.
            </p>
            <h2 className="text-xl font-semibold">
              Current Challenges and Future Needs
            </h2>
            <p>
              Currently, two billion people worldwide suffer from malnutrition,
              and it is estimated that the global population will require 60%
              more food by 2050. However, the agricultural sector is
              ill-prepared to meet this demand. With 700 million workers in
              poverty, the sector already accounts for 70% of water consumption
              and 30% of global greenhouse gas emissions. New technologies offer
              potential solutions to make our food systems more sustainable and
              efficient. Unfortunately, the agricultural sector lags behind
              other sectors in terms of technology adoption.
            </p>
            <p>
              The Forum&apos;s Innovation with a Purpose Platform, established
              in 2018, is a large-scale partnership that facilitates the
              adoption of new technologies and innovations to transform food
              production, distribution, and consumption. Working with over 50
              partner institutions and 1,000 leaders globally, the platform aims
              to leverage emerging technologies to create sustainable,
              inclusive, and efficient food systems.
            </p>
            <h2 className="text-xl font-semibold">
              Ten Ways to Address Food Insecurity
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Invest in food storage systems capable of withstanding extreme
                weather events.
              </li>
              <li>
                Diversify food sources and agricultural production techniques to
                reduce risk.
              </li>
              <li>
                Adopt water management systems that minimize crop damage from
                floods or droughts.
              </li>
              <li>
                Implement sustainable farming practices like no-till
                agriculture, agroforestry, and cover crops.
              </li>
              <li>
                Support smallholder farmers by providing access to credit and
                other services for economic empowerment.
              </li>
              <li>
                Increase public awareness of food security challenges caused by
                climate change.
              </li>
              <li>
                Enhance soil resilience to drought by increasing organic carbon
                content and water retention.
              </li>
              <li>
                Promote education on food preservation techniques, such as
                refrigeration and dehydration.
              </li>
              <li>
                Develop early warning systems for extreme weather events and
                leverage technologies like data analytics, insights, and
                predictive AI to enable adaptation in food production.
              </li>
              <li>
                Invest in research and development for climate-resilient food
                crops.
              </li>
            </ol>
            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Taking these steps will ensure that food security is not
              compromised by climate change in the future. Action must be taken
              by governments, organizations, and individuals to prevent food
              insecurity caused by climate change from becoming an even larger
              problem. In addition to governmental actions, individual consumers
              must become more conscious of the impact their purchases have on
              society, directly or indirectly. Our collective efforts can
              contribute to the betterment of our people and planet.
            </p>
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
