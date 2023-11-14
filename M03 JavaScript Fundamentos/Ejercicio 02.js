/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   return "este es el string " + string
}
var nombrestring = devolverString("Hola")
console.log(nombrestring)

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   return x + y;
}
var sumatoria = suma(1,1)
console.log(sumatoria)



function resta(x, y) {
   // Retorna el resultado de la resta.
   return x - y;
}
var restacion = resta(1,1)
console.log(restacion)

function divide(x, y) {
   // Retorna el resultado de su división.
return x / y;
}

var divicion = divide(10,2)
console.log(divicion)

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return x *  y; 
}
var multiplique = multiplica(2, 2);
console.log(multiplique)

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   return x % y;
}
var elrestoes =  obtenerResto(10, 3);
console.log(elrestoes)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
