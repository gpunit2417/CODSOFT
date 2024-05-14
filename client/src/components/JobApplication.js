import React from "react";
import { useState } from "react";

export default function JobApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Wphone: "",
    Aphone: "",
    address: "",
    course: "", 
    stream: "",
    skills: "",
    github: "",
    linkedin: "",
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const validateForm = () => {
    let isValid = true; // Flag to track validation status
    const errors = {}; // Object to store validation errors

    if (formData.name === "name" || formData.name.length < 3) {
      errors.name = "Name must not be 'name' and must be at least 3 characters long";
      isValid = false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      errors.email = "Invalid Email";
      isValid = false;
    }

    if (
      formData.phone.length !== 10 ||
      formData.Wphone.length !== 10 ||
      formData.Aphone.length !== 10
    ) {
      errors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (formData.phone === formData.Aphone) {
      errors.Aphone = "Please provide a different alternate mobile number";
      isValid = false;
    }

    // Check if a resume is uploaded (optional)
    if (!formData.resume) {
      errors.resume = "Please upload your resume";
      isValid = false;
    }

    return { isValid, errors }; // Return both validation status and errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = validateForm();

    if (isValid) {

      alert("Application Submitted!"); 

      setFormData({
        name: "",
        email: "",
        phone: "",
        Wphone: "",
        Aphone: "",
        address: "",
        course: "", 
        stream: "",
        skills: "",
        github: "",
        linkedin: "",
        resume: null,
      });

    } else {
      // Display validation errors (optional)
      alert("Validation errors:", errors);
      // You can display errors in the UI using state or conditional rendering
    }
  };

  return (
    <div style={{ margin: "100px 0 42px 0", backgroundColor: "#f2f2f2" }}>
      <h2>Application form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ margin: "0 auto", padding: "20px", width: "50%" }}
      >
        <label
          htmlFor="name"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          id="name"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="email" 
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Email:
        </label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          id="email"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="phone"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Calling Contact:
        </label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          id="phone"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="phone"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Whatsapp Contact:
        </label>
        <input
          type="number"
          name="Wphone"
          value={formData.Wphone}
          onChange={handleInputChange}
          required
          id="phone"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="phone"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Alternate Contact:
        </label>
        <input
          type="number"
          name="Aphone"
          value={formData.Aphone}
          onChange={handleInputChange}
          required
          id="phone"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="text"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Address:
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          id="address"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="course"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Course:
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          required
        >
          <option value="">-- Select Course --</option>
          <option value="BTech">BTech</option>
          <option value="MBA">MBA</option>
          <option value="Medical">Medical</option>
        </select>
        <br />
        <label
          htmlFor="stream"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Stream:
        </label>
        <select
          id="stream"
          name="stream"
          value={formData.stream}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          required
        >
          <option value="">-- Select Stream --</option>
          <option value="CSE">CSE</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
          <option value="Civil">Civil</option>
          <option value="ME">ME</option>
          <option value="BPT">BPT</option>
          <option value="Dental">Dental</option>
        </select>
        <br />
        <label
          htmlFor="skills"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Skills:
        </label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
          required
          id="skills"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="github"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          Github Link:
        </label>
        <input
          type="text"
          placeholder="https://www.example.com"
          name="github"
          value={formData.github}
          onChange={handleInputChange}
          required
          id="github"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label
          htmlFor="linkedin"
          style={{ color: "blue", display: "block", marginBottom: "5px" }}
        >
          LinkedIn Profile:
        </label>
        <input
          type="text"
          placeholder="https://www.example.com"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          required
          id="linkedin"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <label style={{ color: "blue", display: "block", marginBottom: "5px" }}>
          Resume:
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            margin: "20px",
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
