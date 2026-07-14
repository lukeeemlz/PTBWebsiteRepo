const producto1Imagenes = [
    "/images/anagrama.jpg",
    "/images/caja.jpg",
    "/images/camara.jpg",

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

const producto2Imagenes = [
    "/images/anagrama.jpg",
    "/images/caja.jpg",
    "/images/camara.jpg",

];

let producto2Index = 0;
const producto2Img = document.getElementById("ptbcarousel2");

setInterval(() => {
    producto2Index++;

    if (producto2Index >= producto2Imagenes.length) {
        producto2Index = 0;
    }

    producto2Img.src = producto2Imagenes[producto2Index];

}, 3000);

const producto3Imagenes = [
    "/images/anagrama.jpg",
    "/images/caja.jpg",
    "/images/camara.jpg",

];

let producto3Index = 0;
const producto3Img = document.getElementById("ptbcarousel3");

setInterval(() => {
    producto3Index++;

    if (producto3Index >= producto3Imagenes.length) {
        producto3Index = 0;
    }

    producto3Img.src = producto3Imagenes[producto3Index];

}, 3000);


const producto4Imagenes = [
    "/images/anagrama.jpg",
    "/images/caja.jpg",
    "/images/camara.jpg",

];

let producto4Index = 0;
const producto4Img = document.getElementById("ptbcarousel4");

setInterval(() => {
    producto4Index++;

    if (producto4Index >= producto4Imagenes.length) {
        producto4Index = 0;
    }

    producto4Img.src = producto4Imagenes[producto4Index];

}, 3000);