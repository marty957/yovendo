import { useState } from "react";
import { Container } from "react-bootstrap";
import ModalAddFirm from "./ModalAddFirm";

function Herosection() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Container className="sfondo">
        <Container className="position-relative vibrate-1" style={{ height: "90vh" }}>
          <button className="position-absolute top-50 start-50 translate-middle px-5 py-4 button_two vibrate-1" onClick={() => setModalShow(true)}>
            ADD YUOR FIRM
          </button>
        </Container>
      </Container>
      <ModalAddFirm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Herosection;
