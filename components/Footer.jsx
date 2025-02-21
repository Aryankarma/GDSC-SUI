import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-16 flex flex-col items-center text-center border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Links Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold border-b-4 border-blue-500 pb-1">Links</h3>
          <ul className="mt-2 text-gray-600">
            <p><a href="https://gdgprogresshub.vercel.app/" target="blank">GDG Progress Hub</a></p>
            <p><a href="https://gdgfeedback.sayout.net/" target="blank">Feedback Pages</a></p>
            <p><a href="https://gdg.community.dev/gdg-on-campus-sage-university-indore-india/" target="blank">GDG on campus</a></p>
          </ul>
        </div>

        {/* Events Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold border-b-4 border-green-500 pb-1">Events</h3>
          <ul className="mt-2 text-gray-600">
            <p><a href="#" target="blank"></a>Upcoming Events</p>
            <p><a href="#" target="blank"></a>Previous Events</p>
          </ul>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold border-b-4 border-red-500 pb-1">Team</h3>
          <ul className="mt-2 text-gray-600">
            <p><a href="#" target="blank"></a>Leads</p>
            <p><a href="#" target="blanks"></a>Core Members</p>
          </ul>
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-10">
        <Image src="/images/GOOGLE DEVELOPER GROUP.svg" alt="GDSC SUI" width={680} height={170} />
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-gray-600">Made with 💙 by GDSC SUI</p>
      <p className="text-gray-500 text-sm">Google Developer Group on Campus, SUI. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
