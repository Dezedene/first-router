import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import History from "./History";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exatc path="/notre-histoire" component={History}  />
        </Switch>
      </div>
    );
  }
}

export default App;
