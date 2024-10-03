//Arreglo ventas 
var ventas = [
    ["Imagenes/venta01.png", "Ricocan", "Precio: s/10.00", "Contenido: 473ml"],
    ["Imagenes/venta02.png", "Twitter","Precio: s/15.00","Contenido: 573ml"],
    ["Imagenes/venta03.jpg", "Diurex","Precio: s/11.00","Contenido: 53ml"],
    ["Imagenes/venta04.png", "Nutriderm","Precio: s/12.00","Contenido: 10ml"],
    ["Imagenes/venta05.jpg", "Ricocat","Precio: s/17.00","Contenido: 20ml"],
    ["Imagenes/venta06.jpg", "Ricocan-Pedigri","Precio: s/10.00","Contenido: 53ml"],
    ["Imagenes/venta07.jpg", "Dog-Chow","Precio: s/20.00","Contenido: 50ml"],
    ["Imagenes/venta08.png", "Thor","Precio: s/11.00","Contenido: 40ml"],
    ["Imagenes/venta09.png", "Pedigree","Precio: s/15.00","Contenido: 55ml"],
    ["Imagenes/venta10.jpg", "Adul-Dog","Precio: s/10.00","Contenido: 53ml"]
];

//Arreglo comidas
var comida = [
    ["Imagenes/comida01.png", "Proplan","Precio: s/20.00","Contenido: 1 kg"],
    ["Imagenes/comida02.jpeg", "Ricocan","Precio: s/10.00","Contenido: 200 gr"],
    ["Imagenes/comida03.jpeg", "Ricocat","Precio: s/17.00","Contenido: 2 kg"],
    ["Imagenes/comida04.jpeg", "Thor","Precio: s/11.00","Contenido: 1 kg"],
    ["Imagenes/comida05.jpg", "Cat-Chow","Precio: s/18.00","Contenido: 15.0 kg"],
    ["Imagenes/comida06.jpg", "Pet-Rabbit-Diet","Precio: s/11.00","Contenido: 1.2 kg"],
    ["Imagenes/comida07.png", "Equilibrio","Precio: s/16.00","Contenido: 2 kg"],
    ["Imagenes/comida08.jpg", "Naturalis","Precio: s/15.00","Contenido: 2 kg"],
    ["Imagenes/comida09.jpg", "PetCare","Precio: s/10.00","Contenido: 95 g"],
    ["Imagenes/comida10.png", "Friskies","Precio: s/20.00","Contenido: 1.42 kg"]
  ];
  
//Arreglo Higiene
var higiene = [
    ["Imagenes/higiene-01.jpg", "Bobby","Precio: s/15.00","Contenido: por unidad"],
    ["Imagenes/higiene-02.jpg", "Shampoo-Sebozole","Precio: s/12.00","Contenido: unidad"],
    ["Imagenes/higiene-03.jpg", "Guante-Limpiador","Precio: s/17.00","Contenido unidad: "],
    ["Imagenes/higiene-04.jpg", "Perfume aeromatizante","Precio: s/24.00","Contenido: unidad"],
    ["Imagenes/higiene-05.jpg", "Seresto","Precio: s/14.00","Contenido: unidad"],
    ["Imagenes/higiene-06.jpg", "Regadera-Manual","Precio: s/27.00","Contenido: unidad"],
    ["Imagenes/higiene-07.jpg", "Kulcan","Precio: s/19.00","Contenido: unidad"],
    ["Imagenes/higiene-08.jpg", "claws-Paws","Precio: s/15.00","Contenido: 250 gr"],
    ["Imagenes/higiene-09.jpg", "Guante + Alfombra","Precio: s/8.00","Contenido: unidad"],
    ["Imagenes/higiene-10.jpg", "Bioline","Precio: s/12.00","Contenido: 50 ml"]
];

