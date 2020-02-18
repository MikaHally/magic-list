import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "./DashboardTaskDetails.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class DashboardTaskDetails extends Component {
    state = {
        dueDate: "",
        folder: "",
        folders: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5000/folders/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        folders: response.data.map(folder => folder.foldername),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('http://localhost:5000/tasks/' + this.props.clickedTaskId)
            .then(response => {
                this.setState({folder: response.data.folder});
                this.setState({dueDate: response.data.dueDate})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeFolder = (e) => {
        this.setState({
            folder: e.target.value
        });
    };

    onChangeDate = (date) => {
        this.setState({
            dueDate: date
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5000/tasks/updateDate/' + this.props.clickedTaskId, {
            date: this.state.dueDate
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        axios.put('http://localhost:5000/tasks/updateFolder/' + this.props.clickedTaskId, {
            folder: this.state.folder
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="task-details-wrapper">
                <div className="task-details-header">
                    <form>
                        <textarea rows="3" type="text" value={this.props.clickedTask} className="task-title"/>
                    </form>
                    <div className="btn-wrapper">
                        <div className="icon-btn" id="delete-btn"
                             onClick={() => this.props.deleteTask(this.props.clickedTaskId)}>
                            <img src={require('../../../assets/delete-icon.svg')} alt="close-icon"/>
                        </div>
                        <div className="icon-btn" onClick={this.props.closeTaskDetails}>
                            <img src={require('../../../assets/close-icon.svg')} alt="close-icon"/>
                        </div>
                    </div>
                </div>
                <form className="date-picker-wrapper" onSubmit={this.onSubmit}>
                    <div className="choose-date-wrapper">
                        <label>Due date</label>
                        <DatePicker selected={this.state.dueDate} minDate={new Date()} onChange={this.onChangeDate}/>
                    </div>
                    <div className="choose-folder-wrapper">
                        <label>Add to folder</label>
                        <select class="custom-select" value={this.state.folder} onChange={this.onChangeFolder}>
                            <option disabled selected value>Choose a folder</option>
                            {this.state.folders.map(function (folder) {
                                return <option key={folder} value={folder}>{folder}</option>;
                            })}
                        </select>
                    </div>
                    <input type="submit" value="Update"/>
                </form>
            </div>
        );
    }
}

export default DashboardTaskDetails;