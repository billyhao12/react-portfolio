import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {

    return (
        <Navbar bg="light" expand="lg">

        <Navbar.Brand href="/">Billy Hao</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                <NavDropdown.Item href="https://drive.google.com/file/d/1W8tBUCCJKJ2OBwLu4aSqw7h-wykYvkHb/view?usp=sharing">Resume</NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>

        </Navbar.Collapse>

        </Navbar>
    )

}

export default Header;