import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PdfForm() {
  return (
    <Container className="addPdf">
      <h2 className="text-center my-3">ADD YOUR FILE: </h2>
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control type="email" placeholder="+12345678998" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your PDF</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <button type="submit" className="button p-1" style={{ borderRadius: "5px", backgroundColor: "#325bc273", cursor: "pointer" }}>
          UPLOAD
        </button>
      </Form>
    </Container>
  );
}

export default PdfForm;
