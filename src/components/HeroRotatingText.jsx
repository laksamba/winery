import React, { useState, useEffect } from "react";

const HeroRotatingText = () => {
  // fonts to rotate between
  const fonts = [
    "font-[Playball]",
    "font-[cursive]",
    "font-serif",
    "font-sans",
  ];

  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  // change font every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('src/assets/images/wine.avif')", 
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide">
          We Make{" "}
          <span
            className={`${fonts[currentFontIndex]} text-pink-500 text-5xl md:text-6xl transition-all duration-700 ease-in-out`}
          >
            Lovely
          </span>{" "}
          Wines
        </h2>
      </div>
    </section>
  );
};

export default HeroRotatingText;
