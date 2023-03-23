import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const ContactForm = () => {
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showInvalidEmailError, setShowInvalidEmailError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if name is empty
    if (!formData.name) {
      setShowNameError(true);
      return;
    } else {
      setShowNameError(false);
    }

    // Check if email is empty or not valid
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email) {
      setShowEmailError(true);
      setShowInvalidEmailError(false);
      return;
    } else if (!emailRegex.test(formData.email)) {
      setShowEmailError(false);
      setShowInvalidEmailError(true);
      return;
    } else {
      setShowEmailError(false);
      setShowInvalidEmailError(false);
    }

    // Send form data to server
    console.log(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => {
              if (!formData.name) {
                setShowNameError(true);
              } else {
                setShowNameError(false);
              }
            }}
            isInvalid={showNameError}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => {
              const emailRegex = /^\S+@\S+\.\S+$/;
              if (!formData.email) {
                setShowEmailError(true);
                setShowInvalidEmailError(false);
              } else if (!emailRegex.test(formData.email)) {
                setShowEmailError(false);
                setShowInvalidEmailError(true);
              } else {
                setShowEmailError(false);
                setShowInvalidEmailError(false);
              }
            }}
            isInvalid={showEmailError || showInvalidEmailError}
          />
          <Form.Control.Feedback type="invalid">
            {showInvalidEmailError
              ? "Please enter a valid email address."
              : "Please enter your email address."}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Modal
        show={showNameError || showEmailError || showInvalidEmailError}
        onHide={() => {
          setShowNameError(false);
          setShowEmailError(false);
          setShowInvalidEmailError(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showNameError && <p>Please enter your name.</p>}
          {showEmailError && (
            <p>Please enter your email address.</p>
          )}
          {showInvalidEmailError && (
            <p>Please enter a valid email address.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowNameError(false);
              setShowEmailError(false);
              setShowInvalidEmailError(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactForm;
