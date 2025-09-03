import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { viewApplicationsPageData } from "../assets/assets.js";

const ViewApplications = () => {
  const { applications, setApplications } = useContext(AppContext);
  const [filter, setFilter] = useState("all");

  // Use context data if available, otherwise fall back to imported data
  const data = applications && applications.length > 0 ? applications : viewApplicationsPageData;

  const filteredData = filter === "all" 
    ? data 
    : data.filter(app => app.jobTitle === filter);

  const handleAccept = (id) => {
    // Update application status to accepted
    setApplications(prev => prev.map(app => 
      app._id === id ? {...app, status: "accepted"} : app
    ));
  };

  const handleReject = (id) => {
    // Update application status to rejected
    setApplications(prev => prev.map(app => 
      app._id === id ? {...app, status: "rejected"} : app
    ));
  };

  // Get unique job titles for filter
  const jobTitles = [...new Set(data.map(app => app.jobTitle))];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">View Applications</h2>
        
        {/* Filter dropdown */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-700 font-medium">Filter by Job:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="all">All Jobs</option>
            {jobTitles.map(title => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700">#</th>
              <th className="px-4 py-3 font-semibold text-gray-700">User name</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Job Title</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Location</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Resume</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((application, index) => (
              <tr key={application._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 flex items-center">
                  <img 
                    src={application.imgSrc} 
                    alt={application.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {application.name}
                </td>
                <td className="px-4 py-3">{application.jobTitle}</td>
                <td className="px-4 py-3">{application.location}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline flex items-center">
                    Resume ↓
                  </button>
                </td>
                <td className="px-4 py-3">
                  {application.status === "accepted" ? (
                    <span className="text-green-600 font-medium">Accepted</span>
                  ) : application.status === "rejected" ? (
                    <span className="text-red-600 font-medium">Rejected</span>
                  ) : (
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleAccept(application._id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      >
                        Accept
                      </button>
                      <button 
                        onClick={() => handleReject(application._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;