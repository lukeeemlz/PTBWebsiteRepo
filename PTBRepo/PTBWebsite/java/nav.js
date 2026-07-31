document.addEventListener("DOMContentLoaded", function () {
    const navMap = {
        btnEmpresa: "/html/empresa.html",
        btnProduccion: "/html/produccion.html",
        btnProductos: "/html/productos.html",
        btnMaquinaria: "/html/maquinaria.html",
        btnContacto: "/html/contacto.html"
    };

    for (let id in navMap) {
        let btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", function () {
                window.location.href = navMap[id];
            });
        }
    }
});