import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FaqForm from "../components/FaqComponents/FaqForm";

const Contact = () => {
  return (
    <section className="relative  py-8 overflow-hidden">
      <div className="flex flex-col justify-center items-center ">
        <div className=" text-center my-9 ">
          <h2 className="md:text-[6rem] text-[3.5rem] font-[Playfair]  text-gray-300 tracking-widest mb-0 leading-none opacity-70">
            Find Us
          </h2>

          <h3 className="md:text-5xl text-3xl font-bold text-[#4c1d29] md:-mt-18 -mt-12 mb-8 relative">
            <div className="flex justify-center items-center">
              <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
              <span className="bg-transparent px-2 relative  font-[playball]">
                Contact Us
              </span>
              <hr className="border-2 md:w-14 w-8 border-[#4c1d29]/50" />
            </div>
          </h3>
        </div>
        <div className="text-center">
          <p className="mt-4 text-lg text-[#4c1d29] max-w-2xl mx-auto">
            We'd love to hear from you. Our team is here to help with inquiries,
            wine recommendations, and event bookings.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 md:mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <div className="flex items-center gap-2 mb-8 ">
              <div className="bg-[#4c1d29] w-15 flex justify-center p-3 rounded-sm ">
                <MessageCircle className=" border-2 text-white text-2xl border-white rounded-full p-1" />
              </div>
              <h1 className="text-3xl font-[Playball] text-[#4c1d29] font-bold">
                Contact us
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
                Send
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: "Address",
                details: "123 Vintner’s Lane,\nBirtamode-5, Jhapa",
              },
              { icon: Phone, title: "Phone", details: "+ 977 9857652473" },
              { icon: Mail, title: "Email", details: "info@winelibrary.com" },
              {
                icon: Clock,
                title: "Opening Hours",
                details: "Mon–Sat: 10 AM–8 PM\nSun: 12 PM–6 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#4c1d29] backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <item.icon className="w-7 h-7 text-[#4c1d29]" />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-white whitespace-pre-line text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
