import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddJob = () => {
  const { setJobs } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      title,
      description,
      location,
      category,
      level,
      salary,
    };

    setJobs((prev) => [newJob, ...prev]); // push to context

    // reset form
    setTitle("");
    setDescription("");
    setLocation("Bangalore");
    setCategory("Programming");
    setLevel("Beginner Level");
    setSalary("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Title</label>
          <input
            type="text"
            placeholder="Type job title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Description</label>
          <textarea
            rows="4"
            placeholder="Enter job description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Programming</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Bangalore</option>
              <option>New York</option>
              <option>California</option>
              <option>Hyderabad</option>
              <option>Washington</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Job Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Beginner Level</option>
              <option>Intermediate Level</option>
              <option>Senior Level</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Salary ($)</label>
          <input
            type="number"
            placeholder="e.g. 2500"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
