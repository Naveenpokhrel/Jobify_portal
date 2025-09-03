import { createContext, useEffect, useState } from "react";
import { jobsData, viewApplicationsPageData } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const [applications, setApplications] = useState([]);

  // Function to fetch jobs with sample data if none exists
  const fetchJobs = async () => {
    if (jobsData && jobsData.length > 0) {
      // Add visibility property to each job if not present
      const jobsWithVisibility = jobsData.map(job => ({
        ...job,
        visible: job.visible !== undefined ? job.visible : true,
        applicants: job.applicants || Math.floor(Math.random() * 30) + 1,
        date: job.date || new Date().toISOString()
      }));
      setJobs(jobsWithVisibility);
    } else {
      // Sample data if no jobs exist
      const sampleJobs = [
        {
          id: 1,
          title: "Full Stack Developer",
          date: new Date(2024, 7, 22).toISOString(),
          location: "Bangalore",
          applicants: 20,
          visible: true,
          description: "We are looking for a skilled Full Stack Developer...",
          category: "Programming",
          level: "Intermediate Level",
          salary: "5000"
        },
        {
          id: 2,
          title: "Data Scientist",
          date: new Date(2024, 7, 22).toISOString(),
          location: "San Francisco",
          applicants: 15,
          visible: true,
          description: "Join our data team as a Data Scientist...",
          category: "Data",
          level: "Senior Level",
          salary: "7000"
        },
        {
          id: 3,
          title: "Marketing Manager",
          date: new Date(2024, 8, 25).toISOString(),
          location: "London",
          applicants: 2,
          visible: true,
          description: "We need an experienced Marketing Manager...",
          category: "Marketing",
          level: "Senior Level",
          salary: "6000"
        },
        {
          id: 4,
          title: "UI/UX Designer",
          date: new Date(2024, 9, 16).toISOString(),
          location: "Dubai",
          applicants: 25,
          visible: true,
          description: "Creative UI/UX Designer needed for our team...",
          category: "Design",
          level: "Intermediate Level",
          salary: "5500"
        }
      ];
      setJobs(sampleJobs);
    }
  };

  // Function to fetch applications
  const fetchApplications = async () => {
    setApplications(viewApplicationsPageData);
  };

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
    applications,
    setApplications,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};