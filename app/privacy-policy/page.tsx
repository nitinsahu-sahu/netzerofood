// Import necessary modules
import React from "react"; // Assuming you have a Navbar component
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import home from "@/public/hompage.png";
import { pages } from "../social-goverence/_components/Showcase";
import { currentUser } from "@/lib/currentUser";

const PrivacyPolicy = async () => {
  const user: any = await currentUser();
  return (
    <>
      <div className=" relative h-screen w-full">
        <Image
          src={home}
          alt="home"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
        {/* Navbar */}
        <div className=" absolute  z-30 w-full">
          <Navbar user={user?.data} />
        </div>
        <div className="flex flex-col items-center bg-fixed bg-cover bg-center bg-[url('/path/to/your/background-image.jpg')] text-white py-32">
          {/* Include the Navbar */}
          {/* Main Content Container */}
          <div className="relative max-w-5xl w-full bg-white text-black bg-opacity-90 rounded-lg shadow-lg p-8 mt-10 mb-10">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="mb-4">
              This Privacy Policy applies between you, the User of this Website,
              and Net Zero Foods Ltd, the owner and provider of this Website.
              Net Zero Foods Ltd takes the privacy of your information very
              seriously. This Privacy Policy applies to our use of any and all
              Data collected by us or provided by you in relation to your use of
              the Website.
            </p>
            <p className="mb-4">Please read this Privacy Policy carefully.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Definitions and Interpretation
            </h2>
            <p className="mb-4">
              In this Privacy Policy, the following definitions are used:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Data:</strong> collectively all information that you
                submit to Net Zero Foods Ltd via the Website. This definition
                incorporates, where applicable, the definitions provided in the
                Data Protection Laws;
              </li>
              <li>
                <strong>Cookies:</strong> a small text file placed on your
                computer by this Website when you visit certain parts of the
                Website and/or when you use certain features of the Website.
                Details of the cookies used by this Website are set out in the
                clause below (Cookies);
              </li>
              <li>
                <strong>Data Protection Laws:</strong> any applicable law
                relating to the processing of personal Data, including but not
                limited to the GDPR, and any national implementing and
                supplementary laws, regulations and secondary legislation;
              </li>
              <li>
                <strong>GDPR:</strong> the UK General Data Protection
                Regulation;
              </li>
              <li>
                <strong>Net Zero Foods Ltd, we or us:</strong> Net Zero Foods
                Ltd, a company incorporated in England and Wales with registered
                number 936737145 whose registered office is at Net Zero Foods
                Ltd, 46-54 High Street, Essex, CM4 9DW;
              </li>
              <li>
                <strong>UK and EU Cookie Law:</strong> the Privacy and
                Electronic Communications (EC Directive) Regulations 2003 as
                amended by the Privacy and Electronic Communications (EC
                Directive) (Amendment) Regulations 2011 & the Privacy and
                Electronic Communications (EC Directive) (Amendment) Regulations
                2018;
              </li>
              <li>
                <strong>User or you:</strong> any third party that accesses the
                Website and is not either (i) employed by Net Zero Foods Ltd and
                acting in the course of their employment or (ii) engaged as a
                consultant or otherwise providing services to Net Zero Foods Ltd
                and accessing the Website in connection with the provision of
                such services; and
              </li>
              <li>
                <strong>Website:</strong> the website that you are currently
                using, www.robotkombucha.co.uk, and any sub-domains of this site
                unless expressly excluded by their own terms and conditions.
              </li>
            </ul>
            <p className="mb-4">
              In this Privacy Policy, unless the context requires a different
              interpretation:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>the singular includes the plural and vice versa;</li>
              <li>
                references to sub-clauses, clauses, schedules or appendices are
                to sub-clauses, clauses, schedules or appendices of this Privacy
                Policy;
              </li>
              <li>
                a reference to a person includes firms, companies, government
                entities, trusts and partnerships;
              </li>
              <li>
                &quot;including&quot; is understood to mean &quot;including
                without&quot; &quot;limitation&quot;;
              </li>
              <li>
                reference to any statutory provision includes any modification
                or amendment of it;
              </li>
              <li>
                the headings and sub-headings do not form part of this Privacy
                Policy.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Scope of this Privacy Policy
            </h2>
            <p className="mb-4">
              This Privacy Policy applies only to the actions of Net Zero Foods
              Ltd and Users with respect to this Website. It does not extend to
              any websites that can be accessed from this Website including, but
              not limited to, any links we may provide to social media websites.
            </p>
            <p className="mb-4">
              For purposes of the applicable Data Protection Laws, Net Zero
              Foods Ltd is the &quot;data controller&quot;. This means that Net
              Zero Foods Ltd determines the purposes for which, and the manner
              in which, your Data is processed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Collected</h2>
            <p className="mb-4">
              We may collect the following Data, which includes personal Data,
              from you:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>name;</li>
              <li>
                contact Information such as email addresses and telephone
                numbers;
              </li>
              <li>in each case, in accordance with this Privacy Policy.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              How We Collect Data
            </h2>
            <p className="mb-4">We collect Data in the following ways:</p>
            <ul className="list-disc list-inside mb-4">
              <li>data is given to us by you; and</li>
              <li>data is collected automatically</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">
              Data That is Given to Us by You
            </h3>
            <p className="mb-4">
              Net Zero Foods Ltd will collect your Data in a number of ways, for
              example:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                when you contact us through the Website, by telephone, post,
                e-mail or through any other means;
              </li>
              <li>
                when you elect to receive marketing communications from us;
              </li>
              <li>in each case, in accordance with this Privacy Policy</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">
              Data That is Collected Automatically
            </h3>
            <p className="mb-4">
              To the extent that you access the Website, we will collect your
              Data automatically, for example:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                we automatically collect some information about your visit to
                the Website. This information helps us to make improvements to
                Website content and navigation, and includes your IP address,
                the date, times and frequency with which you access the Website
                and the way you use and interact with its content.
              </li>
              <li>
                we will collect your Data automatically via cookies, in line
                with the cookie settings on your browser. For more information
                about cookies, and how we use them on the Website, see the
                section below, headed &quot;Cookies&quot;.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Use of Data</h2>
            <p className="mb-4">
              Any or all of the above Data may be required by us from time to
              time in order to provide you with the best possible service and
              experience when using our Website. Specifically, Data may be used
              by us for the following reasons:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>internal record keeping;</li>
              <li>improvement of our products / services;</li>
              <li>
                transmission by email of marketing materials that may be of
                interest to you;
              </li>
              <li>in each case, in accordance with this Privacy Policy.</li>
            </ul>

            <p className="mb-4">
              We may use your Data for the above purposes if we deem it
              necessary to do so for our legitimate interests. If you are not
              satisfied with this, you have the right to object in certain
              circumstances (see the section headed &quot;Your rights&quot;
              below).
            </p>
            <p className="mb-4">
              For the delivery of direct marketing to you via e-mail, we&apos;ll
              need your consent, whether via an opt-in or soft-opt-in:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                soft opt-in consent is a specific type of consent which applies
                when you have previously engaged with us (for example, you
                contact us to ask us for more details about a particular
                product/service, and we are marketing similar
                products/services). Under &quot;soft opt-in&quot; consent, we
                will take your consent as given unless you opt-out.
              </li>
              <li>
                for other types of e-marketing, we are required to obtain your
                explicit consent; that is, you need to take positive and
                affirmative action when consenting by, for example, checking a
                tick box that we&apos;ll provide
              </li>
            </ul>

            <p className="mb-4">
              if you are not satisfied with our approach to marketing, you have
              the right to withdraw consent at any time. To find out how to
              withdraw your consent, see the section headed &quot;Your
              rights&quot; below.
            </p>
            <p className="mb-4">
              We may use your Data to show you Net Zero Foods Ltd adverts and
              other content on other websites. If you do not want us to use your
              data to show you Net Zero Foods Ltd adverts and other content on
              other websites, please turn off the relevant cookies (please refer
              to the section headed &quot;Cookies&quot; below).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Who We Share Data With
            </h2>
            <p className="mb-4">
              We may share your Data with the following groups of people for the
              following reasons:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                any of our group companies or affiliates - We share certain
                aspects of data in order to improve our organisation operating
                practices and products.;
              </li>
              <li>
                our employees, agents and/or professional advisors - In order
                for staff to process orders, information and maintain contact.;
              </li>
              <li>in each case, in accordance with this Privacy Policy.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Keeping Data Secure
            </h2>
            <p className="mb-4">
              We will use technical and organisational measures to safeguard
              your Data, for example::
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                access to your account is controlled by a password and a user
                name that is unique to you
              </li>
              <li>we store your Data on secure servers.</li>
            </ul>

            <p className="mb-4">
              Technical and organisational measures include measures to deal
              with any suspected data breach. If you suspect any misuse or loss
              or unauthorised access to your Data, please let us know
              immediately by contacting us via this e-mail address:
              pascalsubois1@mail.com.
            </p>
            <p className="mb-4">
              If you want detailed information from Get Safe Online on how to
              protect your information and your computers and devices against
              fraud, identity theft, viruses and many other online problems,
              please visit www.getsafeonline.org. Get Safe Online is supported
              by HM Government and leading businesses.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p className="mb-4">
              Unless a longer retention period is required or permitted by law,
              we will only hold your Data on our systems for the period
              necessary to fulfil the purposes outlined in this Privacy Policy
              or until you request that the Data be deleted.
            </p>
            <p className="mb-4">
              Even if we delete your Data, it may persist on backup or archival
              media for legal, tax or regulatory purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the following rights in relation to your Data:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Right to access: - the right to request (i) copies of the
                information we hold about you at any time, or (ii) that we
                modify, update or delete such information. If we provide you
                with access to the information we hold about you, we will not
                charge you for this, unless your request is &quot;manifestly
                unfounded or excessive&quot; Where we are legally permitted to
                do so, we may refuse your request. If we refuse your request, we
                will tell you the reasons why.
              </li>
              <li>
                Right to correct: - the right to have your Data rectified if it
                is inaccurate or incomplete.
              </li>
              <li>
                Right to erase: - the right to request that we delete or remove
                your Data from our systems.
              </li>
              <li>
                Right to restrict our use of your Data: - the right to
                &quot;block&quot; us from using your Data or limit the way in
                which we can use it.
              </li>
              <li>
                Right to data portability: - the right to request that we move,
                copy or transfer your Data
              </li>
              <li>
                Right to object: - the right to object to our use of your Data
                including where we use it for our legitimate interests.
              </li>
            </ul>

            <p className="mb-4">
              To make enquiries, exercise any of your rights set out above, or
              withdraw your consent to the processing of your Data (where
              consent is our legal basis for processing your Data), please
              contact us via this e-mail address: pascalsubois1@mail.com.
            </p>
            <p className="mb-4">
              If you are not satisfied with the way a complaint you make in
              relation to your Data is handled by us, you may be able to refer
              your complaint to the relevant data protection authority. For the
              UK, this is the Information Commissioner&apos;s Office (ICO). The
              ICO&apos;s contact details can be found on their website at
              https://ico.org.uk/.
            </p>
            <p className="mb-4">
              It is important that the Data we hold about you is accurate and
              current. Please keep us informed if your Data changes during the
              period for which we hold it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Links to Other Websites
            </h2>
            <p className="mb-4">
              This Website may, from time to time, provide links to other
              websites. We have no control over such websites and are not
              responsible for the content of these websites. This Privacy Policy
              does not extend to your use of such websites. You are advised to
              read the Privacy Policy or statement of other websites prior to
              using them.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Changes of Business Ownership and Control
            </h2>
            <p className="mb-4">
              Net Zero Foods Ltd may, from time to time, expand or reduce our
              business and this may involve the sale and/or the transfer of
              control of all or part of Net Zero Foods Ltd. Data provided by
              Users will, where it is relevant to any part of our business so
              transferred, be transferred along with that part and the new owner
              or newly controlling party will, under the terms of this Privacy
              Policy, be permitted to use the Data for the purposes for which it
              was originally supplied to us.
            </p>
            <p className="mb-4">
              We may also disclose Data to a prospective purchaser of our
              business or any part of it.
            </p>
            <p className="mb-4">
              In the above instances, we will take steps with the aim of
              ensuring your privacy is protected.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
            <p className="mb-4">
              This Website may place and access certain Cookies on your
              computer. Net Zero Foods Ltd uses Cookies to improve your
              experience of using the Website and to improve our range of
              products. Net Zero Foods Ltd has carefully chosen these Cookies
              and has taken steps to ensure that your privacy is protected and
              respected at all times.
            </p>
            <p className="mb-4">
              All Cookies used by this Website are used in accordance with
              current UK and EU Cookie Law.
            </p>
            <p className="mb-4">
              Before the Website places Cookies on your computer, you will be
              presented with a message bar requesting your consent to set those
              Cookies. By giving your consent to the placing of Cookies, you are
              enabling Net Zero Foods Ltd to provide a better experience and
              service to you. You may, if you wish, deny consent to the placing
              of Cookies; however certain features of the Website may not
              function fully or as intended.
            </p>
            <p className="mb-4">
              This Website may place the following Cookies:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Strictly necessary cookies:</strong> These are cookies
                that are required for the operation of our website. They
                include, for example, cookies that enable you to log into secure
                areas of our website, use a shopping cart or make use of
                e-billing services.
              </li>
              <li>
                <strong>Analytical/performance cookies:</strong> They allow us
                to recognise and count the number of visitors and to see how
                visitors move around our website when they are using it. This
                helps us to improve the way our website works, for example, by
                ensuring that users are finding what they are looking for
                easily.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These are used to
                recognise you when you return to our website. This enables us to
                personalise our content for you, greet you by name and remember
                your preferences (for example, your choice of language or
                region). By using the Website, you agree to our placement of
                functionality cookie.
              </li>
              <li>
                <strong>Targeting cookies:</strong> These cookies record your
                visit to our website, the pages you have visited and the links
                you have followed. We will use this information to make our
                website and the advertising displayed on it more relevant to
                your interests. We may also share this information with third
                parties for this purpose.
              </li>
            </ul>
          </div>
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
                    <a
                      href={page.link}
                      className="text-white flex items-center"
                    >
                      Read More <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="">
          <Footer /> {/* Include the Footer */}
        </div>
        {/* bottom heading */}
        <div className=" bg-[#656B4E] h-[49px] w-full flex flex-col items-center justify-center">
          <p className=" flex flex-row items-center justify-center text-neutral-100">
            Copyright 2024 | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
