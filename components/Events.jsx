"use client";

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Users } from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";

const data = [
  {
    title: "Build With AI",
    date: "20/02/25",
    participants: "98 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741010722/npy3sjka5qhjd7j0agx9.webp",
    category: "Talk",
    description:
      "A deep dive into AI advancements, featuring expert insights and discussions on cutting-edge AI solutions.",
  },
  {
    title: "BUILD WITH AI - Solution Challenge Project Building",
    date: "03/02/25",
    participants: "75 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011308/Untitled_design_aNUJUqQ_okmxyh.webp",
    category: "Workshop",
    description:
      "Hands-on workshop guiding participants through building AI-driven projects for real-world applications.",
  },
  {
    title: "Build With AI",
    date: "22/01/25",
    participants: "85 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011370/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy_jwfpva.webp",
    category: "Workshop",
    description:
      "Interactive study group session focused on learning AI concepts and practical implementation.",
  },
  {
    title: "Hack Tour GDG On Campus",
    date: "09/01/25",
    participants: "63 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011370/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy_jwfpva.webp",
    category: "Workshop",
    description:
      "A hackathon-style event where participants collaborate on innovative tech projects.",
  },
  {
    title: "Winter of Code 4.0 Info Session",
    date: "28/12/24",
    participants: "55 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011442/woc_logo_n3uGFjk_liy5ge.webp",
    category: "Session",
    description:
      "An informational session about Winter of Code, its benefits, and how to participate.",
  },
  {
    title: "Tech Winter Break + GDG On Campus Amity University Noida",
    date: "23/12/24",
    participants: "70 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011479/Group_110_tJOfnkG_zqbkko.webp",
    category: "Workshop",
    description:
      "A collaborative workshop covering key tech skills during the winter break.",
  },
  {
    title: "Tech Winter break - GDG On Campus Sage University Indore",
    date: "18/12/24",
    participants: "45 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741013040/Tech_Winter_break_1__bPQd9IT_m0rbwl.webp",
    category: "Workshop",
    description:
      "An engaging learning session featuring hands-on coding activities and mentorship.",
  },
  {
    title: "Tech Winter Break- GDG On Campus Sage University Indore",
    date: "14/12/24",
    participants: "50 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741013122/business_webinar_zXG3gBz_kknrsh.webp",
    category: "Workshop",
    description:
      "A skill-development program focusing on practical tech skills and industry insights.",
  },
  {
    title: "Keeping Data Safe: The Go Lacil Revolution",
    date: "13/12/24",
    participants: "40 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741013163/GO_LAADLI_2__7RreJie_fjaqfa.webp",
    category: "Talk",
    description:
      "A session exploring data security trends and best practices in the digital age.",
  },
  {
    title: "Tech Winter Break - HTML, CSS, JS, Git/Github session",
    date: "07/12/24",
    participants: "58 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011370/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy_jwfpva.webp",
    category: "Workshop",
    description:
      "A beginner-friendly session covering essential web development tools and Git workflows.",
  },
  {
    title: "Orientation Day",
    date: "29/11/24",
    participants: "100 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741013359/Screenshot_2024-12-08_010508_IHEOEVC_ci6nvp.webp",
    category: "Session",
    description:
      "Introduction to the GDG community, event roadmap, and networking opportunities.",
  },
  {
    title: "Open Source Contribution in Government Technologies",
    date: "28/10/24",
    participants: "78 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741011370/gdev-eccosystems-bevy-chapters-thumbnail_x4z1EBy_jwfpva.webp",
    category: "Talk",
    description:
      "Insights on leveraging open-source contributions for impactful government tech solutions.",
  },
  {
    title: "Build With AI Expert Session",
    date: "26/10/24",
    participants: "90 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741013418/Thumbnail_Build_with_AI_Session_BAPc9rF_baajfu.webp",
    category: "Talk",
    description:
      "Expert-led discussions on AI trends, innovations, and future opportunities.",
  },
  {
    title:
      "Robotics Workshop In collaboration with Sage GDG X IIT Bombay X Youngcvator",
    date: "24/09/24",
    participants: "60 Participants",
    image:
      "https://res.cloudinary.com/dhbbjqlij/image/upload/q_auto,f_auto,w_400/v1741013478/Mr._Mudit_Thakar_qEKm5bf_ncdmjx.webp",
    category: "Workshop",
    description:
      "A robotics-focused workshop exploring automation, AI integration, and hands-on projects.",
  },
];

function Events() {
  return (
    <div
      id="events"
      className="h-full mx-auto w-[70vw] flex flex-col bg-transparent justify-center items-center md:w-[85vw]"
    >
      <div className="pb-10 px-0 flex flex-col items-center relative w-[85vw]">
        <button className="bg-[#BDCEE9] hover:bg-[#98a8c0] transition border border-[#4285F4] px-6 py-1 rounded-full mb-4 text-sm md:text-base">
          Events
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold text-center w-full z-20">
          Past Events: Relive the Moments
        </h2>
        <p className="text-gray-900 mt-2 text-center max-w-lg z-20">
          Explore highlights from our past events, workshops, and meetups—where
          developers connected, learned, and innovated together!
        </p>
        <Image
          src={"/logos/eventassetred.png"}
          width={80}
          height={40}
          alt="eventimg"
          className="absolute hidden sm:flex right-40 top-20"
        />
        <Image
          src={"/logos/eventassetgreen.png"}
          width={80}
          height={40}
          alt="eventimg"
          className="absolute hidden sm:flex left-24 top-6"
        />
      </div>

      <BlurFade delay={0.16} inView>
        <Carousel className="w-[70vw] md:w-[85vw]">
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex sm:basis-1/2 md:basis-1/3 flex-col items-center md:gap-2 md:p-4"
              >
                <div className="w-full rounded-3xl border border-black/50 p-4 py-6 md:gap-2 flex flex-col hover:bg-[#F1F6FF] md:transition-transform duration-300 md:hover:translate-x-1 md:hover:translate-y-1 md:hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 justify-between text-xs text-gray-500">
                    <span className="px-3 py-1 border hidden md:flex border-black/50 p-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 border border-black/50 p-1 px-2 rounded-full">
                      <Calendar size={14} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1 border border-black/50  p-1 px-2 rounded-full">
                      <Users size={14} />
                      {item.participants}
                    </span>
                  </div>
                  <BlurFade delay={0.35} inView>
                    <Image
                      unoptimized={true}
                      src={item.image}
                      loading="lazy"
                      alt={item.title}
                      width={400}
                      height={250}
                      className="mt-3 rounded-2xl border border-black/50 w-full"
                    />
                  </BlurFade>

                  <h3 className="mt-2 text-lg text-start font-semibold">
                    {item.title.slice(0, 30) + "..."}
                  </h3>
                  <p className="text-sm text-gray-500 text-start">
                    {item.description.slice(0, 125) + "..."}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </BlurFade>
    </div>
  );
}

export default Events;
