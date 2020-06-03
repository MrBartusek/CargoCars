import React, { Component } from 'react';
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
					<Nav className="justify-content-end ml-auto">
						<Nav.Link href="https://github.com/MrBartusek/CargoCars" target='_blank' rel="noopener noreferrer">
							<FaGithub color="white" size="1.2em" />
						</Nav.Link> 
					</Nav>
				</Navbar>
			</header>
		);
	}
}
