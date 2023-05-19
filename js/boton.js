
const d = document,
w = window;
export default function scrollTopButton(btn) {
    const SCROLLBTN = d.querySelector(btn);

    w.addEventListener("scroll", () => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if (scrollTop < 550) {
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