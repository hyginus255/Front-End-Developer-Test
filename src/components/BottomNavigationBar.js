import React from 'react';
import {Container, Nav, Form, FormControl, Button, InputGroup} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Styles = styled.div`

    .container-fluid{
        border : 1px solid #E5E5E5;
        background-color: #FFFFFF;
        box-shadow : 0px 1px 2px rgba(0, 0, 0, 0.15);
        padding:0px;
    }

    .nav a:hover{
        background-color: #D1D1D3;
    }

    .nav-link{
        border : 1px solid #ECECEC;
        color: #23262B;
        font-weight: bold;
        text-transform:uppercase;
        font-size:12px;
        flex-grow: 1;
    }

    .form-control{
        border:none;
        color:#D1D1D3;
        font-size:14px;
        border : 1px solid #ECECEC;
        margin:0;
        border-radius:0;
    }

    .btn{
        border : 1px solid #ECECEC;
        background-color: #FFFFFF;
        color:#000000;
        border-right: 1px solid #ECECEC;
        font-size:14px;
        margin:0;
        border-radius:0;
    }

    .btn:hover{
        background-color: #D1D1D3;
    }

    @media(max-width:480px){
        
        .nav-link{
            // flex-grow: 1;
        }

        .container{
            padding:0px;
            display:none!important;
        }
    }

    @media(min-width: 780px){
        .nav{
            display:flex;
            justify-content: flex-start;
        }
    }

`;

export const BottomNavigationBar = () => (

    <Styles>
         <Container fluid={true} >
            <Container>
            <Nav>
                <Nav.Link href="/tables/CL">uefa</Nav.Link>
                <Nav.Link href="/tables/PL">epl</Nav.Link>
                <Nav.Link href="#home">Liga bbva</Nav.Link>
                <Nav.Link href="/tables/WLC">super cup</Nav.Link>
                <Nav.Link href="#link">world cup</Nav.Link>
                <Nav.Link href="#link">npl</Nav.Link>
                <Nav.Link href="#link">Features</Nav.Link>
                <Nav.Link href="#link">nation league</Nav.Link>
                <Nav.Link href="#link">archive</Nav.Link>
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