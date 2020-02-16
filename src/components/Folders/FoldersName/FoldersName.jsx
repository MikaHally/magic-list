import React, {Component} from 'react';
import "./FoldersName.css";

class FoldersName extends Component {
    state = {
        name: ""
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createFolder(this.state.name);

        this.setState({name: ""});
    };

    render() {
        return (
            <div className="name-folder-wrapper-bg">
                <div className="name-folder-wrapper-inner">
                    <h1 className="name-folder-header">Create folder</h1>
                    <form className="name-folder-form" onSubmit={this.onSubmit}>
                        <label className="name-folder-label">Folder name</label>
                        <input type="text" name="name" className="name-folder-input"
                               placeholder="Enter folder name" value={this.state.name}
                               onChange={this.onChange} autoComplete="off" maxLength="30" required/>
                        <input className="name-folder-btn" type="submit" value="Create folder"/>
                    </form>
                </div>
                <div className="close-modal-btn" onClick={this.props.toggleModal}>
                    <img src={require('../../../assets/close-icon.svg')} alt="close-icon"/>
                </div>
            </div>
        );
    }
}

export default FoldersName;