import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import ComposeEmailPage from "./Components/ComposeEmailPage";
import MangeEmailsPage from "./Components/MangeEmailsPage";
import HomePage from "./Components/HomePage";

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
  return (
    <div className="App">
     
             <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/ComposeEmailPage" component={ComposeEmailPage} />
                <Route exact path="/MangeEmailsPage" component={MangeEmailsPage} />
              </Switch>
            </Router>
        
    </div>
  )}
}

export default App;
