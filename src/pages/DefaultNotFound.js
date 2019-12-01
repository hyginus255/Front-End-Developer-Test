import React from 'react';
import {Container} from 'react-bootstrap';

export const DefaultNotFound = () => (
    <Container className="py-5">
            <p style={{fontSize:'14px'}}><strong>ByteWork Football Club</strong></p>
            <hr/>
            <p style={{fontSize:'14px'}}>The page you are trying to access doesn't exist.</p>
            <a href="/">Go Home</a>
    </Container>
);