import React from "react";
import video from "../assets/banner-video.mp4";

const Hero = () => {
  return (
    <div className="pt-24 bg-black text-white md:pt-32">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8 pt-10 pb-16 relative">
        {/* SubTitle */}
        <div className="mb-6 ">
          <h4 className="text-[#999999] uppercase tracking-[0.2em] text-sm font-medium">
            GROWTH YOUR CAREER WITH{" "}
            <span className="text-green-500">CoderX</span> UI....
          </h4>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-[0.02em]">
          Your Vision, <span className="text-green-500">Our Code</span> –
          Transforming <br /> <span className="text-green-500">Ideas into</span>{" "}
          Reality
        </h1>
        <p className="text-gray-400 mb-6 leading-[1.1] tracking-[0.02em]">
          🚀 Innovative, secure, and scalable software solutions tailored to
          elevate your business. We turn ideas into powerful digital experiences
          with cutting-edge technology and seamless functionality. Let's build
          success together! 💡✨
        </p>

        {/* Main Heading */}
        <div className="mt-16 w-full h-full">
          <video
            src={video}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
