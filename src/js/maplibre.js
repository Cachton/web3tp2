
import maplibregl from "maplibre-gl";

// map
var mapInstance = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/toner-v2/style.json?key=CA8vNqMfqMEhsx7i7xpz', 
  center: [-74.5, 40], 
  zoom: 9 
});
0