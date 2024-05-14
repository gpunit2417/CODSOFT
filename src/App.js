import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./components/HomePage";
import CandidateDashboard from "./components/CandidateDashboard";
import JobList from "./components/JobList.js";
import './App.css';
import About from "./components/About.js";
import JobApplication from "./components/JobApplication.js";
import SearchJob from "./components/SearchJob.js";
import jobs from "./components/AllJob.js";
import EmployerDashboard from "./components/EmployerDashboard.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js"

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar allJobs={jobs}/>
          <Route exact path="/" component={HomePage} />
          <Route path="/candidatedashboard" component={CandidateDashboard} />
          <Route path="/joblist" component={JobList} />
          <Route path="/about" component={About} />
          <Route path="/apply" component={JobApplication} />
          <Route path="/search" component={SearchJob} />
          <Route path="/employerdashboard" component={EmployerDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
