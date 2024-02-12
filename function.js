
function responder(esCorrecta) {
    if (esCorrecta) {
        document.getElementById("respuesta").innerText = "¡Respuesta correcta!";
    } else {
        document.getElementById("respuesta").innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}

function responder(esCorrecta) {
    if (esCorrecta) {
        document.getElementById("respuesta2").innerText = "¡Respuesta correcta!";
    } else {
        document.getElementById("respuesta2").innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}

const slider = document.getElementById('slider');
        const slides = document.querySelectorAll('.slide');
        const slideWidth = slides[0].clientWidth;
        let currentSlide = 0;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        setInterval(nextSlide, 3500);
