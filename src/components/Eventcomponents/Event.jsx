import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/Images/ClubWine.jpeg";
import { Book } from "lucide-react";

const Event = () => {
  return (
    <div>
      {/* headings */}
      <div className="flex flex-col justify-center items-center ">
        <div className=" text-center my-9 ">
          <h2 className="md:text-[6rem] text-[3.5rem] font-[Playfair]  text-gray-300 tracking-widest mb-0 leading-none opacity-70">
            EVENTS
          </h2>

          <h3 className="md:text-5xl text-3xl font-bold text-[#4c1d29] md:-mt-18 -mt-12 mb-8 relative">
            <div className="flex justify-center items-center">
              <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
              <span className="bg-transparent px-2 relative  font-[playball]">
                Our Events
              </span>
              <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
            </div>
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <p className="line-clamp-3 w-full text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            minimasunt molestiae exercitationem <br />
            in nisi perferendis hic quo modi assumenda error reiciendis
            obcaecatiearum officiis iusto! <br />
            cumque, consequuntur possimus incidunt sunt molestiae exercitationem
            earum officiis iusto!
          </p>
        </div>
      </div>

      {/* next one  */}

      <div className="max-w-7xl  mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 ">

          <div className="text-center order-2 lg:text-left p-15 bg-gray-100">
            <h2 className="md:text-5xl text-4xl  sm:text-5xl lg:text-7xl font-bold font-[Playfair] text-gray-300 tracking-widest opacity-70 leading-none">
              Our Events
            </h2>

            <h3 className="relative text-3xl sm:text-3xl lg:text-4xl font-bold text-[#4c1d29] -mt-10 lg:-mt-14 mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-6">
                {/* <hr className="w-16 lg:w-20 border-2 border-[#4c1d29]/50" /> */}
                <span className="font-[playball] italic text-3xl md:text-4xl lg:text-5xl tracking-wide">
                  Wine Tasting
                </span>
                <hr className="hidden lg:block w-20 border-2 border-[#4c1d29]/50" />
              </div>
            </h3>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Experience the finest wines from around the world, curated by our
              sommeliers. Limited allocations, private tastings, and
              unforgettable vineyard journeys await.
            </p>

           <div className="flex gap-6 my-8">
              {['06 Days', '20 Hours', '27 Minutes', '0 Second'].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="md:w-20 md:h-20 w-14 h-14  bg-white  rounded-full flex flex-col gap-0 items-center justify-center shadow-md border-2 border-[#4c1d29]/60">
                    <span className="md:text-2xl text-sm font-bold font-[Playfair] text-[#4c1d29]">
                      {item.split(' ')[0]}
                    </span>
                    <p className="text-xs font-[playfair] text-gray-600 ">{item.split(' ')[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                to="/join"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 bg-[#4c1d29] text-white font-bold text-lg rounded-sm hover:bg-[#84293e] transition-all hover:scale-105 shadow-lg"
              >
                <Book size={22} />
                Book Now
              </Link>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2 md:order-2 bg-amber-500">
            <img
              src={image}
              alt="Wine Club Experience"
              loading="lazy"
              className="w-full max-w-full   h-auto object-cover "
            />
          </div>

       

          <div className="flex justify-center order-3 lg:order-3 bg-amber-400">
            <img
              src={image}
              alt="Wine Club Experience"
              loading="lazy"
              className="w-full max-w-full   h-auto object-cover "
            />
          </div>

          <div className="text-center lg:text-left p-15  order-4 lg:order-4 md:order-4 bg-gray-100 ">
            <h2 className="md:text-5xl text-4xl font-[Playfair] sm:text-5xl lg:text-7xl font-bold text-gray-300 tracking-widest opacity-70 leading-none">
              Cermoney
            </h2>

            <h3 className="relative text-3xl sm:text-3xl lg:text-4xl font-bold text-[#4c1d29] -mt-10 lg:-mt-14 mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-6">
                {/* <hr className="w-16 lg:w-20 border-2 border-[#4c1d29]/50" /> */}
                <span className="font-[playball] italic md:text-4xl text-3xl lg:text-5xl tracking-wide">
                  Wedding
                </span>
                <hr className="hidden lg:block w-20 border-2 border-[#4c1d29]/50" />
              </div>
            </h3>


            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Experience the finest wines from around the world, curated by our
              sommeliers. Limited allocations, private tastings, and
              unforgettable vineyard journeys await.
            </p>

           <div className="flex gap-6 my-8">
              {['06 Days', '20 Hours', '27 Minutes', '0 Second'].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="md:w-20 md:h-20 w-14 h-14   bg-white  rounded-full flex flex-col gap-0 items-center justify-center shadow-md border-2 border-[#4c1d29]/60">
                    <span className="md:text-2xl text-sm font-bold font-[Playfair] text-[#4c1d29]">
                      {item.split(' ')[0]}
                    </span>
                    <p className="text-xs font-[playfair] text-gray-600 ">{item.split(' ')[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                to="/join"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 bg-[#4c1d29] text-white font-bold text-lg rounded-sm hover:bg-[#84293e] transition-all hover:scale-105 shadow-lg"
              >
                <Book size={22} />
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
