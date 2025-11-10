import React from "react";
import image from "../assets/Images/wineHistory.png";

const OurStory = () => {
  return (
    <div className="h-screen ">
      <div className=" text-center my-9 ">
        <h2 className="text-[5rem] font-[Playball] text-gray-300 tracking-[0.2em] mb-0 leading-none opacity-70">
        HISTORY
      </h2>

      <h3 className="text-4xl font-bold text-[#4c1d29] -mt-16 mb-14 relative">
        <div className="flex justify-center items-center">
            <hr  className="border-2 w-14 border-[#4c1d29]/50"/>
            <span className="bg-transparent px-2 relative  font-[cursive]">Our Story</span>
            <hr  className="border-2 w-14 border-[#4c1d29]/50"/>
        </div>
      </h3>
      </div>

      {/* containers */}
      <div className="flex items-center relative text-right mt-24">
      
         <div className=" flex flex-col justify-center bg-white w-[50%] h-80 z-10 -mr-30  p-6 shadow-lg ml-16">
          <div className=" flex items-center justify-end mb-4 gap-1">
           <hr  className="border-2 w-10 border-[#4c1d29]/50"/>
          <h1 className=" text-4xl text-[#4c1d29] font-bold text-right font-[cursive]">1976</h1>
          </div>
          <p className="text-gray-500 mb-8 text-xl font-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Consequuntur <br /> ratione nobis officia, maxime molestiae quis qui <br /> sunt earum mollitia maiores?</p>
        </div>
       
       {/* images section */}
        <div className="w-[45%] bg-amber-800  h-[500px] ">
          <img src={image} alt="image"  className="object-center h-full" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
