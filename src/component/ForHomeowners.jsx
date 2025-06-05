import Image from "next/image";
import React from "react";
import assets from "../../src/assets/images/banner3.webp";

const ForHomeowners = () => {
  return (
    <>
      <div className="text-center max-w-xl mx-auto px-4 sm:px-8 py-4">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
          For Homeowners
        </h1>
        <p className="text-sm sm:text-base text-blue-900">
          Secure rent and additional benefits, whether you prefer hands-on
          management or entrusting us with the keys.
        </p>
      </div>
      <div className="relative  ">
        <div className="z-0"></div>

        <svg
          className="absolute top-0 left-0 right-0 z-10"
          viewBox="0 0 283.5 23.3"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7 s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7 c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
          />
        </svg>

        <div className=" bg-yellow-600 h-[895px] ">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-50 mx-auto flex flex-col-reverse md:flex-row items-center justify-between xl:py-40 md:py-40 sm:py-20 py-10 gap-6 sm:gap-8 z-20">
            <div className="space-y-4 max-w-lg w-full h-50">
              <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg border-l-4 border-blue-900">
                <h2 className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl">
                  FOR SELF MANAGERS
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  Rental home leasing & financial protection, for those that
                  like to manage things themselves.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg border-l-4 border-blue-900">
                <h2 className="text-gray-700 font-bold text-lg sm:text-xl md:text-2xl">
                  TrustProperty does eviction coverage
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  Enhance Your Revenue Stream with TrustProperty Localized
                  Property Management Solutions.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:5104590964"
                  className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm md:text-base"
                >
                  (510) 459-0964
                </a>
                <a
                  href="mailto:INFO@TRUSTPROPERTY.COM"
                  className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm md:text-base"
                >
                  INFO@TRUSTPROPERTY.COM
                </a>
              </div>
            </div>

            <div className="flex justify-center mb-8 md:mb-0 w-full md:w-auto">
              <Image
                src={assets}
                alt="Man holding a house"
                width={700}
                height={700}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 right-0 z-10"
          viewBox="0 0 283.5 23.5"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            fill="#ffffff"
            d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7 s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7 c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
          />
        </svg>
      </div>
    </>
  );
};

export default ForHomeowners;
