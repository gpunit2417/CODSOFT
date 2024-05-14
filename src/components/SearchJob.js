import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import JobDetailModal from './JobDetailModal';

const SearchJob = ({ location }) => {
  // const { state } = location;
  const { jobs } = location.state;
  
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
      <h2 style={{margin: '100px 0 0 0'}}>Your Search Results</h2>
      {jobs.length === 0 ? (
        <p style={{margin: '50px 0 0 0', fontSize: '50px'}}>No jobs available</p>
      ) : (
        <div style={{backgroundColor: 'lemonchiffon', display: 'flex-wrap', margin: '50px 0 50px 0'}}>
        {jobs.map((job) => (
          <div
          key={job.id}
          className="card"
          style={{ margin: "50px 10px 50px 50px", width: "fit-content", display: "inline-block", overflow: 'hidden'}}
        >
          <div key={job.id}><div className="card-body" style={{ width: "270px" , height: '180px'}}>
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
        </div></div></div>
        ))}
        </div>
      )}

        <JobDetailModal
          show={modalShow}
          onHide={handleCloseModal}
          title={selectedJob?.jobTitle}
          description={selectedJob?.jobDescription}
          applyDate={selectedJob?.ApplyBy}
        />
    </div>
  );
};

export default SearchJob;
