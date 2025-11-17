import React from "react";
import { X } from "lucide-react";

export default function ProductCard({ wine, onClose }) {
  if (!wine) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full h-auto md:h-screen my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-[#4c1d29] text-white rounded-full hover:bg-[#c46608] transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative bg-gray-100 h-[300px] md:h-full">
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-full object-cover"
            />

            {wine.bestseller && (
              <div className="absolute top-6 left-6 bg-amber-900 text-amber-50 text-sm font-bold px-5 py-2 rounded-full">
                Best Seller
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-6 lg:p-12 flex flex-col overflow-y-auto space-y-6 max-h-screen">
            {/* Title & Volume */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[Playfair] text-[#4c1d29] mb-2">
                {wine.name}
              </h2>
              <p className="text-lg text-[#4c1d29]">{wine.volume}</p>
            </div>

            <h3 className="text-lg text-gray-700">{wine.subtitle}</h3>

            {/* Price & Discount */}
            <div className="flex items-center gap-3">
              <p className="text-2xl md:text-3xl font-bold text-[#c46608]">
                ₹{wine.price.toFixed(2)}
              </p>
              {wine.originalPrice && (
                <p className="text-base md:text-lg line-through text-gray-500">
                  ₹{wine.originalPrice.toFixed(2)}
                </p>
              )}
              {wine.discount && (
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs md:text-sm font-semibold">
                  {wine.discount} OFF
                </span>
              )}
            </div>

            {/* Type Badge */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#4c1d29] text-white rounded-full text-xs md:text-sm font-semibold">
                {wine.type}
              </span>
            </div>

            {/* Rating */}
            <p className="text-base md:text-lg font-semibold text-gray-700">
              Rating: <span className="text-yellow-500">⭐ {wine.rating} / 5</span>
            </p>

            {/* Description */}
            <p classname="text-sm md:text-base text-gray-700 leading-relaxed">
              {wine.description}
            </p>

            {/* Additional Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <p className="font-semibold text-gray-800">Origin</p>
                <p className="text-gray-600">{wine.origin}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Vintage</p>
                <p className="text-gray-600">{wine.wineAge || "NV"}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Bottled</p>
                <p className="text-gray-600">{wine.mfd}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Alcohol</p>
                <p className="text-gray-600">{wine.alcoholPercentage}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Quality</p>
                <p className="text-gray-600">{wine.qualityCategory}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">Grape Variety</p>
                <p className="text-gray-600">{wine.grapeVariety}</p>
              </div>

              <div className="sm:col-span-2">
                <p className="font-semibold text-gray-800">Storage</p>
                <p className="text-gray-600">{wine.storage}</p>
              </div>

              <div className="sm:col-span-2">
                <p className="font-semibold text-gray-800">Serving Temperature</p>
                <p className="text-gray-600">{wine.servingTemp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
