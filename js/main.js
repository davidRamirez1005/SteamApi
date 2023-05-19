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

const d = document,
    w = window;

export default function scrollTopButton(btn) {
    const SCROLLBTN = d.querySelector(btn);

    w.addEventListener("scroll", () => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if (scrollTop < 600) {
            SCROLLBTN.classList.add("hidden");
        } else {
            SCROLLBTN.classList.remove("hidden");
        }
    });

    SCROLLBTN.addEventListener("click", () => {
        w.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}