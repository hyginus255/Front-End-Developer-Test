import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import BannerImage from '../assets/banner.jpg';


const Styles = styled.div`

    .container-fluid{
        padding: 35px;
    }

    h3{
        Color: #FFFFFF;
        text-transform: uppercase;
        font-weight:bold;
        margin:0px;
    }
    
    .default-breadcrumb a{
        Color:#FDC624;
        font-size:13px;
        text-decoration:none;
        margin:0px 5px;
    }

    .active a{
        Color:#FFFFFF;
    }

`;

export const Banner = () => (
    <Styles>
         <Container fluid={true} style={{backgroundImage:`url(${BannerImage})`}}>
             <Container>
                 <Row>
                     <Col xs={12} md={8}>
                        <h3 className="">Premier League</h3>
                     </Col>
                     <Col xs={12} md={4}>
                        <span className="default-breadcrumb"><a href="/">Home ></a></span>
                        <span className="default-breadcrumb"><a href="/">Brand ></a></span>
                        <span className="default-breadcrumb active"><a href="/">crumbs</a></span>
                     </Col>
                 </Row>
             </Container>
         </Container>
    </Styles>
);