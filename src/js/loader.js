document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("hidden");

        // Remove do DOM após a animação para evitar bloqueios
        setTimeout(() => {
            preloader.remove();
        }, 1500); // 0.5s após a animação, remove o elemento
    }, 1500); // Exibir por no mínimo 1s
});