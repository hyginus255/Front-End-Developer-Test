import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from  './About';
import {DefaultNotFound} from  './DefaultNotFound';
import {TopNavigationBar} from './components/TopNavigationBar';

function App() {
  return (
    <React.Fragment>
      <TopNavigationBar></TopNavigationBar>
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
