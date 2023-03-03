import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Movie Database</Navbar.Brand>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Movies
        </Link>
        <Link
          to="/add-review"
          style={{ color: "white", textDecoration: "none" }}
        >
          Add Movie Review
        </Link>
      </Container>
    </Navbar>
    // <div>
    //   <Link to={"/"}>Movie Reviews</Link>
    //   <Link to={"/add-review"}>Add Review</Link>
    // </div>
  );
}
