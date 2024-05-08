import React from "react";

export default function HomePage() {
  return (
    <>
      <div style={{ padding: "150px", fontFamily: "cursive" }}>
        <h1 className="text-center hover-underline-animation">
          Build Your Career In Your Dream Company
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6nn9OJePDy-aMQHRuIECMJc_Fq6xiso81w&s"
            style={{
              position: "absolute",
              bottom: "355px", // Adjust as needed to align with text
              left: "30%",
              width: "40%",
              height: "10%",
            }}
            alt="underline"
          />
        </h1>
        <div className="image d-flex">
          <img
            src="https://img.freepik.com/premium-photo/we-are-hiring-composition_23-2150902128.jpg?size=626&ext=jpg&ga=GA1.1.599586241.1705334486&semt=ais"
            alt="bgimage"
            style={{
              margin: "60px 60px 10px -87px",
              width: "35%",
              cursor: "pointer",
              borderRadius: ".5rem",
            }}
          />
          <img
            src="https://img.freepik.com/premium-photo/we-are-hiring-concept_23-2150902122.jpg?size=626&ext=jpg&ga=GA1.1.599586241.1705334486&semt=ais"
            alt="bgimage"
            style={{
              margin: "60px 60px 10px 0px",
              width: "35%",
              cursor: "pointer",
              borderRadius: ".5rem",
            }}
          />
          <img
            src="https://img.freepik.com/free-photo/coins-job-word_23-2148568014.jpg?size=626&ext=jpg&ga=GA1.1.599586241.1705334486&semt=ais"
            alt="bgimage"
            style={{
              margin: "60px 60px 10px 0px",
              width: "35%",
              cursor: "pointer",
              borderRadius: ".5rem",
            }}
          />
        </div>
      </div>
      <div className="headingtwo">
        <h2
          style={{
            fontFamily: "serif",
            backgroundColor: "lightgray",
            paddingTop: "70px",
          }}
        >
          <i>Look For Your Interested Job</i>
        </h2>
      </div>
      <div
        className="jobs d-flex"
        style={{ backgroundColor: "lightgray", margin: "-8px 0 0 0" }}
      >
        {/* ----------------job detail 1 ----------------*/}
        <div className="card" style={{ margin: "40px 15px 30px 60px" }}>
          <div className="card-body" style={{ width: "270px" }}>
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
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Customer Service Executive</h5>
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
          <div className="card-body" style={{ width: "270px" }}>
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
          <div className="card-body" style={{ width: "270px" }}>
            <h5 className="card-title">Customer Service Associate</h5>
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

      <div
        className="jobs d-flex"
        style={{ backgroundColor: "lightgray", height: "300px" }}
      >
        {/* ----------------job detail 5---------------- */}
        <div
          className="card"
          style={{ margin: "5px 15px 5px 60px", maxHeight: "200px" }}
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
          style={{ margin: "5px 15px 5px 30px", maxHeight: "200px" }}
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
          style={{ margin: "5px 15px 5px 30px", maxHeight: "200px" }}
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
          style={{ margin: "5px 15px 5px 30px", maxHeight: "200px" }}
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
      <a
        href="/joblist"
        className="btn btn-primary"
        style={{ margin: "-30px auto 0 auto" }}
      >
        Explore More Jobs
      </a>

      {/* ----------------Companies section---------------- */}
      <div className="companies">
        <h3 style={{ margin: "100px 0 40px 0", fontFamily: "courier" }}>
          Top Brands Connected with us
        </h3>
      </div>
      <div className="companyImage">
        <img
          alt="amazonlogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcIk1HdDewlsiS34C_BCHt2Ye0XKx_KoO2Q&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="samsunglogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFO1Y-imyBvH8F_qDJar7fOxV_WROCiu5NXw&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="intellogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJE6wJ5TvXvIxkb8qt5HIm8VTHr1G56WObzQ&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="googleLogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4kP5Tj5wsEwwi28g-otcIrOVeSwTWv3iXg&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="ibmlogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPEqhZOhmgFWscy5rpJgNpWuobhifs8rHDQ&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="salesforceLogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvU0cYuJMXpUF5x-smMZZhRHSxxlBwF7C-mw&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="delllogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8n6PjgPPU0oESFcONEmJxTY0bwV5UganlHQ&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="sonylogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdF0PA40_lOUsgZ90AFQAvAn6gwaeEpHpKjA&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="hitachilogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqMHtzW0jMyo-Jz-sfgU3Kbj8jdzWLqGsBA&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="applelogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-HvTNuJv6z3hsHaOUtNB1_Fj8eFoFFWs4Q&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="nvidialogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkLD-ppZ6U2YEl9K82zJTJ7ph4EwYnQEZ8g&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
        <img
          alt="paypallogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw6ZRn8m_2MrcuQ0oZnq2QmrAQd0KdKFT3g&s"
          style={{ height: "20vh", margin: "10px 20px 10px 10px" }}
        />
      </div>
      <div
        className="stat d-flex"
        style={{ backgroundColor: "lightgray", margin: "100px 5px 150px 5px" }}
      >
        <div className="hiring" style={{ margin: "20px 100px 30px 150px" }}>
          <p style={{ fontSize: "60px" }}>
            <b>100K+</b>
          </p>
          <h4>companies hiring</h4>
        </div>
        <div className="opening" style={{ margin: "20px 100px 30px 160px" }}>
          <p style={{ fontSize: "60px" }}>
            <b>10K+</b>
          </p>
          <h4>daily job openings</h4>
        </div>
        <div className="active" style={{ margin: "20px 120px 30px 200px" }}>
          <p style={{ fontSize: "60px" }}>
            <b>21K+</b>
          </p>
          <h4>active students</h4>
        </div>
      </div>
    </>
  );
}
