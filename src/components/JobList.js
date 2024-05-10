import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import JobDetailModal from "./JobDetailModal";
import jobsData from "./AllJob";

export default function JobList(props) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSeeDetailsClick = (job) => {
    setModalShow(true);
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedJob(null);
  };

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
      <div
        style={{
          backgroundColor: "rgb(192 38 211)",
          position: "left",
          width: "12%",
          margin: "50px 0 0 0",
          borderRadius: ".3rem",
        }}
      >
        <h4 style={{ fontFamily: "Lucida Handwriting", padding: "2px" }}>
          FIND THE JOB THAT BEST SUITS YOUR PROFILE
        </h4>
      </div>
      <img
        src="https://media.tenor.com/38l-7sy795AAAAAj/now-hiring-hired.gif"
        alt="logo"
        style={{ margin: "40px 0 0 -140px" }}
      ></img>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQmDYI9v8lOh4ta-75h7NOaypG2J58kW0yw&s"
        alt="logo"
        style={{ margin: "-300px 0 0 190px", height: "200px" }}
      ></img>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiANu1Wc9GEBA9VCjUPFbIV9TX6Z_yeohuZagnbg33Q&s"
        alt="hiringlogo"
        style={{ margin: "-50px 70px 0 0", float: "right" }}
      ></img>
      <h2
        style={{
          margin: "-30px auto 30px auto",
          color: "#1ca9a9",
          fontSize: "3rem",
          fontWeight: "700",
          fontFamily: "Script MT Bold",
        }}
      >
        Job Opportunities For You
      </h2>
      <div style={{ backgroundColor: 'lightgray'}}>
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="card"
            style={{ margin: "10px 10px 5px 50px", width: "fit-content", display: "inline-block", overflow: 'hidden'}}
          >
            <div className="card-body" style={{ width: "270px" , height: '180px'}}>
              <h5 className="card-title">{job.jobTitle}</h5>
              <p className="card-text">{job.company}</p>
              <p className="card-text"><b>Posted On:</b> {job.date}</p>
              <Button
                variant="sm"
                btn-dark
                size="sm"
                onClick={() => handleSeeDetailsClick(job)}
              >
                See Details
              </Button>
            </div>
          </div>
        ))}
        <JobDetailModal
          show={modalShow}
          onHide={handleCloseModal}
          title={selectedJob?.jobTitle}
          description={selectedJob?.jobDescription}
          applyDate={selectedJob?.ApplyBy}
        />
      </div>
      <img
        src="https://media.tenor.com/YRDtJ4ysHJQAAAAM/bddr-hiring-hiring.gif"
        alt="template"
        style={{ margin: "10px 0 30px 1000px" }}
      ></img>
      <img
        src="https://media.tenor.com/UWCSjcs5nl0AAAAM/bddr-hiring-hiring.gif"
        alt="template"
        style={{ margin: "-280px 0 30px 500px" }}
      ></img>
    </div>
  );
}
