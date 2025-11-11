import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import wines from "../components/data/wines";

export default function WineShop() {
  return (
    <section className="py-20 bg-white text-center relative">
      <h2 className="md:text-[5rem] text-[3rem] font-[Playball] text-gray-200 tracking-[0.2em] mb-0 leading-none opacity-70">
        SHOP NOW
      </h2>

      <h3 className="md:text-4xl text-2xl font-bold text-[#4c1d29] md:-mt-16 -mt-11 md:mb-14 mb-10 relative">
        <div className="flex justify-center items-center">
          <hr className="border-2 md:w-14 w-9 border-[#4c1d29]/50" />
          <span className="bg-transparent md:px-6 px-3 relative font-[playball]">
            Our Wines
          </span>
          <hr className="border-2 md:w-14 w-9 border-[#4c1d29]/50" />
        </div>
      </h3>

      <div className="max-w-[1200px]  mx-auto"> 
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}   
          slidesPerView={4}
          loop={false}         
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }} className="w-95 md:w-full" >
          {wines.map((wine) => (
            <SwiperSlide key={wine.id} >
              <div
                className="bg-[#4c1d29] rounded-lg overflow-hidden relative text-white border-4 border-[#4c1d29] "
              >
                {wine.sale && (
                  <>
                    <div className="absolute top-2 left-2 bg-[#4c1d29] px-2 py-1 text-xs uppercase rounded">
                      Sale!
                    </div>
                    <div className="absolute top-10 left-2 bg-[#4c1d29] px-2 py-1 text-xs rounded">
                      {wine.discount}
                    </div>
                  </>
                )}

                <div className="bg-white flex justify-center py-6">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="h-60 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="absolute top-4 right-4 bg-white text-[#4c1d29] px-2 py-1 rounded text-sm font-semibold">
                  {wine.originalPrice ? (
                    <>
                      <span className="line-through text-gray-400 mr-1">
                        ${wine.originalPrice}
                      </span>
                      ${wine.price}
                    </>
                  ) : (
                    <>${wine.price}</>
                  )}
                </div>

                <div className="py-6">
                  <h4 className="text-lg font-bold mb-1">{wine.name}</h4>
                  <p className="text-sm opacity-80">{wine.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>
          {`
            .swiper-button-next, .swiper-button-prev {
              width: 30px ;
              height: 30px ;
              background-color: #4c1d29 ;
              color: white ;
              border-radius: 50% ;
              transform: translateY(-50%) ;
            }
            .swiper-button-next::after, .swiper-button-prev::after {
              font-size: 16px ;
            }
          `}
          </style>
      </div>
    </section>
  );
}
