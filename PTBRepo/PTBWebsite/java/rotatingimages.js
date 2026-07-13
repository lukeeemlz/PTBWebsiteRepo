const producto1Imagenes = [
    "../images/anagrama.jpg",
    "/..images/caja.png",
];

let producto1Index = 0;
const producto1Img = document.getElementById("ptbcarousel1");

setInterval(() => {
    producto1Index++;

    if (producto1Index >= producto1Imagenes.length) {
        producto1Index = 0;
    }

    producto1Img.src = producto1Imagenes[producto1Index];

}, 3000);