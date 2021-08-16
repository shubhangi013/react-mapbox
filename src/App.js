import './App.css';
import React,{ useRef,useEffect, useState} from'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1YmhhbmdpMTMiLCJhIjoiY2tzYTc4Z21rMHhvYzJvazEwdGZpbGgwbiJ9.4n3o1PLJKkV5B0VOiQVKYw';
function App() {
  const mapContainer= useRef(null);
  const map = useRef(null);
  const [longitude, setLongitude] = useState(-89.7)
  const [lattitude, setLattitude] = useState(0)
  const [zoom, setZoom] = useState(4)

    
  
  useEffect(() => {
    if(map.current) return;
    map.current= new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude,lattitude],
      zoom: zoom
    })
 
  });
  
  useEffect(() => {
    if (!map.current) return; 
    map.current.on('move', () => {
    setLongitude(map.current.getCenter().lng.toFixed(4));
    setLattitude(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });
    return (
      <div>
      <div className="sidebar">
      Longitude: {longitude} | Latitude: {lattitude} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" >
      {/* <img alt="image" className="image" src="https://d32dm0rphc51dk.cloudfront.net/djRGFjQJuoXI1NX9Yr0pNA/square.jpg"></img> */}
      </div>
      </div>
      );
}

export default App;
