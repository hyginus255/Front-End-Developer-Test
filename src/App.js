import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from  './About';
import {DefaultNotFound} from  './DefaultNotFound';
import {TopNavigationBar} from './components/TopNavigationBar';
import {NavigationBar} from './components/NavigationBar';
import {BottomNavigationBar} from './components/BottomNavigationBar';
import {Banner} from './components/Banner';

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
          <Route path="/about" component={About}/>
          <Route component={DefaultNotFound}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
