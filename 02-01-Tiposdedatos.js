//Tipo de dato string
var nombre = "Guido";
console.log(nombre);
nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log (numero);

//Tipo de dato Objeto
var objeto = {
    nombre: "Guido",
    apellido: "Barilatti",
    edad: 23
}
console.log (objeto);

//Tipo de dato booleano (true , false)
var bandera = true;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion)

//Tipo de dato Symbol crea un valor unico de una variable
var simbolo = Symbol("mi simbolo ");
console.log (typeof simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefine
var x=1;
console.log(typeof x);
x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//Los arreglos son objetos

//Arreglos
var autos = ["BMW, Audi, Volvo"];
console.log(autos);
var z = [];
console.log(z);

//Concatenacion de cadenas

var nombre = "juan";
var apellido = "perez";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Perez";
console.log(nombreCompleto2);

var x = nombre + 123;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);