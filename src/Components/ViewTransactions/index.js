import React, { Component } from 'react';
import web3 from "../web3.js";
import storeHash from "../storeHash.js";
class ViewTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        storeHash.methods.getHash("0xe53ada4fe62c8972890d75cbc4c4d2fe6317e84d",2).call().then(function(res){
            console.log(res);
        })
        console.log(props);
    }
    getTransactionCount() {
       storeHash.methods.getHash().call().then(function(res){
           console.log(res);
       })
    }
    render() { 
        return ( 
            <div className="container">
                
            </div>
        );
    }
}
 
export default ViewTransactions;