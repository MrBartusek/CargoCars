import React, { Component } from "react";
import {Navbar, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default class Header extends Component 
{
  render() 
  {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Cargo Cars</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="https://github.com/MrBartusek/cargo-cars">
              <FaGithub color="white" size="1.2em" />
            </Nav.Link> 
          </Nav>
        </Navbar>
      </header>
    );
  }
}
