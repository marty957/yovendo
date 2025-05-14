import { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function ModalAddFirm(props) {
  const [organization, setOrganization] = useState({ name: "", whatsappNumber: "" });
  const addFirm = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/whatsapp/organizations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: organization.name,
        whatsappNumber: organization.whatsappNumber
      })
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((data) => {
        if (data) {
          setOrganization({ name: "", whatsappNumber: "" });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Ops something went wrong!");
      });
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Form onSubmit={addFirm}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="Organization's name">
            <Form.Label>Organization's name</Form.Label>
            <Form.Control
              required
              type="text"
              value={organization.name}
              onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
              placeholder="Organization's name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="whatsappNumber">
            <Form.Label>Whatsapp Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="whatsappNumber"
              value={organization.whatsappNumber}
              onChange={(e) => setOrganization({ ...organization, whatsappNumber: e.target.vale })}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <button type="submit" className="button_two p-2">
            Register
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default ModalAddFirm;
