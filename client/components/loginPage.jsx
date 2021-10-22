import React, { Component }  from 'react';
import Pockets from '../../public/pls_finance_2.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect }  from "react-router-dom";
class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirect : false
    }
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login() {
    fetch('/api/user/login', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username: document.getElementById('username').value,          
              password: document.getElementById('password').value,
          })
      })
      .then(res => {
        if (res.status === 200) {  
          this.setState({ redirect: true });
        }
        else {
          alert('Login failed. Please try again!')
          window.location.reload()
        }
      })
      .catch(err => 
        console.log(err))
    }
            
  signup() {
      fetch('/api/user/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: document.getElementById('username').value,          
          password: document.getElementById('password').value,
      })
      })
      .then(res => {
        if (res.status === 200) {
          alert('Signup successful! Please log in with your new username/password.')
          window.location.reload()
        }
        else {
          alert('This username already exists. Please select a different username!')
          window.location.reload()
        }
      })
      .catch(err => 
        console.log(err));
      }
    
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/home'/>;
    }
  return (
      <div style={{textAlign: 'center'}}>
        <div>
          <img src={Pockets} style={{width: '500px'}}/>
        </div>
        <div style={{fontSize: '40px'}}>
        </div>
        <div>
          Username<br />
          <input type="text" id="username" />
        </div>
        <div>
          Password<br />
          <input type="password" id="password" />
        </div>
        <br />
        <button onClick={() => {this.login()}} >Log in</button><br />
        <button onClick={() => {this.signup()}} >Sign up</button><br />
      </div>
    );
  }
}

export default LoginPage;