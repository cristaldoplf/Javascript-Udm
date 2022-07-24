// let a = 10;
// let b = a;
// a = 30;

// console.log({a,b})

// let pablo = {nombre:'Pablo'};
// let ana = {...pablo};
// ana.nombre = 'Ana'
// console.log(pablo,ana); //Ambos seran ana por que todos los objetos son
// // pasados por referencia

// const cambiaNombre = ( {... persona} )=> {
//   persona.nombre = 'Tony';
//   return persona;
// }

// let peter = { nombre: 'Peter' };
// let tony = cambiaNombre( peter );

// console.log({peter,tony})

//Arreglos
// const frutas = ['manzana','pera','piña'];
// const otrasFrutas= frutas.slice();
// otrasFrutas.push('Mango')
// console.table({frutas, otrasFrutas})

const frutas = ['manzana', 'pera', 'piña'];

console.time('spread')
const otrasFrutas = [...frutas];
console.timeEnd('spread')

console.time('slice')
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice')

otrasFrutas.push('Mango')
console.table({
  frutas,
  otrasFrutas
})