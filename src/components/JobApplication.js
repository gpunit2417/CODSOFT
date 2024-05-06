import React from 'react'
import { useState } from 'react';

export default function JobApplication() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null
      });
    
      const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleFileChange = e => {
        setFormData(prevData => ({
          ...prevData,
          resume: e.target.files[0]
        }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        // Send form data to server for processing
        // Example: fetch('/api/apply', { method: 'POST', body: formData });
      };
    
      return (
        <div>
          <h2>Apply for a Job</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            <label>Resume:</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      );
}
