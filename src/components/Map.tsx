import Mapbox, {Camera, LocationPuck, MapView} from '@rnmapbox/maps';
//public token
const accessToken =
  'pk.eyJ1IjoianVhbnBhcnJhMTk4OCIsImEiOiJjbHhkeml4Z2owYmRzMm1wdDdxaW1yYXp6In0.oy9iRkyNdufQYpX4X8B6Xg';
Mapbox.setAccessToken(accessToken);

export default function Map() {
  return (
    <MapView
      style={{flex: 1}}
      styleURL="mapbox://styles/mapbox/navigation-night-v1">
      <Camera followUserLocation />
      <LocationPuck />
    </MapView>
  );
}
