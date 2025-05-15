import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import PdfForm from "./PdfForm";

function PdfSection() {
  return (
    <>
      <NavBar className="shadow-lg" />
      <Container className="sfondo-pdf" fluid>
        <PdfForm className="mt-1" />
      </Container>
    </>
  );
}

export default PdfSection;
