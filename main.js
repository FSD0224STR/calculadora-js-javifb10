document.addEventListener("DOMContentLoaded", function () {
  // Obtengo la pantalla de la calculadora
  var pantalla = document.querySelector('.pantalla');

  // Obtengo todos los botones
  var botones = document.querySelectorAll('.button');

  // Repetimos sobre cada botón y asignamos un clic
  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      // Obtengo el valor del botón
      var valorBoton = boton.textContent;

      // Manejamos los diferentes casos
      if (valorBoton === 'C') {
        // Limpio la pantalla si le doy a la 'C'
        pantalla.textContent = '0';
      } else if (valorBoton === '=') {
        // Evaluo la expresión usando math.evaluate()
        try {
          pantalla.textContent = math.evaluate(pantalla.textContent);
        } catch (error) {
          pantalla.textContent = 'Error!!!';
        }
      } else {
        if (pantalla.textContent === '0' || pantalla.textContent === 'Error!!!') {
          pantalla.textContent = valorBoton;
        } else {
          pantalla.textContent += valorBoton;
        }
      }
    });
  });
});
