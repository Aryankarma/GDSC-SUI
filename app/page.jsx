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

export default function Home() {
  return (
    <div className="flex flex-col">
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
