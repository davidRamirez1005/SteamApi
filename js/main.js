const input = document.getElementById('gameName');
const imagen = document.getElementById('imagen');

input.addEventListener('focus', () => {
  imagen.classList.add('blur');
});

input.addEventListener('blur', () => {
  imagen.classList.remove('blur');
});

