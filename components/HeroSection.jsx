import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="text-center bg-gray-100 relative min-h-screen">
      <nav className="flex justify-between items-center p-4 relative z-50 bg-transparent">
        <div className="flex items-center space-x-2">
          <img src="/images/GDG-Logo.svg" alt="GDG-SUI" className="h-6" />
          <span className="font-semibold">GDG-SUI</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6">
            <a href="#events" className="hover:text-blue-600 transition-colors">
              Events
            </a>
            <a href="#team" className="hover:text-blue-600 transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-gray-100 z-40">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#events" className="hover:text-blue-600 transition-colors py-2">
              Events
            </a>
            <a href="#team" className="hover:text-blue-600 transition-colors py-2">
              Team
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors py-2">
              Contact
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
              Join Us
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 pt-8">
        <div className="inline-flex items-center justify-center">
          <button className="border border-gray-300 px-6 py-2 rounded-full mb-8 hover:bg-gray-50 transition-colors text-gray-700">
            SAGE University, Indore
          </button>
        </div>

        <div className="relative z-10 py-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex sm:inline-flex flex-col sm:flex-row items-center space-y-4">
              <img src="/images/GDG-Logo.svg" alt="GDG-SUI" className="h-8 mt-4" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Google Developer Student Clubs
              </h1>
            </div>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed px-4">
              Google Developer Group (GDG) is a student-led community backed by
              Google Developers aimed at empowering undergraduate students from
              all disciplines to grow their knowledge in technology, build
              solutions for their local communities, and connect with other
              members from the Google community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full flex items-center">
                💡 Ideate
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full flex items-center">
                📗 Learn
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full flex items-center">
                💻 Build
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full flex items-center">
                📈 Grow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
    </div>
  );
};

export default App;