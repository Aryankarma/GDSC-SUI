import React, { useRef } from "react";
import "./TeamStyles.css";
import Link from "next/link";
import { Dock, DockIcon } from "./magicui/dock";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlurFade } from "./magicui/blur-fade";


const teamMembers = [
  {
    name: "Godhuli Vays",
    position: "Chapter Lead",
    image: "/images/leads/chapter.jpg",
    bgColor: "#FFC0CB",
    socialLinks: {
      linkedin: "https://linkedin.com/in/godhuli",
      mail: "mailto:godhuli@example.com",
      twitter: "https://twitter.com/godhuli",
      github: "https://github.com/godhuli",
    },
  },
  {
    name: "Aryan Karma",
    position: "Technical Lead",
    image: "/images/leads/technical.jpg",
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aryankarma",
      mail: "mailto:aryankarma@example.com",
      twitter: "https://twitter.com/aryankarma",
      github: "https://github.com/aryankarma",
    },
  },
  {
    name: "Richa Rajput",
    position: "Technical Co-Lead",
    image: "/images/leads/techco.jpg",
    bgColor: "#FDDD81",
    socialLinks: {
      linkedin: "https://linkedin.com/in/richarajput",
      mail: "mailto:richarajput@example.com",
      twitter: "https://twitter.com/richarajput",
      github: "https://github.com/richarajput",
    },
  },
  {
    name: "Abhishekh Ojha",
    position: "Web Dev Lead",
    image: "/images/leads/webdev.jpg",
    bgColor: "#60BE90",
    socialLinks: {
      linkedin: "https://linkedin.com/in/abhishekh",
      mail: "mailto:abhishekh@example.com",
      twitter: "https://twitter.com/abhishekh",
      github: "https://github.com/abhishekh",
    },
  },
  {
    name: "Samyak Gupta",
    position: "Web3 & Blockchain Lead",
    image: "/images/leads/web3.jpg",
    bgColor: "#F4A19A",
    socialLinks: {
      linkedin: "https://linkedin.com/in/samyakgupta",
      mail: "mailto:samyakgupta@example.com",
      twitter: "https://twitter.com/samyakgupta",
      github: "https://github.com/samyakgupta",
    },
  },
  {
    name: "Godhuli Vays",
    position: "Chapter Lead",
    image: "/images/leads/chapter.jpg",
    bgColor: "#FFC0CB",
    socialLinks: {
      linkedin: "https://linkedin.com/in/godhuli",
      mail: "mailto:godhuli@example.com",
      twitter: "https://twitter.com/godhuli",
      github: "https://github.com/godhuli",
    },
  },
  {
    name: "Aryan Karma",
    position: "Technical Lead",
    image: "/images/leads/technical.jpg",
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aryankarma",
      mail: "mailto:aryankarma@example.com",
      twitter: "https://twitter.com/aryankarma",
      github: "https://github.com/aryankarma",
    },
  },
  {
    name: "Richa Rajput",
    position: "Technical Co-Lead",
    image: "/images/leads/techco.jpg",
    bgColor: "#FDDD81",
    socialLinks: {
      linkedin: "https://linkedin.com/in/richarajput",
      mail: "mailto:richarajput@example.com",
      twitter: "https://twitter.com/richarajput",
      github: "https://github.com/richarajput",
    },
  },
  {
    name: "Abhishekh Ojha",
    position: "Web Dev Lead",
    image: "/images/leads/webdev.jpg",
    bgColor: "#60BE90",
    socialLinks: {
      linkedin: "https://linkedin.com/in/abhishekh",
      mail: "mailto:abhishekh@example.com",
      twitter: "https://twitter.com/abhishekh",
      github: "https://github.com/abhishekh",
    },
  },
  {
    name: "Samyak Gupta",
    position: "Web3 & Blockchain Lead",
    image: "/images/leads/web3.jpg",
    bgColor: "#F4A19A",
    socialLinks: {
      linkedin: "https://linkedin.com/in/samyakgupta",
      mail: "mailto:samyakgupta@example.com",
      twitter: "https://twitter.com/samyakgupta",
      github: "https://github.com/samyakgupta",
    },
  },
];

const Team = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="body z-[20] ">
      <div className="teamsframe pt-10 ">
        <div className="content w-[75vw] md:w-full">
          <div className="py-10 px-4 flex flex-col items-center relative">
            <button className="bg-[#BDCEE9] hover:bg-[#98a8c0] transition border border-[#4285F4] px-6 py-1 rounded-full mb-4 text-sm md:text-base">
              Team
            </button>
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Meet the Team Behind GDSC-SUI
            </h2>
            <p className="text-gray-900 mt-2 text-center">
              A passionate team of developers, innovators, and community
              builders driving GDSC-SUI forward.
            </p>
          </div>
          <BlurFade delay={0.35} inView>
          <div className="cards">

            <Carousel
              className="w-[86.5vw] mb-20"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
            >
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="flex ml-4 sm:basis-2/3 md:basis-1/5 flex-col items-center gap-3 p-4"
                  >
                    <div
                      key={index}
                      className="card p-3 flex gap-3"
                      style={{ backgroundColor: member.bgColor }}
                    >
                      <img
                        className="lead-image"
                        src={member.image}
                        alt={member.name}
                      />
                      <div className="lead-info gap-1">
                        <h3 className="lead-name">{member.name}</h3>
                        <p className="position">{member.position}</p>
                        <div className="relative">
                          <Dock direction="top">
                            {Object.entries(member.socialLinks).map(
                              ([key, link]) => (
                                <DockIcon key={link}>
                                  <Link
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Image
                                      height={220}
                                      width={220}
                                      className=""
                                      src={`/icons/${key}.png`}
                                      alt={"leadimg"}
                                    />
                                  </Link>
                                </DockIcon>
                              )
                            )}
                          </Dock>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          </BlurFade>

        </div>
      </div>
    </div>
  );
};

export default Team;
