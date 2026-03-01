const jobmoneda = document.getElementById("jobmoneda");
function limitarInputNumerico(input) {
    input.addEventListener("input", () => {
        const min = Number(input.min);
        const max = Number(input.max);
        input.value = input.value.replace(/[^0-9-]/g, "");
        let valor = Math.round(Number(input.value));
        if (input.value === "") return; // permitir borrar
        if (!isNaN(min) && valor < min) {
            input.value = min;
        }
        if (!isNaN(max) && valor > max) {
            input.value = max;
        }
        if (input.value > 99999) {
            jobmoneda.textContent = "VES";
        } else {
            jobmoneda.textContent = "MXN";
        }
    });
}
const jobS = document.getElementById("jobS");
const trabajo1 = document.getElementById("trabajo1");
const trabajo3 = document.getElementById("trabajo3");
const trabajo4 = document.getElementById("trabajo4");
const trabajo5 = document.getElementById("trabajo5");
const trabajo6 = document.getElementById("trabajo6");
jobS.addEventListener("change", function(){
    const jobS_valor = this.value;
    if (jobS_valor == "a") {
        trabajo1.textContent = "Lexicografo de la RAE";
        trabajo3.textContent = "Doctor del IMSS";
        trabajo4.textContent = "Contador del SAT";
        trabajo5.textContent = "Diseñador web";
        trabajo6.textContent = "Veterinario";
    }
    if (jobS_valor == "b") {
        trabajo1.textContent = "Lexicografa de la RAE";
        trabajo3.textContent = "Doctora del IMSS";
        trabajo4.textContent = "Contadora del SAT";
        trabajo5.textContent = "Diseñadora web";
        trabajo6.textContent = "Veterinaria";
    }
});
// Aplicarlo a todos los que tengan la clase
document.querySelectorAll(".jobjava1")
        .forEach(limitarInputNumerico);

