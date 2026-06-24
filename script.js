document.addEventListener("DOMContentLoaded", () => {

const sosBtn = document.querySelector(".sos-btn");
const locationText = document.getElementById("location-text");

sosBtn.addEventListener("click", () => {

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(
(position) => {

const lat = position.coords.latitude;
const lon = position.coords.longitude;

locationText.innerHTML =
`Latitude: ${lat}<br>Longitude: ${lon}`;

window.open(
`https://www.google.com/maps?q=${lat},${lon}`,
"_blank"
);

alert("🚨 SOS Activated!");

},
(error) => {
alert("Location access denied.");
}
);

}else{
alert("Geolocation not supported.");
}

});

});