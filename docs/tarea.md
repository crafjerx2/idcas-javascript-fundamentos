### Tarea 


Por favor realizar esta tarea solo con los conocimientos que tienen hasta ahora, pueden apoyarse de archivos de los metodos de arrays para realizarla, no pueden buscar la solucción en internet la idea de la tarea es ver como es su forma de analizar las cosas, si inician no la completan por favor dejarla así mismo.


1. fill. escribe una función que cree un nuevo array con los valores dados.

~~~~
const fill = (tamanioArray, valor) => {

}

const data = 3;
const valor = 'a';
console.log( fill(data, valor) ) // ['a', 'a', 'a']
~~~~


2. reverse. Escriba una función que revierta la matriz de entrada. Por favor, no use array.reverse(); para hacer esta tarea más agradable.

~~~
const reverse = (array) => {
 
}
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
~~~

3. clear. Escriba un método que borre la matriz de todos los elementos innecesarios, como cadenas falsas, indefinidas, vacías, cero, nulo.

~~~
const clear = (array) => {

}
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(clear(data)) // [1, 2, 3]
~~~


4. pair. Escriba un método que devuelva un objeto compuesto por pares clave-valor. 

~~~
const pair = (array) => {

}
const data = [['a', 1], ['b', 2]];
console.log(pair(data)) // { 'a': 1, 'b': 2 }
~~~

5. esIgual. Escribe una función que compare dos arreglos y devuelva verdadero si son idénticos.

~~~
const esIgual = (firstArray, secondArray) => {
 
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(esIgual(arr1, arr2)); // true
console.log(esIgual(arr1, arr3)); // false
console.log(esIgual(arr1, arr4)); // false
~~~