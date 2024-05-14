import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useHistory } from "react-router-dom";

const Navbar = ({ allJobs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    // e.preventDefault();
    // Filter jobs based on search query

    if (searchQuery.trim() === "") {
      return; // If search query is empty, do nothing
    }

    const filteredJobs = allJobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Navigate to search results page
    history.push({
      pathname: "/search",
      state: { jobs: filteredJobs },
    });
  };

  useEffect(() => {
    if (searchQuery !== "") {
      handleSearch(); // Trigger navigation if searchQuery is not empty
    }
  }, [searchQuery]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light navbar-light fixed-top"
        style={{ height: "62px" }}
      >
        <div className="container-fluid mx-auto">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocnntBpgsajtC4EtPIU5q7HjmKybIDupEWw&s"
                alt="JobLogo "
                height="50px"
                style={{ cursor: "pointer" }}
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/joblist" className="nav-link">
                  Find Jobs
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/signup" className="nav-link">
                  SignUp
                </a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2 w-32"
                type="search"
                placeholder="Search Job"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <a href="/search">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </a>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="nav-item">
                    <a href="/candidatedashboard" className="dropdown-item">
                      Candidate Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/employerdashboard" className="dropdown-item">
                      Employer Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
