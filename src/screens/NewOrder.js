import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools';
import '../styles/common.scss';
import validate from '../img/validate.png';

class NewOrder extends Component {

  state = {
    step: 4
  };

  changeStep = (step, event) => {
    event.preventDefault();
    switch (step) {
      case 1:
        this.setState({step: 2});
        break;
      case 2:
        this.setState({step: 3});
        break;
      case 3:
        this.setState({step: 4});
        break;
      case 4:
        this.setState({step: 1});
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="new">
        <MenuTools />
        <header className={this.state.step === 4 ? 'hidden' : 'visible'}>
          <ul>
            <li className="activeStep">
              <p className="upper center">Client</p>
              <p className="center">1</p>
            </li>
            <li className={this.state.step === 2 || this.state.step === 3 ? 'activeStep' : 'inactiveStep'}>
              <p className="upper center">Horaires</p>
              <p className="center">2</p>
            </li>
            <li className={this.state.step === 3 ? 'activeStep' : 'inactiveStep'}>
              <p className="upper center">Adresses</p>
              <p className="center">3</p>
            </li>
          </ul>
        </header>
        <main>

          <form className={this.state.step === 1 ? 'visible' : 'hidden'} onSubmit={event => this.changeStep(1, event)}>
            <h2>Type</h2>
            <div className="type">
              <div className="checkbox pointer">
                <input type="checkbox" id="scales" name="scales"/>
                <label className="pointer" for="scales">Professionel</label>
              </div>
              <div className="checkbox pointer">
                <input type="checkbox" id="scales" name="scales"/>
                <label className="pointer" for="scales">Particulier</label>
              </div>
            </div>
            <h2>Identité client</h2>
            <div className="identity">
              <input type="text" placeholder="Nom du client"/>
              <label>Cette société est un nouveau client et va être ajoutée à la base de donnée</label>
            </div>
            <input type="submit" value="Suivant" className="upper"/>
            <input type="cancel" value="Annuler" className="upper pointer center"/>
          </form>

          <form className={this.state.step === 2 ? 'visible' : 'hidden'} onSubmit={event => this.changeStep(2, event)}>
            <h2>Mode de livraison</h2>
            <div className="livraison">
              <input type="checkbox" placeholder="Nom du client"/>
              <label className="center pointer">Dans la journée</label>
            </div>
            <div className="livraison">
              <input type="checkbox" placeholder="Nom du client"/>
              <label className="center pointer">Moins de 45 minutes</label>
            </div>
            <div className="livraison">
              <input type="checkbox" placeholder="Nom du client"/>
              <label className="center pointer">Définir une plage horaire</label>
            </div>
            <div className="livraison">
              <input type="checkbox" placeholder="Nom du client"/>
              <label className="center pointer">Location</label>
            </div>
            <h2>Volume du colis</h2>
            <div className="volume">
              <div className="checkbox pointer">
                <input type="checkbox" id="scales" name="scales"/>
                <label className="pointer center" htmlFor="scales">Normal pour vélo</label>
              </div>
              <div className="checkbox pointer">
                <input type="checkbox" id="scales" name="scales"/>
                <label className="pointer center" htmlFor="scales">Volumineux pour cargo</label>
              </div>
            </div>
            <h2>Réductions</h2>
            <div className="pointer checkboxBetween">
              <input type="checkbox" id="scales" name="scales"/>
              <label className="pointer" htmlFor="scales">Course offerte</label>
            </div>
            <div className="pointer checkboxBetween">
              <input type="checkbox" id="scales" name="scales"/>
              <label className="pointer" htmlFor="scales">Ajustement tickets</label>
            </div>

            <input type="submit" value="Suivant" className="upper"/>
            <input type="cancel" value="Annuler" className="upper pointer center"/>
          </form>

          <form className={this.state.step === 3 ? 'visible' : 'hidden'} onSubmit={event => this.changeStep(3, event)}>
            <h1>Pickup</h1>
            <h2>Date</h2>
            <input type="date"/>
            <h2>Horaires</h2>
            <input type="time"/>
            <h2>Récurrence</h2>
            <select className="selection">
              <option value="volvo">Pas de récurrence</option>
              <option value="saab">Récurrence</option>
            </select>
            <h2>Commentaire</h2>
            <textarea/>
            <h1>Drop</h1>
            <h2>Date</h2>
            <input type="date"/>
            <h2>Horaires</h2>
            <input type="time"/>
            <h2>Récurrence</h2>
            <select className="selection">
              <option value="volvo">Pas de récurrence</option>
              <option value="saab">Récurrence</option>
            </select>
            <h2>Commentaire</h2>
            <textarea/>
            <input type="submit" value="Valider" className="upper"/>
          </form>

          <form className={`validation ${this.state.step === 4 ? 'visible' : 'hidden'}`} onSubmit={event => this.changeStep(4, event)}>
            <img src={validate} alt=""/>
            <p className="center">La course a bien été ajoutée</p>
            <p className="center">Coût de la course : 2 tickets</p>
            <h2>Récurrence</h2>
            <select className="selection">
              <option value="florent">Florent</option>
              <option value="theo">Théo</option>
              <option vlalue="gaspar">Gaspard</option>
            </select>
            <input type="submit" value="RETOUR À LA GESTION DES COURSES" className="upper"/>
          </form>

        </main>
        <Navigation />
      </div>
    );
  }
}

export default NewOrder;