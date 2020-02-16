import React, {Component} from 'react';
import "../components/Dashboard.css";
import FoldersCreate from "../components/Folders/FoldersCreate/FoldersCreate";
import FoldersList from "../components/Folders/FoldersList/FoldersList";
import FoldersName from "../components/Folders/FoldersName/FoldersName";
import DashboardEmpty from "../components/Dashboard/DashboardEmpty/DashboardEmpty";


class Folders extends Component {
    state = {
        folder: [],
        showModal: false
    };

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal});
    };

    createFolder = (name) => {
        const newFolder = {
            name
        };
        if (newFolder.name !== "") {
            this.setState({folder: [newFolder, ...this.state.folder]});
            this.setState({showModal: false});
        }
    };

    render() {
        return (
            <div className="dashboard-wrapper">
                <FoldersCreate toggleModal={this.toggleModal} />
                <FoldersList createFolder={this.createFolder} folder={this.state.folder} />
                {this.state.showModal && <FoldersName toggleModal={this.toggleModal} createFolder={this.createFolder} />}
                {this.state.folder.length === 0 && <DashboardEmpty/>}
            </div>
        );
    }
}

export default Folders;

