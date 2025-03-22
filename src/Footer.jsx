import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0e0e] text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <span className="text-green-500">CoderX</span> UI
          </h2>
          <p className="mt-4 text-gray-300 hover:text-white">
            CoderX UI is a cutting-edge software company delivering innovative
            digital solutions. We specialize in web development, UI/UX design,
            and custom software tailored to businesses of all sizes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white">Our Services</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CoderX UI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
