const tilesProvider= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 

let myMap = L.map('myMap').setView([51.505, -0.09], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18,
}).addTo(myMap)


let marker = L.marker([-34.45778082592164, -58.625149726867676].addTo(myMap))

let iconMaker = L.icon({
    // iconUrl = 'imagen/Maker.png'
})