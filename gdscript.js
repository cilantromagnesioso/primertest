
const godotgamescom = document.querySelectorAll(".godotdesplegable");

godotgamescom.forEach(godotgame => {
    const game = godotgame.querySelector(".godot_juego_d");
    const gamecont = godotgame.querySelector(".godot_ejdb");
    const gamefix = godotgame.querySelector(".godotcontento")
    game.addEventListener("click", () => {
        godotgame.classList.toggle("onog");
        if (godotgame.classList.contains("onog")) {
            applyCRTFilter();
            gamecont.style.height = (gamecont.scrollWidth / 4 * 3) + "px";
            gamecont.style.overflow = "auto";
            gamefix.style.height = (gamefix.scrollWidth / 4 * 3) + "px";
        } else {
            gamecont.style.height = "0px";
            gamecont.style.overflow = "hidden";
            gamefix.style.height = "0px";
            gamefix.style.overflow = "hidden";
        }
    });
});

// Ejecuta esto una vez al cargar la página
function generateCRTDisplacementMap() {
    const W = 800, H = 600; // Relación 4:3, el tamaño no importa mucho
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(W, H);

    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            // Coordenadas normalizadas de -1 a 1
            const nx = (x / W) * 2 - 1;
            const ny = (y / H) * 2 - 1;
            
            // Barrel distortion: el desplazamiento es proporcional a la distancia al centro
            // Un píxel en el borde se "jala" más hacia afuera que uno en el centro
            const strength = 0.6; // Ajusta la intensidad de la curva
            const dx = nx * (nx * nx + ny * ny) * strength;
            const dy = ny * (nx * nx + ny * ny) * strength;
            
            // Convertir de [-1,1] a [0,255]
            // 128 = sin desplazamiento (neutro)
            const r = Math.round((dx + 1) * 0.5 * 255);
            const g = Math.round((dy + 1) * 0.5 * 255);
            
            const i = (y * W + x) * 4;
            img.data[i]     = Math.min(255, Math.max(0, r)); // R → desplaza X
            img.data[i + 1] = Math.min(255, Math.max(0, g)); // G → desplaza Y
            img.data[i + 2] = 0;
            img.data[i + 3] = 255;
        }
    }

    ctx.putImageData(img, 0, 0);
    return canvas.toDataURL();
}

// Inyectar el mapa en el filtro SVG
function applyCRTFilter() {
    const dataURL = generateCRTDisplacementMap();
    const feImage = document.querySelector('#crt-curve feImage');
    feImage.setAttribute('href', dataURL);
}