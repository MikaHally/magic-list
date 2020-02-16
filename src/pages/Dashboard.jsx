import React, {Component} from 'react';
import '../components/Dashboard.css';
import DashboardCreateTask from "../components/Dashboard/DashboardCreateTask/DashboardCreateTask";
import DashboardTaskListUncompleted from "../components/Dashboard/DashboardTaskList/DashboardTaskListUncompleted";
import DashboardTaskListCompleted from "../components/Dashboard/DashboardTaskList/DashboardTaskListCompleted";
import DashboardTaskDetails from "../components/Dashboard/DashboardTaskDetails/DashboardTaskDetails";
import DashboardEmpty from "../components/Dashboard/DashboardEmpty/DashboardEmpty";
import uuid from "uuid";


class Dashboard extends Component {
    state = {
        tasks: [],
        toggleTasks: false,
        clickedTask: "",
        clickedTaskId: "",
        showTaskDetails: false,
    };

    markComplete = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed;
                }
                return task;
            })
        });
    };

    addTask = (taskDescription) => {
        const newTask = {
            id: uuid.v4(),
            taskDescription,
            completed: false
        };
        if (newTask.taskDescription !== "") {
            this.setState({tasks: [newTask, ...this.state.tasks]});
        }
    };

    handleToggleTasksStyling = () => {
        if (this.state.toggleTasks) {
            return {
                display: 'block',
                padding: "0 62px 0 62px",
                width: "100%"
            }
        } else {
            return {
                display: 'none',
                padding: "0 62px 0 62px",
                width: "100%"
            }
        }
    };

    handleToggleTasks = () => {
        const toggleTasks = !this.state.toggleTasks;
        this.setState({
            toggleTasks
        });
    };

    showTaskDetails = (task) => {
        this.setState({showTaskDetails: true});
        this.setState({clickedTask: task.taskDescription});
        this.setState({clickedTaskId: task.id});
    };

    closeTaskDetails = () => {
        this.setState({showTaskDetails: false});
    };

    deleteTask = () => {
        this.setState({tasks: [...this.state.tasks.filter(task => task.id !== this.state.clickedTaskId)]});
        this.setState({showTaskDetails: false});
    };


    render() {
        return (
            <div className="dashboard-wrapper">
                <DashboardCreateTask addTask={this.addTask}/>
                <div className="task-list-wrapper">
                    <DashboardTaskListUncompleted
                        todoTasks={this.state.tasks.filter(task => !task.completed)}
                        markComplete={this.markComplete}
                        showTaskDetails={this.showTaskDetails}
                        deleteTask={this.deleteTask}
                    />
                </div>
                {this.state.tasks.length !== 0 &&
                <button className="toggle-task-list-btn" onClick={this.handleToggleTasks}>Completed tasks</button>}
                <div style={this.handleToggleTasksStyling()}>
                    <DashboardTaskListCompleted
                        completedTasks={this.state.tasks.filter(task => task.completed)}
                        markComplete={this.markComplete}
                        showTaskDetails={this.showTaskDetails}
                        deleteTask={this.deleteTask}
                    />
                </div>
                {this.state.showTaskDetails &&
                <DashboardTaskDetails clickedTask={this.state.clickedTask} closeTaskDetails={this.closeTaskDetails}
                                      deleteTask={this.deleteTask}/>}
                {this.state.tasks.length === 0 && <DashboardEmpty/>}
            </div>
        );
    }
}

export default Dashboard;