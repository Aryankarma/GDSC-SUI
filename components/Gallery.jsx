import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    img: "https://picsum.photos/600/350",
  },
  {
    img: "https://picsum.photos/600/500",
  },
  {
    img: "https://picsum.photos/600/150",
  },
  {
    img: "https://picsum.photos/600/400",
  },
  {
    img: "https://picsum.photos/600/200",
  },
  {
    img: "https://picsum.photos/600/450",
  },
  {
    img: "https://picsum.photos/600/300",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[40vw] cursor-pointer overflow-hidden rounded-3xl border p-1 gap-2 flex justify-center",
        // light styles
        "hover:border-2 hover:border-[#333333] transition-all rounded-[1.75rem] md:rounded-[3.25rem] hover:bg-gray-950/[0]"
      )}
    >
      <div className="flex">
        <img
          className="hover:scale-[.99] transition-all rounded-[1.75rem] md:rounded-[3.25rem]"
          src={img}
        />
      </div>
    </figure>
  );
};

function Gallery() {
  return (
    <div className="relative flex h-[675px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-background"></div>
    </div>
  );
}

export default Gallery;