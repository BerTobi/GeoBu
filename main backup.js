window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#loaded';
		window.location.reload();
	}
} 

let Persona;
let Hija;
let Abuelos;
let Rotari;
let YoMismo;
Hija="https://www.openstreetmap.org/export/embed.html?bbox=-58.6107623577118%2C-34.44948028779199%2C-58.60808014869691%2C-34.44798287400122&amp;layer=mapnik&amp;marker=-34.44873195253579%2C-58.60942109999996s";    
Abuelos="https://www.openstreetmap.org/export/embed.html?bbox=-58.627831935882575%2C-34.459278064038905%2C-58.62246751785279%2C-34.45628356095615&amp;layer=mapnik&amp;marker=-34.45778082592164%2C-58.625149726867676";
Rotari="https://www.openstreetmap.org/export/embed.html?bbox=-58.585241138935096%2C-34.421810294744226%2C-58.5825589299202%2C-34.420186267372&amp;layer=mapnik&amp;marker=-34.4209982850011%2C-58.58390003442764";
YoMismo="https://www.openstreetmap.org/export/embed.html?bbox=-58.7034434080124%2C-34.4456360607195%2C-58.69807898998261%2C-34.44264106846512&amp;layer=mapnik&amp;marker=-34.4441382594907%2C-58.70076274999997";
Persona=YoMismo

function ubicarPersonaSeleccionada(){
    document.getElementById("mapa").src =Persona;
}
function ubicarte(){
    document.getElementById("mapa").src =YoMismo;
}

function ubicarPersona(Familiar){
    document.getElementById("mapa").src =Familiar;
}

function jsFunction(value)
{
    if (value==1) {
        ubicarPersona(Hija);
        Persona=Hija
    }
        else if (value==2 ||value==3){
        ubicarPersona(Abuelos);
        Persona=Abuelos
    }
}
let mapa = L.map(mapa)
let marker = l.marker([-34.45778082592164, -58.625149726867676].addTo(Mapa))