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

const emergencyName =
localStorage.getItem("emergencyName");

const emergencyPhone =
localStorage.getItem("emergencyPhone");

alert(
`🚨 SOS Activated!

Contact: ${emergencyName}
Phone: ${emergencyPhone}`
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
function saveContact(){

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

localStorage.setItem(
"emergencyName",
name
);

localStorage.setItem(
"emergencyPhone",
phone
);

document.getElementById(
"saved-contact"
).innerHTML =
`✅ Saved: ${name} (${phone})`;

}
function saveContact(){

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;

localStorage.setItem("emergencyName", name);
localStorage.setItem("emergencyPhone", phone);

document.getElementById("saved-contact").innerHTML =
`✅ Saved: ${name} (${phone})`;

}
const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition =
new SpeechRecognition();

recognition.continuous = true;

recognition.onresult = function(event){

const text =
event.results[event.results.length-1][0]
.transcript.toLowerCase();

if(
text.includes("help") ||
text.includes("emergency") ||
text.includes("save me")
){

alert("🚨 Voice SOS Activated!");

document.querySelector(".sos-btn").click();

}

};

recognition.start();