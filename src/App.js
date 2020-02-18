import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./components/_shared/NavBar/NavBar";
import Folders from "./pages/Folders";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard"
import './App.css';

function App() {
  return (
      <Router>
        <div className="app-wrapper">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/folder" component={Folders}/>
            <Route path="/analytics" component={Analytics}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
