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
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function Home() {
  return (
    <div className="flex relative flex-col h-full">
      <div className="flex  flex-col h-full gap-24 md:gap-32">
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
