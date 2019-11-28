import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .container-fluid{
        background-color: #2F2F39;
        padding : 20px;
        color: #FFFFFF;
        font-size: 16px;
    }

    button{
        border: 1px solid #E8C75E;
        background: #FEC820;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
        border-radius: 2px;
        font-size:14px;
        color: rgba(1, 1, 1, 0.8);
    }

    button:hover{
        background: #cdb052;
        color: rgba(1, 1, 1, 0.8);
        border: 1px solid #cdb052;
    }
`;

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