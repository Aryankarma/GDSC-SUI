import React from "react";
import Image from "next/image";

const firstImg = "/images/Frame1.svg";
const secondImg = "/images/Frame2.svg";
const thirdImg = "/images/Frame3.svg";

const instagram = "/images/Instagram.svg";
const linkedin = "/images/linkedin.svg";
const facebook = "/images/facebook.svg";
const whatsapp = "/images/Whatsapp.svg";
const mail = "/images/Mail.svg";

const ContactUs = () => {
  return (
    <section className="bg-[#181817] text-white py-16 px-4 flex flex-col items-center">
      <button className="bg-[#361715] hover:bg-[#5f2824] transition border border-[#EA4335] px-6 py-2 rounded-full mb-4 text-sm md:text-base">
        Contact
      </button>
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Get in Touch
      </h2>
      <p className="text-gray-400 mt-2 text-center max-w-lg">
        Have questions or want to collaborate? Reach out to us—we’d love to hear
        from you!
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
      <div className="mt-12 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 border border-gray-600 px-6 py-3 rounded-full">
          <SocialLink
            href="https://www.instagram.com/reel/DBeSh4FshQm/?igsh=MTQ0b2d4bWp4azk2bQ%3D%3D"
            icon={instagram}
            alt="Instagram"
          />
          <SocialLink
            href="https://www.linkedin.com/company/gdg-on-campus-sui/"
            icon={linkedin}
            alt="LinkedIn"
          />
          <SocialLink
            href="https://facebook.com"
            icon={facebook}
            alt="Facebook"
          />
          <SocialLink
            href="https://chat.whatsapp.com/CrNgoxoXnRcGSQWL77xAvZ"
            icon={whatsapp}
            alt="WhatsApp"
          />
          <SocialLink
            href="mailto:gdgsage2024@gmail.com"
            icon={mail}
            alt="Mail"
          />
        </div>
        <p className="text-gray-400 mt-3">Connect on Socials</p>
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="border border-[#FFFFFF] bg-[#2c2c2a67] p-12 rounded-3xl text-center w-full max-w-md mx-auto flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center">
        <Image src={icon} alt={title} width={80} height={80} />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm md:text-base">{description}</p>
      <button className="mt-4 border border-gray-500 px-4 py-2 rounded-3xl flex items-center mx-auto text-sm md:text-base">
        <a href="https://gdgprogresshub.vercel.app/" target="blank">
          ✉ Get in Touch
        </a>
      </button>
    </div>
  );
};

const SocialLink = ({ href, icon, alt }) => {
  return (
    <a
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
    </a>
  );
};

export default ContactUs;
