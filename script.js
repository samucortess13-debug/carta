
/* MOSTRAR EL REGALO */
const btnComenzar = document.getElementById("btnComenzar");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

btnComenzar.addEventListener("click", function () {
    inicio.classList.add("oculto");
    regalo.classList.remove("oculto");

    regalo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

/* ABRIR Y CERRAR LA CARTA */
const btnCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");

btnCarta.addEventListener("click", function () {
    const estaOculta = carta.classList.toggle("oculto");

    if (estaOculta) {
        btnCarta.textContent = "Abrir la carta";
    } else {
        btnCarta.textContent = "Cerrar la carta 💌";
    }
});

/* FRASES ALEATORIAS */
const frases = [
    "Eres un recuerdo bonito incluso en los días normales. ❤️",
    "De todos mis momentos favoritos, muchos tienen que ver contigo.",
    "No necesito un día especial para recordarte cuánto te quiero.",
    "Ojalá nunca nos falten motivos para sonreír juntos. 💗",
    "Hay personas que hacen más bonito lo cotidiano. Tú eres una de ellas.",
    "Si pudiera repetir algunos días, elegiría muchos de los que compartí contigo.",
    "Me gusta nuestra historia, incluso las partes que todavía estamos escribiendo.",
    "Qué bonito coincidir contigo en esta vida. ✨",
    "Siempre habrá un lugar especial para nuestros recuerdos.",
    "Lo que más deseo es que nos queden muchas historias bonitas por vivir. 🫶"
];

const btnFrase = document.getElementById("btnFrase");
const frase = document.getElementById("frase");

btnFrase.addEventListener("click", function () {
    const fraseAnterior = frase.textContent;
    let nuevaFrase;

    do {
        const indice = Math.floor(Math.random() * frases.length);
        nuevaFrase = frases[indice];
    } while (nuevaFrase === fraseAnterior && frases.length > 1);

    frase.textContent = nuevaFrase;
});

/* DESCUBRIR LA SORPRESA */
const btnSorpresa = document.getElementById("btnSorpresa");
const sorpresa = document.getElementById("sorpresa");

btnSorpresa.addEventListener("click", function () {
    const estaOculta = sorpresa.classList.toggle("oculto");

    btnSorpresa.textContent = estaOculta
        ? "Descubrir sorpresa 💖"
        : "Guardar sorpresa 💗";
});

/* CORAZONES FLOTANTES */
const contenedorCorazones = document.getElementById("corazones");

function crearCorazon() {
    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");
    corazon.textContent = Math.random() > 0.5 ? "❤" : "♡";

    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.fontSize = (14 + Math.random() * 20) + "px";
    corazon.style.animationDuration = (5 + Math.random() * 5) + "s";

    contenedorCorazones.appendChild(corazon);

    corazon.addEventListener("animationend", function () {
        corazon.remove();
    });
}

setInterval(crearCorazon, 900);
