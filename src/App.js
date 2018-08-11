import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import web3 from "./Components/web3.js";

import './App.css';
import Dashboard from './Components/Dashboard';
import ViewTransactions from './Components/ViewTransactions';
import AboutUs from './Components/AboutUs/index.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          account: "",
          loggedIn: false
      }
      this.changeAccount = this.changeAccount.bind(this);
      this.changeStatus = this.changeStatus.bind(this);
  }
    changeAccount(value){
      this.setState({account:value})
    }
    changeStatus(value){
        var newValue = value
        this.setState({loggedIn:newValue})
    }
  
    componentDidMount(){
      var that = this
      web3.eth.getAccounts(function(error,result) {
          if(!result || result.lenght <= 0){
              that.changeStatus(false);
          }
          else if(result.length>0)
          {   
              that.changeStatus(true);
              that.changeAccount(result[0]);
          }
      });        
    }
    render() {
      const navLoggedIn = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>      
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/viewTransactions">View Transactions</Link>
          </li>
          <li>
            <Link to="#">Logout</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      )
      const navLoggedOut = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>      
            <Link to="/#">Login</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      )
      const nav = (
        this.state.loggedIn ? navLoggedIn : navLoggedOut
      )
      const Homepage = () => (
        <div>
          <h2>Intro Here.</h2>
        </div>
      );
      return (
        <div className="App">
          <Router>
          <div>
            <nav>
              <div className="nav-wrapper" style={{backgroundColor: '#062d4c'}}>
                <a href="#" style={{float: 'left', fontSize: '4em', marginLeft: '0.5em', marginTop: '0.052em'}}>ews</a>
                {nav}
              </div>
            </nav>
            <Route exact path="/" component={Homepage} />  
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/viewTransactions" component={ViewTransactions} />
            <Route path="/about" component={AboutUs} />
          </div>
          </Router>
        </div>
      );
    }
}

export default App;
