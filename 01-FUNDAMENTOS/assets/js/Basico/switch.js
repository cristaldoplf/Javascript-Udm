const dia = 1;

switch (dia) {
  case 0:
    console.log('Domingo');
    break; // cada case necesita su break a menos que querramos seguir recorriendo el switch
  case 1:
    console.log('Lunes');
    break; 
  case 2:
    console.log('Martes');
    break; 
  default: //si no se cumple ninguna condicion, podemos ejecutar este default
    console.log("No es ninguno de los dias en la seleccion")
    break;
}