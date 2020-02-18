import React, {Component} from 'react';
import "../components/Dashboard.css";
import axios from "axios";
import FoldersCreate from "../components/Folders/FoldersCreate/FoldersCreate";
import FoldersList from "../components/Folders/FoldersList/FoldersList";
import FoldersName from "../components/Folders/FoldersName/FoldersName";
import DashboardEmpty from "../components/Dashboard/DashboardEmpty/DashboardEmpty";


class Folders extends Component {
    state = {
        folders: [],
        showModal: false
    };

    componentDidMount() {
        axios.get('http://localhost:5000/folders/')
            .then(response => {
                this.setState({ folders: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal});
    };

    createFolder = () => {
        window.location = "/folder";
    };

    render() {
        return (
            <div className="dashboard-wrapper">
                <FoldersCreate toggleModal={this.toggleModal} />
                <FoldersList createFolder={this.createFolder} folders={this.state.folders} />
                {this.state.showModal && <FoldersName toggleModal={this.toggleModal} createFolder={this.createFolder} />}
                {this.state.folders.length === 0 && <DashboardEmpty/>}
            </div>
        );
    }
}

export default Folders;
