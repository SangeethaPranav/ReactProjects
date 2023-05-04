import React, { useState } from "react";
import { Navbar, Button, Modal } from "react-bootstrap";
const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Navbar expand={"sm"}>
        <Navbar.Brand>Ecommerce Store </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => setShowCart(true)} className="primary">
            Cart (0 items)
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showCart} onHide={() => setShowCart(false)}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>There is no item in a cart!</p>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};
export default NavbarComponent;
