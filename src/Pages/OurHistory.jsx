import React from "react";
import image from "../assets/Images/Grapes.jpg";
import { Link } from "react-router-dom";

const OurHistory = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%] ">
        {/* headings */}
        <div className=" text-center my-9 ">
          <h2 className="text-[6rem]  text-gray-300 tracking-[0.1rem] mb-0 leading-none opacity-70">
            ABOUT US
          </h2>

          <h3 className="text-4xl font-bold text-[#4c1d29] -mt-16 mb-14 relative">
            <div className="flex justify-center items-center">
              <hr className="border-2 w-14 border-[#4c1d29]/50" />
              <span className="bg-transparent px-2 relative  playball ">
                Our History
              </span>
              <hr className="border-2 w-14 border-[#4c1d29]/50" />
            </div>
          </h3>
        </div>

        {/* content  */}
        <div className="flex flex-col justify-center items-center gap-12">
          <p className="text-2xl text-gray-600 text-center p-3 font-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            tempora. Lorem ipsum dolor sit amet <br /> consectetur adipisicing
            elit. Possimus quidem perferendis magnam molestiae, <br /> itaque
            incidunt voluptatibus fugiat nisi praesentium animi doloribus!{" "}
            <br /> Consequatur aliquid quod laborum?
          </p>
          <Link className="px-8 py-4 bg-[#4c1d29] text-white font-bold rounded-xl">
            Read More
          </Link>
        </div>
      </div>

      {/* images */}
      <div>
        <img src={image} loading="lazy" alt="image" className="h-96" />
      </div>
    </div>
  );
};

export default OurHistory;
