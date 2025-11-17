import { MessageCircle } from "lucide-react";
import image  from '../../assets/Images/ClubWine.jpeg'
import React from "react";

const FaqForm = () => {
  return (
    <aside className="w-sm p-5">
      <div className="bg-cover mb-12" style={{backgroundImage:`url(${image})`}}>
        <div className="h-96 text-white bg-[#4c1d29]/80 flex flex-col justify-center  text-center p-4 gap-8 " >
        <h1 className="text-4xl font-[Playball]">Do you have any Questions?</h1>
        <p className="font-[Playfair]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          cum amet, omnis dolor obcaecati qui, fugit ea itaque quam odit eveniet
          distinctio excepturi, repellat ad?
        </p>
      </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-8 ">
          <div className="bg-[#4c1d29] w-15 flex justify-center p-3 rounded-sm ">
            <MessageCircle className=" border-2 text-white text-2xl border-white rounded-full p-1" />
          </div>
          <h1 className="text-3xl font-[Playball] text-[#4c1d29] font-bold">
            Ask Us
          </h1>
        </div>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your Name (*)"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c1d29]"
          />

          <input
            type="email"
            placeholder="Your Email (*)"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c1d29]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c1d29]"
          />

         
          <select
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c1d29]"
            defaultValue=""
          >
            <option value="" disabled>
              Select Department (*)
            </option>
            <option value="support">Customer Support</option>
            <option value="hr">Human Resources</option>
            <option value="technical">Technical</option>
            <option value="other">Other</option>
          </select>

          <textarea
            placeholder="Your Question"
            rows={5}
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c1d29]"
          />
          <button className="bg-[#4c1d29] font-[Playfair] text-white w-15 flex justify-center p-3 rounded-sm ">
             Ask
          </button>
        </form>
      </div>
    </aside>
  );
};

export default FaqForm;
