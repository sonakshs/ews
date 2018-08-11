import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                Dashboard account id = {this.props.account}
            </div>
        );
    }
}
 
Dashboard.propTypes = {
    account: PropTypes.string.isRequired,
}

export default Dashboard;
