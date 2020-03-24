import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const Maps = ({ _lat, _lng, name }) => {

  const [initial, setInitial] = useState({
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker) => setInitial({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
  });

  const onMapClicked = () => {
    if (initial.showingInfoWindow) {
      setInitial({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  return (
    <Map
      google={google}
      zoom={18}
      initialCenter={{ lat: _lat, lng: _lng }}
      onClick={onMapClicked}
    >
      <Marker onClick={onMarkerClick} title={name} position={{ lat: _lat, lng: _lng }} />
      <InfoWindow marker={initial.activeMarker} visible={initial.showingInfoWindow}>
        <div>
          <h6>{initial.selectedPlace.name}</h6>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(Maps);
