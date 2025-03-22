import React from "react";
import map from "../src/assets/map.jpeg";

const ContactUs = () => {
  return (
    <div className="bg-black py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 text-white">
        <h2 className="text-xl font-bold text-white md:text-4xl text-center italic mb-7">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="border-1 border-white/20 rounded-lg px-4 py-4">
            {/* <h2 className="text-xl font-bold text-white md:text-2xl italic mb-7">
              Location
            </h2> */}
            <img className="rounded-lg h-80 w-full" src={map} alt="" />
          </div>
          <div className="border-1 border-white/20 rounded-lg px-4 py-8">
            <h2 className="text-xl font-bold text-white md:text-2xl italic mb-7">
              Contact Form
            </h2>
            <form className="flex flex-col gap-5">
              <input
                className="w-full bg-[#0f0e0e] border-1 border-white/10 rounded-lg px-4 py-2 outline-none placeholder:text-white/30"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
              />
              <input
                className="w-full bg-[#0f0e0e] border-1 border-white/10 rounded-lg px-4 py-2 outline-none placeholder:text-white/30"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
              <input
                className="w-full bg-[#0f0e0e] border-1 border-white/10 rounded-lg px-4 py-2 outline-none placeholder:text-white/30"
                type="tel"
                name="number"
                id="number"
                placeholder="Enter Number"
              />
              <button
                type="submit"
                className="w-full bg-[#0f0e0e] border-1 border-white/10 rounded-lg px-4 py-2 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
