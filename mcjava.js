const unacosa = "Hola otra vez, parece ser que escribiste: ";
const temp = "Escribe algo en el cuadro de texto que esta arriba";
let input1 = document.getElementById("siwe");
let input2 = document.getElementById("nowe");
function laburo() {
    if (input2.value == false) {
        input1.textContent = (temp);
    } else {
        const antilaburo = document.getElementById("nowe").value;
        input1.textContent = (unacosa + antilaburo);
    }
}
