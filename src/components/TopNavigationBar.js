import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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

  .social-icons{
      padding:2px 4px;
      color:#808084;
      font-family: 'Poppins', sans-serif;
  }

  .social-icons:hover{
      color:#FFFFFF;
      cursor:pointer;
      text-decoration:none;
  }

`;

export const TopNavigationBar = () => (
    <Styles>
         <Container fluid={true}>
             <Container>
                 <Row>
                    <Col md={4} className="d-flex align-items-md-start">
                        <a href="https://www.facebook.com" className="social-icons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://twitter.com" className="social-icons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com" className="social-icons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.youtube.com" className="social-icons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                        <span style={{margin:'0px 4px'}}>Contact Us</span>
                        <span style={{margin:'0px 4px'}}>Donations</span>
                    </Col>
                    <Col md={{span:4, offset:4}} className="d-flex align-items-md-start">
                        <span style={{color:'#FFFFFF', marginRight:'8px'}}>Currency : <span style={{color:'#FDC624'}}>USD</span></span>
                        <a href="/register" className="social-icons" target="_blank" rel="noopener noreferrer"><span style={{color:'#FDC624'}}><FontAwesomeIcon icon={faLock} className="mx-2"/> Sign Up</span></a> or 
                        <a href="/login" className="social-icons" target="_blank" rel="noopener noreferrer"><span style={{color:'#FFFFFF'}}>Login</span></a>
                    </Col>                    
                 </Row>
             </Container>
         </Container>
    </Styles>
);