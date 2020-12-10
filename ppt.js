console.log("Bienvenido al juego de piedra, papel o tijera");
//mostrar lo que eligo el cpu
//letreritos: animacion con una clase en el html para css
//cuando uno gane, ocultar los otros dos letreros
//op como lo hizo alma para lo de felicidades
//texto: el cpu eligio = (eleAleatorio)
//cambiar numero que eligio el cpu por palabras o la imagen
let puntosUsuario = 0;
let puntoCPU = 0;

  function jueUsuario(opUsuario){
    console.log(opUsuario);
    let eleAleatorio = Math.floor(Math.random() * 3) + 1;
    console.log(eleAleatorio);
    document.getElementById("eleccion").style.display = "block";
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("eleccioon").innerText = eleAleatorio;
    if (opUsuario == eleAleatorio) {
      document.getElementById("mensaje").innerText="EMPATE!!!"
    } else if (
      opUsuario == 1 && eleAleatorio == 3
      || opUsuario == 2 && eleAleatorio == 1
      || opUsuario == 3 && eleAleatorio == 2
    ) {
      document.getElementById("mensaje").innerText = "FELICIDADES USUARIO!!!"
      document.getElementById("pjugador").innerText = puntosUsuario += 1;
    } else {
      document.getElementById("mensaje").innerText = "FELICIDADES CPU!!!"
      document.getElementById("pcpu").innerText = puntoCPU += 1;
    }
  }

function reiboot(){
  document.getElementById("pjugador").innerText = 0;
  document.getElementById("pcpu").innerText = 0;
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("eleccion").style.display = "none";
  puntoCPU = 0;
  puntosUsuario = 0;
}
