const text = "Khoirul Anam";
let i = 0;
let isDeleting = false;
const speed = 120;

function typeWriter() {
    const target = document.getElementById("typing");

    if (!target) return;

    if (!isDeleting) {
        target.innerHTML = text.substring(0, i + 1);
        i++;

        if (i === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1200);
            return;
        }
    } else {
        target.innerHTML = text.substring(0, i);
        i--;

        if (i === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeWriter, isDeleting ? 60 : speed);
}

window.addEventListener("load", typeWriter);
