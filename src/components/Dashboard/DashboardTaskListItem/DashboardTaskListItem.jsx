import React, {Component} from 'react';
import "./DashboardTaskListItem.css";

class DashboardTaskListItem extends Component {

    lineThrough = () => {
        if (this.props.task.taskcomplete) {
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
        if (this.props.task.taskcomplete) {
            return {
                backgroundColor: 'var(--primary)',
                border: '1px solid var(--primary)'
            }
        }
    };

    render() {
        const {tasktitle} = this.props.task;
        return (
            <React.Fragment>
                <div className="task-list-item-wrapper">
                    <label className="checkbox-wrapper">
                        <input type="checkbox" name="completed"
                               onChange={() => this.props.markComplete(this.props.task)}/>
                        <span className="checkmark" style={this.showCheckMark()}/>
                    </label>
                    <div className="task-list-item" onClick={() => this.props.showTaskDetails(this.props.task)}>
                        <p style={this.lineThrough()}>
                            {tasktitle}
                        </p>
                        <div className="text-fade-out"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DashboardTaskListItem;