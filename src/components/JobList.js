import React from 'react'

export default function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      // Fetch job listings from server and set to state
      // Example: fetch('/api/jobs').then(res => res.json()).then(data => setJobs(data));
    }, []);
  
    return (
      <div>
        <h2>Job Listings</h2>
        <ul>
          {jobs.map(job => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}
