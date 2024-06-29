// map.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/LeafletMap.css';
import { IconLocation, IconStoreLocation } from './IconLocation.js';
import StoreModal from './StoreModal';

const LeafletMap = ({ center, zoom, userLocation }) => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    fetch('/ubishop/ubicaciones/')
      .then((response) => response.json())
      .then((data) => setUbicaciones(data));
  }, []);

  const handleMarkerClick = (ubicacion) => {
    fetch(`/ubishop/tiendas/${ubicacion.tienda_id}/productos/`)
      .then((response) => response.json())
      .then((productos) => {
        setSelectedStore({ ...ubicacion, productos });
      });
  };

  const closeModal = () => {
    setSelectedStore(null);
  };

  const openStreetMapTiles =
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <div
      className="leaflet-map-container"
      style={{ position: 'relative', zIndex: 0 }}
    >
      <MapContainer center={center} zoom={zoom} className="leaflet-map">
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
          url={openStreetMapTiles}
        />
        {userLocation && (
          <Marker position={userLocation} icon={IconLocation}>
            <Popup>Tu ubicación actual</Popup>
          </Marker>
        )}
        {ubicaciones.map((ubicacion, index) => (
          <Marker
            key={index}
            position={[ubicacion.latitud, ubicacion.longitud]}
            icon={IconStoreLocation}
            eventHandlers={{
              click: () => handleMarkerClick(ubicacion),
            }}
          >
            <Popup>{ubicacion.tienda}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedStore && (
        <StoreModal
          isOpen={!!selectedStore}
          onClose={closeModal}
          store={selectedStore}
        />
      )}
    </div>
  );
};

export default LeafletMap;
