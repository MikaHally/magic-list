import React, {Component} from 'react';
import "./FoldersCreate.css";

class FoldersCreate extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="add-folder-wrapper">
                    <h1 className="add-folder-header">Folder</h1>
                    <button className="create-folder-btn" onClick={this.props.toggleModal}>Create folder</button>
                </div>
                <div className="separator"></div>
            </React.Fragment>
        );
    }
}

export default FoldersCreate;