import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Icons
const binIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [25, 30],
  iconAnchor: [12, 25],
});

const truckIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  iconSize: [25, 30],
  iconAnchor: [12, 25],
});

const MapComponent: React.FC<{ bins: any[]; trucks: any[]; onItemClick: (item: any) => void }> = ({
  bins,
  trucks,
  onItemClick,
}) => {
  return (
    <MapContainer center={[-17.824, 31.029]} zoom={14} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {bins.map((bin) => (
        <Marker
          key={bin.id}
          position={[bin.lat, bin.lng]}
          icon={binIcon}
          eventHandlers={{
            click: () => onItemClick(bin),
          }}
        >
          <Popup>
            <p>{bin.description}</p>
          </Popup>
        </Marker>
      ))}
      {trucks.map((truck) => (
        <Marker
          key={truck.id}
          position={[truck.lat, truck.lng]}
          icon={truckIcon}
          eventHandlers={{
            click: () => onItemClick(truck),
          }}
        >
          <Popup>
            <p>{truck.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
