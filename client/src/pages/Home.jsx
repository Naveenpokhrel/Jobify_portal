import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Footer from '../components/Footer'
// import ApplicationForm from "../components/ApplicationForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing />
      <Footer />
      {/* <ApplicationForm /> */}
    </div>
  );
};

export default Home