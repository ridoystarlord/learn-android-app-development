import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <NavLink className="site-name fs-1 fw-bolder" to="/">
            App Development
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="top-menu-item fw-bold mx-3" to="/home">
              Home
            </NavLink>
            <NavLink className="top-menu-item fw-bold mx-3" to="/services">
              Services
            </NavLink>
            <NavLink className="top-menu-item fw-bold mx-3" to="/students">
              Students
            </NavLink>
            <NavLink className="top-menu-item fw-bold mx-3" to="/about-us">
              About Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
