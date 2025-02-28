"use client";
import ContactUs from "../components/ContactUs";
import Events from "../components/Events";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import JoinUs from "../components/JoinUs";
import OurPartners from "../components/OurPartners";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { cn } from "@/lib/utils";
import { GridPattern } from "../components/magicui/grid-pattern";

export default function Home() {
  return (
    <div className="flex flex-col">
      <GridPattern
        width={60}
        height={60}
        // x={-1}
        // y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,gray-500,white)] opacity-50"
        )}
      />

      <div className="flex flex-col gap-32">
        <HeroSection />
        <Gallery />
        <OurPartners />
        <Events />
        <Testimonials />
        <Team />
      </div>
      <JoinUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
