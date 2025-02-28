import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Link from "next/link";

const partners = [
  { name: "BIZTHON", img: "/logos/sunstonelogo.png", url: "https://google.com" },
  { name: "DEVLABS", img: "/logos/sunstonelogo.png", url: "https://google.com" },
  { name: "SUNSTONE", img: "/logos/sunstonelogo.png", url: "https://google.com" },
  { name: "CODE4GOVTECH", img: "/logos/sunstonelogo.png", url: "https://google.com" },
];

const ReviewCard = ({ img, name, url }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full border-none cursor-pointer overflow-hidden px-12 gap-[64px] flex justify-center"
      )}
    >
      <div className="flex gap-2 justify-center align-center">
        <Link href={url}>
          <img className="" src={img} />
        </Link>
        <h1
          className="text-[#11111185] text-3xl flex justify-center"
          style={{ fontWeight: "900", letterSpacing: "0.1em" }}
        >
          {name}
        </h1>
      </div>
    </figure>
  );
};

function Gallery() {
  return (
    <div className="relative flex h-auto w-full flex-col gap-4 items-center  justify-center overflow-hidden">
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
