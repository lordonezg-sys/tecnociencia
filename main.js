/* =========================================================
   NAVEGACIÓN ACTIVA
========================================================= */

const secciones = document.querySelectorAll(
    "article[id], section[id]"
);

const enlaces = document.querySelectorAll(
    ".menu a"
);


function actualizarNavegacion() {

    let seccionActual = "";

    secciones.forEach((seccion) => {

        const posicion = seccion.offsetTop - 140;

        if (window.scrollY >= posicion) {
            seccionActual = seccion.getAttribute("id");
        }

    });


    enlaces.forEach((enlace) => {

        enlace.classList.remove("activo");

        const destino = enlace
            .getAttribute("href")
            .replace("#", "");

        if (destino === seccionActual) {
            enlace.classList.add("activo");
        }

    });

}


window.addEventListener(
    "scroll",
    actualizarNavegacion
);

actualizarNavegacion();



/* =========================================================
   DESPLAZAMIENTO SUAVE
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((enlace) => {

        enlace.addEventListener(
            "click",
            function(event) {

                const destino = document.querySelector(
                    this.getAttribute("href")
                );

                if (!destino) return;

                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });
