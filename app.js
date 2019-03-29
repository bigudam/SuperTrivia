function clickbotonEmpezar() {
  document.getElementById('nombre').style.display="none";
  document.getElementById('eleccionTrivia').style.display="block";
}
function clickbotonDC() {
  document.getElementById('eleccionTrivia').style.display="none";
  document.getElementById('DC').style.display="block";
}
function clickbotonMarvel() {
  document.getElementById('eleccionTrivia').style.display="none";
  document.getElementById('Marvel').style.display="block";
}
function Reset() {
  document.getElementById('nombre').style.display="block";
  document.getElementById('eleccionTrivia').style.display="none";
  document.getElementById('Marvel').style.display="none";
  document.getElementById('DC').style.display="none";
}
