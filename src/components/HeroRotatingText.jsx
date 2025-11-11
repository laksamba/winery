import React, { useState, useEffect } from "react";

const HeroRotatingText = () => {
  // words to rotate
  const words = ["Lovely", "Beautiful", "Clean", "Pretty"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // change word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
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
            className={`font-[Playball] text-pink-500 text-5xl md:text-6xl transition-all duration-700 ease-in-out`}
            key={words[currentWordIndex]} // triggers animation on change
          >
            {words[currentWordIndex]}
          </span>{" "}
          Wines
        </h2>
      </div>
    </section>
  );
};

export default HeroRotatingText;
