document.addEventListener("DOMContentLoaded", function() {
    var servicios = [
        "Corte de pelo",
        "Odontologia canina",
        "Vacunaciones",
        "Paseos",
        "Guarderia",
        "Baños",
        "Castraciones",
        "Operaciones",
        "Ecografias",
        "Transporte"
    ];

    // Llenar el combo-box con los servicios
    var servicioSelect = document.getElementById("servicio");
    servicios.forEach(function(servicio) {
        var option = document.createElement("option");
        option.value = servicio;
        option.textContent = servicio;
        servicioSelect.appendChild(option);
    });

    // Obtener el servicio desde la URL si está presente
    var urlParams = new URLSearchParams(window.location.search);
    var servicioParam = urlParams.get('servicio');
    if (servicioParam) {
        servicioSelect.value = servicioParam;
    }

    // Manejar el botón de regresar
    document.getElementById("regresarBtn").addEventListener("click", function() {
        window.location.href = "pgServicio.html";
    });

    // Manejar el formulario de guardar
    document.getElementById("citaForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("¡Cita guardada exitosamente!");
    });
});
