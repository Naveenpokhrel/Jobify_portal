import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const jobsPerPage = 6;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on change
    }
  };

  return (
    <div className="p-6 lg:flex gap-8 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-1/4 px-6 py-6 rounded-2xl shadow-lg border border-gray-100">
        {/* Search Filter from Hero Component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                Current Search
              </h3>
              <div className="mb-6 flex flex-wrap gap-2">
                {searchFilter.title && (
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
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
                  <div className="inline-flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
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

        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition lg:hidden mb-4 w-full"
        >
          {showFilter ? "Close Filters ✕" : "Show Filters ☰"}
        </button>

        {/* Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-semibold text-lg mb-3 text-gray-800">
            Search by Categories
          </h4>
          <ul className="space-y-3 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-110 accent-blue-600" type="checkbox" />
                <span className="hover:text-blue-600 cursor-pointer transition">
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-semibold text-lg mb-3 text-gray-800 pt-10">
            Search by Location
          </h4>
          <ul className="space-y-3 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-110 accent-blue-600" type="checkbox" />
                <span className="hover:text-blue-600 cursor-pointer transition">
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
          {currentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {jobs.length > jobsPerPage && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white border hover:bg-gray-100 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={assets.left_arrow_icon} alt="Previous" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-md border shadow-sm transition ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white border hover:bg-gray-100 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={assets.right_arrow_icon} alt="Next" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
