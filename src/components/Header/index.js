import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function Header({ className }) {

    return (
        <Navbar bg="light" expand="lg" className={className}>

            <Navbar.Brand href="/">Billy Hao</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/contact" id="lastLink">Contact</Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )

}

export default Header;