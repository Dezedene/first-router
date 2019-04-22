import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "./Home.css";

class Home extends Component {
    render() {
      return (
        <div className="Home">
          <ul>
            <li><NavLink exact to="/" activeStyle={{color: "red"}}>Home</NavLink></li>
            <li><NavLink exact to="/notre-histoire" activeStyle={{color: "red"}}>History</NavLink></li>
          </ul>
          <p>Bienvenue</p>
        </div>
      );
    }
  }


export default Home;