//Arreglo Medicina
var medicina = [
    ["Imagenes/medic1.png", "Simparica","Precio: s/15.00","Contenido: 40 mg"],
    ["Imagenes/medic2.png", "NexGard","Precio: s/11.00","Contenido: 68 mg"],
    ["Imagenes/medic3.png", "Simparica-TRIO","Precio: s/26.00","Contenido: 24 mg"],
    ["Imagenes/medic4.png", "Simparica","Precio: s/15.00","Contenido: 80 mg"],
    ["Imagenes/medic5.png", "Ehliquantel","Precio: s/12.00","Contenido: crema"],
    ["Imagenes/medic6.png", "Equilibrium-Senior","Precio: s/24.00","Contenido: 30 ml"],
    ["Imagenes/medic7.png", "Baytril","Precio: s/16.00","Contenido: 20 ml"],
    ["Imagenes/medic8.png", "Stress-Pet","Precio: s/10.00","Contenido: 30 ml"],
    ["Imagenes/medic9.png", "Cofactor","Precio: s/13.00","Contenido: 60 tabletas"],
    ["Imagenes/medic10.png", "Pets-Ocoxin","Precio: s/15.00","Contenido: 150 ml"]
  ];

//Arreglo Ropa
var ropa = [
    ["Imagenes/ropa01.jpg", "Ropa navideña","Precio: s/11.00","Contenido: por unidad"],
    ["Imagenes/ropa02.jpg", "Ropa conjunto adidas","Precio: s/28.00","Contenido: por unidad"],
    ["Imagenes/ropa03.jpg", "Ropa adidas","Precio: s/25.00","Contenido: por unidad"],
    ["Imagenes/ropa04.jpg", "Ropa Playera","Precio: s/20.00","Contenido: por unidad"],
    ["Imagenes/ropa05.jpg", "Ropa Rosada","Precio: s/18.00","Contenido: por unidad"],
    ["Imagenes/ropa06.jpg", "Ropa Lana","Precio: s/10.00","Contenido: por unidad"],
    ["Imagenes/ropa07.jpg", "Polera con capucha","Precio: s/16.00","Contenido: por unidad"],
    ["Imagenes/ropa08.jpg", "Ropa polar","Precio: s/20.00","Contenido: por unidad"],
    ["Imagenes/ropa09.jpg", "Ropa Lana","Precio: s/10.00","Contenido: por unidad"],
    ["Imagenes/ropa10.jpg", "Ropa Mike Wasaoski","Precio: s/30.00","Contenido: por unidad"]
  ];

//Arreglo antipulga
var antipulga = [
    ["Imagenes/antip1.jpg", "Proteggo","Precio: s/15.00","Contenido: 500 mg"],
    ["Imagenes/antip2.jpg", "Bravecto","Precio: s/17.00","Contenido: 500 mg "],
    ["Imagenes/antip4.jpg", "Doctor Pets","Precio: s/11.00","Contenido: 250 ml"],
    ["Imagenes/antip5.jpg", "Collar Seresto","Precio: s/10.00","Contenido: unidad"],
    ["Imagenes/antip6.png", "Ultra Guard","Precio: s/17.00","Contenido: unidad"],
    ["Imagenes/antip7.jpg", "Atrevia","Precio: s/11.00","Contenido: 200 mg"],
    ["Imagenes/antip8.jpg", "Claws Paws","Precio: s/20.00","Contenido: unidad"],
    ["Imagenes/antip9.png", "Power Ultra","Precio: s/20.00","Contenido: 0.7 ml"],
    ["Imagenes/antip10.jpg", "Revolution","Precio: s/16.00","Contenido: unidad"],
    ["Imagenes/antip11.jpg", "FIT FORTE","Precio: s/12.00","Contenido: 4 kg"]
  ];

