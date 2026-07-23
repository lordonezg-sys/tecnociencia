/* =========================================================
   Cierra el menú móvil cuando se selecciona una sección
   ========================================================= */
const navbarCollapse = document.getElementById("navbarContenido");

document.querySelectorAll("#navbarContenido .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

/* =========================================================
   Botones de desplazamiento de la cronología
   ========================================================= */
const timeline = document.getElementById("timelineScroll");
const leftButton = document.getElementById("timelineLeft");
const rightButton = document.getElementById("timelineRight");

const timelineStep = () => Math.max(280, timeline.clientWidth * 0.72);

leftButton.addEventListener("click", () => {
  timeline.scrollBy({
    left: -timelineStep(),
    behavior: "smooth"
  });
});

rightButton.addEventListener("click", () => {
  timeline.scrollBy({
    left: timelineStep(),
    behavior: "smooth"
  });
});

/* =========================================================
   Permite mover la cronología con las flechas del teclado
   ========================================================= */
timeline.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    timeline.scrollBy({ left: 180, behavior: "smooth" });
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    timeline.scrollBy({ left: -180, behavior: "smooth" });
  }
});
