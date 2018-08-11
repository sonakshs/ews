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
            <div style={{}}>
                Dashboard account id = {this.props.account}
                <div className="container" style={{backgroundColor: 'rgb(201, 206, 253)', height: '-webkit-fill-available'}}>
                    <div className="row">
                        <div className="col s12 m6">
                            <ViewSection/>
                        </div>
                        <div className="col s12 m6">
                            <UploadSection/>
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
