import React from 'react';
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Styles = styled.div`
    .container{
        padding:8px;
        font-family: 'Poppins', sans-serif;
    }
    .navbar{
        width:100%;
    }

    .navbar-light .navbar-brand , .navbar-light .navbar-nav .nav-link{
        color:#23262B;
        font-weight: bold;
        text-transform:uppercase;
        font-size:13px;
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={1} xs={12} className="d-flex justify-content-center px-2">
                    <img src={Logo} style={{height:'70px', width:'auto'}} alt={`Logo`}></img>
                </Col>
                <Col md={11} xs={12} className="d-flex align-items-center">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home" className="mr-5">BW Football Club</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">News</Nav.Link>
                                <Nav.Link href="#link">News</Nav.Link>
                                <Nav.Link href="#link">Results</Nav.Link>
                                <Nav.Link href="#link">Tables</Nav.Link>
                                <Nav.Link href="#link">Tips</Nav.Link>
                                <Nav.Link href="#link">Features</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    </Styles>
);