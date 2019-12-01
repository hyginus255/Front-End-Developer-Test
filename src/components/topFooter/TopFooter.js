import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Styles} from './Styles';

export const TopFooter = () => (
    <Styles>
         <Container fluid={true}>
             <Container>
                 <Row className="align-items-center">
                    <Col md={8} xs={8}>Never miss the action from your winning team</Col>
                    <Col md={4} xs={4}>
                        <Row className="justify-content-center">
                            <Button>Explore More ></Button>
                        </Row>
                    </Col>
                 </Row>
             </Container>
         </Container>
    </Styles>
);