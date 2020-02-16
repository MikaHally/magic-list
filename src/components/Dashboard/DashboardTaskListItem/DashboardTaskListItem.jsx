import React, {Component} from 'react';
import "./DashboardTaskListItem.css";

class DashboardTaskListItem extends Component {

    lineThrough = () => {
        if (this.props.task.completed) {
            return {
                textDecoration: 'line-through',
                color: 'var(--lightgrey)'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    };

    showCheckMark = () => {
        if (this.props.task.completed) {
            return {
                backgroundColor: 'var(--primary)',
                border: '1px solid var(--primary)'
            }
        }
    };

    render() {
        const {id, taskDescription} = this.props.task;
        return (
            <React.Fragment>
                <div className="task-list-item-wrapper">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" name="completed"
                               onChange={() => this.props.markComplete(id)}/>
                        <span className="checkmark" style={this.showCheckMark()}></span>
                    </label>
                    <div className="task-list-item" onClick={() => this.props.showTaskDetails(this.props.task)}>
                        <p style={this.lineThrough()}>
                            {taskDescription}
                        </p>
                        <div className="text-fade-out"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DashboardTaskListItem;