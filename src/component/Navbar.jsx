import Image from 'next/image'
import logo from "../../public/logo/logo.png";
import React from 'react'
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  return (
    <>
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
      <div>
        <nav className="bg-white shadow px-4 sm:px-10 py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Image
                src={logo}
                alt="Trust Property Keys"
                className="h-50 w-50"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 text-sm font-semibold mt-4 sm:mt-0 text-center sm:text-left">
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
        </nav>
      </div>
    </>
  );
}

export default Navbar