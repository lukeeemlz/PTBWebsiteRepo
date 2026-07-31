function makeLogoClickable() {

    var logo = document.querySelector(".ptblogo");

    if (logo) {
        console.log("✅ Logo found:", logo);


        logo.style.cursor = "pointer";


        logo.addEventListener("click", function () {
            window.location.href = "EN/IndexEN.html";
        });
    } else {
        setTimeout(makeLogoClickable, 300);
    }
}


makeLogoClickable();