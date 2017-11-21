const mapboxgl = require("mapbox-gl");


const types = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',
  Hotel: 'http://i.imgur.com/D9574Cu.png',
  Restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

const markerFactory = (type, coordinates) => {

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${types[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat([coordinates[0], coordinates[1]]);
};

module.exports = markerFactory;
