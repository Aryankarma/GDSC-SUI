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
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <div className="flex relative flex-col h-full">
        <div className="flex  flex-col h-full gap-24 md:gap-32">
          <BlurFade delay={0.16} inView>
            <HeroSection />
          </BlurFade>
          <BlurFade delay={0.16} inView>
            <Gallery />
          </BlurFade>
          <BlurFade delay={0.16} inView>
            <OurPartners />
          </BlurFade>
          <BlurFade delay={0.16} inView>
            <Events />
          </BlurFade>
          <BlurFade delay={0.16} inView>
            <Testimonials />
          </BlurFade>
          <BlurFade delay={0.16} inView>
            <Team />
          </BlurFade>
        </div>
        <BlurFade delay={0.16} inView>
          <JoinUs />
        </BlurFade>
        <BlurFade delay={0.16} inView>
          <ContactUs />
        </BlurFade>
        <BlurFade delay={0.16} inView>
          <Footer />
        </BlurFade>
    </div>
  );
}
