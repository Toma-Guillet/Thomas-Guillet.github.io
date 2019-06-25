import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import { Redirect } from 'react-router-dom'
import imgPin from '../img/pin.png';
import imgFlag from '../img/flag.png';
import imgPlaceholder from '../img/placeholder.png';
import imgWait from '../img/wait.png';
import imgSpeech from '../img/speech.png';

class Order extends Component {
  render() {
    if (!this.props.location.order) {
        return <Redirect to='/' />
    }
    return (
      <div className="">
        <MenuTools />
        <div className="sub-navbar">
          En attente.
        </div>
        <div className="pickup">
          <div className="line"></div>
          <div className="labelOrder karla"><img src={imgPin} alt="Pick up" /> PICK UP</div>
          <div className="contentLine">
            <div>
              <img src={imgPlaceholder} alt="Pick up djadja" />
              <div className="bold fontSize12">Agence Géniale</div>
              <div className="fontSize12">Rue des Lilas</div>
              <div className="fontSize12">44 000 Nantes</div>
              <div className="karla bold fontSize12">06 80 50 40 40</div>
              <div className="bold">Voir sur la carte</div>
            </div>
            <div><img src={imgWait} alt="Pick up" />10:00 > 12:00</div>
          </div>
          <div>
            <img src={imgSpeech} alt="Pick up" />Merci de contacter Mr. Martin lorsque vous arrivez sur place. Son numéro est 06 60 05 06 06. Le colis est fragile.
          </div>
        </div>
        <div className="drop">
          <div className="labelOrder karla"><img src={imgFlag} alt="Drop" /> DROP</div>
          <div className="contentLine">
          <div>
              <img src={imgPlaceholder} alt="Pick up djadja" />
              <div className="bold fontSize12">Agence Géniale</div>
              <div className="fontSize12">Rue des Lilas</div>
              <div className="fontSize12">44 000 Nantes</div>
              <div className="karla bold fontSize12">06 80 50 40 40</div>
              <div className="bold">Voir sur la carte</div>
            </div>
            <div><img src={imgWait} alt="Pick up" />10:00 > 12:00</div>
          </div>
          <div>
          <img src={imgSpeech} alt="Pick up" />Merci de contacter Mr. Martin lorsque vous arrivez sur place. Son numéro est 06 60 05 06 06. Le colis est fragile.            
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Order;