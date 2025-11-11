import React from "react";
import image from "../assets/Images/wineHistory.png";

const OurStory = () => {
  return (
    <div className=" ">
      <div className=" text-center my-9 ">
        <h2 className="md:text-[5rem] text-[3.5rem]  text-gray-300 tracking-[0.2em] mb-0 leading-none opacity-70">
          HISTORY
        </h2>

        <h3 className="md:text-4xl text-3xl font-bold text-[#4c1d29] md:-mt-16 -mt-12 mb-14 relative">
          <div className="flex justify-center items-center">
            <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
            <span className="bg-transparent px-2 relative  font-[playball]">
              Our Story
            </span>
            <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
          </div>
        </h3>
      </div>

      {/*-------------------------- containers  1st-----------------------*/}
      <div className="flex flex-col-reverse md:flex-row items-center relative mt-12 md:mt-24">
        {/* Text Card */}
        <div
          className="flex flex-col justify-center bg-white w-full md:w-1/2 h-auto md:h-80 z-10 p-6 md:p-6 shadow-lg 
                  md:-mr-24 lg:-mr-30 md:ml-16 order-2 md:order-1 text-right"
        >
          <div className="flex items-center justify-end mb-4 gap-1">
            <hr className="border-2 w-8 md:w-10 border-[#4c1d29]/50" />
            <h1 className="text-2xl md:text-4xl text-[#4c1d29] font-bold font-[playball]">
              1976
            </h1>
          </div>

          <p className="text-gray-500 text-sm md:text-xl font-paragraph leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br className="block md:hidden" /> Consequuntur ratione nobis
            officia,
            <br className="hidden md:block" /> maxime molestiae quis qui sunt
            earum mollitia maiores?
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[45%] h-64 md:h-[500px] bg-amber-800 order-1 md:order-2">
          <img
            src={image}
            loading="lazy"
            alt="1976 milestone"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/*------------------------------ container 2nd -----------------------------*/}

      <div className="flex flex-col md:flex-row items-center relative text-left mt-12 md:mt-24">
        {/* Image Section */}
        <div className="w-full md:w-[45%] h-[300px] md:h-[500px] md:ml-16 order-2 md:order-1">
          <img
            src={image}
            loading="lazy"
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center bg-white w-full md:w-[50%] h-auto md:h-80 z-10 -mt-10 md:mt-0 md:-ml-30 p-6 md:p-8 shadow-lg order-1 md:order-2">
          <div className="flex items-center justify-start mb-4 gap-1">
            <h1 className="text-3xl md:text-4xl text-[#4c1d29] font-bold font-[playball]">
              1986
            </h1>
            <hr className="border-2 w-10 border-[#4c1d29]/50" />
          </div>
          <p className="text-gray-500 text-base md:text-xl font-paragraph leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur <br className="hidden md:block" />
            ratione nobis officia, maxime molestiae quis qui{" "}
            <br className="hidden md:block" />
            sunt earum mollitia maiores?
          </p>
        </div>
      </div>

      {/*-------------------------- containers  3rst-----------------------*/}
      <div className="flex flex-col-reverse lg:flex-row items-center relative mt-12 lg:mt-24">
        {/* Text Card */}
        <div className="flex flex-col justify-center bg-white w-full lg:w-1/2 h-auto lg:h-80 z-10 p-6 lg:p-8 shadow-lg lg:-mr-12 xl:-mr-16 order-2 lg:order-1">
          <div className="flex items-center justify-end mb-4 gap-1">
            <hr className="border-2 w-8 lg:w-10 border-[#4c1d29]/50" />
            <h1 className="text-3xl lg:text-4xl text-[#4c1d29] font-bold font-[playball]">
              1996
            </h1>
          </div>
          <p className="text-gray-500 text-base lg:text-xl font-paragraph leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur <br className="hidden lg:block" />
            ratione nobis officia, maxime molestiae quis qui{" "}
            <br className="hidden lg:block" />
            sunt earum mollitia maiores?
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-96 xl:h-[500px] bg-amber-800 order-1 lg:order-2">
          <img
            src={image}
            loading="lazy"
            alt="1976 milestone"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
