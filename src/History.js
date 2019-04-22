import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class History extends Component {
    render() {
      return (
        <div className="Home">
          <ul>
            <li><NavLink exact to="/" activeStyle={{color: "red"}}>Home</NavLink></li>
            <li><NavLink exact to="/notre-histoire" activeStyle={{color: "red"}}>History</NavLink></li>
          </ul>
          <p>Notre Histoire</p>
        </div>
      );
    }
  }


export default History;