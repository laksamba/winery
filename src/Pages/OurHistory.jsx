import React from "react";
import image from "../assets/Images/Grapes.jpg";
import { Link } from "react-router-dom";

const OurHistory = () => {
  return (
   <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 py-12 lg:py-0 gap-8 lg:gap-0">
  {/* Text Content */}
  <div className="w-full lg:w-[60%] text-center">
    {/* headings */}
    <div className="my-6 lg:my-9">
      <h2 className="text-[3.5rem] sm:text-6xl font-[Playfair] lg:text-[6rem] text-gray-300 tracking-[0.1rem] mb-0 leading-none opacity-70">
        ABOUT US
      </h2>

      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4c1d29] -mt-12 sm:-mt-12 lg:-mt-18 mb-10 lg:mb-14 relative">
        <div className="flex justify-center items-center">
          <hr className="border-2 w-10 sm:w-14 border-[#4c1d29]/50" />
          <span className="bg-transparent px-2 relative playball">
            Our History
          </span>
          <hr className="border-2 w-10 sm:w-14 border-[#4c1d29]/50" />
        </div>
      </h3>
    </div>

    {/* content */}
    <div className="flex flex-col justify-center items-center gap-8 lg:gap-8">
      <p className="text-lg sm:text-xl lg:text-xl text-gray-600 text-center p-3 font-paragraph leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,magnam molestiae
         <br className="hidden sm:block" />
        consectetur adipisicing elit. Possimus quidem perferendis magnam molestiae, <br className="hidden sm:block" />
        itaque incidunt voluptatibus fugiat nisi praesentium animi doloribus! <br className="hidden sm:block" />
        
      </p>
      <Link className="px-6 sm:px-8 py-3 sm:py-4 bg-[#4c1d29] text-white font-bold rounded-xl text-sm sm:text-base">
        Read More
      </Link>
    </div>
  </div>

  {/* images */}
  <div className="w-full lg:w-auto flex justify-center lg:justify-start">
    <img
      src={image}
      loading="lazy"
      alt="image"
      className="h-64 sm:h-80 lg:h-96 w-auto max-w-full object-contain"
    />
  </div>
</div>
  );
};

export default OurHistory;
