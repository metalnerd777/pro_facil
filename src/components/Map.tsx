import Mapbox, {MapView} from '@rnmapbox/maps';
//public token
const accessToken =
  'pk.eyJ1IjoianVhbnBhcnJhMTk4OCIsImEiOiJjbHhkeml4Z2owYmRzMm1wdDdxaW1yYXp6In0.oy9iRkyNdufQYpX4X8B6Xg';
Mapbox.setAccessToken(accessToken);

export default function Map() {
  return <MapView style={{flex: 1}} />;
}
