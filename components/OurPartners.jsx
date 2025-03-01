import { Marquee } from "./magicui/marquee";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";

const partners = [
  {
    name: "BIZTHON",
    img: "/logos/sunstonelogo.png",
    url: "https://google.com",
  },
  {
    name: "DEVLABS",
    img: "/logos/sunstonelogo.png",
    url: "https://google.com",
  },
  {
    name: "SUNSTONE",
    img: "/logos/sunstonelogo.png",
    url: "https://google.com",
  },
  {
    name: "CODE4GOVTECH",
    img: "/logos/sunstonelogo.png",
    url: "https://google.com",
  },
];

const ReviewCard = ({ img, name, url }) => {
  return (
    <div
      className={cn(
        "relative h-full w-full border-none cursor-pointer overflow-hidden px-4 md:px-12 gap-[4px] md:gap-[64px] flex justify-center"
      )}
    >
      {/* <InteractiveGridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,gray-500,white)] opacity-100 mt-[1000vh] skew-y-10"
        )}
      /> */}
      <div className="flex gap-2 items-center justify-center align-center">
        <Link href={url} className="">
          <img className="h-6 " src={img} />
        </Link>
        <h1
          className="text-[#11111185] m-0 text-xl md:text-3xl flex justify-center"
          style={{ fontWeight: "900", letterSpacing: "0.1em" }}
        >
          {name}
        </h1>
      </div>
    </div>
  );
};

function Gallery() {
  return (
    <div className="relative flex h-auto w-full flex-col gap-4 items-center justify-center overflow-hidden">
      <h1>Our Partners</h1>
      <Marquee pauseOnHover className="[--duration:40s] ">
        {partners.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

export default Gallery;
