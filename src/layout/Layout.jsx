import React from 'react'
import { Home } from '../Pages/Home';
import OurStory from '../Pages/OurStory';
import WineShop from '../Pages/Wineshop';
import HeroRotatingText from "../components/HeroRotatingText";
import OurHistory from '../Pages/OurHistory';

const Layout = () => {
  return (
    <div className='mt-65'> 
      <Home/>
      <OurStory/>
      <WineShop/>
            <HeroRotatingText />
      <OurHistory/>
    </div>
  )
}

export default Layout;