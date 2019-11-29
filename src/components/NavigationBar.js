import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Styles = styled.div`

    .container{
        padding:0px;
    }

    .navbar-brand img{
        height: 70px;
        width: auto;
    }

    .navbar h5{
        color:red;
        margin-bottom:0px;
        color: #000000;
        font-weight: 500;
        font-size: 18px;
    }

    .navbar-brand{
        margin-right:5px;
    }

    .navbar-light .navbar-brand , .navbar-light .navbar-nav .nav-link{
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        color: #23262B;
        text-transform : uppercase;
    }

    @media(max-width:480px){
        .container{
            padding:0px;
        }
        .navbar-nav{
            padding: 5px;
        }
    }

`;

export const NavigationBar = () => (
    <Styles>
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/">
                    <img src={Logo} alt={`Logo`}></img>
                </Navbar.Brand>
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