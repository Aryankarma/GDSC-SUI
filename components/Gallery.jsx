import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

function Gallery() {
  const allImages = [
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Group photo outside building",
      className: "col-span-2 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Computer classroom",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Robot project",
      className: "col-span-1 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Presentation",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Award ceremony",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Computer classroom",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Computer classroom",
      className: "col-span-1 row-span-1"
    },
    // Additional images
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Students collaborating",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Library study",
      className: "col-span-2 row-span-1"
    },

    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Campus building",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Graduation ceremony",
      className: "col-span-2 row-span-1"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(5);
  const hasMoreImages = visibleCount < allImages.length;

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, allImages.length));
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {visibleImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-lg ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMoreImages && (
          <div className="mt-8 text-center">
            <button 
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-gray-900 group"
            >
              Show More
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;