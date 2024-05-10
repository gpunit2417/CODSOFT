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

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/candidatedashboard" component={CandidateDashboard} />
          <Route path="/joblist" component={JobList} />
          <Route path="/about" component={About} />
          <Route path="/apply" component={JobApplication} />
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
