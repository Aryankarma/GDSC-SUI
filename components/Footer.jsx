import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";

const Footer = () => {
  return (
    <footer className="bg-white py-16 md:py-24 px-6 md:px-16 flex flex-col h-full items-center text-center relative border-t border-gray-200">
      <InteractiveGridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(100px_circle_at_center,white,transparent)]] opacity-45 bottom-0 skew-y-10"
        )}
      />
      <div className="flex justify-center flex-col md:flex-row gap-8 md:gap-64 z-20">
        {/* Links Section */}
        <div className="flex flex-col md:items-start text-center md:text-left gap-2 justify-center items-center">
          <h3 className="text-lg font-semibold border-b-4 border-blue-500 pb-1 text-cebter md:text-start ">
            Links
          </h3>
          <ul className="mt-2 text-gray-600 gap-2 flex flex-col">
            <p>
              <a
                href="https://gdgprogresshub.vercel.app/"
                className="hover:underline"
                target="blank"
              >
                GDG Progress Hub
              </a>
            </p>
            <p>
              <a
                href="https://gdgfeedback.sayout.net/"
                className="hover:underline"
                target="blank"
              >
                Feedback Pages
              </a>
            </p>
            <p>
              <a
                href="https://gdg.community.dev/gdg-on-campus-sage-university-indore-india/"
                className="hover:underline"
                target="blank"
              >
                GDG on campus
              </a>
            </p>
          </ul>
        </div>

        {/* Events Section */}
        <div className="flex flex-col md:items-start text-center md:text-left gap-2 justify-center items-center">
          <h3 className="text-lg font-semibold border-b-4 border-green-500 pb-1 text-cebter md:text-start ">
            Events
          </h3>
          <ul className="mt-2 text-gray-600  gap-2 flex flex-col">
            <p>
              <a href="#" className="hover:underline" target="blank">
                Upcoming Events
              </a>
            </p>
            <p>
              <a href="#" className="hover:underline" target="blank">
                Previous Events
              </a>
            </p>
          </ul>
        </div>

        {/* Team Section */}
        <div className="flex flex-col md:items-start text-center md:text-left gap-2 justify-center items-center">
          <h3 className="text-lg font-semibold border-b-4 border-red-500 pb-1 text-cebter md:text-start ">
            Team
          </h3>
          <ul className="mt-2 text-gray-600  gap-2 flex flex-col">
            <p>
              <a href="#" className="hover:underline" target="blank">
                Leads
              </a>
            </p>
            <p>
              <a href="#" className="hover:underline" target="blank">
                Core Members
              </a>
            </p>
          </ul>
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-12 md:mt-10">
        <Image
          src="/images/GOOGLE DEVELOPER GROUP.svg"
          alt="GDSC SUI"
          width={680}
          height={170}
        />
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-gray-600">Made with 💙 by GDSC SUI</p>
      <p className="text-gray-500 text-sm">
        Google Developer Group on Campus, SUI. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
