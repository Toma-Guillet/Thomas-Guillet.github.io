import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation.js';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import googleMaps from '../configs/googleMaps';
import mapOptions from '../configs/mapOptions';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMaps.apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="mapComponent" />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 47.2145519, lng: -1.5652564 }}
    options={mapOptions}
  >
    {props.isMarkerShown && <Marker position={{ lat: 47.2145519, lng: -1.5652564 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

class Map extends Component {

  state = {
    mode: 'couriers',
    isMarkerShown: false,
    markerInfosHeight: 0
  };

  changeMode = value => {
    switch (value) {
      case 'couriers':
        this.setState({mode: 'couriers'});
        break;
      case 'livraisons':
        this.setState({mode: 'livraisons'});
        break;
      default:
        return;
    }
  };

  componentDidMount() {
    this.setState({
      isMarkerShown: true,
      markerInfosHeight: this.refs.markerInfos.clientHeight
    });
  }

  onMarkerClick = () => {
    this.setState({markerInfosHeight: 0});
  };

  closeMarkerInfos = () => {
    this.setState({markerInfosHeight: this.refs.markerInfos.clientHeight});
  };

  render() {
    console.log(this.state.markerInfosHeight);
    return (
      <div className="mapScreen">
        <header>
          <button onClick={() => this.changeMode('couriers')} className={`${this.state.mode = 'couriers' ? 'buttonActive' : 'buttonInactive'} pointer`}>Coursiers</button>
          <button onClick={() => this.changeMode('livraisons')} className={`${this.state.mode = 'livraisons' ? 'buttonActive' : 'buttonInactive'} pointer`}>Livraisons</button>
        </header>
        <MapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.onMarkerClick}
        />
        <Navigation page='map' />
        <div className="markerInfos" ref="markerInfos" style={{bottom: `-${this.state.markerInfosHeight}px`}}>
          <button className="exitButton pointer" onClick={this.closeMarkerInfos}></button>
          <p className="title upper">En cours de livraison</p>
          <div className="infos">
            <div>
              <ul>
                <li>Agence Géniale</li>
                <li>Rue des Lilas<br/>44 000 Nantes</li>
                <li>06 80 50 40 40</li>
              </ul>
            </div>
            <div>
              <p>10:00 > 12:00</p>
            </div>
            <div>
              <p>Merci de contacter Mr. Martin lorsque vous arrivez sur place. Son numéro est 06 60 05 06 06. Le colis est fragile.</p>
            </div>
          </div>
          <button className="upper pointer">Ouvrir la commande</button>
        </div>
      </div>
    );
  }
}

export default Map;