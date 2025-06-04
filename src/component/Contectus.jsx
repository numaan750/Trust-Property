import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contectus = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-start space-y-4 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact <span className="text-yellow-500">& Reach Us!</span>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 rounded-full p-3 text-white">
              <MdEmail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600 hover:text-yellow-500 cursor-pointer">
                info@trustpropertykeys.com
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 rounded-full p-3 text-white">
              <FaPhoneAlt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 ">Phone/ Mobile</h3>
              <p className="text-gray-600 hover:text-yellow-500 cursor-pointer">
                (510) 459-0964
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-yellow-500 text-white rounded-full px-4 py-2 font-semibold hover:bg-blue-900 transition-colors"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contectus;
