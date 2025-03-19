import React, {useState, useEffect} from "react";
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
import { useInView } from "react-intersection-observer";
const teamMembers = [
  {
    name: "Godhuli Vyas",
    position: "Chapter Lead",
    image: "/team/godhuliVyas.png",
    bgColor: "#FFC0CB",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253",
      github: "https://github.com/godhulivyas",
      mail: "mailto:godhuli.vyas@gmail.com",
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
      twitter: "https://x.com/karmaaryan",
    },
  },
  {
    name: "Aditya Kumar Junwal",
    position: "Event Lead",
    image: "/team/adityaJunwal.png",
    bgColor: "#FDDD81",
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
    bgColor: "#60BE90",
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
    bgColor: "#F4A19A",
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
    bgColor: "#A0C2F9",
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
    bgColor: "#FDDD81",
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
    bgColor: "#60BE90",
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
    bgColor: "#F4A19A",
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
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ishika-keshanya-93237a268",
      github: "",
      mail: "mailto:ishikakeshanya@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Rishabh Singh",
    position: "GRAPHIC Lead",
    image: "/team/rishabhsingh.jpg",
    bgColor: "#FDDD81",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/rishabhsingh4114",
      github: "",
      mail: "mailto:rs102243@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Krishna Choudhary",
    position: "Graphic Team Co-lead",
    image: "/team/krishnachoudhary.jpg",
    bgColor: "#60BE90",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/krishna-choudhary-036992296",
      github: "https://github.com/krishnachoudhary19",
      mail: "mailto:krishnachoudhary9424@gmail.com",
      twitter: "https://x.com/_krishhhhna_19?t=h3s55X-AUhYN7LU15T-JGw&s=08",
    },
  },
  {
    name: "Ansh Sharma",
    position: "Community Co-lead",
    image: "/team/anshsharma.jpg",
    bgColor: "#F4A19A",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ansh-sharma-79aa01278",
      github: "",
      mail: "mailto:panditansh016@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Richa Rajput",
    position: "Technical Co-lead",
    image: "/team/richarajput.jpg",
    bgColor: "#A0C2F9",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/richa-rajput-6650b3217",
      github: "https://github.com/richzr14",
      mail: "mailto:Richarajput1350@gmail.com",
      twitter: "https://x.com/richaiiii",
    },
  },
  {
    name: "Anurag Singh Gahlot",
    position: "Sponsorship Lead",
    image: "/team/anuragsinghgahlot.jpg",
    bgColor: "#FDDD81",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anurag-singh-gahlot-20983a325",
      github: "",
      mail: "mailto:anuragsinghgahlot@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Anshika Sahu",
    position: "Social Media Management Lead",
    image: "/team/anshikasahu.jpg",
    bgColor: "#60BE90",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anshika-sahu-83a238297",
      github: "",
      mail: "mailto:anshikasahu34@gmail.com",
      twitter: "",
    },
  },
  {
    name: "Lakshya Soni",
    position: "Technical Cloud Lead",
    image: "/team/lakshyasoni.jpg",
    bgColor: "#F4A19A",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/lakshya004",
      github: "https://github.com/lakshya-004",
      mail: "mailto:lsoni2407@gmail.com",
      twitter: "https://x.com/lakshya2412?s=09",
    },
  },
];


const Team = () => {
  const [autoplayRef, setAutoplayRef] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Instantiate the plugin only when it's needed (when in view)
  useEffect(() => {
    if (inView && !autoplayRef) {
      // Only create the plugin when in view and it doesn't exist yet
      const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
      setAutoplayRef(plugin);
    } else if (!inView && autoplayRef) {
      // Stop autoplay when out of view
      autoplayRef.stop();
    } else if (inView && autoplayRef) {
      // Resume autoplay when back in view
      autoplayRef.play();
    }
  }, [inView, autoplayRef]);

  return (
    <div id="team" className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url("/teamsbackground.jpg")`}}>
      <div className="teamsframe pt-10">
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
            <div className="cards" ref={ref}>
              <Carousel
                className="w-[86.5vw] mb-20"
                plugins={autoplayRef ? [autoplayRef] : []}
                onMouseEnter={() => autoplayRef?.stop()}
                onMouseLeave={() => autoplayRef?.play()}
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
                            className="lead-image object-cover"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
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
