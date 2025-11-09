import React from "react";
import wines from "../components/data/wines"; 

export default function WineShop() {
  return (
    <section className="py-20 bg-white text-center">
      
      <h2 className="text-[5rem] font-[Playball] text-gray-200 tracking-[0.2em] mb-0 leading-none opacity-70">
        SHOP NOW
      </h2>

      <h3 className="text-4xl font-bold text-[#4c1d29] -mt-14 mb-14 relative">
        <span className="bg-transparent px-6 relative z-10 font-[cursive]">Our Wines</span>
        <span className="absolute left-1/2 top-1/2 w-[200px] h-[1px] bg-[#4c1d29] -translate-x-1/2"></span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {wines.map((wine) => (
          <div
            key={wine.id}
            className="bg-[#4c1d29] rounded-lg overflow-hidden relative text-white transition-transform duration-200 hover:scale-[1.02] wine-card border-4 border-[#4c1d29]" >
        
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
                className="h-64 object-contain"
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
        ))}
      </div>
    </section>
  );
}