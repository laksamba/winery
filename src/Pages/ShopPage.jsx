import React, { useState } from "react";
import {
  Search,
  Filter,
  Heart,
} from "lucide-react";
import { Products } from "../components/data/product";
import ProductCard from "../components/shopcomponents/ProductCard";
console.log("products", Products);

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedWine, setSelectedWine] = useState(null); 

  const filteredWines = Products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || product.type === filterType;
    return matchesSearch && matchesFilter;
  });

  
  const closeModal = () => setSelectedWine(null);

  return (
    <>
      <section className="relative min-h-screen py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-[Playfair] text-[#4c1d29] tracking-wider">
              THE WINE COLLECTION
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
            <div className="relative w-full md:w-96">
              <Search className="absolute z-10 left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="Search wines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-[#4c1d29] backdrop-blur-sm rounded-full border-2 border-[#4c1d29] focus:border-[#4c1d29] focus:outline-none transition-all placeholder:text-[#ffffff] text-[#ffffff]"
              />
            </div>

            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-[#4c1d29]" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-8 py-4 bg-[#4c1d29] font-[playfair] backdrop-blur-sm rounded-full border border-[#4c1d29] focus:border-[#4c1d29] focus:outline-none text-white font-medium cursor-pointer transition-all"
              >
                <option value="all">All Wines</option>
                <option value="Red Wine">Red</option>
                <option value="White Wine">White</option>
                <option value="Rose Wine">Rosé</option>
              </select>
            </div>
          </div>

          {/* Wine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredWines.map((wine) => (
              <div
                key={wine.id}
                className="group relative bg-white backdrop-blur-sm rounded-3xl border-2 border-[#f1f1f1] overflow-hidden shadow-xl lg:shadow-xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedWine(wine)} 
              >
                {wine.bestseller && (
                  <div className="absolute top-6 right-6 z-10 bg-amber-900 text-amber-50 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    Best Seller
                  </div>
                )}

                <div className="p-10 flex flex-col items-center grow">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="bg-gray-200 hover:scale-120 transition-all duration-300 rounded-xl max-h-96 mb-8 object-cover"
                  />

                  <h3 className="text-2xl font-semibold font-[playfair] text-[#4c1d29] hover:text-[#c46608] mb-2 line-clamp-1">
                    {wine.name}
                  </h3>
                  <h4 className="text-2xl font-semibold font-[playfair] text-[#4c1d29]">
                    {wine.volume ? `${wine.volume}` : ""}
                  </h4>

                  <p className="text-2xl font-[playfair] font-bold text-[#c46608]">
                    Rs {wine.price.toFixed(2)}
                  </p>
                </div>

                <div className="pb-8 flex justify-center gap-4 mt-auto">
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setSelectedWine(wine);
                    }}
                    className="px-8 py-3 bg-transparent font-[playfair] border-2 border-[#4c1d29] text-[#4c1d29] rounded-full hover:bg-[#4c1d29] hover:text-white transition-all font-medium"
                  >
                    View Details
                  </button>
                  <button className="p-3 rounded-full border-2 border-[#4c1d29] text-[#4c1d29] hover:bg-[#4c1d29] hover:text-white transition-all">
                    <Heart className="w-5 h-5 transition-colors" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <p className="text-[#4c1d29] text-sm mb-8">
              Curated with Passion • Delivered with Care
            </p>
          </div>
        </div>

        {/* ==================== DETAIL MODAL ==================== */}
        {selectedWine && (
          <ProductCard wine={selectedWine} onClose={closeModal} />

        )}
      </section>
    </>
  );
}
