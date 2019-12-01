import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Styles} from './Styles';

export const TopNavigationBar = () => (
    <Styles>
         <Container fluid={true}>
             <Container>
                 <Row>
                    <Col md={4}>
                        <Row className="align-items-center content-left">
                            <Nav.Link href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                            <Nav.Link href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                            <Nav.Link href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
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