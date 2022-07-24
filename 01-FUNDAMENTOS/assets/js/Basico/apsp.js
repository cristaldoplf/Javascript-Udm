// let xbase = 45, ybase=10;

// function random(x,y) {
//   if (x!=50) {
//     return (y+random(xbase++, y))
//   } else {
//     return 0
//   }
// }

// console.log(random(xbase,ybase))

// let a = [1,2,3]
// let b = a;
// a = [];
// console.log(a,b)

// let c = [1,2,3]
// let d = c;
// c.length = 0;

// console.log(c,d)

// var x = 7, y = 9;
// console.log([x,y] = [y,x])

// var x = 'hi';
// function myFunction() {
//   console.log(x);
//   var x = 'hello;'
// }
// myFunction();

// console.log(false && true || true)
// console.log((false  && true) || true)
// console.log(false && (true || true))

// document.getElementsByClassName

// var obj = {name: 'John'};

// if (obj == {name: 'John'}) {
//   console.log("The condition is true");
// }else if ( obj != {name: 'John'}){
//   console.log("The condition is false");
// }else {
//   console.log("NA")
// }

///////////////////////////////
let arregloDesordenado = [4, 4, 4, 1, 1, 3, 3, 3, 5, 6, 7, 7, 7];
const arreglo = [4, 4, 4, 1, 1, 3, 3, 3, 5, 6, 7, 7, 7].sort();
let arregloContador = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let indiceMayor = 0;
let valorGuardado = 0;
/* console.log(arreglo) */

for (let i = 0; i < arreglo.length; i++) {
  /* console.log(arreglo[i]) */
  if (arreglo[i + 1] === arreglo[i]) {
    /* console.log("Se repite el numero "+ arreglo[i]) */
    if (arreglo[i] != 0) {
      arregloContador[arreglo[i]]++
    } else {
      arregloContador[0]++
    }
  }
}

arregloContador.forEach((e, i) => {
  /* console.log("veces " + e, " indice " + i) */
  if (valorGuardado < e && arregloDesordenado.indexOf(indiceMayor) <= i) {
    indiceMayor = i;
    valorGuardado = e + 1;
  }
})

console.log("INDICE MAYOR " + indiceMayor)
console.table(arregloContador)
console.log(indiceMayor)