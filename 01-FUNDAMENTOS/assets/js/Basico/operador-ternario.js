const dia = 1;
const horaActual = 11;

if( [0,6].includes(dia) ){
  console.log("Fin de semana")
}else {
  console.log("Dia de semana")
}

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
console.log(horaApertura)