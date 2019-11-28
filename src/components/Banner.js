import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import BannerImage from '../assets/banner.jpg';


const Styles = styled.div`

    .container-fluid{
        padding: 35px;
        background-size:cover;
        background-repeat : no-repeat;
        background-position : center;
        background: linear-gradient(359.71deg, #FFFFFF -164.45%, rgba(255, 255, 255, 0) 17.36%), rgba(33, 35, 44, 0.9);
        mix-blend-mode: normal; 
    }

    h3{
        Color: #FFFFFF;
        text-transform: uppercase;
        font-weight:bold;
        margin:0px;
    }
    
    .nav-link{
        Color:#FDC624;
        font-size:13px;
        text-decoration:none;
        margin:0px 5px;
        padding: 2px;
    }

    .active{
        Color:#FFFFFF;
    }

`;

export const Banner = () => (
    <Styles>
         <Container fluid={true} style={{backgroundImage:`url(${BannerImage})`}}>
             <Container>
                 <Row className="align-items-center">
                     <Col xs={12} md={8}>
                        <h3 className="">Premier League</h3>
                     </Col>
                     <Col xs={12} md={4}>
                        <Row >
                        <Nav.Link href="/home">Home ></Nav.Link>
                        <Nav.Link href="/home">Brand ></Nav.Link>
                        <Nav.Link href="/home" className="active">Crumbs</Nav.Link>
                        </Row>
                     </Col>
                 </Row>
             </Container>
         </Container>
    </Styles>
);