import React, { Component } from 'react';
import web3 from "../web3.js";
import Dashboard from '../Dashboard/index.js';


class Login extends Component {
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
        const loginPage = (
            this.state.loggedIn ? <Dashboard account={this.state.account}/> : 
            <div>
                You are not logged into Metamask. Please login to your Metamask Account and refresh this page.
            </div>
        )
        return (
            <div>
                {loginPage}
            </div>
        )
    };
}

export default Login;
        
        
