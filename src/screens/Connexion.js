import React, { Component } from 'react';
import Input from '../components/InputField/Input';
import logo from '../img/logo.png';

class Connexion extends Component {

  state = {
    login: '',
    password: '',
    error: ''
  };

  getFieldData = (value, fieldName) => {
    switch (fieldName) {
      case 'login':
        this.setState({login: value.target.value});
        break;
      case 'password':
        this.setState({password: value.target.value});
        break;
      default:
        return;
    }
  };

  dismissError = () => {
    this.setState({error: ''});
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('sent');
  };

  render() {
    return (
      <div className="connexion container">
        <h1>
          <img src={logo} alt=""/>
          <span>Gestion des courses</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          {this.state.error &&(
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <Input
            type="text"
            placeholder="Identifiant"
            value={this.state.login}
            fieldName="login"
            required={true}
            getFieldData={this.getFieldData}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={this.state.password}
            fieldName="password"
            required={true}
            getFieldData={this.getFieldData}
          />
          <Input
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default Connexion;