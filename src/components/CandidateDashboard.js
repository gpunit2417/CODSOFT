import React, { useState } from "react";

export default function CandidateDashboard() {
  const [editingProfile, setEditingProfile] = useState(false);
  const [candidateProfile, setCandidateProfile] = useState({
    fname: "John",
    lname: "Doe",
    skills: ["JavaScript", "React", "Node.js"],
    qualifications: "Bachelor's Degree in Computer Science",
  });
  const [newSkill, setNewSkill] = useState("");

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
    setCandidateProfile({
      ...candidateProfile,
      [name]: value,
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setCandidateProfile({
        ...candidateProfile,
        skills: [...candidateProfile.skills, newSkill],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = candidateProfile.skills.filter(
      (_, idx) => idx !== index
    );
    setCandidateProfile({
      ...candidateProfile,
      skills: updatedSkills,
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
              <strong>First Name:</strong>{" "}
              <input
                type="text"
                name="fname"
                value={candidateProfile.fname}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Last Name:</strong>{" "}
              <input
                type="text"
                name="lname"
                value={candidateProfile.lname}
                onChange={handleChange}
              />
            </p>
            <p>
              <strong>Skills:</strong>{" "}
              {candidateProfile.skills.map((skill, index) => (
                <span key={index}>
                  {skill}{" "}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveSkill(index)}
                  >
                    X
                  </button>{" "}
                </span>
              ))}
              <br />
              <input
                type="text"
                placeholder="Add new skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button
                className="btn btn-sm btn-primary"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </p>
            <p>
              <strong>Qualifications:</strong>{" "}
              <textarea
                name="qualifications"
                value={candidateProfile.qualifications}
                onChange={handleChange}
              ></textarea>
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>First Name:</strong> {candidateProfile.fname}
            </p>
            <p>
              <strong>Last Name:</strong> {candidateProfile.lname}
            </p>
            <p>
              <strong>Skills:</strong>{" "}
              {candidateProfile.skills.join(", ")}
            </p>
            <p>
              <strong>Qualifications:</strong>{" "}
              {candidateProfile.qualifications}
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
  );
}
