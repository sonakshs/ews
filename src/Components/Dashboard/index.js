import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewSection from './ViewSection';
import UploadSection from './UploadSection';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{backgroundColor: '#707ce6'}}>
                Dashboard account id = {this.props.account}
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <UploadSection/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <ViewSection/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
Dashboard.propTypes = {
    account: PropTypes.string.isRequired,
}

export default Dashboard;
