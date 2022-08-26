let posicion
var Localizaciones=[]
Localizaciones[0]={nombre:"Rotary", lat: 34.4209568,lng: 58.5861718, zoom: 17.25}
Localizaciones[1]={nombre:"Madre", lat: 34.4486057,lng: 58.6114588, zoom: 17.25}
Localizaciones[2]={nombre:"Abuelo", lat: 34.4344941,lng: 58.6044944, zoom: 15.5}
Localizaciones[3]={nombre:"Hija", lat: 34.5987012,lng: 58.50431, zoom: 17}

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
    myMap.flyTo([Localizaciones[valor].lat, Localizaciones[valor].lng], Localizaciones[valor].zoom)
}