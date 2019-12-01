import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import {Styles} from './Styles';

export const NavigationBar = () => (
    <Styles>
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt={`Logo`}></img>
                </Link>
                <h5>BW FOOTBALL CLUB</h5>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">News</Nav.Link>
                        <Nav.Link href="#pricing">Results</Nav.Link>
                        <Nav.Link href="#pricing">Tables</Nav.Link>
                        <Nav.Link href="#pricing">Tips</Nav.Link>
                        <Nav.Link href="#pricing">features</Nav.Link>
                        <Nav.Link href="#pricing">about</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </Styles>
);