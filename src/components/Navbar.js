import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top" style={{height: '62px'}}>
        <div className="container-fluid mx-auto">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a href="/"><img
              src="https://t4.ftcdn.net/jpg/05/13/72/29/360_F_513722905_SgxiGdjQZsdvP4ODmERsQGgW2bUwj1lT.jpg"
              alt="JobLogo "
              height="50px"
              style={{ cursor: 'pointer' }}
            /></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/apply" className="nav-link">
                  Apply for a Job
                </a>
              </li>
              <li className="nav-item">
                <a href="/candidatedashboard" className="nav-link">
                  Candidate Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a href="/joblist" className="nav-link">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a href="/jobdetail" className="nav-link">
                  See Details
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 w-32"
                type="search"
                placeholder="Search Job"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
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
                  <li>
                    <a className="dropdown-item" href="/your-profile">
                      Your Profile
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
