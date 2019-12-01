import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {DefaultNotFound} from  './pages/DefaultNotFound';
import {TopNavigationBar} from './components/topNavigationBar/TopNavigationBar';
import {NavigationBar} from './components/navigationBar/NavigationBar';
import {BottomNavigationBar} from './components/bottomNavigation/BottomNavigationBar';
import {Banner} from './components/banner/Banner';
import {TopFooter} from './components/topFooter/TopFooter';
import {BottomFooter} from './components/bottomFooter/BottomFooter';
import Tables from './App/tables/Tables';
import Fixtures from './App/fixtures/Fixtures';

function App() {
  return (

    <React.Fragment>

      <TopNavigationBar></TopNavigationBar>
      <NavigationBar></NavigationBar>
      <BottomNavigationBar></BottomNavigationBar>      
      <Banner></Banner>  

        
      {/* <Router>  */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tables/:code" component={Tables}/>
          <Route path="/fixtures/:code" component={Fixtures}/>
          <Route component={DefaultNotFound}/>
        </Switch>
      {/* </Router> */}

      <TopFooter></TopFooter>  
      <BottomFooter></BottomFooter> 

    </React.Fragment>  
    
  );

}

export default App;
