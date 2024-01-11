import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';

import currentIconUrl from './icon/mp_colored_red2.png';
import './LeafletMap.css';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState([35.710179001728534, 139.8107304222906]);
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition([position.coords.latitude, position.coords.longitude]);
        setKey(Math.random());  // 現在地取得後にキーを更新して再レンダリング
      },
      () => {
        console.log("位置情報の取得に失敗しました。");
      }
    );
  }, []);

  // 現在地アイコンを作成
  const currentPositionIcon = new L.Icon({
    iconUrl: currentIconUrl,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  return (
    <MapContainer center={currentPosition} zoom={15} style={{ width: '100vw' }} key={key}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={currentPosition} icon={currentPositionIcon} />
    </MapContainer>
  );
};

export default Map;