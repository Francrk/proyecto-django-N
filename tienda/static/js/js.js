document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        {
            url: "static/img/carrucel/1.jpg",
            nombre: "GREAT FASHION 2017",
            descripcion: "NEW Arrival Collection"
        },
        {
            url: "static/img/carrucel/2.jpg",
            nombre: "EXLUSIVE PRODUCT",
            descripcion: "Get Awesome Items Only in Zenna Online Shop"
        },
        {
            url: "static/img/carrucel/3.jpg",
            nombre: "Enjoy Online Shopping",
            descripcion: "Zenna is perfectly responsive theme"
        }
    ];

    let atras = document.querySelector('.atras');
    let adelante = document.querySelector('.adelante');
    let imagen = document.getElementById('img');
    let puntos = document.getElementById('puntos');
    let texto = document.getElementById('texto');
    let actual = 0;
    let intervalo; 


    

    function actualizarCarrusel() {
        imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="${imagenes[actual].nombre}" loading="lazy">`;
        texto.innerHTML = `
            <h3>${imagenes[actual].nombre}</h3>
            <p>${imagenes[actual].descripcion}</p>
            <div class="texto-botones">
                <button class="comprar">Shop Now</button>
                
            </div>
        `;
        posicionCarrusel();
        
        // Agrega eventos para los botones de cada imagen
        document.querySelector('.comprar').addEventListener('click', () => {
            // Acción para el botón "Comprar"
            alert('Botón Comprar clickeado en ' + imagenes[actual].nombre);
        });

        document.querySelector('.vista').addEventListener('click', () => {
            // Acción para el botón "Ver"
            alert('Botón Ver clickeado en ' + imagenes[actual].nombre);
        });
    }

    function posicionCarrusel() {
        puntos.innerHTML = "";
        imagenes.forEach((_, i) => {
            puntos.innerHTML += i === actual ? '<p class="bold">•</p>' : '<p>•</p>';
        });
    }

    adelante.addEventListener('click', function () {
        actual = (actual + 1) % imagenes.length;
        actualizarCarrusel();
    });

    atras.addEventListener('click', function () {
        actual = (actual - 1 + imagenes.length) % imagenes.length;
        actualizarCarrusel();
    });

    function iniciarCarrusel() {
        intervalo = setInterval(() => {
            actual = (actual + 1) % imagenes.length;
            actualizarCarrusel();
        }, 3000);
    }

    document.querySelector('.carrusel').addEventListener('mouseover', function() {
        clearInterval(intervalo);
    });

    document.querySelector('.carrusel').addEventListener('mouseout', function() {
        iniciarCarrusel();
    });

    actualizarCarrusel();
    iniciarCarrusel();
});



document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "I’m amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care of. This team is really amazing and talented! I will work only with this agency.",
        "The service was fantastic and the design exceeded my expectations. The attention to detail and creativity of the team were impressive. Highly recommend working with this agency!",
        "I am incredibly satisfied with the end result. The template was exactly what I needed and the support was exceptional. This agency truly delivers quality work."
    ];

    const dots = document.querySelectorAll('.carousel-dot');
    const textElement = document.getElementById('testimonial-text');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            textElement.textContent = texts[index];
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Set the first dot as active by default
    if (dots.length > 0) {
        dots[0].classList.add('active');
    }
});


