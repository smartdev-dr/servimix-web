import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const slides = [
  {
    id: 1,
    title: "Soluciones rapidas y seguras para tus proyectos y hogar. Todo en un mismo lugar ",
    subtitle: "",
    image: "/img/banner_1.png",
  },
  {
    id: 2,
    title: "Soluciones rapidas y seguras para tus proyectos y hogar. Todo en un mismo lugar ",
    subtitle: "",
    image: "/img/banner_2.png",
  },
  {
    id: 3,
    title: "Soluciones rapidas y seguras para tus proyectos y hogar. Todo en un mismo lugar ",
    subtitle: "",
    image: "/img/banner_4_2.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] overflow-hidden mt-3 ">
      {/* Contenedor de los slides */}
      <div
        className="flex w-full h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full flex px-5 bg-cover bg-cente rounded-lg md:mx-4"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="md:p-6 rounded mt-10">
              <p className="text-white text-xs md:text-sm font-normal">sertemi</p>
              <p className="text-white md:text-xl font-bold md:max-w-sm  max-w-[120px]">
                {slide.title}
              </p>
              <p className="text-white text-sm mt-4">
                {slide.subtitle}
              </p>
              <Button className=" bg-white text-black  px-6 py-2 mt-3 md:mt-10">
            Contactar ahora
            </Button>
            </div>
         
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index
              ? "bg-white"
              : "bg-gray-400 hover:bg-white"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;