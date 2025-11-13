import React from 'react'
import image from '../assets/Images/Bottles.png'

const OurWine = () => {
  return (
    <div className='max-h-screen'>
         <div className=" text-center my-9 ">
        <h2 className="md:text-[6rem] text-[3.5rem] font-[Playfair]  text-gray-300  mb-0 leading-none opacity-70">
          Our Products
        </h2>

        <h3 className="md:text-5xl text-3xl font-bold text-[#4c1d29] md:-mt-18 -mt-12 md:mb-14 relative">
          <div className="flex justify-center items-center">
            <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
            <span className="bg-transparent px-2 relative  font-[playball]">
              Our Wines
            </span>
            <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
          </div>
        </h3>
      </div>
      {/* image  */}
      <div className='flex  justify-center'>
        <img src={image} alt="Winery" loading="lazy"  className='w-[80%]' />
      </div>

    </div>
  )
}

export default OurWine