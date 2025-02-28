"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee3";

export const testimonials = [
  {
    name: "Sophia Bennett",
    role: "Premium Member",
    img: "https://picsum.photos/50/50",
    testimonial:
      "This platform has truly changed the way I approach learning. The interactive challenges keep me engaged, and I’ve seen a huge improvement in my skills!",
  },
  {
    name: "Liam Carter",
    role: "Verified User",
    img: "https://picsum.photos/50/50",
    testimonial:
      "The interface is clean, the challenges are well-structured, and the community is incredibly supportive. Highly recommend to anyone looking to upskill!",
  },
  {
    name: "Olivia Mitchell",
    role: "Pro Member",
    img: "https://picsum.photos/50/50",
    testimonial:
      "I love how easy it is to track my progress. The leaderboard adds a competitive edge that makes learning even more fun!",
  },
  {
    name: "Ethan Rogers",
    role: "Community Member",
    img: "https://picsum.photos/50/50",
    testimonial:
      "The AI-driven profile matcher helped me find the perfect learning path. It’s like having a personal mentor guiding me through my journey.",
  },
  {
    name: "Amelia Johnson",
    role: "Elite Member",
    img: "https://picsum.photos/50/50",
    testimonial:
      "I’ve tried many learning platforms, but this one stands out with its interactive coding challenges and instant feedback.",
  },
  {
    name: "Noah Williams",
    role: "Tech Enthusiast",
    img: "https://picsum.photos/50/50",
    testimonial:
      "The Telegram bot integration makes it super easy to stay on track. I can practice challenges on the go!",
  },
  {
    name: "Isabella Clark",
    role: "Scholarship Winner",
    img: "https://picsum.photos/50/50",
    testimonial:
      "Thanks to this platform, I found the right scholarship and aced my application. The AI suggestions were spot on!",
  },
  {
    name: "Mason Baker",
    role: "Startup Founder",
    img: "https://picsum.photos/50/50",
    testimonial:
      "A game-changer for skill development. The coding challenges helped me sharpen my problem-solving skills, which I now use in my startup.",
  },
  {
    name: "Emily Davis",
    role: "Aspiring Developer",
    img: "https://picsum.photos/50/50",
    testimonial:
      "The structured learning path made it easy to transition from beginner to intermediate. I feel more confident in my coding abilities!",
  },
  {
    name: "James Thompson",
    role: "Data Science Enthusiast",
    img: "https://picsum.photos/50/50",
    testimonial:
      "The hands-on approach is what I love most. The platform makes learning feel natural and fun!",
  },
  {
    name: "Charlotte Evans",
    role: "Freelance Developer",
    img: "https://picsum.photos/50/50",
    testimonial:
      "As a freelancer, staying updated is crucial. This platform helps me stay ahead of industry trends effortlessly.",
  },
  {
    name: "Benjamin Wilson",
    role: "Cybersecurity Student",
    img: "https://picsum.photos/50/50",
    testimonial:
      "The security challenges were really eye-opening. I got hands-on experience solving real-world cybersecurity problems.",
  },
];

function TestimonialCard({ img, name, position, description }) {
  return (
    <div className="max-w-sm p-5 bg-white flex flex-col gap-6 rounded-3xl hover:shadow-lg border relative">
      <div className="flex items-center space-x-3">
        <img
          src={img}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
      <div className="mt-3">
        {/* <span className="text-[#a0a0f7] text-[10rem] ">“</span> */}
        <Image
          height={30}
          width={50}
          alt="testimonial"
          src={"/logos/testomonialquote.png"}
          className="absolute top-[33%] left-[40%]"
        />
        <p className="text-gray-600 italic mt-2">
          {description.slice(0, 150) + "..."}
          <span className="text-blue-500 cursor-pointer ml-2">see more</span>
        </p>
      </div>
    </div>
  );
}

const firstRow = testimonials.slice(0, testimonials.length / 3);
const secondRow = testimonials.slice(testimonials.length / 3);
const thirdRow = testimonials.slice(testimonials.length / 3);

function Testimonials() {
  return (
    <div className="h-full w-[95vw] mx-auto">
      <div className="py-16 px-4 flex flex-col items-center relative">
        <button className="bg-[#BDCEE9] hover:bg-[#98a8c0] transition border border-[#4285F4] px-6 py-1 rounded-full mb-4 text-sm md:text-base">
          Testimonials
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          What Our Community Says
        </h2>
        <p className="text-gray-900 mt-2 text-center max-w-lg">
          Hear from our members about their experiences, growth, and journey
          with GDSC-SUI.
        </p>
        <Image
          src={"/logos/testimonialassetyellow.png"}
          width={80}
          alt="testimoniaal"
          height={40}
          className="absolute right-40 top-20"
        />
        <Image
          src={"/logos/testimonialassetblue.png"}
          width={80}
          alt="testimoniaal"
          height={40}
          className="absolute left-24 top-6"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Marquee pauseOnHover className="[--duration:75s]">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              img={testimonial.img}
              name={testimonial.name}
              position={testimonial.role}
              description={testimonial.testimonial}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:75s]">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              img={testimonial.img}
              name={testimonial.name}
              position={testimonial.role}
              description={testimonial.testimonial}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Testimonials;
