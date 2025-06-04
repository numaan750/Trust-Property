"use client";

import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import React, { useState, useEffect } from "react";
const testimonials = [
  {
    name: "Jane Smith",
    review:
      "I like doing business with this company. The last 2 employees I dealt with were very helpful. They followed through with my questions. They are very thorough & gave me complete explanations. They are also extremely courteous!",
    source: "5/5 via Trustpilot",
  },
  {
    name: "John Doe",
    review:
      "Absolutely fantastic! They were responsive, clear in their communication, and everything went smoothly.",
    source: "4.9/5 via Yelp",
  },
  {
    name: "Alice Johnson",
    review:
      "They went above and beyond to help me out. Excellent customer service and super friendly staff!",
    source: "5/5 via Google",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    //   }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <div className="flex flex-col items-center md:items-start flex-shrink-0 text-center md:text-left">
            <FaQuoteLeft className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-xl md:text-3xl font-bold text-blue-900 max-w-xs md:max-w-sm">
              What Our Owners And Residents Are Saying About Us
            </h2>
          </div>

          <div className="flex flex-col bg-orange-50 rounded-2xl shadow-md p-4 md:p-6 w-full max-w-md flex-shrink-0">
            <p className="text-gray-700 text-sm md:text-base mb-4">
              {testimonials[currentIndex].review}
            </p>
            <div className="flex flex-col gap-1 mt-auto">
              <p className="font-semibold text-gray-700">
                {testimonials[currentIndex].name}
              </p>
              <div className="flex items-center text-sm text-blue-900 gap-1">
                <FaStar className="text-yellow-400" />
                {testimonials[currentIndex].source}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="py-10 px-4">
        <div className="border-2 border-yellow-500 rounded-md px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-blue-900">
              We Have $500 That Belongs In Your Pocket!
            </h2>
            <p className="text-gray-600 mt-2">
              Refer a great homeowner and get $500 when their lease starts
            </p>
          </div>
          <div>
            <a
              href="tel:5104590964"
              className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-900 transition whitespace-nowrap block text-center"
            >
              CALL NOW (510) 459-0964
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