//Arreglo casas
var casas = [
    ["Imagenes/casas01.jpg", "Casa para Gatos","Precio: s/30.00","Detalle: casa de madera"],
    ["Imagenes/casas02.jpg", "Casa para Gatos","Precio: s/29.00","Detalle: casa grande"],
    ["Imagenes/casas03.jpg", "Casa para Perro","Precio: s/30.00","Detalle: grande para perro adulto"],
    ["Imagenes/casas04.jpg", "Casa para Perro","Precio: s/25.00","Detalle: Casa para cachorros"],
    ["Imagenes/casas05.jpg", "Casa para Gatos","Precio: s/27.00","Detalle: Hechos de madera de roble"],
    ["Imagenes/casas06.jpg", "Casa para Gatos","Precio: s/24.00","Detalle: Casa grande para gatos"],
    ["Imagenes/casas07.jpg", "Casa para Gansters","Precio: s/43.00","Detalle: grande 1.50m x 50cm"],
    ["Imagenes/casas08.jpg", "Pecera","Precio: s/55.00","Detalle: Grande"],
    ["Imagenes/casas09.jpg", "Casa para pajaros","Precio: s/33.00","Detalle: Marron"],
    ["Imagenes/casas10.jpg", "Casa Rabbit","Precio: s/70.00","Detalle: blanca enmallada con dos puertas"]
  ];

  
