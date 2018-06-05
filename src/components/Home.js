import React, { Component } from 'react';
import face from '../face.jpg'
import '../App.css';


class Home extends Component {
  render() {
    return(
      <div className="home-style">
        <img src={face} className="thumb"/>
        <h2 className="welcome">Timothy Y. Joo </h2>
      </div>
    )
  }

}

export default Home;
