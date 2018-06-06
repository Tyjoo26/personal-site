import React, { Component } from 'react';
import { Button} from 'reactstrap';

const portfolio = {
  marginLeft: "70%",
  marginTop: "12px",
  backgroundColor: "darkGrey",
  fontColor: "black"
}

class Nav extends Component {
  render() {
    return (
      <div className= "nav-style">
        <Button style={portfolio} bsStyle="primary" bSize="large">View My Portfolio</Button>
      </div>
    )
  }

}






export default Nav;
