import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../../data/constants';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to middle set
    const imageWidth = 320 + 24;
    scrollContainer.scrollLeft = galleryImages.length * imageWidth;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth;
      const singleSetWidth = galleryImages.length * imageWidth;

      // Loop back when reaching end
      if (scrollLeft >= singleSetWidth * 2) {
        scrollContainer.scrollLeft = singleSetWidth;
      }
      // Loop forward when reaching start
      else if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = singleSetWidth;
      }

      // Calculate current index
      const adjustedScroll = scrollLeft % singleSetWidth;
      const index = Math.round(adjustedScroll / imageWidth) % galleryImages.length;
      setCurrentIndex(index);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const autoScrollInterval = setInterval(() => {
      scrollContainer.scrollBy({
        left: 1,
        behavior: 'auto'
      });
    }, 20);

    return () => clearInterval(autoScrollInterval);
  }, [isAutoScrolling]);

  const scrollToImage = (index) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const imageWidth = 320 + 24;
      const singleSetWidth = galleryImages.length * imageWidth;
      const targetScroll = singleSetWidth + (index * imageWidth);
      
      scrollContainer.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const imageWidth = 320 + 24;
      scrollContainer.scrollBy({
        left: -imageWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const imageWidth = 320 + 24;
      scrollContainer.scrollBy({
        left: imageWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section id="gallery" className="py-8 md:py-10 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative p-6 rounded-2xl">
            {/* Gradient overlays for professional look */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none rounded-r-2xl"></div>

            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="flex space-x-6 pb-4">
                {/* Triple the images for infinite scrolling */}
                {[...galleryImages, ...galleryImages, ...galleryImages].map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group relative cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative">
                      <img
                        src={img}
                        alt={`Army Gallery ${(index % galleryImages.length) + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-white font-semibold text-lg">Click to view</span>
                      </div>
                      {/* Decorative border */}
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 rounded-xl transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal for viewing full image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-lg font-semibold px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
              <span>Close</span>
            </button>
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[85vh] object-contain rounded"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ImageGallery;
