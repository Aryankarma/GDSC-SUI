import React from 'react';



const JoinUs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] md:h-[70vh] lg:h-[60vh] bg-[#f5f9ff] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/images/join-us-background-grid.svg')] bg-cover"></div>

      {/* Background Shapes */}
      <img src="/images/green star.svg" alt="Green Star" className="absolute top-0 right-16" />
      <img src="/images/yellow ring.svg" alt="Yellow Ring" className="absolute bottom-0 left-12 w-32 " />
      <img src="/images/red circles.svg" alt="Red Circles" className="absolute bottom-10 right-20 w-30" />

      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Be Part of GDSC–SUI!
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Connect, learn, and grow with a community of developers passionate about technology and innovation.
        </p>
        <button className="bg-[#4285F4] hover:bg-blue-600 text-white mt-4 py-2 px-5 rounded-lg shadow-lg transition">
          Join Us Now
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
