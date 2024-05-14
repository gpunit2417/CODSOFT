import React from "react";

export default function About() {
  return (
    <div>
      <div
        style={{
          margin: "-70px 0 50px 0",
          height: "450px",
          background: "linear-gradient(to right, #00d2ff, #3a7bd5)",
        }}
      >
        <h1
          style={{
            margin: "150px 0 0 100px",
            padding: "80px 0 0 0",
            fontFamily: "cursive",
            textAlign: "left",
            color: "white",
          }}
        >
          A company's most valuable asset
        </h1>
        <h1
          style={{
            margin: "1px 0 0 100px",
            padding: "1px 0 0 0",
            fontFamily: "cursive",
            textAlign: "left",
            color: "white",
          }}
        >
          is its employees
        </h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGIVr4FoRF46pHdcdbhkQ59F6cIHGAZHulw&s"
          alt="logo"
          style={{
            margin: "-100px 100px 0 0 ",
            float: "right",
            height: "300px",
          }}
        ></img>
        <p
          style={{
            margin: "40px 0 0 100px",
            textAlign: "left",
            fontSize: "20px",
            color: "white",
          }}
        >
          Helping clients achieve a competitive advantage through their people
        </p>
      </div>
      <div style={{ display: "flex", backgroundColor: "lightgray" }}>
        <div>
          <img
            src="https://jobspothr.com/wp-content/uploads/2021/02/My-Best-focus-806x1024.jpg"
            alt="normalimage"
            height="450px"
            style={{ margin: "50px 100px 100px 130px" }}
          ></img>
        </div>
        <div>
          <h1 style={{ margin: "40px 10px 0 0", textAlign: "left" }}>
            About Us
          </h1>
          <p
            style={{
              margin: "40px 60px 0 0",
              textAlign: "left",
              justifyContent: "center",
            }}
          >
            Jobspot has the expertise in managing the Human Resource needs as it
            is managed by a team of professionals to serve the corporate sector
            on Pan India as well as regional basis. <br />
            <br />
            We strongly believe that each organization has an unique
            requirement. As a placement consultant for human talent before
            commencing on any recruitment, we ensure to source and provide the
            right candidate for each and every requirement. <br />
            <br />
            We have a large database to meet the requirements of each and every
            industry. We also have tie-ups with leading newspapers to advertise
            our requirements.
          </p>
          <p style={{ fontSize: "25px", margin: "25px 15px 0 -40px" }}>
            <i>
              We open door to opportunities and establish a long-term
              relationship between employers and prospective candidates
            </i>
          </p>
        </div>
      </div>
      <h1 style={{ margin: "50px 0 30px 0" }}>What we offer</h1>
      <p>
        We look out for the best opportunity for the candidates. We match the{" "}
        <br />
        required skills, experience and pre-screen every candidate.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="card"
          style={{
            width: "300px",
            backgroundColor: "#1d7195",
            margin: "10px 10px 30px 0",
          }}
        >
          <h3 style={{ color: "white" }}>Talent Acquisition</h3>
          <hr
            style={{ color: "white", width: "50%", margin: "10px 0 40px 40px" }}
          />
          <p
            style={{
              color: "white",
              textAlign: "left",
              margin: "0 10px 10px 10px",
              textAlign: "justify",
            }}
          >
            Talent Acquisition service is an ideal as well as optimum,
            formulated to keep our client’s recruitment process simple, quick,
            and efficient. <br />
            Qualified professionals at jobspothr follow the recruitment approach
            of not only finding the right talent from the domain but also
            keeping the recruitment function seamless.{" "}
          </p>
        </div>
        <div
          className="card"
          style={{
            width: "300px",
            backgroundColor: "#1d7195",
            margin: "10px 10px 30px 50px",
          }}
        >
          <h3 style={{ color: "white" }}>Recruitment Outsourcing</h3>
          <hr
            style={{ color: "white", width: "50%", margin: "10px 0 40px 40px" }}
          />
          <p
            style={{
              color: "white",
              textAlign: "left",
              margin: "0 10px 10px 10px",
              textAlign: "justify",
            }}
          >
            We work as an integral system for Strategy and Process, enabling
            Recruitment Function Delivery of the highest standard. <br /> We
            have a large database to meet the requirements of each and every
            industry.{" "}
          </p>
        </div>
        <div
          className="card"
          style={{
            width: "300px",
            backgroundColor: "#1d7195",
            margin: "10px 0 30px 50px",
          }}
        >
          <h3 style={{ color: "white" }}>Executive Search & Hiring</h3>
          <hr
            style={{ color: "white", width: "50%", margin: "10px 0 40px 40px" }}
          />
          <p
            style={{
              color: "white",
              textAlign: "left",
              margin: "0 10px 10px 10px",
              textAlign: "justify",
            }}
          >
            The existence of a qualified and effective board is critical for the
            success of an organization, varying sizes and types including
            Start-Ups, Midsize, and MNCs.
            <br />
            Our experience, research, and deep industry functional expertise
            have helped us in garnering valuable insights.
          </p>
        </div>
      </div>
    </div>
  );
}
