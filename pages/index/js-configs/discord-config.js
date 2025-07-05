fetch('./pages/index/configs/discord-config.json')
  .then(res => res.json())
  .then(config => {
    // Título principal
    document.querySelector('.discord-title').innerHTML = `${config.title}<span class="discord-color-title animate-pulse fade-in-elements">${config.titleDecoration}</span>`;
    // Descrição
    document.querySelector('.section-discord-description').textContent = config.description;
    // Botão
    const btn = document.querySelector('.discord-button-join');
    btn.textContent = config.buttonText;
    btn.href = config.buttonLink;
  })
  .catch(err => console.error('Failed to load discord config:', err)); 