//FUNCIONES PARA MOSTRAR
function mostrarVentas() {
  var contenedorPrincipal = document.getElementById("productosObject");

  //Limpiar el contenido anterior
  contenedorPrincipal.innerHTML ="";

  // Recorrer el arreglo de ventas 
  for (var i = 0; i < ventas.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = ventas[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = ventas[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = ventas[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = ventas[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);

  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
  }
  // Obtener todos los botones de compra
  var comprarButtons = document.querySelectorAll(".button-item button");

  // Agregar un controlador de eventos a cada botón
  comprarButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener la imagen correspondiente al contenedor actual
    var contenedor = this.parentNode.parentNode;
    var imagen = contenedor.querySelector("img");

    // Verificar si el elemento del carrito ya existe
    var carritoItems = document.querySelectorAll(".carrito-item");
    var existeEnCarrito = false;
    var carritoItem;

    // Recorrer los elementos del carrito para verificar si ya existe la imagen
    carritoItems.forEach(function(item) {
      var imagenCarrito = item.querySelector("img");
      if (imagenCarrito.src === imagen.src) {
        // Si la imagen ya está en el carrito, aumentar la cantidad en 1
        var contador = item.querySelector(".contador span");
        var cantidad = parseInt(contador.textContent);
        cantidad++;
        contador.textContent = cantidad;
        existeEnCarrito = true;
        carritoItem = item;
      }
    });

    // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
    if (!existeEnCarrito) {
      // Crear el elemento del carrito y agregar la imagen
      carritoItem = document.createElement("div");
      carritoItem.className = "carrito-item";
      var imagenCarrito = document.createElement("img");
      imagenCarrito.src = imagen.src;
      carritoItem.appendChild(imagenCarrito);

      // Crear el contador con el botón de reducción
      var contador = document.createElement("div");
      contador.className = "contador";
      var contadorCantidad = document.createElement("span");
      contadorCantidad.textContent = "1";
      contador.appendChild(contadorCantidad);

      // Crear el botón de reducción
      var botonReducir = document.createElement("button");
      botonReducir.textContent = "-";
      contador.appendChild(botonReducir);

      // Añadir controlador de eventos al botón de reducción
      botonReducir.addEventListener("click", function() {
        var cantidad = parseInt(contadorCantidad.textContent);
        if (cantidad > 1) {
          cantidad--;
          contadorCantidad.textContent = cantidad;
        } else {
          // Eliminar el item del carrito
          var carrito = document.getElementById("carrito");
          carrito.removeChild(carritoItem);
        }
      });

      // Agregar el contador al elemento del carrito
      carritoItem.appendChild(contador);

      // Agregar el elemento del carrito al contenedor del carrito
      var contenedorCarrito = document.getElementById("carrito");
      contenedorCarrito.appendChild(carritoItem);
    }
  });
  });
}
function mostrarComida(){
    var contenedorPrincipal = document.getElementById("productosObject");
  
    contenedorPrincipal.innerHTML = "";
  
    // Recorrer el arreglo de Comida 
    for (var i = 0; i < comida.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = comida[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = comida[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = comida[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = comida[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);
  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
    }
  // Obtener todos los botones de compra
  var comprarButtons = document.querySelectorAll(".button-item button");

  // Agregar un controlador de eventos a cada botón
  comprarButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener la imagen correspondiente al contenedor actual
    var contenedor = this.parentNode.parentNode;
    var imagen = contenedor.querySelector("img");

    // Verificar si el elemento del carrito ya existe
    var carritoItems = document.querySelectorAll(".carrito-item");
    var existeEnCarrito = false;
    var carritoItem;

    // Recorrer los elementos del carrito para verificar si ya existe la imagen
    carritoItems.forEach(function(item) {
      var imagenCarrito = item.querySelector("img");
      if (imagenCarrito.src === imagen.src) {
        // Si la imagen ya está en el carrito, aumentar la cantidad en 1
        var contador = item.querySelector(".contador span");
        var cantidad = parseInt(contador.textContent);
        cantidad++;
        contador.textContent = cantidad;
        existeEnCarrito = true;
        carritoItem = item;
      }
    });

    // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
    if (!existeEnCarrito) {
      // Crear el elemento del carrito y agregar la imagen
      carritoItem = document.createElement("div");
      carritoItem.className = "carrito-item";
      var imagenCarrito = document.createElement("img");
      imagenCarrito.src = imagen.src;
      carritoItem.appendChild(imagenCarrito);

      // Crear el contador con el botón de reducción
      var contador = document.createElement("div");
      contador.className = "contador";
      var contadorCantidad = document.createElement("span");
      contadorCantidad.textContent = "1";
      contador.appendChild(contadorCantidad);

      // Crear el botón de reducción
      var botonReducir = document.createElement("button");
      botonReducir.textContent = "-";
      contador.appendChild(botonReducir);

      // Añadir controlador de eventos al botón de reducción
      botonReducir.addEventListener("click", function() {
        var cantidad = parseInt(contadorCantidad.textContent);
        if (cantidad > 1) {
          cantidad--;
          contadorCantidad.textContent = cantidad;
        } else {
          // Eliminar el item del carrito
          var carrito = document.getElementById("carrito");
          carrito.removeChild(carritoItem);
        }
      });

      // Agregar el contador al elemento del carrito
      carritoItem.appendChild(contador);

      // Agregar el elemento del carrito al contenedor del carrito
      var contenedorCarrito = document.getElementById("carrito");
      contenedorCarrito.appendChild(carritoItem);
    }
  });
  });
}
function mostrarHigiene(){
  var contenedorPrincipal = document.getElementById("productosObject");
  
  contenedorPrincipal.innerHTML = "";

  // Recorrer el arreglo de Higiene 
  for (var i = 0; i < higiene.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = higiene[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = higiene[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = higiene[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = higiene[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);
  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
  }
  // Obtener todos los botones de compra
  var comprarButtons = document.querySelectorAll(".button-item button");

  // Agregar un controlador de eventos a cada botón
  comprarButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener la imagen correspondiente al contenedor actual
    var contenedor = this.parentNode.parentNode;
    var imagen = contenedor.querySelector("img");

    // Verificar si el elemento del carrito ya existe
    var carritoItems = document.querySelectorAll(".carrito-item");
    var existeEnCarrito = false;
    var carritoItem;

    // Recorrer los elementos del carrito para verificar si ya existe la imagen
    carritoItems.forEach(function(item) {
      var imagenCarrito = item.querySelector("img");
      if (imagenCarrito.src === imagen.src) {
        // Si la imagen ya está en el carrito, aumentar la cantidad en 1
        var contador = item.querySelector(".contador span");
        var cantidad = parseInt(contador.textContent);
        cantidad++;
        contador.textContent = cantidad;
        existeEnCarrito = true;
        carritoItem = item;
      }
    });

    // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
    if (!existeEnCarrito) {
      // Crear el elemento del carrito y agregar la imagen
      carritoItem = document.createElement("div");
      carritoItem.className = "carrito-item";
      var imagenCarrito = document.createElement("img");
      imagenCarrito.src = imagen.src;
      carritoItem.appendChild(imagenCarrito);

      // Crear el contador con el botón de reducción
      var contador = document.createElement("div");
      contador.className = "contador";
      var contadorCantidad = document.createElement("span");
      contadorCantidad.textContent = "1";
      contador.appendChild(contadorCantidad);

      // Crear el botón de reducción
      var botonReducir = document.createElement("button");
      botonReducir.textContent = "-";
      contador.appendChild(botonReducir);

      // Añadir controlador de eventos al botón de reducción
      botonReducir.addEventListener("click", function() {
        var cantidad = parseInt(contadorCantidad.textContent);
        if (cantidad > 1) {
          cantidad--;
          contadorCantidad.textContent = cantidad;
        } else {
          // Eliminar el item del carrito
          var carrito = document.getElementById("carrito");
          carrito.removeChild(carritoItem);
        }
      });

      // Agregar el contador al elemento del carrito
      carritoItem.appendChild(contador);

      // Agregar el elemento del carrito al contenedor del carrito
      var contenedorCarrito = document.getElementById("carrito");
      contenedorCarrito.appendChild(carritoItem);
    }
  });
  });
}
function mostrarMedicina(){
    var contenedorPrincipal = document.getElementById("productosObject");

    //Limpiar el contenido anterior
    contenedorPrincipal.innerHTML ="";
  
    // Recorrer el arreglo de Medicina 
    for (var i = 0; i < medicina.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = medicina[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = medicina[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = medicina[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = medicina[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);
  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
    }
      // Obtener todos los botones de compra
  var comprarButtons = document.querySelectorAll(".button-item button");

  // Agregar un controlador de eventos a cada botón
  comprarButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener la imagen correspondiente al contenedor actual
    var contenedor = this.parentNode.parentNode;
    var imagen = contenedor.querySelector("img");

    // Verificar si el elemento del carrito ya existe
    var carritoItems = document.querySelectorAll(".carrito-item");
    var existeEnCarrito = false;
    var carritoItem;

    // Recorrer los elementos del carrito para verificar si ya existe la imagen
    carritoItems.forEach(function(item) {
      var imagenCarrito = item.querySelector("img");
      if (imagenCarrito.src === imagen.src) {
        // Si la imagen ya está en el carrito, aumentar la cantidad en 1
        var contador = item.querySelector(".contador span");
        var cantidad = parseInt(contador.textContent);
        cantidad++;
        contador.textContent = cantidad;
        existeEnCarrito = true;
        carritoItem = item;
      }
    });

    // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
    if (!existeEnCarrito) {
      // Crear el elemento del carrito y agregar la imagen
      carritoItem = document.createElement("div");
      carritoItem.className = "carrito-item";
      var imagenCarrito = document.createElement("img");
      imagenCarrito.src = imagen.src;
      carritoItem.appendChild(imagenCarrito);

      // Crear el contador con el botón de reducción
      var contador = document.createElement("div");
      contador.className = "contador";
      var contadorCantidad = document.createElement("span");
      contadorCantidad.textContent = "1";
      contador.appendChild(contadorCantidad);

      // Crear el botón de reducción
      var botonReducir = document.createElement("button");
      botonReducir.textContent = "-";
      contador.appendChild(botonReducir);

      // Añadir controlador de eventos al botón de reducción
      botonReducir.addEventListener("click", function() {
        var cantidad = parseInt(contadorCantidad.textContent);
        if (cantidad > 1) {
          cantidad--;
          contadorCantidad.textContent = cantidad;
        } else {
          // Eliminar el item del carrito
          var carrito = document.getElementById("carrito");
          carrito.removeChild(carritoItem);
        }
      });

      // Agregar el contador al elemento del carrito
      carritoItem.appendChild(contador);

      // Agregar el elemento del carrito al contenedor del carrito
      var contenedorCarrito = document.getElementById("carrito");
      contenedorCarrito.appendChild(carritoItem);
    }
  });
  });
}
function mostrarRopa(){
    var contenedorPrincipal = document.getElementById("productosObject");

    //Limpiar el contenido anterior
    contenedorPrincipal.innerHTML ="";
  
    // Recorrer el arreglo de Ropa 
    for (var i = 0; i < ropa.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = ropa[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = ropa[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = ropa[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = ropa[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);
  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
    }
      // Obtener todos los botones de compra
  var comprarButtons = document.querySelectorAll(".button-item button");

  // Agregar un controlador de eventos a cada botón
  comprarButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener la imagen correspondiente al contenedor actual
    var contenedor = this.parentNode.parentNode;
    var imagen = contenedor.querySelector("img");

    // Verificar si el elemento del carrito ya existe
    var carritoItems = document.querySelectorAll(".carrito-item");
    var existeEnCarrito = false;
    var carritoItem;

    // Recorrer los elementos del carrito para verificar si ya existe la imagen
    carritoItems.forEach(function(item) {
      var imagenCarrito = item.querySelector("img");
      if (imagenCarrito.src === imagen.src) {
        // Si la imagen ya está en el carrito, aumentar la cantidad en 1
        var contador = item.querySelector(".contador span");
        var cantidad = parseInt(contador.textContent);
        cantidad++;
        contador.textContent = cantidad;
        existeEnCarrito = true;
        carritoItem = item;
      }
    });

    // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
    if (!existeEnCarrito) {
      // Crear el elemento del carrito y agregar la imagen
      carritoItem = document.createElement("div");
      carritoItem.className = "carrito-item";
      var imagenCarrito = document.createElement("img");
      imagenCarrito.src = imagen.src;
      carritoItem.appendChild(imagenCarrito);

      // Crear el contador con el botón de reducción
      var contador = document.createElement("div");
      contador.className = "contador";
      var contadorCantidad = document.createElement("span");
      contadorCantidad.textContent = "1";
      contador.appendChild(contadorCantidad);

      // Crear el botón de reducción
      var botonReducir = document.createElement("button");
      botonReducir.textContent = "-";
      contador.appendChild(botonReducir);

      // Añadir controlador de eventos al botón de reducción
      botonReducir.addEventListener("click", function() {
        var cantidad = parseInt(contadorCantidad.textContent);
        if (cantidad > 1) {
          cantidad--;
          contadorCantidad.textContent = cantidad;
        } else {
          // Eliminar el item del carrito
          var carrito = document.getElementById("carrito");
          carrito.removeChild(carritoItem);
        }
      });

      // Agregar el contador al elemento del carrito
      carritoItem.appendChild(contador);

      // Agregar el elemento del carrito al contenedor del carrito
      var contenedorCarrito = document.getElementById("carrito");
      contenedorCarrito.appendChild(carritoItem);
    }
  });
  });
}
function mostrarAntipulga(){
    var contenedorPrincipal = document.getElementById("productosObject");

    //Limpiar el contenido anterior
    contenedorPrincipal.innerHTML ="";
  
  // Recorrer el arreglo de Antipulga 
  for (var i = 0; i < antipulga.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = antipulga[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = antipulga[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = antipulga[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = antipulga[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);
  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
  }
    // Obtener todos los botones de compra
    var comprarButtons = document.querySelectorAll(".button-item button");

    // Agregar un controlador de eventos a cada botón
    comprarButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Obtener la imagen correspondiente al contenedor actual
      var contenedor = this.parentNode.parentNode;
      var imagen = contenedor.querySelector("img");
  
      // Verificar si el elemento del carrito ya existe
      var carritoItems = document.querySelectorAll(".carrito-item");
      var existeEnCarrito = false;
      var carritoItem;
  
      // Recorrer los elementos del carrito para verificar si ya existe la imagen
      carritoItems.forEach(function(item) {
        var imagenCarrito = item.querySelector("img");
        if (imagenCarrito.src === imagen.src) {
          // Si la imagen ya está en el carrito, aumentar la cantidad en 1
          var contador = item.querySelector(".contador span");
          var cantidad = parseInt(contador.textContent);
          cantidad++;
          contador.textContent = cantidad;
          existeEnCarrito = true;
          carritoItem = item;
        }
      });
  
      // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
      if (!existeEnCarrito) {
        // Crear el elemento del carrito y agregar la imagen
        carritoItem = document.createElement("div");
        carritoItem.className = "carrito-item";
        var imagenCarrito = document.createElement("img");
        imagenCarrito.src = imagen.src;
        carritoItem.appendChild(imagenCarrito);
  
        // Crear el contador con el botón de reducción
        var contador = document.createElement("div");
        contador.className = "contador";
        var contadorCantidad = document.createElement("span");
        contadorCantidad.textContent = "1";
        contador.appendChild(contadorCantidad);
  
        // Crear el botón de reducción
        var botonReducir = document.createElement("button");
        botonReducir.textContent = "-";
        contador.appendChild(botonReducir);
  
        // Añadir controlador de eventos al botón de reducción
        botonReducir.addEventListener("click", function() {
          var cantidad = parseInt(contadorCantidad.textContent);
          if (cantidad > 1) {
            cantidad--;
            contadorCantidad.textContent = cantidad;
          } else {
            // Eliminar el item del carrito
            var carrito = document.getElementById("carrito");
            carrito.removeChild(carritoItem);
          }
        });
  
        // Agregar el contador al elemento del carrito
        carritoItem.appendChild(contador);
  
        // Agregar el elemento del carrito al contenedor del carrito
        var contenedorCarrito = document.getElementById("carrito");
        contenedorCarrito.appendChild(carritoItem);
      }
    });
    });
}
function mostrarCasas(){
    var contenedorPrincipal = document.getElementById("productosObject");

    //Limpiar el contenido anterior
    contenedorPrincipal.innerHTML ="";
  
    // Recorrer el arreglo de Casas 
    for (var i = 0; i < casas.length; i++) {

    // crea el elemnto contenedor-ventas 
    var contenedorventa = document.createElement("div");
    contenedorventa.className = "contenedor-venta";

    // Crear elemento item
    var item = document.createElement("div");
    item.className = "item";
    contenedorventa.appendChild(item);
  
    // Crear elemento imagen
    var imagen = document.createElement("img");
    imagen.src = casas[i][0];
    imagen.alt = "";
    item.appendChild(imagen);
  
    // Crear elemento nombre-item
    var nombreItem = document.createElement("div");
    nombreItem.className = "nombre-item";
    var nombreItemLink = document.createElement("a");
    nombreItemLink.href = "";
    nombreItemLink.textContent = casas[i][1];
    nombreItem.appendChild(nombreItemLink);
    item.appendChild(nombreItem);
  
    // Crear elemento item-detalles
    var itemDetalles = document.createElement("div");
    itemDetalles.className = "item-detalles";
    var contenidoP = document.createElement("p");
    contenidoP.textContent = casas[i][2];
    itemDetalles.appendChild(contenidoP);
    var disponiblesP = document.createElement("p");
    disponiblesP.textContent = casas[i][3];
    itemDetalles.appendChild(disponiblesP);
    item.appendChild(itemDetalles);
  
    // Crear elemento button-item
    var buttonItem = document.createElement("div");
    buttonItem.className = "button-item";
    var comprarButton = document.createElement("button");
    comprarButton.textContent = "Comprar";
    buttonItem.appendChild(comprarButton);
    item.appendChild(buttonItem);
  
    // Agregar el elemento contenedor-venta al contenedor principal
    contenedorPrincipal.appendChild(contenedorventa);
    }
      // Obtener todos los botones de compra
  var comprarButtons = document.querySelectorAll(".button-item button");

  // Agregar un controlador de eventos a cada botón
  comprarButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener la imagen correspondiente al contenedor actual
    var contenedor = this.parentNode.parentNode;
    var imagen = contenedor.querySelector("img");

    // Verificar si el elemento del carrito ya existe
    var carritoItems = document.querySelectorAll(".carrito-item");
    var existeEnCarrito = false;
    var carritoItem;

    // Recorrer los elementos del carrito para verificar si ya existe la imagen
    carritoItems.forEach(function(item) {
      var imagenCarrito = item.querySelector("img");
      if (imagenCarrito.src === imagen.src) {
        // Si la imagen ya está en el carrito, aumentar la cantidad en 1
        var contador = item.querySelector(".contador span");
        var cantidad = parseInt(contador.textContent);
        cantidad++;
        contador.textContent = cantidad;
        existeEnCarrito = true;
        carritoItem = item;
      }
    });

    // Si la imagen no existe en el carrito, agregar un nuevo elemento al carrito
    if (!existeEnCarrito) {
      // Crear el elemento del carrito y agregar la imagen
      carritoItem = document.createElement("div");
      carritoItem.className = "carrito-item";
      var imagenCarrito = document.createElement("img");
      imagenCarrito.src = imagen.src;
      carritoItem.appendChild(imagenCarrito);

      // Crear el contador con el botón de reducción
      var contador = document.createElement("div");
      contador.className = "contador";
      var contadorCantidad = document.createElement("span");
      contadorCantidad.textContent = "1";
      contador.appendChild(contadorCantidad);

      // Crear el botón de reducción
      var botonReducir = document.createElement("button");
      botonReducir.textContent = "-";
      contador.appendChild(botonReducir);

      // Añadir controlador de eventos al botón de reducción
      botonReducir.addEventListener("click", function() {
        var cantidad = parseInt(contadorCantidad.textContent);
        if (cantidad > 1) {
          cantidad--;
          contadorCantidad.textContent = cantidad;
        } else {
          // Eliminar el item del carrito
          var carrito = document.getElementById("carrito");
          carrito.removeChild(carritoItem);
        }
      });

      // Agregar el contador al elemento del carrito
      carritoItem.appendChild(contador);

      // Agregar el elemento del carrito al contenedor del carrito
      var contenedorCarrito = document.getElementById("carrito");
      contenedorCarrito.appendChild(carritoItem);
    }
  });
  });
}