const jobrad = document.querySelectorAll('input[name="jobR"]');
const jobdonde = document.getElementById("joboculto");
jobrad.forEach(jobR => {
    jobR.addEventListener('change',function(){
        if (this.checked) {
            if (this.value == "1") {
                jobdonde.style.display='block';
            }
            if (this.value == "2") {
                jobdonde.style.display='none';
            }
        }
    });
});
document.getElementById('jobphone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : + x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
});
const jobpam = new Audio ("jobpam.mp3");
jobpam.load();
function jobsoli(tipo) {
    jobpam.currentTime=0;
    jobpam.play();
    const contenedor = document.getElementById("resulanim");
    // Quitar clases anteriores
    contenedor.classList.remove("jobcontr", "jobrecha", "jobpendi");
    // Forzar reinicio de animación
    void contenedor.offsetWidth;
    // Agregar nueva clase
    contenedor.classList.add(tipo);
}
const jobboton = document.getElementById("jobreal");
const jobresul = document.getElementById("jobresultado");
const fecha1 = new Date("1900-01-01");
const fecha2 = new Date("2100-01-01");
jobboton.addEventListener("click", () => {
    var lexi=false;
    var astr=false;
    var doct=false;
    var cont=false;
    var dise=false;
    var vete=false;
    var alva=false;
    var chef=false;
    var ceropeso = false;
    var unpeso = false;
    var jobultsueldo = "";
    var inc = null;
    var jobultpuesto = null;
    var escolaridad = 0;
    var jobidiomas = 0;
    var jobcomentario = "";
    var jobultcomida = "";
    var jobcuando="";
    const jobpuesto = document.getElementById("trabaja");
    const jobfecha = document.getElementById("jobtiempo").value;
    const fechajob = new Date(jobfecha);
    const sueldo = document.getElementById("jobsmd").value;
    const jobapellido = document.getElementById("jobapellido").value;
    const jobnombre = document.getElementById("jobnombre").value;
    const jobtel = document.getElementById("jobphone").value;
    const jobedad = document.getElementById("jobedad").value;
    const jobS_valor = jobS.value;
    const jobnacion = document.getElementById("jobnacion");
    const isnajob = document.getElementById("jobisna").value;
    const jobisna = new Date (document.getElementById("jobisna").value);
    const jobdomi = document.getElementById("jobdomi");
    const jobskul = document.getElementById("jobskul");
    const jobing = document.getElementById("idioma1");
    const jobchiman = document.getElementById("idioma2");
    const jobfra = document.getElementById("idioma3");
    const jobara = document.getElementById("idioma4");
    const jobpor = document.getElementById("idioma5");
    const jobesp = document.getElementById("idioma6");
    const jobcomewe = document.getElementById("jobcomewe");
    if (jobpuesto.value == "z") {
        jobresul.textContent = "Elige un puesto";
        return;
    } else if (jobpuesto.value == "a") {
        lexi=true;
        jobcuando="la proxima semana";
        jobultpuesto=trabajo1.textContent;
    } else if (jobpuesto.value == "b") {
        astr=true;
    } else if (jobpuesto.value == "c") {
        doct=true;
        jobcuando="la proxima semana";
        jobultpuesto=trabajo3.textContent;
    } else if (jobpuesto.value == "d") {
        cont=true;
        jobcuando="la proxima semana";
        jobultpuesto=trabajo4.textContent;
    } else if (jobpuesto.value == "e") {
        dise=true;
        jobcuando="hoy mismo";
        jobultpuesto=trabajo5.textContent;
    } else if (jobpuesto.value == "f") {
        vete=true;
        jobcuando="hoy mismo";
        jobultpuesto=trabajo6.textContent;
    } else if (jobpuesto.value == "g") {
        jobsoli("jobrecha");
        jobresul.textContent="¿Genio?, ¿en serio?";
        return;
    } else if (jobpuesto.value == "h") {
        alva=true;
        jobcuando="hoy mismo";
        jobultpuesto="albañil"
    } else if (jobpuesto.value == "i") {
        chef=true;
        jobcuando="la proxima semana";
        jobultpuesto="chef";
    }
    if (jobfecha === "") {
        jobresul.textContent="Pon una fecha";
        return;
    }
    if (fechajob < fecha1 || fechajob >= fecha2) {
        jobresul.textContent="Entendemos que te sientas con libertad al poner la fecha, pero por lo menos pon algo razonable";
        return;
    }
    if ((+sueldo > 40000 && +sueldo < 100000) && (lexi==true || cont==true)) {
        jobsoli("jobrecha");
        jobresul.textContent="No podemos darte tanto dinero";
        return;
    } else if (+sueldo > 30000 && +sueldo < 100000 && doct==true) {
        jobsoli("jobrecha");
        jobresul.textContent="No podemos darte tanto dinero";
        return;
    } else if ((+sueldo > 20000 && +sueldo < 100000) && (dise==true || vete==true || alva==true)) {
        jobsoli("jobrecha");
        jobresul.textContent="No podemos darte tanto dinero";
        return;
    }
    if (+sueldo == 0) {
        ceropeso=true;
    }
    if (+sueldo == 1) {
        unpeso=true;
    }
    if ((jobapellido === "") && (jobnombre === "")) {
        jobresul.textContent="Si bien, realmente no nos importan tu nombre y apellido, y solo estan como una formalidad, aunque sea pon algo ahi por favor";
        return;
    } else if (jobapellido === "") {
        jobresul.textContent="Se te olvido el apellido";
        return;
    } else if (jobnombre === "") {
        jobresul.textContent="Se te olvido el nombre";
        return;
    }
    if (jobtel === "") {
        jobresul.textContent="Pon un numero de telefono";
        return;
    }
    if (jobedad === "") {
        jobresul.textContent="Pon una edad apta para trabajar";
        return;
    } else if (jobedad > 60) {
        jobsoli("jobrecha");
        jobresul.textContent="No contratamos a personas cuyo proceso biologico de deterioro celular y tisular se encuentre en un estado avanzado";
        return;
    } else if (jobedad < 18) {
        jobsoli("jobrecha");
        jobresul.textContent="Debes de tener una edad apta para trabajar";
        return;
    }
    if (jobS_valor == "a") {
        inc="contratado";
    } else if (jobS_valor == "b") {
        inc="contratada";
    }
    if (jobnacion.value == "e" && astr == true) {
        jobsoli("jobpendi");
        jobresul.textContent="¿Un extraterrestre astronauta?, nos pondremos en contacto con la NASA para ver si es posible llegar a algo";
        return;
    } else if (astr == true) {
        jobsoli("jobrecha");
        jobresul.textContent="Una disculpa, no tenemos contactos con la NASA";
        return;
    }
    if (isnajob === "") {
        jobresul.textContent="Pon fecha de nacimiento";
        return;
    } else if (jobisna > fechajob) {
        jobresul.textContent="Aunque sea haz que las fechas tengan sentido";
        return;
    }
    if (jobdomi.value == "z") {
        jobresul.textContent="PON UN DOMICILIO";
        return;
    } else if (jobdomi.value == "f") {
        jobsoli("jobrecha");
        jobresul.textContent="No tienes ninguna casa, ¿verdad?";
        return;
    } else if (jobdomi.value == "e" && (dise==true || vete==true || alva==true)) {
        jobresul.textContent="No creemos que vivas en la mansion de mister beast";
        return;
    } else if (jobdomi.value == "e" && ceropeso==true) {
        jobresul.textContent="Vives en la mansion de mister beast, tenemos que pagarte algo";
        return;
    } else if (jobdomi.value == "e" && (+sueldo < 15000 || +sueldo > 99999)) {
        jobresul.textContent="Vives en la mansion de mister beast, tenemos que pagarte mas";
        return;
    }
    escolaridad = +jobskul.value;
    if (escolaridad === 0) {
        jobresul.textContent="Pon cual es tu nivel de escolaridad";
        return;
    } else if (lexi==true && escolaridad < 5) {
        jobsoli("jobrecha");
        jobresul.textContent="Tienes que tener por lo menos una maestria";
        return;
    } else if ((doct==true || cont==true || dise==true || vete==true || chef==true) && escolaridad < 4) {
        jobsoli("jobrecha");
        jobresul.textContent="Debes de haber pasado la universidad";
        return;
    } else if (alva == true && escolaridad < 3) {
        jobsoli("jobrecha");
        jobresul.textContent="Debes de tener la prepa";
        return;
    }
    if ((!jobesp.checked) && lexi==true) {
        jobsoli("jobrecha");
        jobresul.textContent="Como no vas a dominar el español";
        return;
    }
    if (chef==true && jobcomewe.value=="z") {
        jobsoli("jobrecha");
        jobresul.textContent="No nos queremos imaginar el tipo de comida que hace un chef al que no le gusta lo que hace";
        return;
    } else if (jobcomewe.value=="z") {
        jobultcomida=", gracias por mencionar que no te gusta la comida, asi no tendremos que darte descansos para comer";
    } else if (jobcomewe.value=="k") {
        jobultcomida=", vemos que te gusta mucho la comida asi que consideramos que seria bueno aclarar que no significa que te vayamos a dar algo de comer, si quieres comer tu traeras tu almuerzo";
    } else if (jobcomewe.value=="l") {
        jobsoli("jobrecha");
        jobresul.textContent="Si no te gusta niguna de nuestras comidas favoritas no podemos contratarte";
        return;
    }
    if (jobing.checked) {
        jobidiomas++;
    }
    if (jobchiman.checked) {
        jobidiomas ++;
    }
    if (jobfra.checked) {
        jobidiomas ++;
    }
    if (jobara.checked) {
        jobidiomas ++;
    }
    if (jobpor.checked) {
        jobidiomas ++;
    }
    if (jobesp.checked) {
        jobidiomas ++;
    }
    if (alva==true && jobidiomas > 1) {
        jobcomentario = ", vemos que dominas varios idiomas asi que nos tomaremos la libertad de enviarte a otros paises a trabajar";
    }
    if (ceropeso==true) {
        jobultsueldo="trabajando sin paga";
    } else if (unpeso==true) {
        jobultsueldo="con un sueldo mensual de un peso";
    } else if (+sueldo < 100000) {
        jobultsueldo=`con un sueldo mensual de ${+sueldo} pesos mexicanos`;
    } else {
        jobultsueldo=`con un sueldo mensual de ${+sueldo} bolivares venezolanos`;
    }
    jobsoli("jobcontr");
    jobresul.textContent=`¡Felicidades!, has sido ${inc} para el puesto de ${jobultpuesto} ${jobultsueldo + jobcomentario + jobultcomida}, sin nada mas que decir, empezaras a trabajar ${jobcuando}`;
});