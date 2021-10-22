import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar.jsx';
import LoginPage from './components/loginPage.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect }  from "react-router-dom";
import MainContainer from './containers/mainContainer.jsx';
class App extends Component {
    constructor(){
        super()
    };
    

    render() {
    // if user is not logged in:
        return (
            <>
            {/* <NavBar signout={this.signout} login={this.login}/> */}
            <Switch>
                <Route path = '/' exact> <LoginPage login = {this.login}/> </Route>
                <Route path = '/home' component={MainContainer} />
            </Switch>
            </>
        )
    } // end of render    
}

ReactDOM.render(<Router> <App /> </Router>, document.getElementById("root"))