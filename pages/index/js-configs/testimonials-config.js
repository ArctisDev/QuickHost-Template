fetch('./pages/index/configs/testimonials-config.json')
  .then(res => res.json())
  .then(config => {
    // Título e subtítulo
    document.querySelector('.testimonials-title').textContent = config.title;
    document.querySelector('.testimonials-subtitle').textContent = config.subtitle;

    // Container dos cards
    const grid = document.querySelectorAll('.grid.gap-4.md\:grid-cols-2');
    if (!grid.length) return;
    // Limpar os depoimentos existentes
    grid.forEach(g => g.innerHTML = '');

    // Adicionar os depoimentos
    config.testimonials.forEach((testimonial, i) => {
      // Encontrar a grid correta (duas colunas)
      const gridIndex = i < 2 ? 0 : 1;
      const gridCol = grid[gridIndex];
      if (!gridCol) return;
      const card = document.createElement('div');
      card.className = 'p-6 rounded shadow-md testimonials-cards fade-in-elements';
      card.innerHTML = `
        <p>${testimonial.text}</p>
        <div class="flex items-center mt-4 space-x-4">
          <img src="${testimonial.image}" alt="" class="w-12 h-12 bg-center bg-cover rounded-full">
          <div>
            <p class="text-lg font-semibold testimonials-cards-names fade-in-elements">${testimonial.name}</p>
            <p class="text-sm testimonials-cards-work fade-in-elements">${testimonial.work}</p>
          </div>
        </div>
      `;
      gridCol.appendChild(card);
    });
  })
  .catch(err => console.error('Failed to load testimonials config:', err)); 