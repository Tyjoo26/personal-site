import React, { Component } from 'react';
import face from '../face.jpg'
import { Button} from 'reactstrap';
import '../App.css';

const link = {
  backgroundColor: '#F16E10',
  marginRight: '5px'
}

const git = {
  backgroundColor: '#F16E10'
}

class Home extends Component {
  render() {
    return(
      <div className="home-style">
        <img src={face} className="thumb"/>
        <div className="welcome-content">
          <h2 className="welcome">Timothy Y. Joo </h2>
            <Button style={link} bsStyle="primary" bSize="large">LinkedIn</Button>
            <Button style={git} bsStyle="primary" bSize="large">GitHub</Button>
        </div>
      </div>
    )
  }

}

export default Home;
