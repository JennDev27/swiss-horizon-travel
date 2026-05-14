/**
 * SISTEMA DE CAMBIO DE IDIOMA
 * Este script maneja el cambio de idioma entre español (ES) e inglés (EN) en todas las páginas

// FUNCIÓN PRINCIPAL DE CAMBIO DE IDIOMA

/**
 * Cambia el idioma de toda la página
 * @param {string} idioma - 'es' para español, 'en' para inglés
 */
function cambiarIdioma(idioma) {
    // Guardar idioma seleccionado
    localStorage.setItem('idioma', idioma);

    // Actualizar botones de idioma
    actualizarBotonesIdioma(idioma);

    // Traducir todos los elementos de texto
    traducirElementos(idioma);

    // Traducir títulos de página
    traducirTitulos(idioma);

    // Traducir placeholders de inputs
    traducirPlaceholders(idioma);

    // Traducir atributos alt de imágenes
    traducirAltImagenes(idioma);
}

// ACTUALIZAR BOTONES DE IDIOMA

/**
 * Actualiza la clase activo de los botones de idioma
 * @param {string} idioma - Idioma seleccionado
 */
function actualizarBotonesIdioma(idioma) {
    const botonesIdioma = document.querySelectorAll('.idioma a');

    botonesIdioma.forEach((boton, index) => {
        if ((idioma === 'es' && index === 0) || (idioma === 'en' && index === 1)) {
            boton.classList.add('activo-idioma');
        } else {
            boton.classList.remove('activo-idioma');
        }
    });
}

// TRADUCIR ELEMENTOS DE TEXTO

/**
 * Traduce todos los elementos con atributos data-lang-es y data-lang-en
 * @param {string} idioma - Idioma destino
 */
function traducirElementos(idioma) {
    // Buscar todos los elementos con atributos de idioma
    const elementos = document.querySelectorAll('[data-lang-es]');

    elementos.forEach(elemento => {
        const textoTraducido = elemento.getAttribute(`data-lang-${idioma}`);

        if (textoTraducido) {
            // Preservar la estructura HTML si existe
            if (elemento.innerHTML.includes('<')) {
                // Si tiene HTML interno, usar innerHTML
                elemento.innerHTML = textoTraducido;
            } else {
                // Si es solo texto, usar textContent
                elemento.textContent = textoTraducido;
            }
        }
    });
}

// TRADUCIR TÍTULOS DE PÁGINA

/**
 * Traduce el título de la página y elementos title
 * @param {string} idioma - Idioma destino
 */
function traducirTitulos(idioma) {
    // Traducir título de la página
    const tituloPagina = document.querySelector('title[data-lang-es]');
    if (tituloPagina) {
        const textoTraducido = tituloPagina.getAttribute(`data-lang-${idioma}`);
        if (textoTraducido) {
            document.title = textoTraducido;
        }
    }
}

// TRADUCIR PLACEHOLDERS DE INPUTS

/**
 * Traduce los placeholders de inputs y textareas
 * @param {string} idioma - Idioma destino
 */
function traducirPlaceholders(idioma) {
    // Buscar elementos con data-placeholder
    const elementos = document.querySelectorAll('[data-placeholder-es]');

    elementos.forEach(elemento => {
        const placeholderTraducido = elemento.getAttribute(`data-placeholder-${idioma}`);

        if (placeholderTraducido) {
            elemento.placeholder = placeholderTraducido;
        }
    });
}

// TRADUCIR ALT DE IMÁGENES

/**
 * Traduce los atributos alt de las imágenes
 * @param {string} idioma - Idioma destino
 */
function traducirAltImagenes(idioma) {
    // Buscar imágenes con data-alt-lang
    const imagenes = document.querySelectorAll('img[data-alt-es]');

    imagenes.forEach(imagen => {
        const altTraducido = imagen.getAttribute(`data-alt-${idioma}`);

        if (altTraducido) {
            imagen.alt = altTraducido;
        }
    });
}

// INICIALIZACIÓN AL CARGAR LA PÁGINA

/**
 * Inicializa el idioma al cargar la página
 * Verifica si hay un idioma guardado y lo aplica
 */
document.addEventListener('DOMContentLoaded', function() {
    // Obtener idioma guardado o usar español por defecto
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';

    // Aplicar idioma guardado
    cambiarIdioma(idiomaGuardado);
});