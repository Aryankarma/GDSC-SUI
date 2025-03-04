import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { BlurFade } from "./magicui/blur-fade";

const reviews = [
  {
    img: "https://res.cloudinary.com/dawbyjcyo/image/upload/q_auto,f_auto,w_400/v1740832988/2_z5eybo.png",
  },
  {
    img: "https://res.cloudinary.com/dawbyjcyo/image/upload/q_auto,f_auto,w_400/v1740832988/1_ae7qsy.png",
  },
  {
    img: "https://res.cloudinary.com/dawbyjcyo/image/upload/q_auto,f_auto,w_400/v1740832994/4_dj6eql.png",
  },
  {
    img: "https://res.cloudinary.com/dawbyjcyo/image/upload/q_auto,f_auto,w_400/v1740832999/3_qkhvle.png",
  },
  {
    img: "https://res.cloudinary.com/dawbyjcyo/image/upload/q_auto,f_auto,w_400/v1740832993/5_r9suak.png",
  },
  {
    img: "https://res.cloudinary.com/dawbyjcyo/image/upload/q_auto,f_auto,w_400/v1740833005/6_poypg9.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[45vw] md:w-[40vw] cursor-pointer overflow-hidden rounded-3xl border p-1 gap-1 md:gap-2 flex justify-center",
        // light styles
        "hover:border-2 hover:border-[#444444] transition-all rounded-[1.15rem] md:rounded-[3.25rem] hover:bg-gray-950/[0]"
      )}
    >
      <div className="flex">
        <BlurFade delay={0.35} inView>
          <img
            
            className="hover:scale-[.99] transition-all rounded-[1.15rem] md:rounded-[3.25rem]"
            src={img}
          />
        </BlurFade>
      </div>
    </figure>
  );
};

function Gallery() {
  return (
    <div className="relative flex h-[350px] md:h-[675px] w-full flex-row items-center justify-center overflow-hidden">
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
