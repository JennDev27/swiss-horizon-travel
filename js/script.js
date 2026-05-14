/* Scroll del navbar */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* Scroll del cta */

window.scrollToDestinos = () => {
    const destino = document.getElementById("destinos");
    destino?.scrollIntoView({ behavior: "smooth" });
};

/* Función global de animación */

function animarElementos(selector, delay = 0, threshold = 0.2, once = false) {
    const elementos = document.querySelectorAll(selector);
    if (elementos.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * delay);

                if (once) obs.unobserve(entry.target);
            }
        });
    }, { threshold });

    elementos.forEach(el => observer.observe(el));
}

/* Inicio de las animaciones */

document.addEventListener("DOMContentLoaded", () => {
    
    /* Mensaje personalizado */

const mensaje = document.getElementById("mensaje-dia");

if (mensaje) {

    const hora = new Date().getHours();

    const idioma = localStorage.getItem("idioma") || "es";

    let texto = "";

    if (idioma === "es") {

        if (hora < 12) {
            texto = "Buenos días, bienvenido a Swiss Horizon Travel";
        }

        else if (hora < 18) {
            texto = "Buenas tardes, bienvenido a Swiss Horizon Travel";
        }

        else {
            texto = "Buenas noches, bienvenido a Swiss Horizon Travel";
        }

    }

    else {

        if (hora < 12) {
            texto = "Good morning, welcome to Swiss Horizon Travel";
        }

        else if (hora < 18) {
            texto = "Good afternoon, welcome to Swiss Horizon Travel";
        }

        else {
            texto = "Good evening, welcome to Swiss Horizon Travel";
        }

    }

    mensaje.textContent = texto;
}

    /* Dropdown menú Destinos*/

const dropdown = document.querySelector(".dropdown");
const submenu = document.querySelector(".submenu");

if(dropdown && submenu){

    dropdown.addEventListener("mouseover", () => {
        submenu.classList.add("mostrar");
    });

    dropdown.addEventListener("mouseout", () => {
        submenu.classList.remove("mostrar");
    });

}

    /* Animaciones principales */
    animarElementos(".card-destino", 200);
    animarElementos(".info-cultura", 200);
    animarElementos(".item-experiencia", 120, 0.1, true);

    animarElementos(".imagen-cultura");
    animarElementos(".imagen-ciudad");
    animarElementos(".info-ciudad");
    animarElementos(".tarjeta-cultura", 150, 0.1);
    animarElementos(".item-tradicion");
    animarElementos(".imagen-experiencia");
    animarElementos(".info-experiencia");
    animarElementos(".experiencia-mini", 100, 0.1);
    animarElementos(".info-contacto");
    animarElementos(".formulario-contacto");

    /* Menú activo */

    const rutaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlaces = document.querySelectorAll('.menu a');

    enlaces.forEach(enlace => {
        enlace.classList.toggle(
            "activo",
            enlace.getAttribute("href") === rutaActual
        );
    });

});