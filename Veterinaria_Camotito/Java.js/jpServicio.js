var servicios = [
    ["Imagenes/servicio01.jpg", "Corte de pelo", "Cortamos el pelo de tu mascota a tu preferencia"],
    ["Imagenes/servicio02.jpg", "Odontologia canina", "Especialistas en los colmillos de tu mascota"],
    ["Imagenes/servicio03.jpg", "Vacunaciones", "Para prevenir enfermedades"],
    ["Imagenes/servicio04.jpg", "Paseos", "Para el engreido de la casa"],
    ["Imagenes/servicio05.jpg", "Guarderia", "Para que tu mascota tenga amigos"],
    ["Imagenes/servicio06.jpg", "Baños", "Tu mascota más reluciente que nunca"],
    ["Imagenes/servicio07.jpg", "Castraciones", "Castramos o esterilizamos a tu mascota"],
    ["Imagenes/servicio08.jpg", "Operaciones", "Especialistas en los colmillos de tu mascota"],
    ["Imagenes/servicio09.jpg", "Ecografias", "Revisamos malestares internos de tu mascota"],
    ["Imagenes/servicio10.jpg", "Transporte", "Llevamos a tu mascota a la puerta de tu hogar"]
];

var container = document.getElementById("container");

for (var i = 0; i < servicios.length; i += 2) {
    var contenedor1 = document.createElement("div");
    contenedor1.classList.add("contenedor1");

    var conte1 = document.createElement("div");
    conte1.classList.add("conte");

    var conte2 = document.createElement("div");
    conte2.classList.add("conte");

    for (var j = i; j < i + 2 && j < servicios.length; j++) {
        var servicioData = servicios[j];

        var imagen = document.createElement("div");
        imagen.classList.add("imagen");
        var img = document.createElement("img");
        img.src = servicioData[0];
        imagen.appendChild(img);

        var contenido = document.createElement("div");
        contenido.classList.add("contenido");
        var h3 = document.createElement("h3");
        h3.textContent = servicioData[1];
        var p = document.createElement("p");
        p.textContent = servicioData[2];
        contenido.appendChild(h3);
        contenido.appendChild(p);

        var buton = document.createElement("div");
        buton.classList.add("buton");
        var button = document.createElement("button");
        button.classList.add("consulta");
        button.textContent = "Solicitar";
        button.addEventListener("click", function() {
            // Redirigir a la página de formulario con el tipo de servicio en la URL
            window.location.href = "formulario.html?servicio=" + encodeURIComponent(servicioData[1]);
        });
        buton.appendChild(button);

        if (j % 2 === 0) {
            conte1.appendChild(imagen);
            conte1.appendChild(contenido);
            conte1.appendChild(buton);
        } else {
            conte2.appendChild(imagen);
            conte2.appendChild(contenido);
            conte2.appendChild(buton);
        }
    }

    contenedor1.appendChild(conte1);
    contenedor1.appendChild(conte2);
    container.appendChild(contenedor1);
}