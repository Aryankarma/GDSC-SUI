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
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Build with AI – Solution Challenge",
    date: "12/02/25",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Robotics Workshop",
    date: "12/02/25",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Winter of Code",
    date: "12/02/25",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Git & GitHub Essentials",
    date: "07/12",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Robotics Workshop",
    date: "12/02/25",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Winter of Code",
    date: "12/02/25",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Git & GitHub Essentials",
    date: "07/12",
    participants: "120+ Participants",
    image: "https://picsum.photos/350/250",
    category: "Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function Events() {
  return (
    <div className="h-full mx-auto w-[70vw] flex flex-col bg-transparent justify-center items-center md:w-[85vw]">
      <div className="pb-10 px-0 flex flex-col items-center relative w-[85vw]">
        <button className="bg-[#BDCEE9] hover:bg-[#98a8c0] transition border border-[#4285F4] px-6 py-1 rounded-full mb-4 text-sm md:text-base">
          Events
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold text-center w-full">
          Past Events: Relive the Moments
        </h2>
        <p className="text-gray-900 mt-2 text-center max-w-lg">
          Explore highlights from our past events, workshops, and meetups—where
          developers connected, learned, and innovated together!
        </p>
        <Image
          src={"/logos/eventassetred.png"}
          width={80}
          height={40}
          className="absolute hidden sm:flex right-40 top-20"
        />
        <Image
          src={"/logos/eventassetgreen.png"}
          width={80}
          height={40}
          className="absolute hidden sm:flex left-24 top-6"
        />
      </div>

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
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="mt-3 rounded-2xl border border-black/50"
                />
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
    </div>
  );
}

export default Events;
