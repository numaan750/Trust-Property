import Image from "next/image";
import React from "react";
import assets from "../../src/assets/images/banner2.jpg";

const Aboout = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At Trust Property Keys, we’re making rentals simple for homeowners
            and residents. Our mission is to streamline the rental process,
            providing seamless and efficient solutions for both property owners
            and tenants. We believe that renting should be straightforward and
            stress-free, and we are dedicated to making that a reality for you.
          </p>
        </div>

        <div className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden shadow-md w-full h-64 sm:h-72 md:h-80 lg:h-96">
            <Image
              src={assets}
              alt="About Us Image"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboout;
