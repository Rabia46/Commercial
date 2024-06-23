 import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

export default function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="nav-link">
                    CARPORATE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact className="nav-link" activeClassName="active">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link" activeClassName="active">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="nav-link" activeClassName="active">
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/works" className="nav-link" activeClassName="active">
                            Works
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/teams" className="nav-link" activeClassName="active">
                            Teams
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/testimonials" className="nav-link" activeClassName="active">
                            Testimonials
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/pricing" className="nav-link" activeClassName="active">
                            Pricing
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className="nav-link" activeClassName="active">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link" activeClassName="active">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
