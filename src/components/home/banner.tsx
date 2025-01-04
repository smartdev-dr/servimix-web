import Image from 'next/image';
import { slides } from './databanner/slides';

const Banner = () => {
  
  let currentSlide = 0;

  const handleNext = () => {
    const slidesContainer = document.querySelector("#slides-container");
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(slidesContainer);
  };

  const handlePrev = () => {
    const slidesContainer = document.querySelector("#slides-container");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides(slidesContainer);
  };

  const updateSlides = (container) => {
    const offset = -currentSlide * 100;
    container.style.transform = `translateX(${offset}%)`;
  };

  return (
    <div className="w-full relative overflow-hidden mt-10">
      <div id="slides-container" className=" flex-grow transition-transform duration-500 px-6 lg:px-16 xl:px-32 sm:px-16 ">
        {slides.map((slide) => (
            <div key={slide.id} className="flex-grow w-full flex gap-8 items-center m-10 ">
              {/* <div className='relative flex-grow rounded-xl overflow-hidden'> */}

              <Image
              
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                // width={944}
                // height={222}
                layout="fill"
                objectFit="cover"
                className='rounded-xl relative flex-grow overflow-hidden'
                
              />
              {/* </div> */}
            {/* <div className="bg-black text-white flex flex-col justify-center p-20 w-1/2 rounded-l-xl"> */}
            {/* </div> */}
            <div className="w-96 relative">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2 flex-grow">{slide.title}</h2>
              {slide.description && <p className=" text-sm md:text-base lg:text-lg text-white">{slide.description}</p>}
              <div className='mt-20'>
              <button className="bg-white text-black px-4 py-2 border border-black w-44">
                {slide.buttonText}
              </button>
              </div>
            </div>
          </div>
        ))}
      </div> 

      
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#8250;
      </button>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              currentSlide = index;
              const slidesContainer = document.querySelector("#slides-container");
              updateSlides(slidesContainer);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;