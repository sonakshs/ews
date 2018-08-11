import React, { Component } from 'react';
import web3 from "../web3.js";
import storeHash from "../storeHash.js";
class ViewTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[]
         }
         this.renderState=this.renderState.bind(this);
        //implement a loop here to get the list of documents  
    }
    renderState(){
        var that = this;
        var temp=[];
        for(var i=0;i<3;i++){
            storeHash.methods.getHash("0xe53ada4fe62c8972890d75cbc4c4d2fe6317e84d",i).call().then(function(res){
               console.log(res["1"]);
               that.setState({
                arr: [...that.state.arr,res]
              }) 
            })
        }
    }
    componentDidMount(){
        this.renderState();
    }
    getTransactionCount() {
       storeHash.methods.getHash().call().then(function(res){
           console.log(res);
       })
    }
    render() { 
        return ( 
            <div className="container">
                
            <div>
                View Transactions Here.
                {/* <button>{this.state.arr[0]}</button>
                <button>{this.state.arr[1]}</button>
                <button>{this.state.arr[2]}</button> */}
            </div>
            </div>
        );
    }
}
 
export default ViewTransactions;