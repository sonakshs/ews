import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container" style={{marginTop: '10em'}}>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="sonaksh.png"/>
                                <span className="card-title">Sonaksh</span>
                                <a href="https://www.linkedin.com/in/sonaksh-saraswat-83b2549b/" target="_blank" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">open_in_new</i></a>
                                </div>
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="../"/>
                                <span className="card-title">Pulkit</span>
                                <a href="https://www.linkedin.com/in/sonaksh-saraswat-83b2549b/" target="_blank" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">open_in_new</i></a>
                                </div>
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="../static/media/"/>
                                <span className="card-title">Sahil</span>
                                <a href="https://www.linkedin.com/in/sonaksh-saraswat-83b2549b/" target="_blank" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">open_in_new</i></a>
                                </div>
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}
 
export default AboutUs;