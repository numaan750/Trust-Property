import Image from "next/image";
import React from "react";
import assets from "../../src/assets/images/banner4.webp";

const ForHomeowners = () => {
  return (
    <>
      <div className="text-center max-w-xl mx-auto p-4">
        <h1 className="text-lg md:text-2xl font-bold text-blue-900 mb-2">
          For Residents
        </h1>
        <p className="text-sm md:text-base text-blue-900">
          Enjoy comfortable living and various benefits, whether you prefer a
          hands-on approach or trust us to manage everything.
        </p>
      </div>
      <div className="relative">
        <div className="z-0"></div>

        <svg
          className="absolute top-0 left-0 right-0 z-10"
          viewBox="0 0 283.5 23.3"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5
            c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3
            C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7
            c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6
            c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
          ></path>
        </svg>

        <div className="bg-gray-900 h-[860px]">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-50 mx-auto flex flex-col md:flex-row items-center justify-between xl:py-40 lg:py-40 sm:py-20 py-10 gap-6 sm:gap-8 z-20">
            <div className="flex justify-center mb-6 md:mb-0 w-full md:w-auto">
              <Image
                src={assets}
                alt="Man holding a house"
                width={700}
                height={700}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>

            <div className="space-y-4 h-50 max-w-lg w-full">
              <div className="bg-white shadow-lg p-5 rounded-lg border-l-4 border-blue-900">
                <h2 className="text-gray-700 font-bold text-xl md:text-3xl">
                  CreditFlow
                </h2>
                <p className="text-gray-600 text-base md:text-lg mt-2">
                  Establish credit through effortless and adaptable rent
                  transactions
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-blue-900">
                <h2 className="text-gray-700 font-bold text-xl md:text-3xl">
                  RENT A HOME
                </h2>
                <p className="text-gray-600 text-base md:text-lg mt-2">
                  Easy and straightforward homes for valued residents
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:5104590964"
                  className="bg-yellow-500 text-white px-5 py-3 rounded-full text-base md:text-lg"
                >
                  (510) 459-0964
                </a>
                <a
                  href="mailto:INFO@TRUSTPROPERTY.COM"
                  className="bg-yellow-500 text-white px-5 py-3 rounded-full text-base md:text-lg"
                >
                  INFO@TRUSTPROPERTY.COM
                </a>
              </div>
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
            d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5
            c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3
            C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7
            c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6
            c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default ForHomeowners;
