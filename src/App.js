import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {DefaultNotFound} from  './pages/DefaultNotFound';
import {TopNavigationBar} from './components/TopNavigationBar';
import {NavigationBar} from './components/NavigationBar';
import {BottomNavigationBar} from './components/BottomNavigationBar';
import {Banner} from './components/Banner';
import {TopFooter} from './components/TopFooter';
import {BottomFooter} from './components/BottomFooter';
import Tables from './App/tables/Tables';
import Fixtures from './App/fixtures/Fixtures';

function App() {
  return (

    <React.Fragment>

      <TopNavigationBar></TopNavigationBar>
      <NavigationBar></NavigationBar>
      <BottomNavigationBar></BottomNavigationBar>      
      <Banner></Banner>  

        
      <Router> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tables/:code" component={Tables}/>
          <Route path="/fixtures/:code" component={Fixtures}/>
          <Route component={DefaultNotFound}/>
        </Switch>
      </Router>

      <TopFooter></TopFooter>  
      <BottomFooter></BottomFooter> 

    </React.Fragment>  
    
  );

}

export default App;
