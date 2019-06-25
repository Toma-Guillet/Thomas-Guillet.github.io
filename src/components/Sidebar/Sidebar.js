import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './sideBar.scss';

export default props => {
  return (
    <Menu right>      
      <Link to="/signin">
        <div className="menuSidebar"><div className="bar"></div>NOUVELLES COMMANDES</div>
      </Link>   
      <Link to="/signin">
        <div className="menuSidebar"><div className="bar"></div>CLIENTS</div>
      </Link>   
      <Link to="/signin">
        <div className="menuSidebar"><div className="bar"></div>PROFIL COURSIER</div>
      </Link>   
      <Link to="/signin">
        <div className="menuSidebar"><div className="bar"></div>CONTACT</div>
      </Link>
    </Menu>
  );
};