import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function JobDetailModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title} Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>Job Description:</b> <p>{props.description}</p>
        <p>
          <b>Apply By:</b> {props.applyDate}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <a href="/apply">
          <Button variant="primary">Apply Now</Button>
        </a>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
