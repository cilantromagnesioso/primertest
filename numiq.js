let iqinput = document.getElementById("iqele");
const btnMas = document.querySelector(".iq_mas");
const btnMenos = document.querySelector(".iq_menos");

btnMas.addEventListener("click", () => {
    iqinput = document.getElementById("iqele");
    if (iqinput.value == 67) {
        iqinput.value = Number(iqinput.value) + 0;
    } else if (iqinput.value != 67) {
        iqinput.value = Number(iqinput.value) + 1;
    }
});

btnMenos.addEventListener("click", () => {
    iqinput = document.getElementById("iqele");
    if (iqinput.value == 0) {
        iqinput.value = Number(iqinput.value) - 0;
    } else if (iqinput.value != 0) {
        iqinput.value = Number(iqinput.value) - 1;
    }
});