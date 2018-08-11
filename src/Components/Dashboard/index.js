import React, { Component } from 'react';
import web3 from "../web3.js";
import ipfs from "../ipfs.js";
import storehash from "../storeHash.js";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { ipfsHash:null,
            buffer:'',
            ethAddress:'',
            blockNumber:'',
            transactionHash:'',
            gasUsed:'',
            txReceipt: '',
            account:''
        }
    }
    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
    convertToBuffer = async(reader) => {
      //file is converted to a buffer for upload to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
    onSubmit = async (event) => {
        event.preventDefault();
       //bring in user's metamask account address
        const accounts = this.state.account;
       
        console.log('Sending from Metamask account: ' +this.state.account);
      //obtain contract address from storehash.js
        // const ethAddress= await storehash.options.address;
        // this.setState({ethAddress});
      //save document to IPFS,return its hash#, and set hash# to state
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
          console.log(err,ipfsHash);
          //setState by setting ipfsHash to ipfsHash[0].hash 
          this.setState({ ipfsHash:ipfsHash[0].hash });
     // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
    //return the transaction hash from the ethereum contract
    //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
          
          storehash.methods.addHash(this.state.ipfsHash,this.state.account).send({
              from:this.state.account
          }, (error, transactionHash) => {
            console.log(transactionHash);
            this.setState({transactionHash});
          }); //storehash 
        }) //await ipfs.add 
      }; //onSubmit
      //to render
      componentDidMount(){
        var that = this;
        web3.eth.getAccounts(function(error,result) {
            that.setState({account: result[0]})
        });
      }
    render() { 
        return ( 
            <div className="container" style={{}}>
                Dashboard account id = {this.state.account}
                <h3> Choose file to send to IPFS </h3>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type = "file"
                    onChange = {this.captureFile}
                    />
                    <button className="waves-effect waves-light btn" type="submit"> 
                    Send it<i className="material-icons right">send</i> 
                    </button>
                </form>
                <div style={{border: '1px solid red', marginTop: '6em', padding:'2em'}}>
                    <h4> Choose confidential(private) files to upload.</h4>
                    <form onSubmit={this.onSubmit}>
                        <input 
                        type = "file"
                        onChange = {this.captureFile}
                        />
                        <button className="waves-effect waves-light btn" type="submit"> 
                        Send it<i className="material-icons right">send</i> 
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Dashboard;
