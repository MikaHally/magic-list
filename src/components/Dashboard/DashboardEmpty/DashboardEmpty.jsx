import React, {Component} from 'react';
import "./DashboardEmpty.css"

class DashboardEmpty extends Component {

    render() {
        return (
            <div className="empty-dashboard-wrapper">
                <img src={require('../../../assets/empty-dashboard-illustration.svg')} alt="empty-dashboard-illustration"/>
                <h3 className="empty-dashboard-header">Nothing there ... yet</h3>
                <p>Want to be productive and get shit done? Let's start!</p>
            </div>
        );
    }
}

export default DashboardEmpty;