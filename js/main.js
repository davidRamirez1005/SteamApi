import scrollTopButton from "./boton.js";


const input = document.getElementById('search');
const contenedor = document.querySelector('.container-fluid');


input.addEventListener('focus', () => {
  contenedor.classList.add('blur');
});

input.addEventListener('blur', () => {
  contenedor.classList.remove('blur');
});

document.addEventListener("DOMContentLoaded",()=>{
  scrollTopButton(".scroll-top-btn")
})


colorButton.addEventListener('click', function() {
  const fondo = "#23262E"
  const fondo2 ="#4e697d"
  
  body.style.backgroundColor = fondo;
  cambio.style.backgroundColor = fondo2;

});
