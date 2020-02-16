import React, {Component} from 'react';
import "./DashboardCreateTask.css";

class DashboardCreateTask extends Component {
    state = {
        taskDescription: ""
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.taskDescription);

        this.setState({taskDescription: ""});
    };

    render() {
        return (
            <div className="add-task-wrapper">
                <h1 className="add-task-header">Task Management</h1>
                <form className="add-task-form" onSubmit={this.onSubmit}>
                    <input className="task-input" name="taskDescription" value={this.state.taskDescription}
                           onChange={this.onChange} type="text" placeholder="Add a new task ..." autoComplete="off"/>
                    <input className="task-submit" type="submit" value="Add task"/>
                </form>
            </div>
        );
    }
}

export default DashboardCreateTask;