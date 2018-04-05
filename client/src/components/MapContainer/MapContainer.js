import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
  const style = {
    width: '400px',
    height: '400px',
    fontSize: 8
  }
  const markerStyle = {
    fontSize: 8
  }
export class MapContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
render() {
    return (
     <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 26.464330,
            lng: -81.773407
          }}
          zoom={17}
          onClick={this.onMapClicked}
        >
        <Marker onClick={this.onMarkerClick}
            title={'Our Location'}
            name={'10501 FGCU Blvd, Fort Myers, FL 33965'}
            style = {markerStyle}/>
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          sytle = {markerStyle}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer)

