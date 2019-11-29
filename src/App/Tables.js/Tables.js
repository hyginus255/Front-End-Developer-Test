import React from 'react';
import axios from 'axios';
import {Container, Alert, Row, Col, Table, Nav} from 'react-bootstrap';
import styled from 'styled-components';



class Tables extends React.Component {

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
        this.getTables();
    }

    //calls the endpoint for a competition based on competition code and then update the state.
    getTables = () => {
        axios
        .get("https://api.football-data.org/v2/competitions/" + this.state.code + "/standings?standingType=HOME", {
            headers: {'X-Auth-Token': '770c55fbb47141f785e8bcb3fe1b40a7'}
        })
        .then(
            (result) =>{
                this.setState({
                    error: null,
                    isLoaded: true,
                    data : result.data.standings
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
                    <Col md={12} className="mb-3 p-0">
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href={`/tables/${code}`} className="active">Tables</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">Features</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>
                    {isLoaded ? 
                        data.map(result => (
                            <Row>
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
                                                <tr>
                                                    <td>{table.position}</td>
                                                    <td><img src={table.team.crestUrl} width={20}/></td>
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
                        <p style={{textAlign:'center',color:'#b89120'}}>Loading...</p>
                    }
                </Container>
            </Styles>
        );
    }
}

export default Tables;


const Styles = styled.div`
    tr, th, td{
        border:none!important;
    }

    .nav-link{
        color:#688090;
        text-decoration:none;
        text-transform: uppercase;
        font-size:14px;
        padding: 5px 40px;
        border-right: 1px solid #688090;
        font-weight: 900;
        margin:2px;
    }

    .active{
        background-color:#688090;
        color:#ffff;
    }

    .nav-link:hover{
        background-color: #688090;
        color: #fff;
    }

    .group-heading{
        font-size:13px;  
        color: #fff;
        background-color: #25252F;
    }
`;