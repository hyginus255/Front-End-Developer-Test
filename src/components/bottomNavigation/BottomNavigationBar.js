import React from 'react';
import {Container, Form, FormControl, Button, InputGroup, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {Styles} from "./Styles";

export const BottomNavigationBar = () => (

    <Styles>
         <Container fluid={true} >
            <Container>
                <Nav>
                    <Nav.Link href="/tables/CL">uefa</Nav.Link>
                    <Nav.Link href="/tables/PL">epl</Nav.Link>
                    <Nav.Link href="/">Liga bbva</Nav.Link>
                    <Nav.Link href="/tables/2120">super cup</Nav.Link>
                    <Nav.Link href="/tables/WC">world cup</Nav.Link>
                    <Nav.Link href="/tables/2191">npl</Nav.Link>
                    <Nav.Link href="/tables/SPL">Premier League</Nav.Link>
                    <Form inline>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <Button><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup>
                    </Form>
                </Nav>
            </Container>
         </Container>
    </Styles>

);