import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import LogoutModal from './Components/Dashboard/logoutModal';

class App extends Component {
  render() {
    const Homepage = () => (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper" style={{backgroundColor: '#062d4c'}}>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <a className="modal-trigger" href="#logoutModal">Logout</a>
                  <LogoutModal/>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
    
    return (
      <div className="App">
        <Homepage/>
      </div>
    );
  }
}

export default App;
