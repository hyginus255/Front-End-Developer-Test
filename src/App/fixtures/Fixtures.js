import React from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt , faClock, faLink} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {Styles} from "./Styles";
import {Banner} from '../../components/banner/Banner';



class Fixtures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            code : props.match.params.code,
            data: [],
            competition : {},
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
                    data : result.data.matches,
                    competitionName : result.data.competition.name,
                    competition : {competionName : `${result.data.competition.name}` , competitionCode : `${result.data.competition.code}`, competitionLink : `tables/${result.data.competition.code}` , feature : 'Fixtures'}
                });
            }
        )
        .catch(err => {
            this.setState({
                error: 'Cannot connect to API.'
            })
            console.log(err);
            return null;
        });
    }     

    render(){
        const {data,isLoaded,code,error, competition} = this.state
        return(
            <React.Fragment>
                <Banner competitionName = {competition.competionName} link={competition.competitionLink} code={competition.competitionCode} feature={competition.feature}></Banner>
                <Styles>
                    <Container className="py-5">
                        <Col md={12} className="mb-3 p-0 border">
                            <Row>
                                <Link to={`/tables/${code}`} className="nav-link">tables</Link>
                                <Link to={`/fixtures/${code}`} className="nav-link active">Fixtures</Link>
                            </Row>
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
                        error ? 
                            <p style={{textAlign:'center',color:'#b89120'}}>{error}</p> 
                        : 
                            <p style={{textAlign:'center',color:'#b89120'}}>Loading...</p>
                        }
                    </Container>
                </Styles>
        </React.Fragment>
        );
    }
}

export default Fixtures;
