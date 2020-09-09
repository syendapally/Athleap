import React, { Component } from 'react';
import './App.css';
import alogo from './athleap2.png';
class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="App-header">
          <img src={alogo} className="App-logo" alt="logo" />
          <h2>ATHLEAP</h2>
        </div>
        <div class="topnav">
    <a class="active" href="#join">JOIN</a>
    <a href="#sport">PICK YOUR SPORT</a>
    <a href="#blog">BLOG</a>
    <a href="#about">ABOUT ATHLEAP</a>
  </div>
        <br></br><br></br><br></br><br></br>
        <div className="button1">
          <p href="/investor">Investors Start Here</p>
        </div>
        <br></br><br></br><br></br><br></br>
        <div className="button2">
          <p href="/athlete">Athletes Start Here</p>
        </div>
      </div>
    );
  }
}

export default App;
