let posicion
var Localizaciones=[]
Localizaciones[0]={nombre:"Rotary", lat: -34.4209733,lng: -58.5839837, zoom: 17.25}
Localizaciones[1]={nombre:"Madre", lat: -34.4487165,lng: -58.6092354, zoom: 17.25}
Localizaciones[2]={nombre:"Abuelo", lat: -34.4521504,lng: -58.6153645, zoom: 18}
Localizaciones[3]={nombre:"Hija", lat: -34.4781203,lng: -58.6493504, zoom: 17}
Localizaciones[4]={nombre:"Hijo", lat: -34.4781203,lng: -58.6493504, zoom: 17}
var valornumerico
var marcador
var abueloubicado = 0;
let myMap = L.map('myMap').setView([-38.06, -58.26], 6)

function change(iconID) {
  var item = document.getElementById(iconID);
  if (item) {}
}
window.onload = function(){
  $('.message-box-buttons-panel__window-button').click()
}

L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([51.5, -0.09]).addTo(myMap)

let iconMarker = L.icon({
    iconUrl: 'imagen/Marker.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})
let iconFamiliarMarker = L.icon({
    iconUrl: 'imagen/familiarmarker.png',
    iconSize: [60, 100],
    iconAnchor: [30, 60]
})

let marker2 = L.marker([51.51, -0.09], { icon: iconMarker }).addTo(myMap)


navigator.geolocation.getCurrentPosition(
  (pos) => {
    const { coords } = pos
    const { latitude, longitude } = coords
    posicion=coords
    L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)

    setTimeout(() => {
      myMap.flyTo(new L.LatLng(latitude, longitude))
    }, 200)    
  },
  (error) => {
    console.log(error)
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
function ubicarte(){
    myMap.flyTo([posicion.latitude, posicion.longitude], 16)
}
function ubicarPersonaSeleccionada(valor){
  valornumerico=valor
  if (valor==2 && abueloubicado == 0) {
    agregarmarcador()
    myMap.flyTo([Localizaciones[2].lat, Localizaciones[2].lng], Localizaciones[2].zoom)
    PersonaEnMovimiento()
    ubicadoubicado = 1
  }
  else{
 
    myMap.flyTo([Localizaciones[valornumerico].lat, Localizaciones[valornumerico].lng], Localizaciones[valornumerico].zoom)
    L.marker([Localizaciones[valornumerico].lat, Localizaciones[valornumerico].lng], { icon: iconFamiliarMarker }).addTo(myMap)
  }
}
function redirigir(){
  location.href = 'https://docs.google.com/document/d/1LBwLHVz0QG-0d4m2BbH3Q6RZwS_5odTy4TBWT5RcCi8/edit?usp=sharing';
}

function PersonaEnMovimiento(){
  var movimiento = L.marker([Localizaciones[valornumerico].lat, Localizaciones[valornumerico].lng], { icon: iconFamiliarMarker }).addTo(myMap)
  myMap.removeLayer(movimiento)
}

function agregarmarcador(){
   marcador = new L.marker([Localizaciones[2].lat, Localizaciones[2].lng], { icon: iconFamiliarMarker })
   marcador.addTo(myMap)
}
function quitarmarcador(){
  myMap.removeLayer(marcador)
  Localizaciones[2].lat += 0.0005003
  Localizaciones[2].lng += 0.0011203
}
function PersonaEnMovimiento(){
  if(abueloubicado==0){
  setInterval(() => {
    quitarmarcador()
    agregarmarcador()
    myMap.flyTo([Localizaciones[2].lat, Localizaciones[2].lng], Localizaciones[2].zoom)
  }, 7000)}
      
}


