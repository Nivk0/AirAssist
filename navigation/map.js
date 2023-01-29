import { useState, useEffect } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections, { getDirections } from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';

const Map = () => {
// const [location, setLocation] = useState({
//   latitude: 32.904836451470985,
//   longitude: -97.04454462083804})
const randomCoords = {
latitude: 32.904836451470985,
longitude: -97.04254462083804,
};

Geocoder.init('AIzaSyBkHWBCoweivQEE-m52kT5hGbgRGRmWBL0')

var loc = {
  latitude: 32.904836451470985,
  longitude: -97.04454462083804
}

Geocoder.from("dfw gate d14").then(json => {
      loc = {
        lattitude: json.results[0].geometry.location["lat"],
        longitude: json.results[0].geometry.location["lng"],
      }
      console.log(loc);
    }).catch(error => console.warn(error));

const [location, setLocation] = useState(loc)

return (
    <MapView
    provider={"google"}
    style={{ flex: 1 }}
    initialRegion={{
    latitude: 32.904836451470985,
    longitude: -97.04254462083804,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
    }}
    >

    <Marker
    coordinate={{
    latitude: 32.90470617020362,
    longitude: -97.04147250849363,
    }}
    title="My Marker"
    description="This is my marker"
    />
    <Marker
        coordinate={location}
        title="Random Marker"
        description="This is a random marker"
      />
      <MapViewDirections
        origin= {{
          latitude: 32.90470617020362,
          longitude: -97.04147250849363,
          }}
        destination= {location}
        apikey={'AIzaSyBkHWBCoweivQEE-m52kT5hGbgRGRmWBL0'}
        strokeWidth={3}
        strokeColor="hotpink"
      />
    </MapView>
);
};

export default Map;
