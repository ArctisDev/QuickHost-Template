document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-elements");

    elements.forEach((el) => {
        // Escolhe aleatoriamente um dos efeitos: esquerda, direita, baixo ou escala
        const effects = ["from-bottom", "scale"];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];

        el.classList.add(randomEffect);

        // Observer para ativar animação ao rolar a página
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.3 }).observe(el);
    });
});
