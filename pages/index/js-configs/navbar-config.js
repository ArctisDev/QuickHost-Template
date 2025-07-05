fetch('./pages/index/configs/navbar-config.json')
  .then(res => res.json())
  .then(config => {
    // Logo
    const logo = document.querySelector('header img.rounded');
    if (logo) logo.src = config.logo;

    // Links do menu principal
    const navLinks = document.querySelectorAll('header nav ul li a');
    if (Array.isArray(config.links)) {
      navLinks.forEach((a, i) => {
        if (config.links[i]) {
          a.textContent = config.links[i].text;
          a.href = config.links[i].href;
        }
      });
    }

    // Botão Client Area
    const clientArea = document.querySelector('header .client-area a');
    if (clientArea && config.clientArea) {
      // Preenche apenas o <span> do texto, mantendo SVG e estrutura
      const span = clientArea.querySelector('span.text-sm');
      if (span) span.textContent = config.clientArea.text;
      clientArea.href = config.clientArea.href;
    }
  })
  .catch(err => console.error('Failed to load navbar config:', err)); 