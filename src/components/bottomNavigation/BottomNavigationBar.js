import React from 'react';
import {Container, Form, FormControl, Button, InputGroup, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {Styles} from "./Styles";

export const BottomNavigationBar = () => (

    <Styles>
         <Container fluid={true} >
            <Container>
                <Row>
                    <Link to="/tables/CL" className="nav-link">uefa</Link>
                    <Link to="/tables/PL" className="nav-link">epl</Link>
                    <Link to="/tables/WLC" className="nav-link">super cup</Link>
                    <Link to="/" className="nav-link">Liga bbva</Link>
                    <Link to="/" className="nav-link">world cup</Link>
                    <Link to="/" className="nav-link">npl</Link>
                    <Link to="/" className="nav-link">Features</Link>
                    <Link to="/" className="nav-link">nation league</Link>
                    <Link to="/" className="nav-link">archive</Link>
                    <Form inline>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <Button><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup>
                    </Form>
                </Row>
            </Container>
         </Container>
    </Styles>

);