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
        for(var i=0;i<3;i++){
            storeHash.methods.getHash(this.props.account,i).call().then(function(res){
               that.setState({
                arr: [...that.state.arr,res]
              }) 
            })
        }
    }
    componentDidMount(){
        this.renderState();
    }
    render() { 
        const rows= this.state.arr.map((transactionObject,index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{transactionObject}</td>
                <td>{transactionObject.size}</td>
            </tr>
        )
    })
        return ( 
            <div className="container">
                <table className="highlight">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
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