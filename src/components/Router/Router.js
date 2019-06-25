import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../screens/Home';
import Map from '../../screens/Map';
import Contacts from '../../screens/Contacts';
import ContactsClients from '../../screens/ContactsClients';
import Order from '../../screens/Order';
import NewOrder from '../../screens/NewOrder';
import Connexion from '../../screens/Connexion';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={Map} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/contacts-clients" exact component={ContactsClients} />
        <Route path="/order" exact component={Order} />
        <Route path="/new" exact component={NewOrder} />
        <Route path="/signin" exact component={Connexion} />
        <Route path="*" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;