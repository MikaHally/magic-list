import React, {Component} from 'react';
import "./DashboardTaskDetails.css";

class DashboardTaskDetails extends Component {

    render() {
        return (
            <div className="task-details-wrapper">
                <div className="task-details-header">
                    <form>
                        <textarea rows="3" type="text" value={this.props.clickedTask} className="task-title"/>
                    </form>
                    <div className="btn-wrapper">
                        <div className="icon-btn" id="delete-btn" onClick={this.props.deleteTask}>
                            <img src={require('../../../assets/delete-icon.svg')} alt="close-icon"/>
                        </div>
                        <div className="icon-btn" onClick={this.props.closeTaskDetails}>
                            <img src={require('../../../assets/close-icon.svg')} alt="close-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardTaskDetails;