import React from 'react'
import { Home } from '../Pages/Home';
import OurStory from '../Pages/OurStory';
import WineShop from '../Pages/Wineshop';

const Layout = () => {
  return (
    <div className='mt-65'> 
      <Home/>
      <OurStory/>
      <WineShop/>
    </div>
  )
}

export default Layout;