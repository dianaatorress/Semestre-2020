console.log("Adhara Elven")
let JugadorUnoTurno = true;
let copiaTablero = [];
let juegoContinua = true;
let numJugadores = 2;

function colorear(numero) {
  let casilla = document.getElementById("casilla" + numero);
  let conTexto = ocupada(casilla)

  if(juegoContinua) {
    if(!conTexto){
      if(JugadorUnoTurno){
        casilla.classList.add("casillaJade");
        casilla.classList.remove("casillaDorada");
        casilla.childNodes[0].innerText = "X";
        copiaTablero[numero-1] = "X";
      JugadorUnoTurno = false;
      document.getElementById("turnoJugador").innerText = 2;
      }
      else{
          casilla.classList.add("casillaDorada")
          casilla.classList.remove("casillaJade");
          casilla.childNodes[0].innerText = "0";
          copiaTablero[numero-1] = "0";
          JugadorUnoTurno = true;
          document.getElementById("turnoJugador").innerText = 1;
        }
        if(revisaGanar()) {
          console.log("YA HAY UN GANADOR!!!");
          juegoContinua = false;
          document.getElementById("felicidades").style.display = "inline-block";
          //document.getElementById("turnoJugador").innerText = 1;
        } else {
          revisarEmpate()
          if (numJugadores === 1) {
            console.log("un jugador");
            if (!JugadorUnoTurno) {
                turnoCPU()
            }
          }
        }
      }
  }

    //console.log(copiaTablero);
  }

  function revisarEmpate(){
    if (
        copiaTablero[0] &&
        copiaTablero[1] &&
        copiaTablero[2] &&
        copiaTablero[3] &&
        copiaTablero[4] &&
        copiaTablero[5] &&
        copiaTablero[6] &&
        copiaTablero[7] &&
        copiaTablero[8]
      ) {
      juegoContinua = false;
    }
  }

  function turnoCPU(){
    let numAleatorio = Math.floor(Math.random() * 9) + 1;
    let casillaSeleccionada = document.getElementById("casilla" + numAleatorio);
    if (juegoContinua) {
      while (ocupada(casillaSeleccionada)) {
        numAleatorio = Math.floor(Math.random() * 9) + 1;
        casillaSeleccionada = document.getElementById("casilla" + numAleatorio)
      }
      colorear(numAleatorio)
    }



    //if (!ocupada(casillaSeleccionada)) {
      //colorear(numAleatorio);
    //} else {
      //turnoCPU()
    //}

    //let cassilla = document.getElementById("casilla" + numAleatorio)

  }


  function revisaGanar() {
    if(
      (copiaTablero[0] && copiaTablero[0] == copiaTablero[3] && copiaTablero[0] == copiaTablero[6]) ||
      (copiaTablero[1] && copiaTablero[1] == copiaTablero[4] && copiaTablero[1] == copiaTablero[7]) ||
      (copiaTablero[2] && copiaTablero[2] == copiaTablero[5] && copiaTablero[2] == copiaTablero[8])
      ) {
      //console.log("¡VERTICAL!");
      return true;
    }

    if (
      (copiaTablero[0] && copiaTablero[0] == copiaTablero[1] && copiaTablero[0] == copiaTablero[2]) ||
      (copiaTablero[3] && copiaTablero[3] == copiaTablero[4] && copiaTablero[3] == copiaTablero[5]) ||
      (copiaTablero[6] && copiaTablero[6] == copiaTablero[7] && copiaTablero[6] == copiaTablero[8])
      ) {
      //console.log("¡HORIZONTAL!");
      return true;
    }

    if (
      (copiaTablero[0] && copiaTablero[0] == copiaTablero[4] && copiaTablero[0] == copiaTablero[8]) ||
      (copiaTablero[2] && copiaTablero[2] == copiaTablero[4] && copiaTablero[2] == copiaTablero[6])
      ) {
      //console.log("DIAGONAL");
      return true;
    }
  }


function ocupada(casilla) {
  if(casilla.childNodes[0].innerText){
    //console.log("sí está ocupada");
    return true;
  }
  else {
    //console.log("no está ocupada");
    return false;
  }

}

function volvi() {
  limcas(1);
  limcas(2);
  limcas(3);
  limcas(4);
  limcas(5);
  limcas(6);
  limcas(7);
  limcas(8);
  limcas(9);
  copiaTablero = [];
  juegoContinua = true;
  JugadorUnoTurno = true;
  document.getElementById("felicidades").style.display = "none";
  document.getElementById("turnoJugador").innerText = 1;
  //numJugadores = 2;

  //document.getElementById("modoJugar").innerText = "Vs CPU";
}

function limcas(numero) {
  let casilla = document.getElementById("casilla" + numero);
  casilla.childNodes[0].innerText = "";
  casilla.classList.remove("casillaJade");
  casilla.classList.remove("casillaDorada");
}

function modoJuego() {
  //let jugadoor = document.getElementById("modoJugar");
  if (numJugadores === 2) {
    document.getElementById("modoJugar").innerText = "vs PLAYER";
    numJugadores = 1;
    JugadorUnoTurno = true;
  } else {
    document.getElementById("modoJugar").innerText = "Vs CPU";
    numJugadores = 2;
  }
  volvi();
}
