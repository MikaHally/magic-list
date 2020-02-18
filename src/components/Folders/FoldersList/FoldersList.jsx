import React, {Component} from 'react';
import FoldersListItem from "../FoldersListItem/FoldersListItem";
import "./FoldersList.css";

class FoldersList extends Component {

    render() {
        return (
            <div className="folder-list-item-wrapper">
                {this.props.folders.map(folders => <FoldersListItem key={folders.id} folders={folders}/>)}
            </div>
        );
    }
}

export default FoldersList;