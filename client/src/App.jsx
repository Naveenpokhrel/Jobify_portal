import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ApplyJob } from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
      </Routes>
    </div>
  );
}

export default App