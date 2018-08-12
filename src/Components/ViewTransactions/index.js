import React, { Component } from 'react';
import PropTypes from 'prop-types';
import storeHash from "../storeHash.js";
class ViewTransactions extends Component {
   constructor(props) {
       super(props);
       this.state = {
           arr:[]
        }
        this.renderState=this.renderState.bind(this);
   }
   renderState(){
       var that = this;
       for(var i=0;i<5;i++){
           storeHash.methods.getHash(this.props.account,i).call().then(function(res){
              console.log(res);
              if(res["0"]){
                that.setState({
                    arr: [...that.state.arr,res]
                  })
              }
           
           })
       }
   }
   renderStateSearch(){
    this.setState({arr:[]});
    var that = this;
    for(var i=0;i<5;i++){
        storeHash.methods.getHash(document.getElementById("address").value,i).call().then(function(res){
           console.log(res);
           if(res["0"]){
             that.setState({
                 arr: [...that.state.arr,res]
               })
           }
        
        })
    }
}
   componentDidMount(){
       this.renderState();
   }
   render() {
       const rows= this.state.arr.map((transactionObject,index) => {
       return (
           <tr key={index} >
               <td>{index + 1}</td>
               <td>{transactionObject["0"]}</td>
               <td>{transactionObject["1"]}&nbsp;bytes</td>
               <td>
                   <a href={"https://gateway.ipfs.io/ipfs/"+transactionObject["0"]} target="_blank" className="btn btn-small">
                        Click to Open
                   </a>
               </td>
           </tr>
       )
   })
       return (
           <div className="container">
               <div class="input-field col s6">
                     <label for="last_name">Enter ETH address to see the transactions</label>
                    <input id="address" type="text" class="validate" required/>
                    <button className="waves-effect waves-light btn" onClick={()=>{this.renderStateSearch()}}> 
                        Go<i className="material-icons right">send</i> 
                        </button>
              </div>    
              <p style={{textAlign:'center',marginTop:'2em',marginBottom:'1em'}}>Or</p>
               <table className="highlight" style={{overflowY:'auto'}}>
                   <thead>
                   <tr>
                       <th>Name</th>
                       <th>IPFS Hash</th>
                       <th>Size</th>
                       <th>
                           View File
                       </th>
                   </tr>
                   </thead>
                   <tbody>
                       {rows}
                   </tbody>
               </table>
           </div>
       );
   }
}

ViewTransactions.propTypes = {
   account: PropTypes.string.isRequired
}

export default ViewTransactions;