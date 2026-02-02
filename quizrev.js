const quizboton = document.getElementById("iq100");
const revelimg = document.querySelector(".iq400");
const quizult = document.querySelectorAll(".quiz_form");
const elrangoo = document.querySelectorAll(".quiz_formrr");

quizboton.addEventListener("click", () => {
    quizult.forEach(quiz_form => {
        const quizsel3 = quiz_form.querySelector('input[type="radio"]:checked');
        const iqfinal = quiz_form.querySelector(".comeniq");
        
        if (!quizsel3) {
            iqfinal.textContent = "Se te olvido poner algo aqui amigou";
            return;
        }
        iqfinal.textContent = quizsel3.dataset.text;
    });
    const iq402 = document.getElementById("iqwaos");
    const iqvalinput = document.getElementById("iqele").value;
    if (iqvalinput == 1) {
        iq402.textContent = "tu si le sabes";
    } else if (iqvalinput == 0) {
        
    } else if (iqvalinput <= 66) {
        iq402.textContent = "no";
    } else if (iqvalinput == 67) {iq402.textContent = "no hare ningun comentario al respecto";}
    console.log(iqvalinput)
    elrangoo.forEach(quiz_formrr => {
        const webos = document.getElementById("finedad").value;
        const rangoofinal = quiz_formrr.querySelector(".comeniqrr");
        if (webos == 0) {
            rangoofinal.textContent = "me avisas cuando nascas para ir a verte";
        } else if (webos == 67) {
            rangoofinal.textContent = "¿lo hiciste a proposito?";
        } else if (webos <= 5) {
            rangoofinal.textContent = "¿estas en el celular de tu mama?";
        } else if (webos <= 12) {
            rangoofinal.textContent = "¿y la de crecer te la sabes?";
        } else if (webos <= 17) {
            rangoofinal.textContent = "si vapeas decepsionas a goku";
        } else if (webos == 18) {
            rangoofinal.textContent = "a ti te va ha servir mucho la seccion '¿?' que estara abajo de esta (proximamente)";
        } else if (webos <= 29) {
            rangoofinal.textContent = "hola, eres joven";
        } else if (webos <= 99) {
            rangoofinal.textContent = "es bueno saberlo";
        } else {rangoofinal.textContent = "¿?";}
    });
    revelimg.classList.add('iq401')
});