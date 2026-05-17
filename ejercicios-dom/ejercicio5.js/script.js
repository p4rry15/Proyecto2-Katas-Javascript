//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");

for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
}

document.body.appendChild(ul);

/*
APUNTES DEL EJERCICIO

En este ejercicio creo una lista desde JavaScript usando un array de álbumes.

Primero creo una etiqueta ul con createElement().

Después recorro el array albums con un bucle.

Por cada álbum creo un li, le añado el texto con textContent y lo meto dentro de la ul con appendChild().

Al final añado la ul completa al body del HTML.
*/