import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function PdfForm() {
  const [pdf, setPdf] = useState({ telephone: "", file: null });
  const addPdf = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("whatsappNumber", pdf.telephone);
    if (pdf.file) {
      formData.append("file", pdf.file);
    }

    fetch(`http://localhost:8080/api/whatsapp/upload`, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        if (response) {
          alert("PDF uploaded correctly");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("OPS something went wrong!");
      });
  };

  return (
    <Container className="addPdf">
      <h2 className="text-center my-3">ADD YOUR FILE: </h2>
      <Form className="p-5" onSubmit={addPdf}>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Telephone Number</Form.Label>
          <Form.Control type="text" placeholder="+12345678998" required value={pdf.telephone} onChange={(e) => setPdf({ ...pdf, telephone: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your PDF</Form.Label>
          <Form.Control type="file" accept="application/pdf" onChange={(e) => setPdf({ ...pdf, file: e.target.files[0] })} />
        </Form.Group>
        <button type="submit" className="button p-2" style={{ borderRadius: "8px", backgroundColor: "#325bc273", cursor: "pointer" }} required>
          UPLOAD
        </button>
      </Form>
    </Container>
  );
}

export default PdfForm;
