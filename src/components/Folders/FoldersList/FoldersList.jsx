import React, {Component} from 'react';
import FoldersListItem from "../FoldersListItem/FoldersListItem";
import "./FoldersList.css";

class FoldersList extends Component {

    render() {
        return (
            <div className="folder-list-item-wrapper">
                {this.props.folder.map(folder => <FoldersListItem key={folder.id} folder={folder}/>)}
            </div>
        );
    }
}

export default FoldersList;