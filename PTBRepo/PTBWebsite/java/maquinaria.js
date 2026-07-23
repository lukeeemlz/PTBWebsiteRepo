document.querySelectorAll(".mini-gallery-wrap, .mini-gallery-wrap2").forEach(wrapper => {

    const track = wrapper.querySelector(".gallery-track");
    const next = wrapper.querySelector(".next");
    const prev = wrapper.querySelector(".prev");
    const gallery = wrapper.querySelector(".gallery-window");

    const link = gallery.getAttribute("data-link");

    console.log(link); // should show taller.html / fabrica.html

    let slides = Array.from(track.children);
    const slideWidth = gallery.clientWidth;

    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);

    const lastClone = slides[slides.length - 1].cloneNode(true);
    const secondLastClone = slides[slides.length - 2].cloneNode(true);

    track.append(firstClone);
    track.append(secondClone);

    track.prepend(lastClone);
    track.prepend(secondLastClone);

    slides = Array.from(track.children);

    let index = 2;

    track.style.transform = `translateX(-${index * slideWidth}px)`;


    next.addEventListener("click", () => {

        index++;

        track.style.transition = "transform .5s ease";
        track.style.transform = `translateX(-${index * slideWidth}px)`;

    });


    prev.addEventListener("click", () => {

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


    gallery.addEventListener("click", () => {

        window.location.href = link;

    });

});