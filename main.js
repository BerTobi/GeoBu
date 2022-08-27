var watermark1 =document.getElementsByClassName('banner-content')[0];
var watermark2 =document.getElementsByClassName('banner-content_hover')[0];
let posicion
var Localizaciones=[]
Localizaciones[0]={nombre:"Rotary", lat: -34.4209733,lng: -58.5839837, zoom: 17.25}
Localizaciones[1]={nombre:"Madre", lat: -34.4487165,lng: -58.6092354, zoom: 17.25}
Localizaciones[2]={nombre:"Abuelo", lat: -34.4521504,lng: -58.6153645, zoom: 15.5}
Localizaciones[3]={nombre:"Hija", lat: -34.4781203,lng: -58.6493504, zoom: 17}
Localizaciones[4]={nombre:"Hijo", lat: -34.4781203,lng: -58.6493504, zoom: 17}
var valornumerico

let myMap = L.map('myMap').setView([-38.06, -58.26], 6)

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

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);

  L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

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
    myMap.flyTo([Localizaciones[valornumerico].lat, Localizaciones[valornumerico].lng], Localizaciones[valornumerico].zoom)
    L.marker([Localizaciones[valornumerico].lat, Localizaciones[valornumerico].lng], { icon: iconFamiliarMarker }).addTo(myMap)
    if (valor=4) {PersonaEnMovimiento()}
}
function redirigir(){
  location.href = 'https://docs.google.com/document/d/1LBwLHVz0QG-0d4m2BbH3Q6RZwS_5odTy4TBWT5RcCi8/edit?usp=sharing';
}
function remover() {
  var watermark1 =document.getElementsByClassName('banner-content')[0];
var watermark2 =document.getElementsByClassName('banner-content_hover')[0];
                watermark1.parentElement.remove(watermark1);
                watermark2.parentElement.remove(watermark2);
            }
function PersonaEnMovimiento(){
  var movimiento = L.marker([Localizaciones[valornumerico].lat, Localizaciones[valornumerico].lng], { icon: iconFamiliarMarker }).addTo(myMap)
  myMap.removeLayer(movimiento)
}

function borrar(){
  myMap.removeLayer(marker)
}
