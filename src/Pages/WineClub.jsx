import React from "react";
import image  from '../assets/Images/ClubWine.jpeg'
import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaWineGlass,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WineClub = () => {
  return (
    <div className="flex flex-col-reverse  lg:flex-row  items-center  min-h-screen lg:py-0 gap-8 lg:gap-0 ">
      {/* images */}
      <div className="w-full lg:w-auto flex lg:justify-start">
        <img
          src={image}
          loading="lazy"
          alt="image"
          className=" md:h-160 w-auto max-w-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[60%] text-left flex flex-col justify-center  gap-2 md:pl-15">
        <div className="text-center md:text-left ">
          <h2 className="text-[3.5rem] sm:text-6xl font-[Playfair] lg:text-[6rem] text-gray-300 tracking-[0.1rem] mb-0 leading-none opacity-70">
            JOIN US
          </h2>

          <h3 className="text-3xl  sm:text-4xl lg:text-5xl font-bold text-[#4c1d29] -mt-12 sm:-mt-12 lg:-mt-18 mb-10 lg:mb-10 relative">
            <div className="flex justify-center  md:justify-start items-center ">
              <hr className="md:hidden border-2 w-10 sm:w-14 border-[#4c1d29]/50" />
              <span className="bg-transparent px-2 relative playball">
                Our Wine Club
              </span>
              <hr className="border-2 w-10 sm:w-14 border-[#4c1d29]/50" />
            </div>
          </h3>
        </div>

        {/* content */}
        <div className="flex flex-col  gap-8 lg:gap-8 text-center md:text-left">
          <p className="text-lg sm:text-xl lg:text-xl text-gray-600   font-paragraph leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br className="hidden sm:block" />
            consectetur adipisicing elit. Possimus quidem perferendis magnam
            molestiae, <br className="hidden sm:block" />
            itaque incidunt voluptatibus fugiat nisi praesentium animi
            doloribus! <br className="hidden sm:block" />
          </p>
        </div>

        {/* icons */}
        <div className="flex justify-center md:justify-start gap-4 my-6">
          <div className=" border-2 border-[#4c1d29] p-3 rounded-full animate-bounce [animation-delay:0s]">
            <FaFacebook size={20} className="text-[#4c1d29]" />
          </div>
          <div className=" border-2 border-[#4c1d29] p-3 rounded-full animate-bounce [animation-delay:0.2s]">
            <FaTwitter size={20} className="text-[#4c1d29]" />
          </div>
          <div className=" border-2 border-[#4c1d29] p-3 rounded-full animate-bounce [animation-delay:0.4s]">
            <FaInstagram size={20} className="text-[#4c1d29]" />
          </div>
          <div className=" border-2 border-[#4c1d29] p-3 rounded-full animate-bounce [animation-delay:0.6s]">
            <FaSkype size={20} className="text-[#4c1d29]" />
          </div>
        </div>

        {/* button */}
        <div className="md:relative mx-auto md:mx-0 pb-5 ">
          <Link className="flex gap-2 font-[Plaifair] md:absolute   items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#4c1d29] text-white font-bold rounded-sm text-sm sm:text-base hover:bg-[#84293e]  transition-all  hover:scale-110">
            
            <FaWineGlass /> JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WineClub;
