import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavBar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <center>
        {/* <Link to={ loginLocation}><button>Login</button></Link> */}
        <Link to='/'><button>Login</button></Link>
        {/* <Link to="/home"><button>Home</button></Link> */}
        <Link to="/home"><button>Home</button></Link>
        <Link to='/'><button>Sign Out</button></Link>

        </center>
      </div>
  )
  }
}

export default NavBar;