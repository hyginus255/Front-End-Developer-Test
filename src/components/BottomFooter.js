import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Styles = styled.div`
    .container-fluid{
        border-top: 1px solid #FFFFFF;
    }
    .flex-column a{
        padding:3px;
        color:#D1D1D3;
        font-size: 11.5px;
    }
    .copy-right-container{
        color: #FFFFFF;
        font-size: 11px;
        background-color: #2C2C36;
        padding:15px;
    }
    
    .footer-menu-heading{
        font-size : 13px;
    }

    .nav-link{
        padding:2px 5px;
        color:#C19129;;
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
    }

    .nav-link:hover{
        color:#1D2331;;
        cursor:pointer;
        text-decoration:none;
    }

    .footer-logo-container{
        background-color:#FDC624;
        padding: 50px 135px;
    }
    
    @media(max-width:480px){
        .footer-logo-container{
            padding: 10px 30px;
        }
    }
`;

export const BottomFooter = () => (
    <Styles>
         <Container fluid={true}>
             <Row>
                 <Col md={7} style={{backgroundColor: '#25252F'}}>
                    <Container className="p-3">
                        <Row>
                            <Col md={3} xs={6}>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h5 className="footer-menu-heading my-2 text-white text-uppercase font-weight-bold">About Us</h5>
                                    <Nav.Link href="/home">Laster News</Nav.Link>
                                    <Nav.Link eventKey="link-1">Players Room</Nav.Link>
                                    <Nav.Link eventKey="link-2">Media Gallery</Nav.Link>
                                    <Nav.Link eventKey="link-2">Facebook</Nav.Link>
                                    <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={3} xs={6}>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h5 className="footer-menu-heading my-2 text-white text-uppercase font-weight-bold">History</h5>
                                    <Nav.Link href="/home">Olympics</Nav.Link>
                                    <Nav.Link eventKey="link-1">FIFA 2019</Nav.Link>
                                    <Nav.Link eventKey="link-2">NFL 2019</Nav.Link>
                                    <Nav.Link eventKey="link-2">NBA 2019</Nav.Link>
                                    <Nav.Link eventKey="link-2">Boxing</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={3} xs={6}>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                     <h5 className="footer-menu-heading my-2 text-white text-uppercase font-weight-bold">Information</h5>
                                    <Nav.Link href="/home">Terms and Condtions</Nav.Link>
                                    <Nav.Link eventKey="link-1">Privacy Policy </Nav.Link>
                                    <Nav.Link eventKey="link-2">Sitemap</Nav.Link>
                                    <Nav.Link eventKey="link-2">FAQ</Nav.Link>
                                    <Nav.Link eventKey="link-2">Account</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={3} xs={6}>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h5 className="footer-menu-heading my-2 text-white text-uppercase font-weight-bold">Support</h5>
                                    <Nav.Link href="/home">Terms and Conditions</Nav.Link>
                                    <Nav.Link eventKey="link-1">Privacy Policy</Nav.Link>
                                    <Nav.Link eventKey="link-2">Sitemap</Nav.Link>
                                    <Nav.Link eventKey="link-2">FAQ</Nav.Link>
                                    <Nav.Link eventKey="link-2">Account</Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                    <Row className="copy-right-container">
                        <Container>
                            @ All Rights reserved.
                        </Container>
                    </Row>
                 </Col>
                 <Col md={5} className="footer-logo-container">
                    <Row>
                        <Container>
                            <Row className="align-items-center">
                                <img src={Logo} style={{height:'70px'}} alt={`Logo`}></img>
                                <span className="font-weight-bold text-uppercase">BW Football Club</span>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="align-items-center mt-md-3">
                                <span className="mr-3 font-weight-bold">Follow Us :</span>
                                <Nav.Link href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                                <Nav.Link href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                                <Nav.Link href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                                <Nav.Link href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
                            </Row>
                        </Container>
                    </Row>
                 </Col>
             </Row>
         </Container>
    </Styles>
);