import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import imgPhoneB from '../img/phoneB.png';

class Contacts extends Component {
  render() {
    return (
        <div className="contactsClients">
            <div className="infosContactClient">
                <Link to="/">
                    <button type="button" className="selected">
                        <span>Rechercher</span>
                    </button>
                </Link>
                <Link to="/">
                    <button type="button" className="selected">
                        <span>Ajouter un contact</span>
                    </button>
                </Link>
            </div>
            <div className="marginTop107">
                <div className="headerContactClient">Courses du jour</div>
                <div className="containerBoxContact">
                    <div className="content">
                        <div className="infos">
                            <div className="infosContact">
                                <div className="nameContact karla">Gaspard</div>
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
                <div className="headerContactClient">Professionnels</div>
                <div className="containerBoxContact">
                    <div className="content">
                        <div className="infos">
                            <div className="infosContact">
                                <div className="nameContact karla">Gaspard</div>
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
                <div className="containerBoxContact">
                    <div className="content">
                        <div className="infos">
                            <div className="infosContact">
                                <div className="nameContact karla">Gaspard</div>
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
                <div className="headerContactClient">Particuliers</div>
            </div>
            <Navigation page="contacts" />
            <MenuTools page="contact" />
        </div>
    );
  }
}

export default Contacts;