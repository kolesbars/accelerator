import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { IconSizes } from 'const';
import 'leaflet/dist/leaflet.css';

const ICON_URL =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: ICON_URL,
  iconSize: IconSizes.Size,
  iconAnchor: IconSizes.Anchor,
});

const Map = ({ city, point }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: point.Lat,
        lng: point.Lng,
      });

      marker.setIcon(defaultCustomIcon).addTo(map);
    }
  }, [map, point]);

  return <div style={{ height: '336px', width: '649px' }} ref={mapRef}></div>;
};

export default Map;
