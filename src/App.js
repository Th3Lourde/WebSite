import React, { Component } from 'react';
import Header from './Modules/Header.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />

        </div>
      </div>
    );
  }
}

export default App;
