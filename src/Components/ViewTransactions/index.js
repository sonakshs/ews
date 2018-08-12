import React, { Component } from 'react';
import PropTypes from 'prop-types';
import storeHash from "../storeHash.js";
class ViewTransactions extends Component {
   constructor(props) {
       super(props);
       this.state = {
           arr:[],
           metamaskUserId: true
        }
        this.renderState=this.renderState.bind(this);
   }
   renderState(){
       var that = this;
       that.setState({usermetamaskUserId: true})
       var add="";
       if(document.getElementById("address").value) add=document.getElementById("address").value;
       else add=this.props.account;
       for(var i=0;i<13;i++){
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
   renderStateSearch(e){
    e.preventDefault();
    var that = this;
    // console.log(that.state.arr.length);
    // that.setState({arr:[]});
    // console.log(that.state.arr.length);
    // that.setState({usermetamaskUserId: false})
    if(document.getElementById("address").value.length==42){   
        var _add=document.getElementById("address").value;
        console.log(typeof(document.getElementById("address").value))  
        
            storeHash.methods.getHash(_add,3).call().then(function(res){
            console.log(res);
            if(res["0"]){
                that.setState({
                    arr: [...that.state.arr,res]
                })
            }
            
            })
    
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
           <div>
               <div className="container" style={{'border': '1px solid #000', padding:'1em', marginTop: '1.4em'}}>
                <div className="row">
                      <form className="col s12" >
                        <div className="row">
                            <div className="input-field inline col s10">
                                <label htmlFor="last_name">Enter ETH address to see the public transactions</label>
                                <input id="address" type="text" required/>
                            </div>
                            <div className="col s2">
                                <button className="col s12 waves-effect waves-light btn" style={{height: '3rem', marginTop: '0.4rem'}} onClick={this.renderState}> 
                                    Go<i className="material-icons right">send</i> 
                                </button>
                            </div>
                        </div>
                      </form>
                    </div>    
                <div> 
                <p style={{textAlign:'center',marginTop:'2em',marginBottom:'1em', textAlign: 'left'}}>{this.state.metamaskUserId ? "Your Transactions: " : "Transactions of entered account: " }</p>
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
           <div className="container" style={{'border': '1px solid #000', padding:'1em', marginTop: '1.4em'}}>
           <h5 style={{textAlign:'center'}}>Access Your Encrypted Documents</h5>
                <div className="row">
                    
                      <form className="col s12" action="http://172.16.27.88:8001/ews/ewsdownload/" method="post">
                        <div className="row">
                            <div className="input-field inline col s6">
                                <label htmlFor="last_name">Enter Capsule</label>
                                <input name="capsule" type="text" className="validate" required/>
                            </div>
                            <div className="input-field inline col s6">
                                <label htmlFor="last_name">Enter Encryption Key</label>
                                <input name="ciphertext" type="text" className="validate" required/>
                            </div>
                            <div className="col s2 offset-s5">
                                <button className="col s12 waves-effect waves-light btn" style={{height: '3rem', marginTop: '0.4rem'}} type="submit"> 
                                    Go<i className="material-icons right">send</i> 
                                </button>
                            </div>
                        </div>
                      </form>
                    </div>    
               </div> 
            </div>
       );
   }
}

ViewTransactions.propTypes = {
   account: PropTypes.string.isRequired
}

export default ViewTransactions;