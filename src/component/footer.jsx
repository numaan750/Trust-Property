import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import assets from "../../src/assets/images/banner5.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 border-t border-gray-200 text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image src={assets} alt="Trust Property" className="w-30" />
          <div className="flex space-x-4 text-gray-600 text-lg">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaGoogle className="hover:text-yellow-500 cursor-pointer transition-colors" />
            <FaLinkedin className="hover:text-yellow-500 cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Who We Are</h4>
            <ul className="space-y-1 text-gray-600 hover:text-gray-800 transition-colors">
              <li>How It Works</li>
              <li>About Us</li>
              <li>For Homeowners</li>
              <li>For Residents</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
            <ul className="space-y-1 text-gray-600 hover:text-gray-800 transition-colors">
              <li>Testimonials</li>
              <li>Help and FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <ul className="space-y-1 text-gray-600">
              <li className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
                <span>(510) 459-0964</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
                <MdEmail />
                <span>info@trustpropertykeys.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12">
        ©2024 Trust Property Keys All Copyright Reserved. Developed by{" "}
        <a
          href="https://www.devsrank.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:underline transition-colors"
        >
          DevsRank
        </a>
      </div>
    </footer>
  );
};

export default Footer;
