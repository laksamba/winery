import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/Images/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="flex items-center flex-col bg-[#4c1d29] text-white py-8">
      {/* logo */}
      <div className="flex justify-center md:py-4 py-2">
        <img src={logo} loading="lazy" alt="logo" className="md:h-30 h-20" />
      </div>

      {/* paragrap */}
      <div className="text-center text-sm">
        <p>Lorem ipsum dolor sit amet. Lorem, ipsum. Lorem, ipsum.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit, repellendus. Lorem, ipsum dolor.
        </p>
      </div>

      {/* icons */}
      <div className="flex md:gap-4 gap-2 my-6 text-white">
        <div className=" border-2 border-[white] p-1 md:p-3 rounded-full">
          <FaFacebook size={20} />
        </div>
        <div className=" border-2 border-[white] p-1 md:p-3 rounded-full">
          <FaTwitter size={20} />
        </div>
        <div className=" border-2 border-[white] p-1 md:p-3 rounded-full">
          <FaInstagram size={20} />
        </div>
        <div className=" border-2 border-[white] p-1 md:p-3 rounded-full">
          <FaSkype size={20} />
        </div>
        <div className=" border-2 border-[white] p-1 md:p-3 rounded-full">
          <FaLinkedinIn size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
