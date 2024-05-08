import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function JobList() {
  return (
    <div>
      <div
        style={{
          margin: "85px 0px 0 0",
          height: "100px",
          background: "linear-gradient(to right, #00d2ff, #3a7bd5)",
        }}
      >
        <h4
          style={{
            margin: "60px 0 0 0",
            fontFamily: "cursive",
            padding: "15px",
            textAlign: "left",
          }}
        >
          <marquee
            behavior="alternate"
            scrollamount="12"
            style={{ color: "red" }}
          >
            Find Job with more than 4LPA.
          </marquee>
        </h4>
        <h4 style={{ color: "yellow" }}>
          NAUKRI KI TENSION OFF OR DHUNDHO JOB BEKHAUF
        </h4>
      </div>
      <div style={{backgroundColor: 'rgb(192 38 211)', position: 'left', width: '12%', margin: '50px 0 0 0', borderRadius: '.3rem'}}>
        <h4 style={{fontFamily: 'Lucida Handwriting', padding: '2px'}}>FIND THE JOB THAT BEST SUITS YOUR PROFILE</h4>
      </div>
      <img src="https://media.tenor.com/38l-7sy795AAAAAj/now-hiring-hired.gif" alt="logo" style={{margin: '40px 0 0 -140px'}}></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQmDYI9v8lOh4ta-75h7NOaypG2J58kW0yw&s" alt="logo" style={{margin: '-300px 0 0 190px', height: '200px'}}></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiANu1Wc9GEBA9VCjUPFbIV9TX6Z_yeohuZagnbg33Q&s" alt="hiringlogo" style={{margin: '-50px 70px 0 0', float: 'right'}}></img>
      <h2 style={{ margin: "-30px auto 30px auto", color: '#1ca9a9', fontSize: '3rem', fontWeight: '700', fontFamily: 'Script MT Bold'}}>
        Job Opportunities For You
      </h2>

      <div className="jobs d-flex" style={{ margin: "-8px 0 0 0" }}>
        {/* ----------------job detail 1 ----------------*/}
        <div className="card" style={{ margin: "40px 15px 30px 60px" }}>
          <div
            className="card-body"
            style={{ width: "270px", height: "220px" }}
          >
            <h5 className="card-title">Online English Tutor</h5>
            <p className="card-text">PlanetSpark</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>

        {/* ----------------job detail 2---------------- */}
        <div className="card" style={{ margin: "40px 15px 30px 30px" }}>
          <div
            className="card-body"
            style={{ width: "270px", height: "220px" }}
          >
            <h5 className="card-title">Customer Service Exec.</h5>
            <p className="card-text">Paisabazaar</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>

        {/* ----------------job detail 3---------------- */}
        <div className="card" style={{ margin: "40px 15px 30px 30px" }}>
          <div
            className="card-body"
            style={{ width: "270px", height: "220px" }}
          >
            <h5 className="card-title">Associate Center Manager</h5>
            <p className="card-text">Cultfit Healthcare Pvt. Ltd.</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>

        {/* ----------------job detail 4 ----------------*/}
        <div className="card" style={{ margin: "40px 15px 30px 30px" }}>
          <div
            className="card-body"
            style={{ width: "270px", height: "220px" }}
          >
            <h5 className="card-title">Customer Service Assoc.</h5>
            <p className="card-text">Saregama India Ltd.</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex" style={{ height: "300px" }}>
        {/* ----------------job detail 5---------------- */}
        <div
          className="card"
          style={{ margin: "5px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">English Teacher</h5>
            <p className="card-text">PlanetSpark</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 6---------------- */}
        <div
          className="card"
          style={{ margin: "5px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Wordpress Developer</h5>
            <p className="card-text">The Learn Cloud</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 7---------------- */}
        <div
          className="card"
          style={{ margin: "5px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Backend Development</h5>
            <p className="card-text">Qualyval</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 8 --------------------------------*/}
        <div
          className="card"
          style={{ margin: "5px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Frontend Development</h5>
            <p className="card-text">Rydeu Logistics UG</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex" style={{ height: "300px" }}>
        {/* ----------------job detail 9---------------- */}
        <div
          className="card"
          style={{ margin: "-60px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">
              Desktop Support And Hardware Engineer
            </h5>
            <p className="card-text">Dreamzcraft Informatics</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 10---------------- */}
        <div
          className="card"
          style={{ margin: "-60px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Accountant</h5>
            <p className="card-text">Happy Biz</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 11---------------- */}
        <div
          className="card"
          style={{ margin: "-60px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Graphic Designer</h5>
            <p className="card-text">Blue Rose Publishers</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 12 --------------------------------*/}
        <div
          className="card"
          style={{ margin: "-60px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Business Development Manager</h5>
            <p className="card-text">Brandmela</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex" style={{ height: "300px" }}>
        {/* ----------------job detail 13---------------- */}
        <div
          className="card"
          style={{ margin: "-120px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior Telecaller</h5>
            <p className="card-text">Urban NXT</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 14---------------- */}
        <div
          className="card"
          style={{ margin: "-120px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Finance Manager</h5>
            <p className="card-text">Urban NXT</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 15---------------- */}
        <div
          className="card"
          style={{ margin: "-120px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Associate Java Developer</h5>
            <p className="card-text">Bharat Hyundai, Hyderabad</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 16 --------------------------------*/}
        <div
          className="card"
          style={{ margin: "-120px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior Wordpress Developer</h5>
            <p className="card-text">Analytics Job, Noida</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex" style={{ height: "300px" }}>
        {/* ----------------job detail 17---------------- */}
        <div
          className="card"
          style={{ margin: "-180px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">PHP Developer</h5>
            <p className="card-text">Orbiqe Technologies Pvt. Ltd., Meerut</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 18---------------- */}
        <div
          className="card"
          style={{ margin: "-180px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Full Stack PHP Developer</h5>
            <p className="card-text">Brandzzy SoftTech Pvt. Ltd., Cuttack</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 19---------------- */}
        <div
          className="card"
          style={{ margin: "-180px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior Angular.js Developer</h5>
            <p className="card-text">Bharat Hyundai, Hyderabad</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 20 --------------------------------*/}
        <div
          className="card"
          style={{ margin: "-180px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior ReactJS Developer</h5>
            <p className="card-text">Zedex Info Pvt. Ltd., Mumbai</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex" style={{ height: "300px" }}>
        {/* ----------------job detail 21---------------- */}
        <div
          className="card"
          style={{ margin: "-240px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior Web Developer</h5>
            <p className="card-text">YR Media, Chennai</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 22---------------- */}
        <div
          className="card"
          style={{ margin: "-240px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior NodeJS Developer</h5>
            <p className="card-text">Relinns Technologies, Chandigarh</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 23---------------- */}
        <div
          className="card"
          style={{ margin: "-240px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Robotics Instructor</h5>
            <p className="card-text">Rancho Labs, Hyderabad</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 24 --------------------------------*/}
        <div
          className="card"
          style={{ margin: "-240px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Full Stack Developer</h5>
            <p className="card-text">IT Fames Pvt. Ltd., Dehradun</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex" style={{ height: "300px" }}>
        {/* ----------------job detail 25---------------- */}
        <div
          className="card"
          style={{ margin: "-300px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Full Stack Embedded Engineer</h5>
            <p className="card-text">Epvi New Tech Epoch Pvt. Ltd., Gurgaon</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 26---------------- */}
        <div
          className="card"
          style={{ margin: "-300px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">UI/UX Developer</h5>
            <p className="card-text">WiJungle, Gurgaon</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 27---------------- */}
        <div
          className="card"
          style={{ margin: "-300px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Senior UI/UX Developer</h5>
            <p className="card-text">The Valor Solutions, Hyderabad</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 28 --------------------------------*/}
        <div
          className="card"
          style={{ margin: "-300px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Associate UI/UX Developer</h5>
            <p className="card-text">Rsquare Web Studio Pvt. Ltd., Remote</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>

      <div className="jobs d-flex">
        {/* ----------------job detail 29---------------- */}
        <div
          className="card"
          style={{ margin: "-340px 15px 5px 60px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">UI/UX Figma and Graphic Designer</h5>
            <p className="card-text">Maayasthra, Remote</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
        {/* ----------------job detail 30---------------- */}
        <div
          className="card"
          style={{ margin: "-340px 15px 5px 30px", maxHeight: "220px" }}
        >
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Mobile App Developer</h5>
            <p className="card-text">Vigorous Healthcare Pvt. Ltd., Jaipur</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date().toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href="/jobdetail"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
      <img src="https://media.tenor.com/YRDtJ4ysHJQAAAAM/bddr-hiring-hiring.gif" alt="template" style={{margin: '-360px 0 30px 1000px',}}></img>
      <img src="https://media.tenor.com/UWCSjcs5nl0AAAAM/bddr-hiring-hiring.gif" alt="template" style={{margin: '-360px 0 30px 500px'}}></img>
    </div>
  );
} 
 