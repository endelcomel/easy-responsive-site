import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const headlines = [
  {
    id: 1,
    title: "Breaking News: Perkembangan Terkini Ekonomi Indonesia",
    image: "https://picsum.photos/800/400?random=1",
    category: "Ekonomi",
    url: "/news/ekonomi/1"
  },
  {
    id: 2,
    title: "Update Covid-19: Kasus Baru di Jakarta",
    image: "https://picsum.photos/800/400?random=2",
    category: "Kesehatan",
    url: "/news/kesehatan/1"
  },
  {
    id: 3,
    title: "Timnas Indonesia Siap Hadapi Turnamen Internasional",
    image: "https://picsum.photos/800/400?random=3",
    category: "Sport",
    url: "/sport/sepakbola/1"
  }
];

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % headlines.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + headlines.length) % headlines.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-lg">
      {headlines.map((headline, index) => (
        <div
          key={headline.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={headline.image}
            alt={headline.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6">
            <span className="text-primary text-sm md:text-base font-semibold mb-1 md:mb-2 inline-block">
              {headline.category}
            </span>
            <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold line-clamp-2">
              <a href={headline.url} className="hover:text-primary transition-colors">
                {headline.title}
              </a>
            </h2>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 md:p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 md:p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>
    </div>
  );
};

export default NewsSlider;