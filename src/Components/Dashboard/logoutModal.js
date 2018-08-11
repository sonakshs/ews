import React, { Component } from 'react';

class LogoutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        $(document).ready(function(){
            $('.modal').modal();
        });
    }
    render() { 
        return ( 
            <div id="logoutModal" className="modal">
                <div className="modal-content">
                <h4>Logout</h4>
                <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect btn-flat">Close</a>
                </div>
            </div>
        );
    }
}
 
export default LogoutModal;