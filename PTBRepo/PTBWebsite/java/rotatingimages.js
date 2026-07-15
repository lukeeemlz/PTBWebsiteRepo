const images = [
    "/images/anagramapng.png",
    "/images/cajapng.png",
    "/images/carcasapng.png",
    "/images/conectorespng.png"
];

let current = 0;

const image = document.getElementById("gallery-image");

function showImage() {
    image.src = images[current];
}

document.querySelector(".gallery-next").addEventListener("click", () => {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    showImage();
});

document.querySelector(".gallery-prev").addEventListener("click", () => {
    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    showImage();
});