// Evento de clic en el botón "Comida"
var btnMostrarComida = document.getElementById("btnMostrarComida");
btnMostrarComida.addEventListener("click", function() {
  mostrarComida();
});
// Evento de clic en el botón "Higiene"
var btnMostrarHigiene = document.getElementById("btnMostrarHigiene");
btnMostrarHigiene.addEventListener("click", function() {
  mostrarHigiene();
});
// Evento de clic en el botón "Medicina"
var btnMostrarMedicina = document.getElementById("btnMostrarMedicina");
btnMostrarMedicina.addEventListener("click", function() {
  mostrarMedicina();
});
// Evento de clic en el botón "Ropa"
var btnMostrarRopa = document.getElementById("btnMostrarRopa");
btnMostrarRopa.addEventListener("click", function() {
  mostrarRopa();
});
// Evento de clic en el botón "Casas"
var btnMostrarCasas = document.getElementById("btnMostrarCasas");
btnMostrarCasas.addEventListener("click", function() {
  mostrarCasas();
});
// Evento de clic en el botón "Antipulgas"
var btnMostrarAntipulgas = document.getElementById("btnMostrarAntipulgas");
btnMostrarAntipulgas.addEventListener("click", function() {
  mostrarAntipulga();
});

// Mostrar por defecto los productos de ventas al cargar la página
mostrarVentas();  