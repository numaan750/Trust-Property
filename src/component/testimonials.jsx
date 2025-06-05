"use client";

import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jane Smith",
    review:
      "I like doing business with this company. The last 2 employees I dealt with were very helpful. ",
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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out
      setFade(false);

      setTimeout(() => {
        // Change testimonial & fade-in
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true);
      }, 500); // match the transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setFade(true);
    }, 300);
  };

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-55 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start flex-shrink-0 text-center md:text-left md:pl-10">
            <FaQuoteLeft className="text-5xl text-yellow-500 mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 max-w-xs md:max-w-sm">
              What Our Owners And Residents Are Saying About Us
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col bg-orange-50 rounded-2xl shadow-md p-6 md:p-10 w-full max-w-md md:max-w-lg flex-shrink-0">
            {/* Testimonial with fade effect */}
            <div
              className={`transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-gray-700 text-base md:text-lg mb-6">
                {testimonials[currentIndex].review}
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                <p className="font-semibold text-gray-800 text-base md:text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <div className="flex items-center text-sm text-blue-900 gap-1">
                  <FaStar className="text-yellow-400" />
                  {testimonials[currentIndex].source}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="py-12 px-6">
        <div className="border-2 border-yellow-500 rounded-md px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
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
