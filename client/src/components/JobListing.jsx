import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { JobCategories, JobLocations, jobsData } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);

  return (
    <div className="p-6 lg:flex gap-8 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-1/4 px-6 py-6 rounded-2xl shadow-md">
        {/* Search Filter from Hero Component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                Current Search
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                {searchFilter.title && (
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow">
                    {searchFilter.title}
                    <button
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {searchFilter.location && (
                  <div className="inline-flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium shadow">
                    {searchFilter.location}
                    <button
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

        {/* Category Filter  */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-lg mb-3 text-gray-800">
            Search by Categories
          </h4>
          <ul className="space-y-3 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-110 accent-blue-500" type="checkbox" />
                <span className="hover:text-blue-600 cursor-pointer">
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className="border-t border-gray-200 pt-4 mt-6">
          <h4 className="font-semibold text-lg mb-3 text-gray-800 pt-14">
            Search by Location
          </h4>
          <ul className="space-y-3 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-110 accent-blue-500" type="checkbox" />
                <span className="hover:text-blue-600 cursor-pointer">
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800">
        <h3 className="font-bold text-3xl mb-2 text-blue-700">Latest Jobs</h3>
        <p className="mb-8 text-gray-600">
          Get your desired job from top companies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobsData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobListing;
