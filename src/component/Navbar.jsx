import Image from "next/image";
import logo from "../../public/logo/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Menu, X } from "lucide-react"; // Adding Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0b2a46] text-white text-sm px-4 sm:px-20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center font-medium">
            <div className="flex gap-2 items-center group hover:text-yellow-400 transition-colors cursor-pointer">
              <IoCallOutline className="text-base" />
              <span> (510)459-0964 </span>
            </div>
            <div className="flex gap-2 items-center group hover:text-yellow-400 transition-colors cursor-pointer">
              <MdEmail className="text-base" />
              <span> info@trustpropertykeys.com </span>
            </div>
          </div>
          <div className="mt-2 sm:mt-0 group hover:text-yellow-400 transition-colors cursor-pointer">
            <span> DRE LICENSE 01194202 </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div>
        <nav className="bg-white shadow px-4 sm:px-10 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Trust Property Keys"
                className="h-12 w-12"
              />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden sm:flex flex-row gap-7 text-sm font-semibold">
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

          {/* Mobile Links: Slide down when isOpen is true */}
          {isOpen && (
            <div className="sm:hidden flex flex-col gap-4 mt-4 text-sm font-semibold text-center">
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
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;