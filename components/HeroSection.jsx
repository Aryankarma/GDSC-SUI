import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="text-center relative">
      <InteractiveGridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]] opacity-40 skew-y-12"
        )}
      />
      <nav className="flex justify-between items-center p-4 relative z-50 bg-transparent px-10 md:px-24">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full space-x-8">
          <div className="flex items-center space-x-2">
            <img src="/images/GDG-Logo.svg" alt="GDSC-SUI" className="h-6" />
            <span className="font-semibold">GDSC-SUI</span>
          </div>
          <div className="space-x-6">
            <a href="#events" className="hover:text-blue-600 transition-colors">
              Events
            </a>
            <a href="#team" className="hover:text-blue-600 transition-colors">
              Team
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-full justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/GDG-Logo.svg" alt="GDSC-SUI" className="h-6" />
            <span className="font-semibold">GDSC-SUI</span>
          </div>
          <button
            className=" p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden absolute top-[72px] flex  left-0 right-0 bg-gray-100 z-40 justify-center">
        {isMenuOpen && (
          <>
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#events"
                className="hover:text-blue-600 transition-colors py-2"
              >
                Events
              </a>
              <a
                href="#team"
                className="hover:text-blue-600 transition-colors py-2"
              >
                Team
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors py-2"
              >
                Contact
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
                Join Us
              </button>
            </div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 pt-[2.25rem] md:pt-[5rem]">
        <div className="inline-flex items-center justify-center">
          <button className="border border-gray-300 px-6 py-2 text-sm  rounded-full hover:bg-white bg-gray-50 transition-colors text-gray-700">
            SAGE University, Indore
          </button>
        </div>

        <div className="relative z-10 py-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="">
              <div className="flex sm:inline-flex flex-col sm:flex-row items-center md:gap-4">
                <img
                  src="/images/GDG-Logo.svg"
                  alt="GDSC-SUI"
                  className="h-8 mt-4"
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Google Developer Student Club
                </h1>
              </div>
              <p className="text-md mt-2 md:mt-6 text-gray-600 md:text-lg leading-5 md:leading-relaxed px-4 md:text-center text-justify">
                Google Developer Group (GDG) is a student-led community backed
                by Google Developers aimed at empowering undergraduate students
                from all disciplines to grow their knowledge in technology,
                build solutions for their local communities, and connect with
                other members from the Google community.
              </p>
            </div>
            <div className="m-0">
              <p className="mt-6 text-gray-900 text-lg leading-relaxed px-4">
                Here's how we make an impact!
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-2">
                <div className="flex gap-12">
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full flex items-center">
                    💡 Ideate
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full flex items-center">
                    📗 Learn
                  </span>
                </div>
                <div className="flex gap-12">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full flex items-center">
                    💻 Build
                  </span>
                  <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full flex items-center">
                    📈 Grow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
