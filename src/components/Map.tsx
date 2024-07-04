import Mapbox, {Camera, LocationPuck, MapView} from '@rnmapbox/maps';
import Geolocation from '@react-native-community/geolocation';
import SearchBar from './SearchBar';
import {View, StyleSheet} from 'react-native';

const accessToken =
  'pk.eyJ1IjoianVhbnBhcnJhMTk4OCIsImEiOiJjbHhkeml4Z2owYmRzMm1wdDdxaW1yYXp6In0.oy9iRkyNdufQYpX4X8B6Xg';
Mapbox.setAccessToken(accessToken);

Geolocation.getCurrentPosition(info => console.log(info));

export default function Map() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <MapView
        style={styles.map}
        styleURL="mapbox://styles/juanparra1988/cly7qytvh00ub01qo861yhbew">
        <Camera followUserLocation followZoomLevel={16} />
        <LocationPuck
          puckBearingEnabled={true}
          puckBearing="heading"
          pulsing={{isEnabled: true}}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {flex: 1},
  searchContainer: {
    position: 'absolute',
    top: 15,
    left: 5,
    right: 0,
    zIndex: 1,
  },
});
