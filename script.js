
function mostrarSeccion(id){
    document.querySelectorAll('.seccion').forEach(sec=>{
        sec.classList.remove('activa');
    });
    document.getElementById(id).classList.add('activa');
}

function abrirImagen(img){
    const visor = document.getElementById('visor');
    const imagenGrande = document.getElementById('imagenGrande');
    imagenGrande.src = img.src;
    visor.style.display = "flex";
}

function cerrarImagen(){
    document.getElementById('visor').style.display = "none";
}




