import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/logo.png";
import banner from '../assets/Images/banner.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    {name:"Blog", path:"/blog"},
    { name: "FAQ", path: "/faq" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className=" shadow-md  bg-cover top-0 left-0 right-0  " style={{backgroundImage:`url(${banner})`}}>
      {/* Logo Section */}
      <div className="flex justify-center md:py-8 py-4">
        <img src={logo} loading="lazy" alt="logo" className="md:h-32 h-20 " />
      </div>

      {/* Navigation Bar */}
      <div className="relative  bg-white md:mx-auto flex justify-end px-4  md:justify-center items-center">
        {/* Desktop Links */}
        <div className="hidden md:flex  gap-0 lg:space-x-10  font-[playfair] ">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`relative  rounded-sm -top-3 text-lg md:text-md  md:tracking-[0.3rem] tracking-wider  transition duration-200 pt-7 pb-2 px-5 ${
                  isActive
                    ? "bg-[#4c1d29] text-white "
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center  space-y-4 py-4">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium   transition duration-200 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
