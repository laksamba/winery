import React from 'react'
import { Home } from '../Pages/Home';
import OurStory from '../Pages/OurStory';
import WineShop from '../Pages/Wineshop';
import OurHistory from '../Pages/OurHistory';

const Layout = () => {
  return (
    <div className='mt-65'> 
      <Home/>
      <OurStory/>
      <WineShop/>
      <OurHistory/>
    </div>
  )
}

export default Layout;