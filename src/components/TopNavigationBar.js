import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Styles = styled.div`

    .container-fluid{
        background-color:#25252F;
        color: #FFFFFF;
        padding: 7px;
        text-align:center;
        font-size: 12px;
    }

    .nav-link{
        padding:2px 5px;
        color:#808084;
        font-family: 'Poppins', sans-serif;
    }

    .nav-link:hover{
        color:#FFFFFF;
        cursor:pointer;
        text-decoration:none;
    }

    @media(max-width:480px){
        .content-right, .content-left{
            justify-content: center !important;
        }
    }

`;

export const TopNavigationBar = () => (
    <Styles>
         <Container fluid={true}>
             <Container>
                 <Row>
                    <Col md={4}>
                        <Row className="align-items-center content-left">
                            <Nav.Link href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                            <Nav.Link href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                            <Nav.Link href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
                            <Nav.Link href="/#" style={{color:'#FFFFFF'}}>| Contact Us |</Nav.Link>
                            <Nav.Link href="/#" style={{color:'#FFFFFF'}}>Donations</Nav.Link>
                        </Row>
                    </Col>
                    <Col md={{span:4, offset:4}}>
                        <Row className="align-items-center justify-content-end content-right">
                            <Nav.Link href="/#" style={{color:'#FFFFFF'}}>| Currency : <span style={{color:'#FDC624'}}>USD</span> |</Nav.Link>
                            <Nav.Link href="/#" style={{color:'#FDC624'}}><FontAwesomeIcon icon={faLock} className="mx-1"/> Sign Up</Nav.Link>
                            <Nav.Link href="/#" style={{color:'#FFFFFF'}}>or Login</Nav.Link>
                        </Row>
                    </Col>                    
                 </Row>
             </Container>
         </Container>
    </Styles>
);