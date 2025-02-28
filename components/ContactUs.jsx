import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "./magicui/dockoriginal";

const firstImg = "/images/Frame1.svg";
const secondImg = "/images/Frame2.svg";
const thirdImg = "/images/Frame3.svg";

const instagram = "/images/Instagram.svg";
const linkedin = "/images/linkedin.svg";
const facebook = "/images/Facebook.svg";
const whatsapp = "/images/Whatsapp.svg";
const mail = "/images/Mail.svg";

const ContactUs = () => {
  return (
    <section className="bg-[#181817] text-white py-16 px-4 flex flex-col items-center">
      <div className="py-10 px-4 flex flex-col items-center relative">
        <button className="bg-[#361715] hover:bg-[#5f2824] transition border border-[#EA4335] px-6 py-1 rounded-full mb-8 text-sm md:text-base">
          Contact
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Get in Touch
        </h2>
        <p className="text-white mt-2 text-center">
          Have questions or want to collaborate? Reach out to us—we’d love to
          hear from you!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
        <Card
          icon={firstImg}
          title="Become a Speaker"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Card
          icon={secondImg}
          title="Host a Hackathon"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Card
          icon={thirdImg}
          title="Become a Speaker"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex flex-col items-center">
        <Dock direction="middle">
          <DockIcon>
            <SocialLink
              href="https://www.instagram.com/reel/DBeSh4FshQm/?igsh=MTQ0b2d4bWp4azk2bQ%3D%3D"
              icon={instagram}
              alt="Instagram"
            />
          </DockIcon>
          <DockIcon>
            <SocialLink
              href="https://www.linkedin.com/company/gdg-on-campus-sui/"
              icon={linkedin}
              alt="LinkedIn"
            />
          </DockIcon>
          <DockIcon>
            <SocialLink
              href="https://facebook.com"
              icon={facebook}
              alt="Facebook"
            />
          </DockIcon>
          <DockIcon>
            <SocialLink
              href="https://chat.whatsapp.com/CrNgoxoXnRcGSQWL77xAvZ"
              icon={whatsapp}
              alt="WhatsApp"
            />
          </DockIcon>
          <DockIcon>
            <SocialLink
              href="mailto:gdgsage2024@gmail.com"
              icon={mail}
              alt="Mail"
            />
          </DockIcon>
        </Dock>
        <p className="text-gray-400 mt-3">Connect on Socials</p>
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="border border-gray-500 text-white bg-[#ffffff05] p-6 rounded-3xl text-center w-full max-w-md mx-auto flex flex-col items-center">
      <div className="flex items-center justify-center">
        <Image src={icon} alt={title} width={35} height={35} />
      </div>
      <h1 className="text-white font-semibold  mt-4">{title}</h1>
      <p className="text-gray-400 mt-2 w-80 text-sm md:text-base">
        {description}
      </p>
      <button className="mt-4 border border-gray-500 px-5 py-2 rounded-3xl flex items-center mx-auto text-sm md:text-base">
        <Link
          className="flex gap-3 justify-center items-center"
          href="https://gdgprogresshub.vercel.app/"
          target="blank"
        >
          <Image
            className="h-4 "
            height={10}
            width={20}
            src={"/logos/emailicon.png"}
            alt="email icon"
          />
          <span>Get in Touch</span>
        </Link>
      </button>
    </div>
  );
};

const SocialLink = ({ href, icon, alt }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="w-6 h-6 md:w-8 md:h-8"
      />
    </Link>
  );
};

export default ContactUs;
