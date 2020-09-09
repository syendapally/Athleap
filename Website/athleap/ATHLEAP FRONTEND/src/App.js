import React, { Component } from 'react';
import './App.css';
import ListAthleteComponent from './components/ListAthleteComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateAthleteComponent from './components/CreateAthleteComponent';
import HomeComponent from './components/HomeComponent';
import CreateInvestorComponent from './components/CreateInvestorComponent';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
              <Route path="/" exact component={HomeComponent}></Route>
              <Route path="/home" component={HomeComponent}></Route>
              <Route path="/athletes" component={ListAthleteComponent}></Route>
              <Route path ="/investors"component={CreateInvestorComponent}></Route>
              <Route path="/add-athlete" component={CreateAthleteComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
        </Router>
      </div>
    );
  }
}

export default App;