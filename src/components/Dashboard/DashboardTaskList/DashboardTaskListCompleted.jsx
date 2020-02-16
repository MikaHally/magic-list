import React, {Component} from 'react';
import DashboardTaskListItem from "../DashboardTaskListItem/DashboardTaskListItem";

class DashboardTaskListCompleted extends Component {

    render() {
        return (
            this.props.completedTasks.map(task => <DashboardTaskListItem key={task.id} task={task}
                                                                         markComplete={this.props.markComplete}
                                                                         showTaskDetails={this.props.showTaskDetails}/>)
        );
    }
}

export default DashboardTaskListCompleted;