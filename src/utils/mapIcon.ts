import Leaflet from 'leaflet';

import mapMarkerIMG from '../images/logo-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerIMG,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

export default mapIcon;