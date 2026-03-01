function inicontrol(id) {
    if (inilock == true) {
        return;
    }
    const seccion = document.getElementById(id);
    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
const iniselect = document.getElementById("inisel");
const inipizzaimg = document.getElementById("inipizza");
const iniiniini = document.getElementById("inicio");
const initextoini = document.getElementById("initextoini");
let inilock = false
iniselect.addEventListener("change", function() {
    if (inilock == true) {
        return;
    }
    const titere = this.value;
    const pizimagenes = {
        default: "plogo.png",
        ohtml: "plogo1.png",
        ocss: "plogo2.png",
        ojs: "plogo3.png"
    };
    inipizzaimg.src = pizimagenes[titere];
    if (titere === "default") {
        initextoini.textContent="Con el selector que esta aqui puedes ver como se ve esta seccion sin algunos de los ingredientes esenciales";
    } else if (titere === "ohtml") {
        initextoini.textContent="Esta es la seccion solo con HTML, como puedes ver; casi no hay colores, el texto se acomoda siempre uno delante del otro, las imagenes no se ajustan a la pantalla y en general, la seccion se ve mal, esto ocurre porque CSS es quien se encargaba de todas estas cosas, pero tambien podras notar que los botones no funcionan porque necesitaban JavaScript para saber que hacian, por eso mismo el selector no funciona y tendras que recargar la pagina si quieres seleccionar otra opcion";
        iniiniini.style.all = "revert";
        iniiniini.querySelectorAll("*").forEach(el => {
            el.style.all = "revert";
        });
        document.body.style.backgroundColor = "transparent";
        inilock = true;
    } else if (titere === "ocss") {
        initextoini.textContent="Esta es la seccion con HTML y CSS, podras notar que los botones no funcionan porque necesitaban JavaScript para saber que hacian, por eso mismo el selector no funciona y tendras que recargar la pagina si quieres seleccionar otra opcion";
        inilock = true;
    } else if (titere === "ojs") {
        initextoini.textContent="Esta es la seccion con los tres lenguajes, como puedes ver no hay diferencia con la version normal porque asi es como funciona una pagina normalmente";
    }
});