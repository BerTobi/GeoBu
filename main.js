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
Hija="https://www.openstreetmap.org/export/embed.html?bbox=-58.614383339881904%2C-34.45148859383025%2C-58.60542476177216%2C-34.44742769604025&amp;layer=mapnik";    
Abuelos="https://www.openstreetmap.org/export/embed.html?bbox=-58.63076090812684%2C-34.45990172103523%2C-58.6218023300171%2C-34.45584123234313&amp;layer=mapnik";
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

