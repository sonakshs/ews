import React, { Component } from 'react';
import web3 from "../web3.js";
class Login extends Component {
    constructor(props) {
        super(props);
        web3.eth.getAccounts(function(error, result) {
            if(error != null)
                console.log("Couldn't get accounts");
        
            console.log(result[0]); //logs all accounts
        });
    }
    
    render() {
        return (
            <div>
                <div className="btn btn-large">Login</div>
            </div>
        )
    
    };
}

export default Login;
        
        
