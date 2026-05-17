//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
//Haz varios ejemplos y compruébalos.

function findArrayIndex(array, text) {
  //Tu codigo
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
/*Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

// --- 1. Función para encontrar el índice ---
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

// --- 2. Función para eliminar el ítem ---
function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  } else {
    console.log(`El elemento "${text}" no se encontró en el array.`);
  }

  return array;
}

// --- 3. Ejemplos y comprobaciones ---

console.log("--- Pruebas de findArrayIndex ---");
console.log(findArrayIndex(mainCharacters, "Luke")); // Resultado: 0
console.log(findArrayIndex(mainCharacters, "Rey")); // Resultado: 4
console.log(findArrayIndex(mainCharacters, "Yoda")); // Resultado: -1 (no existe)

console.log("\n--- Pruebas de removeItem ---");

const list1 = removeItem([...mainCharacters], "Anakin");
console.log("Sin Anakin:", list1);

const list2 = removeItem([...mainCharacters], "Leia");
console.log("Sin Leia:", list2);

const list3 = removeItem([...mainCharacters], "Palpatine");
console.log("Intento fallido:", list3);
