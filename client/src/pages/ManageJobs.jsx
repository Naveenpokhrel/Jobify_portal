import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ManageJobs = () => {
  const { jobs, setJobs } = useContext(AppContext);
  const [editingJob, setEditingJob] = useState(null);

  const toggleVisibility = (jobId) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === jobId ? { ...job, visible: !job.visible } : job
      )
    );
  };

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleSave = () => {
    // Update the job in the context
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === editingJob.id ? editingJob : job
      )
    );
    setEditingJob(null);
  };

  const handleDelete = (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Jobs</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 font-semibold text-gray-700">Job Title</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Location</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Applicants</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Visible</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {editingJob && editingJob.id === job.id ? (
                    <input
                      type="text"
                      value={editingJob.title}
                      onChange={(e) => setEditingJob({...editingJob, title: e.target.value})}
                      className="w-full px-2 py-1 border rounded"
                    />
                  ) : (
                    job.title
                  )}
                </td>
                <td className="px-4 py-3">
                  {editingJob && editingJob.id === job.id ? (
                    <input
                      type="date"
                      value={editingJob.date}
                      onChange={(e) => setEditingJob({...editingJob, date: e.target.value})}
                      className="px-2 py-1 border rounded"
                    />
                  ) : (
                    formatDate(job.date || new Date())
                  )}
                </td>
                <td className="px-4 py-3">
                  {editingJob && editingJob.id === job.id ? (
                    <select
                      value={editingJob.location}
                      onChange={(e) => setEditingJob({...editingJob, location: e.target.value})}
                      className="px-2 py-1 border rounded"
                    >
                      <option value="Bangalore">Bangalore</option>
                      <option value="San Francisco">San Francisco</option>
                      <option value="London">London</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="New Delhi">New Delhi</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  ) : (
                    job.location
                  )}
                </td>
                <td className="px-4 py-3">{job.applicants || 0}</td>
                <td className="px-4 py-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={job.visible !== false}
                      onChange={() => toggleVisibility(job.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </td>
                <td className="px-4 py-3">
                  {editingJob && editingJob.id === job.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingJob(null)}
                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(job)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {jobs.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No jobs posted yet. Click on "Add Job" to create your first job posting.
        </div>
      )}
    </div>
  );
};

export default ManageJobs;