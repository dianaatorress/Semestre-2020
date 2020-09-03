console.log("hola")
function marcar() {
  let casilla = document.getElementById("casilla1");
  casilla.classList.add("casillaMorada");
  casilla.childNodes[0].innerText = "X"
}
