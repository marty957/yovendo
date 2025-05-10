import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PdfForm() {
  return (
    <Container className="addPdf">
      <h3 className="text-center my-3">ADD YOUR FILE: </h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default PdfForm;
