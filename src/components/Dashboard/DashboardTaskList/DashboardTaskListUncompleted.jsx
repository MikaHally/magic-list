import React, {Component} from 'react';
import DashboardTaskListItem from "../DashboardTaskListItem/DashboardTaskListItem";

class DashboardTaskListUncompleted extends Component {

    render() {
        return (
            this.props.todoTasks.map(task => <DashboardTaskListItem key={task.id} task={task}
                                                                    markComplete={this.props.markComplete}
                                                                    showTaskDetails={this.props.showTaskDetails}/>)
        );
    }
}

export default DashboardTaskListUncompleted;