import scrollTopButton from "./boton.js";


const input = document.getElementById('search');
const imagen = document.getElementById('imagen');
const imagenJuego = document.getElementById('imgJuego');


input.addEventListener('focus', () => {
  imagen.classList.add('blur');
  imagenJuego.classList.add('blur');
});

input.addEventListener('blur', () => {
  imagen.classList.remove('blur');
  imagenJuego.classList.remove('blur');
});

document.addEventListener("DOMContentLoaded",()=>{
  scrollTopButton(".scroll-top-btn")
})

