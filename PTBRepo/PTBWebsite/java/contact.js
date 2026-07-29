emailjs.init({
    publicKey: "iNzLI0zRZH2OUtCuL",
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_4znebya",
        "template_tociyhc",
        this
    )
    .then(() => {
        alert("¡Mensaje enviado correctamente!");
        form.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("No se pudo enviar el mensaje.");
    });
});