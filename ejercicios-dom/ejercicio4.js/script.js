//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click
const btnToClick = document.querySelector("#btnToClick");

btnToClick.addEventListener("click", function (event) {
  console.log(event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", function (event) {
  console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function (event) {
  console.log(event.target.value);
});

/*
APUNTES DE LOS EJERCICIOS

En estos ejercicios practico eventos en JavaScript.

En el 1.1 selecciono el botón con querySelector() y uso addEventListener() para detectar el click.

En el 1.2 uso el evento focus para mostrar por consola el valor del input cuando se selecciona.

En el 1.3 uso el evento input para mostrar por consola el valor del input mientras se escribe.
*/