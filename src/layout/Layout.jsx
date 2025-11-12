import React from "react";
import { Home } from "../Pages/Home";
import OurStory from "../Pages/OurStory";
import WineShop from "../Pages/Wineshop";
import HeroRotatingText from "../components/HeroRotatingText";
import OurHistory from "../Pages/OurHistory";
import WineClub from "../Pages/WineClub";

const Layout = () => {
  return (
    <div >
      <HeroRotatingText />
      <WineShop />
      <OurStory />
      <OurHistory />
      <WineClub/>
    </div>
  );
};

export default Layout;
