import React, { Component } from 'react';
import SideBar from '../Sidebar/Sidebar';
import { Link } from "react-router-dom";
import './menuTools.scss';

class MenuTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToday: true,
      listTomorrow: false
    };

    this.activeToday = this.activeToday.bind(this);
    this.activeTomorrow = this.activeTomorrow.bind(this);
  }

  activeToday() {
    this.setState(prevState => ({
      listToday: true,
      listTomorrow: false
    }));
  }
  activeTomorrow() {
    this.setState(prevState => ({
      listToday: false,
      listTomorrow: true
    }));
  }

  render() {
    if(this.props.page === "contact"){
      return (
        <div className="menuTools">
          <SideBar />
          <div className="switch karla">
            <Link to="/contacts">
              <button onClick={this.activeToday} className={this.state.listToday ? 'selected' : ''}>COURSIERS</button>
            </Link>
            <Link to="/contacts-clients">
              <button onClick={this.activeTomorrow} className={this.state.listTomorrow ? 'selected' : ''}>CLIENTS</button>
            </Link>
          </div>
        </div>
      );
    }else{
      return (
        <div className="menuTools">
          <SideBar />
          <div className="switch karla">
            <button onClick={this.activeToday} className={this.state.listToday ? 'selected' : ''}>MES COURSES</button>
            <button onClick={this.activeTomorrow} className={this.state.listTomorrow ? 'selected' : ''}>TOUTES LES COURSES</button>
          </div>
        </div>
      );
    }
  }
}

export default MenuTools;