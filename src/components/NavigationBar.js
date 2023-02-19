import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movie Database</Navbar.Brand>
        <Nav.Link href="/" style={{ color: "white" }}>
          Movies
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
