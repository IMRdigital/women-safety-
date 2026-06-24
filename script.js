document.addEventListener("DOMContentLoaded", () => {

const sosBtn = document.querySelector(".sos-btn");

sosBtn.addEventListener("click", () => {

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(
(position) => {

const lat = position.coords.latitude;
const lon = position.coords.longitude;

alert(
`🚨 SOS Activated!\n\nLatitude: ${lat}\nLongitude: ${lon}`
);

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