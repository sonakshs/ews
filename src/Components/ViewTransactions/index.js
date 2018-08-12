import React, { Component } from 'react';
import PropTypes from 'prop-types';
import storeHash from "../storeHash.js";
class ViewTransactions extends Component {
   constructor(props) {
       super(props);
       this.state = {
           arr:[],
           errorMsg: ""
        }
        this.renderState=this.renderState.bind(this);
   }
   renderState(){
       var that = this;
       for(var i=0;i<8;i++){
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
    if(document.getElementById("address").value.length==42){     
        for(var i=0;i<7;i++){
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
    else
        that.setState({errorMsg: "Please enter a valid ETH Address."});
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
           <div className="container" style={{'border': '1px solid #000', padding:'1em', marginTop: '1.4em'}}>
               <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field inline col s10">
                            <label htmlFor="last_name">Enter ETH address to see the public transactions</label>
                            <input id="address" type="text" class="validate" required/>
                        </div>
                        <div className="col s2">
                            <button className="col s12 waves-effect waves-light btn" style={{height: '3rem', marginTop: '0.4rem'}} onClick={()=>{this.renderStateSearch()}}> 
                                Go<i className="material-icons right">send</i> 
                            </button>
                        </div>
                    </div>
                    </form>
                </div>    
               <div> 
                <p style={{textAlign:'center',marginTop:'2em',marginBottom:'1em', textAlign: 'left'}}>Transacations: </p>
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
           </div>
       );
   }
}

ViewTransactions.propTypes = {
   account: PropTypes.string.isRequired
}

export default ViewTransactions;