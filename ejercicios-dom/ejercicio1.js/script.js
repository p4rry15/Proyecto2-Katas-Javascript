//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector(".showme"));

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector("#pillado"));

//1.3 Usa querySelector para mostrar por consola todos los p
console.log(document.querySelectorAll("p"));

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
console.log(document.querySelectorAll(".pokemon"));

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]'));

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(document.querySelectorAll('[data-function="testMe"]')[2]);

//Apuntes del ejercicio

/*La diferencia que he podido ver a la hora de hacer este ejercicio, es que cuando se trata de clases o partes como los "p"
se pone ("ejemplo"), es decir con paréntesis, sin embargo, cuando se trata de atributos, hay que tener en cuenta los corchetes [].
También saber diferenciar de cuando se pide que afecte a algo en específico o a todo por igual, como en el 1.3 */