import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav'
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
