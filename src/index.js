// console.log('Something!');

// // const mapboxgl = require("./node_modules/mapbox-gl/src");
const mapboxgl = require("mapbox-gl");
const marker = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1Ijoia2F0YmFsbG8iLCJhIjoiY2phOXVpYzM0MGt5cTJ3cTkyaXZlOTB1ayJ9.-Yg3Z6jWCdF_2FPSEWkIRQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker('Activity', -74.009, 40.705).addTo(map);
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
