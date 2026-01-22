import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HorizontalScroll: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loadedSlides, setLoadedSlides] = useState<boolean[]>([false, false, false]);

    const slides = [
        '/logo/slide-1.png',
        '/logo/slide-2.png',
        '/logo/slide-3.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handleImageLoad = (index: number) => {
        setLoadedSlides((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            onLoad={() => handleImageLoad(index)}
                        />
                        {!loadedSlides[index] && (
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-white text-4xl font-bold mb-4">
                                        SLIDE {index + 1}
                                    </div>
                                    <div className="text-gray-400 text-lg">
                                        Loading image...
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/85 hover:bg-white text-gray-800 p-5 rounded-full shadow-2xl transition-all z-20 hover:scale-110"
                aria-label="Previous slide"
            >
                <FiChevronLeft className="w-10 h-10" />
            </button>

            {/* Next Button */}
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/85 hover:bg-white text-gray-800 p-5 rounded-full shadow-2xl transition-all z-30 hover:scale-110"
                aria-label="Next slide"
            >
                <FiChevronRight className="w-10 h-10" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`rounded-full transition-all ${index === currentSlide
                                ? 'bg-white w-10 h-3'
                                : 'bg-white/60 hover:bg-white/80 w-3 h-3'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HorizontalScroll;
