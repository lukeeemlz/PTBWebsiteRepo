const track = document.querySelector(".gallery-track");
const next = document.querySelector(".gallery-btn.next");
const prev = document.querySelector(".gallery-btn.prev");

let slides = Array.from(track.children);
const slideWidth = slides[0].offsetWidth;

const firstClone = slides[0].cloneNode(true);
const secondClone = slides[1].cloneNode(true);

const lastClone = slides[slides.length - 1].cloneNode(true);
const secondLastClone = slides[slides.length - 2].cloneNode(true);

// Add clones
track.appendChild(firstClone);
track.appendChild(secondClone);

track.insertBefore(secondLastClone, slides[0]);
track.insertBefore(lastClone, slides[0]);

// Refresh slide list
slides = Array.from(track.children);

let index = 2;

track.style.transform = `translateX(-${index * slideWidth}px)`;

next.addEventListener("click", () => {

    if (index >= slides.length - 2) return;

    index++;

    track.style.transition = "transform .5s ease";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

});

prev.addEventListener("click", () => {

    if (index <= 0) return;

    index--;

    track.style.transition = "transform .5s ease";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

});

track.addEventListener("transitionend", () => {

    if (index === slides.length - 2) {

        track.style.transition = "none";

        index = 2;

        track.style.transform = `translateX(-${index * slideWidth}px)`;

    }

    if (index === 1) {

        track.style.transition = "none";

        index = slides.length - 5;

        track.style.transform = `translateX(-${index * slideWidth}px)`;

    }

});

const gallery = document.querySelector(".gallery-window");

gallery.addEventListener("click", () => {
    window.location.href = "../html/productos.html";
});
