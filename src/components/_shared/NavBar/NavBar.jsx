import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {
        dashboard: false,
        folder: false,
        analytics: false
    };

    navigationStyling = () => {
        if (this.state.dashboard) {
            return {
                color: 'var(--darkgrey)'
            }
        }
    };

    onLinkClick = () => {
        if (window.location.pathname.includes('/dashboard')) {
            this.setState({dashboard: true});
            this.setState({folder: false});
            this.setState({analytics: false});
        }
        if (window.location.pathname.includes('/folder')) {
            this.setState({dashboard: false});
            this.setState({folder: true});
            this.setState({analytics: false});
        }
        if (window.location.pathname.includes('/analytics')) {
            this.setState({dashboard: false});
            this.setState({folder: false});
            this.setState({analytics: true});
        }
    };

    render() {
        return (
            <div className="navbar-wrapper">
                <div className="navbar-logo-wrapper" onClick={this.onLinkClick}>
                    <Link to="/">
                        <img src={require('../../../assets/logo.svg')} alt="logo"/>
                    </Link>
                    <Link to="/" className="navbar-logo">
                        <p>Magiclist</p>
                    </Link>
                </div>
                <div className="nav-link-wrapper" onClick={this.onLinkClick}>
                    <Link to="/" className="navbar-link">
                        <img src={require('../../../assets/dashboard-icon.svg')} alt="dashboard-icon"/>
                    </Link>
                    <Link to="/" className="navbar-link">
                        <p>Dashboard</p>
                    </Link>
                </div>
                <div className="nav-link-wrapper" onClick={this.onLinkClick}>
                    <Link to="/folder" className="navbar-link">
                        <img src={require('../../../assets/folder-icon.svg')} alt="folder-icon"/>
                    </Link>
                    <Link to="/folder" className="navbar-link">
                        <p>Folder</p>
                    </Link>
                </div>
                <div className="nav-link-wrapper" onClick={this.onLinkClick}>
                    <Link to="/analytics" className="navbar-link">
                        <img src={require('../../../assets/analytics-icon.svg')} alt="analytics-icon"/>
                    </Link>
                    <Link to="/analytics" className="navbar-link">
                        <p>Analytics</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;