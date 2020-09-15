console.log("Adhara Elven")
let JugadorUnoTurno = true
let copiaTablero = []

function colorear(numero) {
  let casilla = document.getElementById("casilla" + numero);


  let conTexto = ocupada(casilla)

  if(!conTexto){
    if(JugadorUnoTurno){
      casilla.classList.add("casillaJade");
      casilla.classList.remove("casillaDorada");
      casilla.childNodes[0].innerText = "X";
      copiaTablero[numero-1] = "X";
    JugadorUnoTurno = false
    }
    else{
        casilla.classList.add("casillaDorada")
        casilla.classList.remove("casillaJade");
        casilla.childNodes[0].innerText = "0";
        copiaTablero[numero-1] = "0";
        JugadorUnoTurno = true
    }
  }
  console.log(copiaTablero);
  }



function ocupada(casilla) {
  if(casilla.childNodes[0].innerText){
    console.log("sí está ocupada");
    return true;
  }
  else {
    console.log("no está ocupada");
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
}

function limcas(numero) {
  let casilla = document.getElementById("casilla" + numero);
  casilla.childNodes[0].innerText = "";
  casilla.classList.remove("casillaJade");
  casilla.classList.remove("casillaDorada");
}
