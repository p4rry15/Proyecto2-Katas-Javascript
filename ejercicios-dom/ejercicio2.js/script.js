//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement("div");
const pDentro = document.createElement("p");

divConP.appendChild(pDentro);
document.body.appendChild(divConP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divCon6P = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    divCon6P.appendChild(p);
}

document.body.appendChild(divCon6P);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}

document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me.
const removeMe = document.querySelectorAll(".fn-remove-me");

for (const elemento of removeMe) {
    elemento.remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const todosLosDivs = document.querySelectorAll("div");

const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";

todosLosDivs[1].before(pMedio);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.
const divsInsertHere = document.querySelectorAll("div.fn-insert-here");

for (const div of divsInsertHere) {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
}

/*
APUNTES SOBRE LOS EJERCICIOS

En estos ejercicios practico cómo modificar el HTML desde JavaScript.

En el 2.1, 2.2, 2.3 y 2.4 creo elementos nuevos con createElement() y los añado con appendChild().

En el 2.5 selecciono el h2 con querySelector() y le cambio el texto con textContent.

En el 2.6 creo una lista ul usando un array y un bucle para generar cada li.

En el 2.7 selecciono varios elementos con querySelectorAll() y los elimino con remove().

En el 2.8 uso before() para colocar un párrafo en una posición concreta.

En el 2.9 uso querySelectorAll() y un bucle para añadir una p dentro de varios div.
*/