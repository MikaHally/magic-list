import React, {Component} from 'react';
import "./FoldersListItem.css";

class FoldersListItem extends Component {

    render() {
        return (
            <div className="folder-wrapper">
                <div className="box-wrapper">
                    <img src={require('../../../assets/folder-illustration.svg')} alt="folder"/>
                </div>
                <p className="folder-name">{this.props.folders.foldername}</p>
            </div>
        );
    }
}

export default FoldersListItem;