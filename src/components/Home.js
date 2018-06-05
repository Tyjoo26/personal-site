import React, { Component } from 'react';
import face from '../face.jpg'
import '../App.css';


class Home extends Component {
  render() {
    return(
      <div className="home-style">
        <img src={face} className="thumb"/>
        "Welcome to Tim's Personal Site!"
      </div>
    )
  }

}

export default Home;
