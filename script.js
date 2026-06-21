window.addEventListener("load", function () {

    // ================= TYPE WRITER HOME =================
    const nameText = "Khoirul Anam";
    let i = 0;
    let isDeleting = false;
    const speed = 120;

    function typeWriter() {
        const target = document.getElementById("typing");
        if (!target) return;

        if (!isDeleting) {
            target.innerHTML = nameText.substring(0, i + 1);
            i++;

            if (i === nameText.length) {
                isDeleting = true;
                setTimeout(typeWriter, 1200);
                return;
            }
        } else {
            target.innerHTML = nameText.substring(0, i);
            i--;

            if (i === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeWriter, isDeleting ? 60 : speed);
    }

    typeWriter();


    // ================= START SCREEN TEXT =================
    const startText = "SELAMAT DATANG DI PORTOFOLIO SAYA";
    let j = 0;

    function typeStart() {
        const target = document.getElementById("start-text");
        if (!target) return;

        if (j < startText.length) {
            target.innerHTML += startText.charAt(j);
            j++;
            setTimeout(typeStart, 80);
        }
    }

    typeStart();


    // ================= LOADER HIDE =================
    setTimeout(() => {
        const loader = document.getElementById("start-screen");

        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.6s ease";
        }
    }, 3000);

});
