"use client";
import Image from "next/image";
import logo from "../../public/logo/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0b2a46] text-white text-sm px-4 sm:px-35">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between  items-center py-2 gap-2 sm:gap-0">
          <div className="hidden sm:flex flex-col sm:flex-row gap-2 sm:gap-6 items-center font-medium">
            <div className="flex gap-2 items-center group hover:text-yellow-400 transition-colors cursor-pointer">
              <IoCallOutline className="text-base" />
              <span> (510)459-0964 </span>
            </div>
            <div className="flex gap-2 items-center group hover:text-yellow-400 transition-colors cursor-pointer">
              <MdEmail className="text-base" />
              <span> info@trustpropertykeys.com </span>
            </div>
          </div>
          <div
            className="
  flex 
  justify-center 
  items-center 
  px-4 sm:px-8 md:px-12 lg:px-18 
  font-medium 
  group 
  hover:text-yellow-400 
  transition-colors 
  cursor-pointer 
  md:ml-auto md:mr-4
"
          >
            <span> DRE LICENSE 01194202 </span>
          </div>
        </div>
      </div>

      <div>
        <nav className="bg-white shadow px-4 sm:px-37 py-4 relative">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start">
              <Image
                src={logo}
                alt="Trust Property Keys"
                className="h-28 w-33"
              />
            </div>

            <div className="sm:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6 text-black" />
              </button>
            </div>

            <div className="hidden sm:flex flex-row gap-4 sm:gap-7 text-sm font-semibold mt-4 sm:mt-0 text-center px-20 sm:text-left">
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                HOW IT WORKS
              </Link>
              <Link
                href="/homeowner"
                className="hover:text-yellow-400 transition-colors"
              >
                FOR HOMEOWNERS
              </Link>
              <Link
                href="/resident"
                className="hover:text-yellow-400 transition-colors"
              >
                FOR RESIDENTS
              </Link>
              <Link
                href="/contect"
                className="hover:text-yellow-400 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-none transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`fixed inset-y-0 right-0 z-50 w-4/5 bg-white h-full p-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <Image
                src={logo}
                alt="Trust Property Keys"
                className="h-30 w-33"
              />
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-4 text-sm font-semibold text-left">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                HOW IT WORKS
              </Link>
              <Link
                href="/homeowner"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                FOR HOMEOWNERS
              </Link>
              <Link
                href="/resident"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                FOR RESIDENTS
              </Link>
              <Link
                href="/contect"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
