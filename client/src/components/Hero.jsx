import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  }

  return (
    <div className="container 2xl:px-20 mx-auto my-12">
      {/* Gradient Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-950 text-white mx-2 rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-snug">
          Over <span className="text-yellow-300">10,000+</span> Jobs to Apply
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-sm md:text-base font-light opacity-90">
          Your Next Big Career Move Starts Right Here – Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-full text-gray-700 max-w-2xl mx-auto shadow-md overflow-hidden">
          <div className="flex items-center flex-1 px-4 py-2">
            <img
              className="h-5 mr-2 opacity-70"
              src={assets.search_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="Search for jobs"
              className="text-sm p-2 outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center flex-1 px-4 py-2 border-t sm:border-t-0 sm:border-l border-gray-200">
            <img
              className="h-5 mr-2 opacity-70"
              src={assets.location_icon}
              alt=""
            />
            <input
              type="text"
              placeholder="Location"
              className="text-sm p-2 outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full text-white font-medium m-2"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border border-gray-200 shadow-lg mx-2 mt-8 p-6 rounded-xl bg-white">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          <p className="font-semibold text-gray-700 text-lg">Trusted By</p>
          <img
            className="h-7 grayscale hover:grayscale-0 transition"
            src={assets.microsoft_logo}
            alt="Microsoft"
          />
          <img
            className="h-7 grayscale hover:grayscale-0 transition"
            src={assets.walmart_logo}
            alt="Walmart"
          />
          <img
            className="h-7 grayscale hover:grayscale-0 transition"
            src={assets.accenture_logo}
            alt="Accenture"
          />
          <img
            className="h-7 grayscale hover:grayscale-0 transition"
            src={assets.samsung_logo}
            alt="Samsung"
          />
          <img
            className="h-7 grayscale hover:grayscale-0 transition"
            src={assets.amazon_logo}
            alt="Amazon"
          />
          <img
            className="h-7 grayscale hover:grayscale-0 transition"
            src={assets.adobe_logo}
            alt="Adobe"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
