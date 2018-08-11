import React, { Component } from 'react';

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col s12" style={{'backgroundColor':'red', marginTop:'1em', fontSize:'1.5em'}}>
                Upload Files Here.
            </div>
        );
    }
}
 
export default UploadSection;