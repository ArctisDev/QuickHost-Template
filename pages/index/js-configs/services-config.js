fetch('./pages/index/configs/services-config.json')
  .then(res => res.json())
  .then(config => {
    // Atualizar textos principais
    document.querySelector('.services-our-services').textContent = config.ourServices;
    document.querySelector('.services-title').textContent = config.title;
    document.querySelector('.services-subtitle').textContent = config.subtitle;

    // Atualizar cards de serviços
    const cards = document.querySelectorAll('.services-card');
    cards.forEach((card, index) => {
      if (config.cards[index]) {
        const cardData = config.cards[index];
        
        // Atualizar ícone
        const iconElement = card.querySelector('.services-card-icons i');
        if (iconElement) {
          iconElement.className = cardData.icon;
        }
        
        // Atualizar título
        const titleElement = card.querySelector('h4');
        if (titleElement) {
          titleElement.textContent = cardData.title;
        }
        
        // Atualizar descrição
        const descriptionElement = card.querySelector('p');
        if (descriptionElement) {
          descriptionElement.textContent = cardData.description;
        }
      }
    });
  })
  .catch(err => console.error('Failed to load services config:', err));
