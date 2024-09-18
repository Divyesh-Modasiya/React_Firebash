import React from 'react';
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    // dots: true,           // Show dots at the bottom
    infinite: true,       // Infinite loop sliding
    speed: 500,           // Speed of slide transition
    slidesToShow: 1,      // Number of slides to show
    slidesToScroll: 1,    // Number of slides to scroll at a time
    autoplay: true,       // Autoplay slides
    autoplaySpeed: 2000,  // Autoplay speed
  };

  return (
    <div className='h-full'>
      <Slider {...settings} className='h-[70vh]'>
        <div className='h-[70vh] w-full  relative'>
          <img className='h-[95%] w-[80%] ms-[10%] mt-[6%] rounded-[10px]' src="https://i.pinimg.com/474x/63/7f/dc/637fdc136ec1a90b988f60969f96596d.jpg" alt="Slide 1" />

          <div className=' w-[70%] h-[100px] absolute top-[70%] left-[15%] rounded-[10px] z-10 bg-[#0000007a] flex flex-col justify-center items-center'>
            <h1 className='text-[22px] text-white text-center'>Battle for Innovation</h1>
            <p className='text-[15px] text-[white] text-center'>TechWar is a dynamic clash between tech giants, startups.</p>
          </div>
          <div>

          </div>
        </div>
        <div className='h-[70vh] relative'>
          <img className='h-[95%] w-[80%] ms-[10%] mt-[6%] rounded-[10px]' src="https://i.pinimg.com/474x/0c/c1/c7/0cc1c7bfe0651748bcc861d32505dd6a.jpg" alt="Slide 2" />
          <div className=' w-[70%] h-[100px] absolute top-[70%] left-[15%] rounded-[10px] z-10 bg-[#0000007a] flex flex-col justify-center items-center'>
            <h1 className='text-[22px] text-white text-center'>Innovation Unleashed</h1>
            <p className='text-[15px] text-[white] text-center'>TechWar is a dynamic clash between tech giants, startups.</p>
          </div>
        </div>
        <div className='h-[70vh] relative'>
          <img className='h-[95%] w-[80%] ms-[10%] mt-[6%] rounded-[10px]' src="https://i.pinimg.com/474x/28/89/9c/28899c338a254960602c75faad39b07f.jpg" alt="Slide 3" />
          <div className=' w-[70%] h-[100px] absolute top-[70%] left-[15%] rounded-[10px] z-10 bg-[#0000007a] flex flex-col justify-center items-center'>
            <h1 className='text-[22px] text-white text-center'>Tech Showdown</h1>
            <p className='text-[15px] text-[white] text-center'>TechWar is a dynamic clash between tech giants, startups.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
