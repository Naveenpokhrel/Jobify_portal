import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "./Loading";
import Navbar from "../components/Navbar";
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

export const ApplyJob = () => {
  const { id } = useParams();

  const [JobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      const data = jobs.filter((job) => job._id === id);
      if (data.length !== 0) {
        setJobData(data[0]);
        console.log(data[0]);
      }
    };

    if (jobs.length > 0) {
      fetchJob();
    }
    fetchJob();
  }, [id, jobs]);

  return JobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-xl shadow-lg w-full p-6 md:p-10">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between flex-wrap gap-8 px-6 py-10 mb-6 bg-sky-50 border border-sky-200 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 w-24 object-contain bg-white rounded-lg p-4 mr-0 md:mr-4 mb-4 md:mb-0 border shadow-sm"
                src={JobData.companyId.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                  {JobData.title}
                </h1>
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-y-2 gap-6 items-center text-gray-600 mt-3 text-sm md:text-base">
                  <span className="flex items-center gap-2">
                    <img
                      src={assets.suitcase_icon}
                      alt=""
                      className="w-4 h-4"
                    />
                    {JobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src={assets.location_icon}
                      alt=""
                      className="w-4 h-4"
                    />
                    {JobData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.person_icon} alt="" className="w-4 h-4" />
                    {JobData.level}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={assets.money_icon} alt="" className="w-4 h-4" />
                    CTC: {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply & Posted Info */}
            <div className="flex flex-col justify-center text-center md:text-end text-sm">
              <button className="bg-blue-600 px-8 py-3 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Apply Now
              </button>
              <p className="mt-2 text-gray-500 text-xs md:text-sm">
                Posted {moment(JobData.date).fromNow()}
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Left Section - Job Description */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">
                Job description
              </h2>
              <div
                className="rich-text prose max-w-none text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: JobData.description }}
              ></div>
              <button
                onClick={() => showApplicationForm(true)}
                className="bg-blue-600 px-8 py-3 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </div>

            {/* Right Section - More Jobs */}
            <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-10 space-y-5">
              <h2 className="font-semibold text-lg text-gray-700 mb-4">
                More Jobs from {JobData.companyId.name}
              </h2>
              {jobs
                .filter(
                  (job) =>
                    job._id !== JobData._id &&
                    job.companyId._id === JobData.companyId._id
                )
                .slice(0, 4)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};
