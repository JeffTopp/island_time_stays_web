"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import react-leaflet components (disable SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const MapHome = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [leaflet, setLeaflet] = useState(null);
  const [heartIcon, setHeartIcon] = useState(null);

  // Coordinates for the addresses
  const stevensonCoords = [44.429733, -111.440849];
  const sawtelleCoords = [44.523195, -111.329032];

  // Calculate the center point between the two addresses
  const center = [
    (stevensonCoords[0] + sawtelleCoords[0]) / 2,
    (stevensonCoords[1] + sawtelleCoords[1]) / 2,
  ];

  useEffect(() => {
    setIsMounted(true);

    // Only import Leaflet on the client side
    import("leaflet").then((L) => {
      setLeaflet(L);

      // Define heart icon after Leaflet is loaded
      const newIcon = new L.DivIcon({
        className: "custom-heart-icon",
        html: `
          <div style="
            display: flex; 
            justify-content: center; 
            align-items: center; 
            background-color: #e54f40;
            border-radius: 50%; 
            width: 80px; 
            height: 80px; 
            padding: 8px;
          ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="50" height="50">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
          </div>
        `,
        iconSize: [80, 80],
        iconAnchor: [40, 40],
      });

      setHeartIcon(newIcon);
    });
  }, []);

  if (!isMounted || !leaflet || !heartIcon) return null; // Prevent SSR errors

  return (
    <MapContainer
      className="rounded-lg"
      center={center}
      zoom={11}
      style={{ height: "250px", width: "500px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Circle Highlights */}
      <Circle
        center={stevensonCoords}
        radius={500}
        color="#7b7b89"
        fillColor="#7b7b89"
        fillOpacity={0.3}
      />
      <Circle
        center={sawtelleCoords}
        radius={500}
        color="#7b7b89"
        fillColor="#7b7b89"
        fillOpacity={0.3}
      />

      {/* Markers with Heart Icon */}
      <Marker position={stevensonCoords} icon={heartIcon}>
        <Popup>4234 Stevenson St</Popup>
      </Marker>
      <Marker position={sawtelleCoords} icon={heartIcon}>
        <Popup>4052 Sawtelle Way</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapHome;
