import React from "react";
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
    name: "Godhuli Vyas",
    position: "Chapter Lead",
    image: "/team/godhuliVyas.png",
    bgColor: "#FFC0CB",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253",
      github: "https://github.com/godhulivyas",
      mail: "mailto:godhulivyas@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Aryan Karma",
    position: "Technical Lead",
    image: "/team/aryankarma.png",
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aryankarma",
      github: "https://github.com/aryankarma",
      mail: "mailto:aryankarma29@gmail.com",
      twitter: "https://x.com/karmaaryn",
    },
  },
  {
    name: "Aditya Kumar Junwal",
    position: "Event Lead",
    image: "/team/adityaJunwal.png",
    bgColor: "#FFC0CB",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aditya-kumar-junwal-66aa77184",
      github: "https://github.com/adityajunwal",
      mail: "mailto:adityakjunwal@gmail.com",
      twitter: "https://x.com/adityajunwal",
    },
  },
  {
    name: "Prem Panchal",
    position: "Videography Lead",
    image: "/team/premPanchal.png",
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/prem-panchal-90a844300",
      github: "https://github.com/developerhumain",
      mail: "mailto:panchalprem0501@gmail.com",
      twitter: "https://x.com/IAMPREMPXNCHAL?t=yV3vKiyjWOsqtrzCCVc2qw&s=09",
    },
  },
  {
    name: "Muskan Wagh",
    position: "Sponsorship Co-Lead",
    image: "/team/muskanWagh.png",
    bgColor: "#FDDD81",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/muskan-wagh-22b2b5325",
      github: "",
      mail: "mailto:",
      twitter: "",
    },
  },
  {
    name: "Samyak Gupta",
    position: "Technical Web3 Lead",
    image: "/team/samyakGupta.png",
    bgColor: "#60BE90",
    socialLinks: {
      linkedin: "https://linkedin.com/in/samyakzer0",
      github: "https://github.com/samyakzer0",
      mail: "mailto:samyak.sage@gmail.com",
      twitter: "https://x.com/samyceo",
    },
  },
  {
    name: "Saurish Sagar",
    position: "Web Dev Co-Lead",
    image: "/team/saurishSagar.png",
    bgColor: "#F4A19A",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/saurish-sagar",
      github: "https://github.com/SaurishS",
      mail: "mailto:",
      twitter: "",
    },
  },
  {
    name: "Yashkirti Tomar",
    position: "Content Team Lead",
    image: "/team/yashkirtiTomar.png",
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yashkirti-tomar-17ba08297",
      github: "https://github.com/yashkirtitomar",
      mail: "mailto:btech22.yashkirti.tomar@sunstone.edu.in",
      twitter: "",
    },
  },
  {
    name: "Omjee Pandey",
    position: "App Development Lead",
    image: "/team/omjeePandey.png",
    bgColor: "#FFC0CB",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/omjee-pandey-31800533a",
      github: "https://github.com/omjee-pandey",
      mail: "mailto:omjee.pandey2506@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Ishika Keshanya",
    position: "Community Lead",
    image: "/team/ishikaKeshanya.png",
    bgColor: "#FDDD81",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ishika-keshanya-93237a268",
      github: "",
      mail: "mailto:ishikakeshanya@gmail.com",
      twitter: "",
    },
  },
];

const Team = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div id="team" className="body z-[20] ">
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
          <BlurFade delay={0.16} inView>
            <div className="cards">
              <Carousel
                className="w-[86.5vw] mb-20"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.play}
              >
                <CarouselContent>
                  {teamMembers.map((member, index) => (
                    <BlurFade key={index} delay={0.35} inView>
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
                                    <DockIcon key={key}>
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
                    </BlurFade>
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
