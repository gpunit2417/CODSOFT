import React, { useState } from 'react'

export default function EmployerDashboard() {
  const [editingProfile, setEditingProfile] = useState(false);
  const [companyProfile, setCompanyProfile] = useState({
    cname: "Infosys",
    location: "Bangalore",
    establish: "1970s",
  });

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleCancelEdit = () => {
    setEditingProfile(false);
  };

  const handleSaveProfile = () => {
    // Add logic to save the updated profile data
    setEditingProfile(false);
    // Example: You can send an API request to update the candidate profile
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile({
      ...companyProfile,
      [name]: value,
    });
  };
  return (
    <div>
      <div
        style={{
          margin: "120px 0 10px 0",
          backgroundColor: "lemonchiffon",
          height: "150px",
          display: "flex",
        }}
      >
        <h1 style={{ textAlign: "left", padding: "45px 0 0 50px" }}>
          Welcome to your Profile{" "}
        </h1>
        <img
          src="https://cliply.co/wp-content/uploads/2019/06/391906110_WAVING_HAND_400px.gif"
          alt="wavinghand"
          style={{ height: "115px", margin: "20px 0 0 20px" }}
        ></img>
      </div>
      <div style={{ backgroundColor: "lightgrey", margin: "50px 0 0 0" }}>
        {editingProfile ? (
          <>
            <p>
              <strong>Company Name:</strong>{" "}
              <input
                type="text"
                name="cname"
                value={companyProfile.cname}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Location:</strong>{" "}
              <input
                type="text"
                name="location"
                value={companyProfile.location}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Established In:</strong>{" "}
              <input
              type='text'
                name="establish"
                value={companyProfile.establish}
                onChange={handleChange}
              ></input>
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Company Name:</strong> {companyProfile.cname}
            </p>
            <p>
              <strong>Location:</strong> {companyProfile.location}
            </p>

            <p>
              <strong>Established In:</strong>{" "}
              {companyProfile.establish}
            </p>
          </>
        )}
      </div>

      <div style={{ margin: "0 0 10px 0" }}>
        {editingProfile ? (
          <>
            <button
              style={{ margin: "5px" }}
              className="btn btn-primary"
              onClick={handleSaveProfile}
            >
              Save Profile
            </button>
            <button
              style={{ margin: "5px" }}
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            style={{ margin: "5px" }}
            className="btn btn-primary"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        )}
        <a href="/joblist">
          <button className="btn btn-primary">Apply for Job</button>
        </a>
      </div>
    </div>
  )
}
