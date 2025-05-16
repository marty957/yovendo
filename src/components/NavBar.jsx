import { Image, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-lg">
      <Container>
        <Navbar.Brand href="#">
          <Image src="../public/logo.png" alt="yovendo logo" width={"120px"} roundedCircle />
        </Navbar.Brand>
        <Nav className="me-auto">
          <div className="d-inline-block">
            <Nav.Link className="d-inline-block me-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="d-inline-block" href="/addPdf">
              Your profile
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
