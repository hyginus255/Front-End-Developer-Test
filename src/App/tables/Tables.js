import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Styles} from "./Styles";
import {Banner} from '../../components/banner/Banner';


class Tables extends React.Component {

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
        this.getTables();
    }

    //calls the endpoint for a competition based on competition code and then update the state.
    getTables = () => {
        axios
        .get(`https://api.football-data.org/v2/competitions/${this.state.code}/standings?standingType=HOME`, {
            headers: {'X-Auth-Token': '770c55fbb47141f785e8bcb3fe1b40a7'}
        })
        .then(
            (result) =>{
                this.setState({
                    error: null,
                    isLoaded: true,
                    data : result.data.standings,
                    competition : {competionName : `${result.data.competition.name}` , competitionCode : `${result.data.competition.code}`, competitionLink : `tables/${result.data.competition.code}` , feature : 'Tables'}
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
        const {data,isLoaded,code,error,competition} = this.state
        return(
            <React.Fragment>
                <Banner competitionName = {competition.competionName} link={competition.competitionLink} code={competition.competitionCode} feature={competition.feature}></Banner> 
                <Styles>
                    <Container className="py-5">
                        <Col md={12} className="mb-3 p-0 border">
                            <Row>
                                <Link to={`/tables/${code}`} className="nav-link active">tables</Link>
                                <Link to={`/fixtures/${code}`} className="nav-link">Fixtures</Link>
                            </Row>
                        </Col>
                        {isLoaded ? 
                            data.map(result => (
                                <Row key={result.group}>
                                <Col md={12}>
                                    <h2 className="group-heading p-3"><strong>{result.stage}</strong> : {result.group}</h2>
                                    <Table  responsive>
                                        <thead>
                                            <tr>
                                            <th>Position</th>
                                            <th></th>
                                            <th>Club</th>
                                            <th>Played</th>
                                            <th>Won</th>
                                            <th>Drawn</th>
                                            <th>Lost</th>
                                            <th>GF</th>
                                            <th>GA</th>
                                            <th>GD</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                result.table.map(table=>(
                                                    <tr key={table.position}>
                                                        <td>{table.position}</td>
                                                        <td><img src={table.team.crestUrl} width={20} alt="clud_img"/></td>
                                                        <td>{table.team.name}</td>
                                                        <td>{table.playedGames}</td>
                                                        <td>{table.won}</td>
                                                        <td>{table.draw}</td>
                                                        <td>{table.lost}</td>
                                                        <td>{table.goalsFor}</td>
                                                        <td>{table.goalsAgainst}</td>
                                                        <td>{table.goalDifference}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                                <hr/>
                            </Row>
                            ))
                        
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

export default Tables;


