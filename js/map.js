mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pdHJ5MDcwIiwiYSI6ImNrdXI4YW9mdzBwMzkydXF2dnhoajNoY2kifQ.Sp6-bIriUUkqalqJCosKyA';
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3359028, 48.860878], // [lng, lat]
  zoom: 16,
});

const markerOpt = {
   color: "#7d7d7d",
 };
 
 const marker1 = new mapboxgl.Marker({
   color: "#000000",
 })
   .setLngLat([2.3364, 48.86091])
   .addTo(map);
 
 const marker2 = new mapboxgl.Marker(markerOpt)
   .setLngLat([2.3333, 48.8602])
   .addTo(map);
 
 const marker3 = new mapboxgl.Marker(markerOpt)
   .setLngLat([2.3397, 48.8607])
   .addTo(map);
 
 const marker4 = new mapboxgl.Marker(markerOpt)
   .setLngLat([2.333, 48.8619])
   .addTo(map);
 
 const marker5 = new mapboxgl.Marker(markerOpt)
   .setLngLat([2.3365, 48.8625])
   .addTo(map);
 
 const navMap = new mapboxgl.NavigationControl();
 map.addControl(navMap, "top-right");
