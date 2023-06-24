import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 37.7749, lng: -122.4194 }}>
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  ))
);

function App() {
  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6cuOn3F8TXoohJ2rMInmAbPfllvv_ffU"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
