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
    <div className="relative w-full h-[400px] overflow-hidden">
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
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <span className="text-primary font-semibold mb-2 inline-block">
              {headline.category}
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              <a href={headline.url} className="hover:text-primary transition-colors">
                {headline.title}
              </a>
            </h2>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NewsSlider;