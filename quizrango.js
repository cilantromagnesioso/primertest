const rangoedad = document.getElementById("redad");
const trucado1 = document.getElementById("finedad");

rangoedad.addEventListener("input", function() {
    trucado1.textContent = this.value;
});
trucado1.textContent = rangoedad.value;
