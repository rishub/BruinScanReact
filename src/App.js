import React, { Component } from 'react';
import './styles/App.css';
import Scan from './routes/Scan.js'
import logo from './images/logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="header">

          <a href="/"><img src={logo} className="logo" alt="logo"/></a>
          <div className="links">
            <a href="/scanner1">Scan</a>
            <a href="/account">Account</a>
            <a href="/manage">Manage</a>
            <a href="/contact">Contact</a>
            <a href="/logout/">Logout</a>
          </div>

          {/* TODO: add username and logout button here */}

        </div>
        
        <div hidden className="loader"></div>

        <Scan />



      </div>
    );
  }
}

export default App;
