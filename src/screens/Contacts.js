import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import BlocContact from '../components/BlocContact/BlocContact.js';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <div className="marginTop60">
          <BlocContact />
          <BlocContact />
        </div>
        <Navigation page="contacts" />
        <MenuTools page="contact" />
      </div>
    );
  }
}

export default Contacts;