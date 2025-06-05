"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const faqItems = [
  {
    question: "What services are included?",
    answer:
      "Trust Property Keys offers a one-stop-shop for all your home management needs including: • Preparing your home for future residents by conducting an inspection and addressing maintenance and repairs. • Marketing and showcasing your home with professional photography, virtual walkthroughs, open houses, and full-service tours. What sets us apart is that we offer these tours at no extra cost to homeowners. This flexibility ensures that we reach a wider pool of potential residents, making the process efficient and hassle-free. • Distributing the listing on multiple websites including Zillow, Apartments.com, Craigslist, Trulia, Zumper and Hotpads. Additionally, we list the home in its best light on our website that receives thousands of visitors a month - a true competitive advantage. • Screening and placing residents through our thorough vetting and background check process. • Managing the resident relationship, including rent collection, home visits, and fostering community connections. - you will not need to worry about dealing with Residents directly. Our Member Service Team will ensure both you and your Resident have everything needed. • Providing long-term care and handling maintenance, including 24/7 emergency service.",
  },
  {
    question: "How fast do I get paid?",
    answer:
      "The moment you become a Trust Property Homeowner, we get right to work. We'll send an inspector to your home, and put a plan in place. We'll provide you with a full inspection report and market pricing analysis, to ensure your home gets loved ASAP.",
  },
  {
    question: "When can I see the home?",
    answer:
      "Our mission is to find someone who will love your home as much as you do, so we don’t cut corners. Trust Property resident vetting process is thorough and designed to provide homeowners with peace of mind. We conduct comprehensive background and credit checks, employment verification, reference checks, and personal interviews with our highly-trained resident specialists to ensure the reliability and financial stability of potential residents. Our approach is backed by advanced screening technology, allowing us to carefully select residents who are a great fit for your property. This sets us apart from competitors by prioritizing the safety and security of your investment.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0); // default pehla open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Frequently Asked Questions
      </h1>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className="mb-4 border rounded overflow-hidden transition-all duration-300"
        >
          <button
            className="w-full bg-gray-800 text-white text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <RiArrowDropDownLine
              className={`w-6 h-6 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-[1000px] py-3 opacity-100"
                : "max-h-0 py-0 opacity-0"
            }`}
          >
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
