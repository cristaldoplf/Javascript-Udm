/* 
2C = two of clubs
2D = two of diaminds
2H = two of hearts
2S = two of spades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const especiales = ['A', 'J', 'Q', 'K']
let puntosJugador = 0;
let puntosComputadora = 0;

//referencias del HTML
const btnPedir = document.querySelector('#btnPedir')
const btnNuevo = document.querySelector('#btnNuevo')
const btnDetener = document.querySelector('#btnDetener')
const small = document.querySelectorAll('small')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')

// esta funcion crea un nuevo deck mezclado
const crearDeck = () => {
  deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo)
      // console.log(i+tipo)
    }
  }
  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(especial + tipo)
    }
  }

  deck = _.shuffle(deck)


  return deck;
}

crearDeck();


//esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck'
  }

  const carta = deck.pop()

  return carta
}

// pedirCarta()

//podemos saber el valor de la carta pedida
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor) ?
    (valor === 'A') ? 11 : 10 :
    valor * 1);

  /*
  let puntos = 0;
  if (isNaN(valor)) {
    puntos = (valor === 'A') ? 11 : 10;
  } else {
    puntos = valor * 1; 
  } 

  isNaN(valor) ? puntos = (valor === 'A') ? 11 : 10 : puntos = valor * 1;

  */
  //podemos transformar un string a un number multiplicando por 1
}

const turnoComputadora = (puntosMinimos) => {

  do {
    const carta = pedirCarta();
    puntosComputadora += valorCarta(carta);
    console.log(puntosComputadora);
    small[1].innerHTML = puntosComputadora;

    let imagen = document.createElement("img")
    imagen.setAttribute("src", `assets/cartas/${carta}.png`)
    imagen.classList.add('carta')
    divCartasComputadora.append(imagen)
    if (puntosMinimos > 21) {
      break;
    }
  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))
  if (puntosComputadora === puntosMinimos) {
    alert('Nadie gana')
  } else if (puntosComputadora > puntosMinimos && puntosComputadora < 22 || puntosJugador > 21) {
    alert('Computadora gana')
  } else if (puntosComputadora > 21) {
    alert('Jugador Gana')
  }

}

// const valor = valorCarta(pedirCarta());

//Eventos
btnPedir.addEventListener('click', function () {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  console.log(puntosJugador);
  small[0].innerHTML = puntosJugador;

  let imagen = document.createElement("img")
  imagen.setAttribute("src", `assets/cartas/${carta}.png`)
  imagen.classList.add('carta')
  divCartasJugador.append(imagen)

  if (puntosJugador > 21) {
    console.log(puntosJugador)
    console.log('Lo siento mucho, perdsite')
    btnPedir.disabled = true;
  } else if (puntosJugador === 21) {
    console.log("21, genial!")
    btnPedir.disabled = true;
  }
})

btnDetener.addEventListener('click', function () {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador)
})

// TODO: Borrar

btnNuevo.addEventListener('click', function () {
  deck = crearDeck();

  puntosJugador = 0;
  puntosComputadora = 0;
  small[0] = 0;
  small[1] = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;
})