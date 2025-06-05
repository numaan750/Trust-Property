import Image from "next/image";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../../public/logo/logo.png";
import assets from "../../src/assets/images/banner1.jpg";
import Aboout from "@/component/Aboout";
import ForHomeowners from "@/component/ForHomeowners";
import ForResidents from "@/component/ForResidents";
import Testimonials from "@/component/testimonials";
import Questions from "@/component/Questions";
import Contectus from "@/component/Contectus";
import Footer from "@/component/footer";
import Link from "next/link";
import Navbar from "@/component/Navbar";

const Page = () => {
  return (
    <>
      {/* <div className="bg-[#0b2a46] text-white text-sm px-4 sm:px-20">
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
      </div> */}
      {/* <Navbar /> */}
      <main className="relative w-full h-screen flex items-center justify-center text-white">
        <Image
          src={assets}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="absolute inset-0 bg-opacity-50 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-7xl font-bold mb-4">
            Hassle-Free Living
          </h1>
          <h2 className="text-lg sm:text-2xl mb-6">
            Say goodbye to landlord stress. We’re making rentals simple for
            homeowners and residents.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
              FOR HOMEOWNERS
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
              FOR RENTERS
            </button>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto -mt-10 sm:-mt-20 z-20 px-4">
        <div className="bg-white shadow-md rounded-2xl flex flex-col md:flex-row justify-between items-center text-center overflow-hidden">
          <div className="flex-1 py-8">
            <h3 className="text-5xl font-bold text-gray-500">20</h3>
            <p className="text-gray-600">Trusted Homeowners</p>
          </div>

          <div className="hidden md:block border-l border-gray-200 h-16"></div>

          <div className="flex-1 py-8">
            <h3 className="text-5xl font-bold text-gray-500">30 +</h3>
            <p className="text-gray-600">Trusted Residents</p>
          </div>

          <div className="hidden md:block border-l border-gray-200 h-16"></div>

          <div className="flex-1 py-8">
            <h3 className="text-5xl font-bold text-gray-500">4.7</h3>
            <p className="text-gray-600">Google</p>
          </div>

          <div className="hidden md:block border-l border-gray-200 h-16"></div>

          <div className="flex-1 py-8">
            <h3 className="text-5xl font-bold text-gray-500">4.9 +</h3>
            <p className="text-gray-600">Thumbtack</p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-3 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white font-semibold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              Get a TrustProperty offer
            </h3>
            <p className="text-gray-500">
              Receive a no-obligation property valuation within 24 hours, backed
              by data-driven analysis.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white font-semibold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              Sign the agreement
            </h3>
            <p className="text-gray-500">
              Digital signatures and a transparent contract process for peace of
              mind and security.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white font-semibold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              Get rent-ready
            </h3>
            <p className="text-gray-500">
              Comprehensive preparation services to make your property a top
              choice for tenants.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white font-semibold mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              Receive monthly payments
            </h3>
            <p className="text-gray-500">
              Enjoy hassle-free, on-time payments each month directly deposited
              into your account.
            </p>
          </div>
        </div>
      </section>

      <Aboout />
      <ForHomeowners />
      <ForResidents />
      <Testimonials />
      <Questions />
      <Contectus />
      <Footer />
    </>
  );
};

export default Page;
