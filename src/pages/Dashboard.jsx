import React, {Component} from 'react';
import '../components/Dashboard.css';
import DashboardCreateTask from "../components/Dashboard/DashboardCreateTask/DashboardCreateTask";
import DashboardTaskListUncompleted from "../components/Dashboard/DashboardTaskList/DashboardTaskListUncompleted";
import DashboardTaskListCompleted from "../components/Dashboard/DashboardTaskList/DashboardTaskListCompleted";
import DashboardTaskDetails from "../components/Dashboard/DashboardTaskDetails/DashboardTaskDetails";
import DashboardEmpty from "../components/Dashboard/DashboardEmpty/DashboardEmpty";
import axios from "axios";


class Dashboard extends Component {
    state = {
        tasks: [],
        toggleTasks: false,
        clickedTask: "",
        clickedTaskId: "",
        showTaskDetails: false,
    };

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
            .then(response => {
                this.setState({tasks: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

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

    markComplete = (task) => {
        axios.post('http://localhost:5000/tasks/update/' + task._id, {
            taskcomplete: !task.taskcomplete,
            tasktitle: task.tasktitle,
        })
            .then(response => {
                this.setState({
                    tasks: this.state.tasks.map(el => {
                        if (el._id === task._id) {
                            el.taskcomplete = !el.taskcomplete;
                        }
                        return el;
                    })
                });
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleToggleTasks = () => {
        const toggleTasks = !this.state.toggleTasks;
        this.setState({
            toggleTasks
        });
    };

    showTaskDetails = (task) => {
        this.setState({showTaskDetails: true});
        this.setState({clickedTask: task.tasktitle});
        this.setState({clickedTaskId: task._id});
    };

    closeTaskDetails = () => {
        this.setState({showTaskDetails: false});
    };

    addTask = (title) => {
        const newTask = {
            tasktitle: title,
            taskcomplete: false,
        };

        this.setState({tasks: [newTask, ...this.state.tasks]});
    };

    deleteTask = (id) => {
        console.log(id);
        axios.delete('http://localhost:5000/tasks/' + id)
            .then(res => console.log(res.data));

        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        });

        this.setState({showTaskDetails: false});
    };


    render() {
        return (
            <div className="dashboard-wrapper">
                <DashboardCreateTask addTask={this.addTask} />
                <div className="task-list-wrapper">
                    <DashboardTaskListUncompleted
                        todoTasks={this.state.tasks.filter(task => !task.taskcomplete)}
                        showTaskDetails={this.showTaskDetails}
                        markComplete={this.markComplete}
                        task={this.state.tasks}
                    />
                </div>
                {this.state.tasks.length !== 0 &&
                <button className="toggle-task-list-btn" onClick={this.handleToggleTasks}>Completed tasks</button>}
                <div style={this.handleToggleTasksStyling()}>
                    <DashboardTaskListCompleted
                        completedTasks={this.state.tasks.filter(task => task.taskcomplete)}
                        showTaskDetails={this.showTaskDetails}
                        markComplete={this.markComplete}
                        task={this.state.tasks}
                    />
                </div>
                {this.state.showTaskDetails &&
                <DashboardTaskDetails clickedTask={this.state.clickedTask} closeTaskDetails={this.closeTaskDetails}
                                      clickedTaskId={this.state.clickedTaskId} deleteTask={this.deleteTask}
                                      tasks={this.state.tasks}/>}
                {this.state.tasks.length === 0 && <DashboardEmpty/>}
            </div>
        );
    }
}

export default Dashboard;