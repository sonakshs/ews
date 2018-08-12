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
            account:'',
            size:-1,
            showResults:false
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
        this.setState({showResults:true});
      //obtain contract address from storehash.js
        // const ethAddress= await storehash.options.address;
        // this.setState({ethAddress});
      //save document to IPFS,return its hash#, and set hash# to state
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
          console.log(err,ipfsHash);
          //setState by setting ipfsHash to ipfsHash[0].hash 
          this.setState({ ipfsHash:ipfsHash[0].hash,size:ipfsHash[0].size});
     // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
    //return the transaction hash from the ethereum contract
    //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
          
          storehash.methods.addHash(this.state.ipfsHash,this.state.account,this.state.size).send({
              from:this.state.account
          }, (error, transactionHash) => {
            console.log(transactionHash);
            this.setState({transactionHash});
            this.setState({showResults:false});
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
        var spinner;
        if(this.state.showResults){
            spinner=  <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-red">
                 <div class="circle-clipper left">
                 <div class="circle"></div>
                 </div><div class="gap-patch">
                 <div class="circle"></div>
                 </div><div class="circle-clipper right">
                 <div class="circle"></div>
                 </div>
             </div>
         </div>
        }
        else spinner=<div></div>
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
                <div style={{marginTop:'4em'}}>
                <strong style={{textAlign:'center',marginTop: '2em'}}><b>Your IPFS file hash: </b>{this.state.ipfsHash}</strong>
                <br/>
                <strong style={{textAlign:'center',marginTop: '2em'}}><b>TxReceipt: </b>{this.state.transactionHash}</strong>
                </div>
               {spinner}
                <div style={{border: '1px solid red', marginTop: '6em', padding:'2em'}}>
                    <h4> Choose confidential(private) files to upload.</h4>
                    <form encType="multipart/form-data" method="POST" action="http://172.16.27.88:8001/ews/digilock/">
                        <input 
                        type = "file"
                        name = "file"
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
