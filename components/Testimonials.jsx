"use client";

import Image from "next/image";
import React, {useState} from "react";
import { Marquee } from "./magicui/marquee3";
import { BlurFade } from "./magicui/blur-fade";

export const testimonials = [
  {
    "name": "Anonymous",
    "role": "Community Member",
    "img": "https://picsum.photos/50/50",
    "testimonial": "I am proud of our progress and excited for what we will achieve together. Let’s keep up the momentum and continue making a difference!"
  },
  {
    "name": "Anonymous",
    "role": "Event Attendee",
    "img": "https://picsum.photos/50/50",
    "testimonial": "Build with AI Day 1 was interesting! Got to know more about trends and some amazing tools. Looking forward to the next session."
  },
  {
    "name": "Anonymous",
    "role": "Active Member",
    "img": "https://picsum.photos/50/50",
    "testimonial": "The GDG orientation was amazing! I got to learn more about GDG, meet the lead members, and build connections. Thank you for making me a part of this!"
  },
  {
    "name": "Anonymous",
    "role": "New Member",
    "img": "https://picsum.photos/50/50",
    "testimonial": "When I joined college, I was looking for a platform to improve my skills and knowledge. GDG has given me exactly that! I am excited to learn more."
  },
  {
    "name": "Anonymous",
    "role": "Tech Enthusiast",
    "img": "https://picsum.photos/50/50",
    "testimonial": "Good leadership ability, decision-making skills, and management! The team is doing a great job."
  },
  {
    "name": "Anonymous",
    "role": "Excited Learner",
    "img": "https://picsum.photos/50/50",
    "testimonial": "Great time today at the orientation. The team leads are awesome, and I loved interacting with everyone!"
  },
  {
    "name": "Anonymous",
    "role": "First-Year Student",
    "img": "https://picsum.photos/50/50",
    "testimonial": "Honestly, as a first-year student, I’ve seen the efforts the leaders put in. Managing everything at once is tough, but they are doing an incredible job!"
  },
  {
    "name": "Anonymous",
    "role": "GDG Member",
    "img": "https://picsum.photos/50/50",
    "testimonial": "Everyone here is so sweet! Special appreciation to the technical team lead and the chapter lead. It’s fun to be part of GDG, and I’d love to have more regular meetings!"
  }
];

function TestimonialCard({ img, name, position, description }) {
  const [showAll, setShowAll] = useState(false)
  return (
    <div className="max-w-xs md:max-w-sm p-3 md:p-5 flex flex-col gap-6 rounded-3xl hover:shadow-md transition-all border relative">
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
          {showAll ? description : description.slice(0, 150) + "..."}
          <span onClick={()=> {setShowAll(!showAll)}} className={`text-blue-500 cursor-pointer ml-2 ${showAll ? 'hidden' : ""}`}>see more</span>
        </p>
      </div>
    </div>
  );
}

const firstRow = testimonials.slice(0, testimonials.length / 3);
const secondRow = testimonials.slice(testimonials.length / 3);
// const thirdRow = testimonials.slice(testimonials.length / 3);

function Testimonials() {
  return (
    <div className="h-full w-[95vw] mx-auto">
      <div className="pb-10 px-4 flex flex-col items-center relative">
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
          className="absolute hidden sm:flex right-40 top-20"
        />
        <Image
          src={"/logos/testimonialassetblue.png"}
          width={80}
          alt="testimoniaal"
          height={40}
          className="absolute hidden sm:flex left-24 top-6"
        />
      </div>
      <div className="flex flex-col gap-2 scale-90 md:scale-100">
          <BlurFade  delay={0.16} inView>
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
            </BlurFade>
          <BlurFade  delay={0.5} inView>
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
            </BlurFade>
      </div>
    </div>
  );
}

export default Testimonials;
