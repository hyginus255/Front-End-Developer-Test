import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BannerImage from '../../assets/banner.jpg';
import {Styles} from "./Styles";
import {Link} from "react-router-dom";

export const Banner = (props) => (
    <Styles>
         <Container fluid={true} style={{backgroundImage:`url(${BannerImage})`}}>
             <Container>
                 <Row className="align-items-center">
                     <Col xs={12} md={8}>
                        <h3 className="">{props.competitionName}</h3>
                     </Col>
                     <Col xs={12} md={4}>
                        <Row >
                            <Link to="/" className="nav-link">Home ></Link>
                            <Link to={`/${props.link}`} className="nav-link">{props.code} ></Link>
                            <Link to="#" className="nav-link active">{props.feature}</Link>
                        </Row>
                     </Col>
                 </Row>
             </Container>
         </Container>
    </Styles>
);