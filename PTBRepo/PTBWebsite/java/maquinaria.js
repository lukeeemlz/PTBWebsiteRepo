const wrappers = document.querySelectorAll(".mini-gallery-wrap, .mini-gallery-wrap2");

wrappers.forEach(wrapper => {

    const track = wrapper.querySelector(".gallery-track");
    const gallery = wrapper.querySelector(".gallery-window");
    const next = wrapper.querySelector(".next");
    const prev = wrapper.querySelector(".prev");

    const link = gallery.dataset.link;

    let slides = Array.from(track.children);
    const originalCount = slides.length;
    const slideWidth = gallery.clientWidth;

    // Clone first 2
    track.appendChild(slides[0].cloneNode(true));
    track.appendChild(slides[1].cloneNode(true));

    // Clone last 2
    track.insertBefore(slides[originalCount - 2].cloneNode(true), track.firstChild);
    track.insertBefore(slides[originalCount - 1].cloneNode(true), track.firstChild);

    slides = Array.from(track.children);

    let index = 2;

    track.style.transform = `translateX(-${index * slideWidth}px)`;

    function move() {
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    next.addEventListener("click", () => {
        if (track.style.transition === "none") {
            track.style.transition = "transform .5s ease";
        }

        index++;
        move();
    });

    prev.addEventListener("click", () => {
        if (track.style.transition === "none") {
            track.style.transition = "transform .5s ease";
        }

        index--;
        move();
    });

    track.addEventListener("transitionend", () => {

        // Passed the last real slide
        if (index >= originalCount + 2) {
            track.style.transition = "none";
            index = 2;
            move();

            // force reflow
            track.offsetHeight;
            track.style.transition = "transform .5s ease";
        }

        // Passed the first real slide
        if (index <= 1) {
            track.style.transition = "none";
            index = originalCount + 1;
            move();

            track.offsetHeight;
            track.style.transition = "transform .5s ease";
        }

    });

    gallery.addEventListener("click", () => {
        window.location.href = link;
    });

});