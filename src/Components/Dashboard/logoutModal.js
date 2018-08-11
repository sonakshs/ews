import React, { Component } from 'react';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';

class LogoutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // componentDidMount(){
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('.modal');
    //         M.Modal.init(elems);
    //       });
    // }
    render() { 
        return ( 
            <div id="logoutModal" className="modal">
                <div className="modal-content">
                <h4>Logout</h4>
                <p>To logout of this application, first log out through Metamask and then refresh this page.</p>
                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect btn-flat">Close</a>
                </div>
            </div>
        );
    }
}
 
export default LogoutModal;