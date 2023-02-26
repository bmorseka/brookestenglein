import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ maxHeight: "100px" }}
            navbarScroll
            id="navbar-container"
          >
            <Nav.Link href="#about-me-container">About Me</Nav.Link>
            <Nav.Link href="#edu-container">Education</Nav.Link>
            <Nav.Link href="#projects-container">Projects</Nav.Link>
            <Nav.Link href="#skills-container">Skills</Nav.Link>
            <Nav.Link href="#contact-container">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
