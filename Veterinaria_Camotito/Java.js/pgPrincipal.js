//Carrousel 1
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},3000);
// carrucel 2
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const container = document.querySelector('.productos-contenedor');
const items = document.querySelectorAll('.productos-nro-contenedor');
const itemWidth = items[0].clientWidth + 20; // Adjust for padding/margin
let scrollAmount = 0;

rightBtn.addEventListener('click', () => {
    const maxScroll = (items.length - 3) * itemWidth; // Adjust based on the number of visible items
    if (scrollAmount < maxScroll) {
        scrollAmount += itemWidth;
        container.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

leftBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= itemWidth;
        container.style.transform = `translateX(-${scrollAmount}px)`;
    }
});


//Formulario

function validarText(text, regex) {
    return regex.test(text);
  }
  
  var form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementsByName('Nombre')[0].value;
    var correo = document.getElementsByName('correo')[0].value;
    var telefono = document.getElementsByName('telefono')[0].value;
    var mensaje = document.getElementsByName('mensaje')[0].value;
  
    var telefonoRegex = /^\d{3}-\d{3}-\d{3}$/;
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (
      validarText(nombre.trim(), /^.+$/) &&
      validarText(correo.trim(), correoRegex) &&
      validarText(telefono.trim(), telefonoRegex) &&
      validarText(mensaje.trim(), /^.+$/)
    ) {
      document.getElementById('myForm').reset();
      alert('Formulario enviado con éxito');
    } else {
      alert('Los valores ingresados son incorrectos');
    }
  });



  