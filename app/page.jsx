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
    <div>
      <HeroSection/>
      <Gallery/>
      <Testimonials/>
      <OurPartners/>
      <Events />
      <Team/>
      <Gallery/>
      <JoinUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
