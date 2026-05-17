// 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG'
// usando .filter() y usa .reduce() para conseguir la media de sus .score.
{
  const videogames = [
    { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
    {
      name: "Assasins Creed Valhalla",
      genders: ["Aventura", "RPG"],
      score: 4.5,
    },
    {
      name: "The Last of Us 2",
      genders: ["Acción", "Aventura"],
      score: 9.8,
    },
    { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
    { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
    {
      name: "Legend of Zelda: Breath of the wild",
      genders: ["RPG"],
      score: 10,
    },
  ];

  const rpgVideogames = videogames.filter((videogame) =>
    videogame.genders.includes("RPG")
  );

  const rpgAverageScore =
    rpgVideogames.reduce((acc, videogame) => acc + videogame.score, 0) /
    rpgVideogames.length;

  console.log("Ejercicio 7.1:");
  console.log(rpgAverageScore);
}