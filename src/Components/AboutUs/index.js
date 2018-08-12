import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container" style={{marginTop: '3em'}}>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://gateway.ipfs.io/ipfs/QmZRFypC6eNwNs96JHYgJg2h3aU9tGyd99jMPPMSrpTMZ7" alt="Soanksh Saraswat" style={{borderRadius: '1em'}}/>
                                <span className="card-title">Sonaksh</span>
                                <a href="https://www.linkedin.com/in/sonaksh-saraswat-83b2549b/" rel="noopener noreferrer" target="_blank" className="btn-floating halfway-fab waves-effect waves-light" style={{backgroundColor: 'rgb(6, 45, 76)'}}><i className="material-icons">open_in_new</i></a>
                                </div>
                                <div className="card-content">
                                <p>B.Tech(IV year) Computer Science and Engineering, NIT Uttarakhand.<br/></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://gateway.ipfs.io/ipfs/QmNPntuYbEpx6RkjEnJ2sBmTgMV8fMcsPmJ4WgJkMNtbe8" alt="Pulkit Kashyap" style={{borderRadius: '1em'}}/>
                                <span className="card-title white-text">Pulkit</span>
                                <a href="https://www.linkedin.com/in/pulkit-kashyap-974b6b124/" rel="noopener noreferrer" target="_blank" className="btn-floating halfway-fab waves-effect waves-light" style={{backgroundColor: 'rgb(6, 45, 76)'}}><i className="material-icons">open_in_new</i></a>
                                </div>
                                <div className="card-content">
                                <p>B.Tech(IV year) Computer Science and Engineering, IP University, New Delhi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://gateway.ipfs.io/ipfs/QmSdZMBHm9Gqki2RewrNcGk4BKKDtQVGtbAVKVuvgqJGew" alt="Sahil Chaudhary" style={{borderRadius: '1em'}}/>
                                <span className="card-title">Sahil</span>
                                <a href="https://www.linkedin.com/in/sahil-chaudhary-899897119/" rel="noopener noreferrer" target="_blank" className="btn-floating halfway-fab waves-effect waves-light" style={{backgroundColor: 'rgb(6, 45, 76)'}}><i className="material-icons">open_in_new</i></a>
                                </div>
                                <div className="card-content">
                                <p>Software Engineer, <a href="http://happay.in" rel="noopener noreferrer" target="_blank">Happay.in</a>, Bangalore. BTech in Computer Science and Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}
 
export default AboutUs;