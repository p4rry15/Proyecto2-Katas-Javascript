// Ejercicio 8
// Accederemos a los datos de una API pública de Game Of Thrones.
// Queremos un select con todos los nombres de los personajes.
// Cuando el usuario seleccione un nombre, debe salir su imagen en la página.

const characterList = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement("option");

      option.textContent = character.fullName;
      option.value = character.imageUrl;

      characterList.appendChild(option);
    });

    characterImage.src = characters[0].imageUrl;

    characterList.addEventListener("change", (event) => {
      characterImage.src = event.target.value;
    });
  });