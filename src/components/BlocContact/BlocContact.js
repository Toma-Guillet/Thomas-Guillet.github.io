import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './blocContact.scss';
import imgPhoneB from '../../img/phoneB.png';
import imgGaspard from '../../img/gaspard.png';

class BlocContact extends Component {
  render() {
    return (
        <div
            className="containerBoxContact"
        >
            <div className="content">
                <div className="infos">
                    <div className="photoContact">
                        <img src={imgGaspard} alt="gaspard" />
                    </div>
                    <div className="infosContact">
                        <div className="nameContact karla">Gaspard</div>
                        <div className="typeContact karla">Vélo</div>
                        <div className="statusContact karla">Disponible</div>
                    </div>
                </div>

                <Link
                    to={{
                        pathname: "/order",
                        order: this.props.task,
                    }}>
                    <button className="goTo" type="button">
                        <img src={imgPhoneB} alt="phone" />
                    </button>
                </Link>
            </div>
        </div>
    );
    
  }
}

export default BlocContact;