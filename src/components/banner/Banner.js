import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import BannerImage from '../../assets/banner.jpg';
import {Styles} from "./Styles";

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