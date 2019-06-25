import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import { Link } from "react-router-dom";
import MenuTools from '../components/MenuTools/MenuTools.js';
import List from '../components/List/List.js';
import '../styles/common.scss';

class Home extends Component {
  render() {
    return (
      <main className="home">
      <div className="infosContactClient">
          <Link to="/">
              <button type="button" className="selected">
                  <span>Aujourd'hui</span>
              </button>
          </Link>
          <Link to="/">
              <button type="button" className="">
                  <span>Demain</span>
              </button>
          </Link>
      </div>
        <List />
        <Navigation page="home" />
        <MenuTools />
      </main>
    );
  }
}

export default Home;