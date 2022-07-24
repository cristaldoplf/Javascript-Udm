function saludar() {
  console.log( arguments )
  // hace referencia a todos los elementos enviados como argumento no declarados
  //incluso los no declarados || esta propiedad no esta disponible en arrow functions.
  console.log('Hola Mundo');
  return 1;
} // funcion declarada
saludar('Pablo', 33, true,'Argentine')

const saludar2 = function(){
  console.log('Hola Mundo')
} //funcion anonima, esta es buena practica, asignarla a una const para que no pueda ser reasignada




