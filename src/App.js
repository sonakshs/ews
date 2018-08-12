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
      this.toggleLogoutClass = this.toggleLogoutClass.bind(this);
      this.toggleLoginClass = this.toggleLoginClass.bind(this);
    }
   
    toggleLogoutClass() {
      var modalClass = document.getElementById('logoutModal').style.display
      if(!modalClass || modalClass === "none")
        document.getElementById('logoutModal').style.display = "block";
      setTimeout(function() { 
        document.getElementById("logoutModal").style.display = "none"; 
      }, 
      2000);
    }
    toggleLoginClass() {
      var modalClass = document.getElementById('loginModal').style.display
      if(!modalClass || modalClass === "none")
        document.getElementById('loginModal').style.display = "block";
      setTimeout(function() { 
        document.getElementById("loginModal").style.display = "none"; 
      }, 
      2000);
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
            <a onClick={this.toggleLogoutClass}>Logout</a>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      )
      const navLoggedOut = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>      
            <a onClick={this.toggleLoginClass}>Login</a>
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
        <div className="container" style={{backgroundColor: '#fff', marginTop: '1em'}}>
          <h3>Ethereum Web Services</h3>
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">cloud</i>
                <div className="card-title">Simplest Storage Solution</div>
                <div className="white-text-custom">
                  Store your certificates and government/classified documents on Blockchain.
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">sd_storage</i>
                <div className="card-title">Cloud Bucket</div>
                <div className="white-text-custom">
                  No need to buy cloud buckets. Pay only for the amount of storage you use.
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">business_center</i>
                <div className="card-title">Looking for a storage bucket?</div>
                <div className="white-text-custom">
                  Small business' website? Store media files/bundles on ethereum and access them anywhere.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">compare_arrows</i>
                <div className="card-title">End to End Encryption</div>
                <div className="white-text-custom">
                  Store important notes/passwords privately. Pretty handy for small files(texts, images, GIFs). 
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">security</i>
                <div className="card-title">Security at every step</div>
                <div className="white-text-custom">
                  Files stored on decentralized blockchain network. Attacks impossible!
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">cloud_done</i>
                <div className="card-title">Save Paperwork</div>
                <div className="white-text-custom">
                  No need to carry physical documents to an interview. Store them throughout the world, in a decentralized network.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      const viewTransactions = () => (
        <ViewTransactions account={this.state.account}/>
      );
      
      return (
        <div className="App">
          <Router>
          <div>
            <nav>
              <div className="nav-wrapper" style={{backgroundColor: '#062d4c'}}>
                <a href="/" style={{float: 'left', fontSize: '4em', marginLeft: '0.5em', marginTop: '0.052em'}}>ews</a>
                {nav}
              </div>
            </nav>
            <Route exact path="/" component={Homepage} />  
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/viewTransactions" component={viewTransactions}  />
            <Route path="/about" component={AboutUs} />
          </div>
          </Router>
          <div id="logoutModal" className="modal">
            <div className="modal-content">
              <p>Logout your Metamask Account to Logout of EWS.</p>
            </div>
            <img src="https://gateway.ipfs.io/ipfs/QmZGqHEsMGTUpH2LvTNEt25iPV9F8zgskssxst5AdjULQu" alt="metamask.io" style={{height: '10em'}}/>
          </div>
          <div id="loginModal" className="modal">
            <div className="modal-content">
              <p>Login through Metamask and refresh this page.</p>
            </div>
            <img src="https://gateway.ipfs.io/ipfs/QmZGqHEsMGTUpH2LvTNEt25iPV9F8zgskssxst5AdjULQu" alt="metamask.io" style={{height: '10em'}}/>
          </div>
        </div>
      );
    }
}

export default App;
