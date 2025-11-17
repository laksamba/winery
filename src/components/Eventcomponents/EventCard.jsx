import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/Clubwine.jpeg";
import { ChevronRight, Link2, LinkIcon } from "lucide-react";

const EventCard = () => {
  const blogData = [
    {
      heading: "Discover the Finest Wines",
      date: "2025-02-10",
      description:
        "Explore our exclusive collection of handcrafted wines sourced from the best vineyards around the world.",
      photo: image,
      readMore: "/blog/discover-fine-wines",
    },
    {
      heading: "Wine Club Annual Meetup",
      date: "2025-01-28",
      description:
        "Join our annual meetup to connect with wine enthusiasts,Explore our exclusive collection of handcrafted wines sourced from the best Explore our exclusive collection of handcrafted wines sourced from the best Explore our exclusive collection of handcrafted wines sourced from the best  taste rare blends, and learn from sommeliers.",
      photo: image,
      readMore: "/blog/wine-club-meetup",
    },
    {
      heading: "How to Store Your Wine Properly",
      date: "2025-01-10",
      description:
        "Proper wine storage can elevate taste and longevity. Learn the top storage practices every wine lover should know.",
      photo: "/assets/images/storage.jpg",
      readMore: "/blog/wine-storage-guide",
    },
    {
      heading: "Latest Trends in Winemaking",
      date: "2024-12-22",
      description:
        "The wine industry is evolving fast. Here are the latest innovations shaping the world of winemaking.",
      photo: "/assets/images/trends.jpg",
      readMore: "/blog/winemaking-trends",
    },
  ];

  return (
    <div className="space-y-5 p-6 rounded-xl  ">
      {blogData.map((items, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 p-8  bg-white"
        >
          {/* Image Section */}
          <div className="relative w-full md:w-1/7 group">
           
            <img
              src={items.photo}
              loading="lazy"
              alt="Winery"
              className="w-full object-cover rounded-lg transition duration-300 group-hover:brightness-50"
            />

            <LinkIcon
              className="w-10 h-10 p-2 text-white bg-[#4c1d29] rounded-sm 
               absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               opacity-0 group-hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Content Section */}
          <div className=" w-full md:w-2/3 text-[#4c1d29]">
            <h1 className="text-3xl font-[playball] font-medium mb-2">
              {items.heading}
            </h1>

            <span className="text-sm opacity-80 block my-3">{items.date}</span>

            <p className="text-base line-clamp-2 text-gray-600 font-[playfair] leading-relaxed my-4">
              {items.description}
            </p>

            <Link
              to={items.readMore}
              className="inline-flex items-center gap-1 
             bg-[#4c1d29] text-white font-[playfair] 
             text-xs px-3 py-3 rounded-sm hover:opacity-80"
            >
              <ChevronRight className="w-3 h-3" />
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
