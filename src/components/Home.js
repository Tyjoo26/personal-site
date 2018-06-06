import React, { Component } from 'react';
import face from '../face.jpg'
import { Button} from 'reactstrap';
import '../App.css';

const link = {
  backgroundColor: "#38B0DE",
  marginRight: '10px',
  marginLeft: "23%"
}

const git = {
  backgroundColor: '#DDA0DD	',
  marginLeft: "5%"
}

class Home extends Component {
  render() {
    return(
      <div className="home-style">
        <img src={face} className="thumb"/>
        <div className="welcome-content">
          <h2 className="welcome">Timothy Y. Joo </h2>
          <p className="welcome-text"> Software Developer with an emphasis on Ruby on Rails and JavaScript. </p>
          <p className="welcome-text-1">Open to learning new languages, libraries, and frameworks! </p>
            <Button style={link} bsStyle="primary" bSize="large">LinkedIn</Button>
            <Button style={git} bsStyle="primary" bSize="large">GitHub</Button>
        </div>
      </div>
    )
  }

}

export default Home;
