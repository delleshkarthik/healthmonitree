
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const EmergencyMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = "pk.eyJ1Ijoic3ViaGFtcHJlZXQiLCJhIjoiY2toY2IwejF1MDdodzJxbWRuZHAweDV6aiJ9.Ys8MP5kVTk5P9V2TDvnuDg";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // Default to New York
      zoom: 9
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add geolocate control
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    });

    map.current.addControl(geolocate);

    // Get user's location and center map
    map.current.on('load', () => {
      geolocate.trigger();
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
};

export default EmergencyMap;
