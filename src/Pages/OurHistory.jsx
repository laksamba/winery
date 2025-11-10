import React from 'react'
import image from '../assets/Images/Grapes.jpg'
import { Link } from 'react-router-dom'

const OurHistory = () => {

  return (
    <div className='flex'>

        
      <div>
          {/* headings */}
        <div className=" text-center my-9 ">
        <h2 className="text-[5rem] font-[Playball] text-gray-300 tracking-[0.2em] mb-0 leading-none opacity-70">
        ABOUT US
      </h2>

      <h3 className="text-4xl font-bold text-[#4c1d29] -mt-16 mb-14 relative">
        <div className="flex justify-center items-center">
            <hr  className="border-2 w-14 border-[#4c1d29]/50"/>
            <span className="bg-transparent px-2 relative  font-[cursive]">Our History</span>
            <hr  className="border-2 w-14 border-[#4c1d29]/50"/>
        </div>
      </h3>
      </div>

       {/* content  */}
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem perferendis magnam molestiae, itaque incidunt voluptatibus fugiat nisi praesentium animi doloribus! Consequatur aliquid quod laborum?
        </p>
        <Link>Read More</Link>
      </div>
      </div>

    {/* image  */}
    <div>
        <img src={image} alt="" />
    </div>

      

    </div>
  )
}

export default OurHistory