import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt , faClock, faLink} from '@fortawesome/free-solid-svg-icons'



class Fixtures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            code : props.match.params.code,
            data: []
        };
    }

    componentDidMount() {
        this.getFixtures();
    }

    /**calls the endpoint and gets the fixtures for a particular
    **competition based on a competition code.
    **/
    getFixtures = () => {
        axios
        .get(`https://api.football-data.org/v2/competitions/${this.state.code}/matches`, {
            headers: {'X-Auth-Token': '770c55fbb47141f785e8bcb3fe1b40a7'}
        })
        .then(
            (result) =>{
                this.setState({
                    error: null,
                    isLoaded: true,
                    data : result.data.matches
                });
            }
        )
        .catch(err => {
            this.setState({
                error: 'Cannot connect to api'
            })
            console.log(err);
            return null;
        });
    }

     

    render(){
        const {data,isLoaded,code} = this.state
        return(
            <Styles>
                <Container className="py-5">
                    <Col md={12} className="mb-3 p-0 border">
                        <Nav defaultActiveKey="#/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href={`/tables/${code}`}>Tables</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={`/fixtures/${code}`} className="active">Features</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link href={`/fixtures/${code}`}>Teams</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                    </Col>
                    {isLoaded ? 
                        <Container>
                            <Row>
                                {data.map(result => (
                                   <Col md={4} sm={6} xs={12} className="fixture-container my-2" key={result.id}>
                                        <Row>
                                            <Col md={8} xs={8}>
                                                <Row className="p-1 align-items-center">
                                                    <span className="ml-3">{result.homeTeam.name} : </span>
                                                    <span className="ml-1"><strong>{result.score.fullTime.homeTeam}</strong></span>
                                                </Row>
                                                <Row className="p-1 align-items-center">
                                                    <span className="ml-3">{result.awayTeam.name} : </span>
                                                    <span className="ml-1"><strong>{result.score.fullTime.awayTeam}</strong></span>
                                                </Row>
                                            </Col>
                                            <Col md={4} xs={4} className="d-flex align-items-center">
                                                <Row >
                                                    <Col md={12} xs={12} ><FontAwesomeIcon icon={faCalendarAlt} style={{color:"#688090"}} /> { new Date(result.utcDate).toLocaleDateString()}</Col>
                                                    <Col md={12} xs={12} ><FontAwesomeIcon icon={faClock} style={{color:"#688090"}} /> { new Date(result.utcDate).toLocaleTimeString()}</Col>
                                                    <Col className="text-center"><a href={`/match/${result.id}`}><FontAwesomeIcon icon={faLink} style={{color:"#688090",}} /></a></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    : 
                        <p style={{textAlign:'center',color:'#b89120'}}>Loading...</p>
                    }
                </Container>
            </Styles>
        );
    }
}

export default Fixtures;


const Styles = styled.div`

    .nav-link{
        color:#688090;
        text-decoration:none;
        text-transform: uppercase;
        font-size:14px;
        padding: 5px 40px;
        font-weight: 900;
        margin:0px;
        letter-spacing: 0.0357143em;
    }

    .active{
        background-color:#688090;
        color:#ffff;
    }

    .nav-link:hover{
        background-color: #688090;
        color: #fff;
        border-right:1px #FFFFFF solid;
        border-left:1px #FFFFFF solid;
    }

    .fixture-container{
        border: 0.5px solid #E5E5E5;
        background-color: #FFFFFF;
        padding:15px;
        margin:0px;
        font-size: 13px;
        color: #23262B;
        font-weight:300px;s
    }
`;