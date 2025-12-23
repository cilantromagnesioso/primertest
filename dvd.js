const silk = document.querySelector(".dvdxd");
const bordes1 = document.querySelector(".jobapi");

let x_act = 0;
let y_act = 0;
let velx = 2;
let vely = 2;

function dvdsreen() {
    const bordes1_rect = bordes1.getBoundingClientRect();
    const silk_rect = silk.getBoundingClientRect();
    x_act += velx;
    y_act += vely;
    if (x_act <= 0 || x_act + silk_rect.width >= bordes1_rect.width) {
        velx *= -1;
    }
    if (y_act <= 0 || y_act + silk_rect.height >= bordes1_rect.height) {
        vely *= -1;
    }
    silk.style.transform = `translate(${x_act}px, ${y_act}px)`;
    requestAnimationFrame(dvdsreen);
}
dvdsreen();