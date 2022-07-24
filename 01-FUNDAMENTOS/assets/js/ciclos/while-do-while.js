const carros = ['ford', 'mazda', 'honda', 'toyota'];

let i = 0;
let iBis = 0

while (i < carros.length) {
  console.log(carros[i]);
  console.log(i)
  i++;
}

while (carros[iBis]) {
  if (iBis === 1) {
    break; //rompe el ciclo
    /* continue; */ // esta instruccion hace que continue el ciclo.
  }
  iBis++;
  console.log("Entre al ciclo")
}

let j = 0;
do {
  console.log(carros[j])
  j++;
} while (carros[j]);