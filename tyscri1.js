const elementos = document.querySelectorAll(".typewriter");

function escribirTexto(elemento, velocidad = 12) {
    return new Promise(resolve => {
        const texto = elemento.dataset.text;
        let i = 0;
        elemento.textContent = "";
        const intervalo = setInterval(() => {
            elemento.textContent += texto[i];
            i++;
            if (i >= texto.length) {
                clearInterval(intervalo);
                resolve();
            }
        }, velocidad);
    });
}

async function escribirEnOrden(elementos) {
    for (const el of elementos) {
        await escribirTexto(el);
    }
}

const seccion = document.getElementById("pyseto");
const textos = seccion.querySelectorAll(".typewriter");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !seccion.dataset.animado) {
            seccion.dataset.animado = "true";
            escribirEnOrden(textos);
        }
    });
}, {
    threshold: 0.25
});
observer.observe(seccion);

const imagen = document.querySelectorAll(".eljogor");

const imgobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("atas");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
imagen.forEach(img => imgobserver.observe(img));

const textosFade = document.querySelectorAll(".fiutexto1");

const observerFade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("volarf");
            observerFade.unobserve(entry.target); // solo una vez
        }
    });
}, {
    threshold: 0.2
});

textosFade.forEach(el => observerFade.observe(el));