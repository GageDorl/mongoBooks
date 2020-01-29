import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Saved from"./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav"; 
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
