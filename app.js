//Para asegurarnos que se carguen nuestras funciones
window.onload = function() {


var mostrarOcultar = function(event){
    var tabSeleccionado = event.target.dataset.tabSeleccionado;
    var segundaGen2017 = document.getElementById("2017_2");
    var primeraGen2017 = document.getElementById("2017_1");
    var segundaGen2016 = document.getElementById("2016_2");
   
       if(tabSeleccionado === 'tab2017_2'){
        console.log('vemos gen 17-2');
        //oculta gen 2017-1 y 2016-2
        primeraGen2017.style.display= 'none';  
        segundaGen2016.style.display= 'none'
        //mostrar gen 2017-2
        segundaGen2017.style.display="block"; 
        
    }else if (tabSeleccionado === 'tab2017_1'){
        console.log('vemos gen 17-1');
        //oculta gen  2017-2 y 2016-2
        segundaGen2017.style.display= 'none';
        segundaGen2016.style.display= 'none'
        //muestra solo 2017-1
        primeraGen2017.style.display= 'block';

    }else if (tabSeleccionado === 'tab2016_2'){
        console.log('vemos gen 16-2');
        //oculta gen 2017 2 y 1
        segundaGen2017.style.display= 'none';
        primeraGen2017.style.display= 'none'
        //muestra solo 2016-2
        segundaGen2016.style.display= 'block';
    }
    
}



//creando var para cargar evento del tab (pestañas generaciones)
var cargarPagina = function(){
//ocultando contenido  de todas las solapas al recargar la página
    var segundaGen2017 = document.getElementById("2017_2");
    var primeraGen2017 = document.getElementById("2017_1");
    var segundaGen2016 = document.getElementById("2016_2"); 
    var elementosTab = document.getElementsByClassName("tab");
    segundaGen2017.style.display= 'none';
    primeraGen2017.style.display= 'none'
    segundaGen2016.style.display= 'none';
    var elementosTab = document.getElementsByClassName("tab");
    for(var i = 0; i < elementosTab.length; i++){
        elementosTab[i].addEventListener("click", mostrarOcultar);
    }
}

cargarPagina(); 
//´Botón de ir arriba del documento
function toTop() {
    window.scrollTo(0, 0)
}

toTop();
//alert('hola'); comprobando vinculo y funcionalidad


function myFunction() {
//para buscar nombres en search
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementsByClassName("myUl");
    var li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
myFunction();
//alert('estoy');comprobando vinculo y funcionalidad

}
