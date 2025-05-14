import { Container } from "react-bootstrap";

function Herosection() {
  return (
    <>
      <Container className="sfondo">
        <Container className="position-relative vibrate-1" style={{ height: "90vh" }}>
          <button className="position-absolute top-50 start-50 translate-middle p-3 button_two vibrate-1">ADD YUOR FIRM</button>
        </Container>
      </Container>
    </>
  );
}

export default Herosection;
