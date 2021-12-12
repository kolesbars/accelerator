import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl:
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = ({ city, point }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: point.lat,
        lng: point.lng,
      });

      marker.setIcon(defaultCustomIcon).addTo(map);
    }
  }, [map, point]);

  return <div style={{ height: '336px', width: '649px' }} ref={mapRef}></div>;
};

export default Map;
