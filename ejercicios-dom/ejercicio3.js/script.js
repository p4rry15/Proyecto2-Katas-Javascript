/*1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");

for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    ulCountries.appendChild(li);
}

document.body.appendChild(ulCountries);


/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const removeMe = document.querySelector(".fn-remove-me");
removeMe.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    ulCars.appendChild(li);
}

divPrintHere.appendChild(ulCars);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/

const countriesCards = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countriesCards) {
    const div = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = country.title;

    const img = document.createElement("img");
    img.src = country.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);

    document.body.appendChild(div);
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.*/

const buttonRemoveLast = document.createElement("button");
buttonRemoveLast.textContent = "Eliminar último";

buttonRemoveLast.addEventListener("click", () => {
    const divs = document.querySelectorAll("body > div");
    divs[divs.length - 1].remove();
});

document.body.appendChild(buttonRemoveLast);

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.*/

const divs = document.querySelectorAll("body > div");

for (const div of divs) {
    const button = document.createElement("button");
    button.textContent = "Eliminar";

    button.addEventListener("click", () => {
        div.remove();
    });

    div.appendChild(button);
}

/*
APUNTES DE LOS EJERCICIOS

En estos ejercicios practico cómo crear contenido dinámico desde JavaScript.

En el 1.1 creo una lista ul con varios li usando un array de países.

En el 1.2 selecciono el elemento con la clase .fn-remove-me y lo elimino con remove().

En el 1.3 creo otra lista a partir del array de coches y la inserto dentro del div con data-function="printHere".

En el 1.4 recorro un array de objetos para crear varios divs, cada uno con un h4 y una imagen.

En el 1.5 creo un botón que elimina el último div creado.

En el 1.6 añado un botón dentro de cada div para poder eliminar ese div concreto.
*/