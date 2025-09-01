import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);

  return (
    <div className="p-6">
      {/* Sidebar */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Search Filter from Hero Component */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className="font-semibold text-xl mb-5 text-gray-800">Current Search</h3>
            <div className="flex flex-col gap-3">
              {searchFilter.title && (
                <div className="inline-flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-200">
                  <span className="text-blue-700 font-medium">Job Title: {searchFilter.title}</span>
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))}
                    className="cursor-pointer w-5 h-5"
                    src={assets.cross_icon}
                    alt="Remove"
                  />
                </div>
              )}
              {searchFilter.location && (
                <div className="inline-flex items-center justify-between bg-red-50 border border-red-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-200">
                  <span className="text-red-700 font-medium">Location: {searchFilter.location}</span>
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))}
                    className="cursor-pointer w-5 h-5"
                    src={assets.cross_icon}
                    alt="Remove"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobListing;
