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
Hija="https://www.openstreetmap.org/export/embed.html?bbox=-58.614383339881904%2C-34.45148859383025%2C-58.60542476177216%2C-34.44742769604025&amp;layer=mapnik"
Abuelos="https://www.openstreetmap.org/export/embed.html?bbox=-58.63076090812684%2C-34.45990172103523%2C-58.6218023300171%2C-34.45584123234313&amp;layer=mapnik"
Rotari="https://www.openstreetmap.org/export/embed.html?bbox=-58.58491256833077%2C-34.42146734881196%2C-58.58314231038094%2C-34.420451778091184&amp;layer=cyclosm"
YoMismo="https://www.openstreetmap.org/export/embed.html?bbox=-58.70497226715088%2C-34.4461669196355%2C-58.69789123535157%2C-34.442105763118256&amp;layer=cyclosm";
Persona=YoMismo

function ubicarPersonaSeleccionada(){
    document.getElementById("mapa").src =Persona;
}
function ubicarte(){
    document.getElementById("mapa").src ="https://www.openstreetmap.org/export/embed.html?bbox=-58.70497226715088%2C-34.4461669196355%2C-58.69789123535157%2C-34.442105763118256&amp;layer=cyclosm";
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
