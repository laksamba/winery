import React from "react";
import { Home } from "../Pages/Home";
import WineShop from "../Pages/Wineshop";
import HeroRotatingText from "../components/HeroRotatingText";
import WineClub from "../Pages/WineClub";
import OurWine from "../Pages/OurWine";

const Layout = () => {
  return (
    <div >
      <HeroRotatingText />
      <WineShop />
      <WineClub/>
      <OurWine/>
    </div>
  );
};

export default Layout;
