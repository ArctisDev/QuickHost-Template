fetch('./pages/index/configs/footer-config.json')
  .then(res => res.json())
  .then(config => {
    // Logo
    const logo = document.querySelector('footer .rounded');
    if (logo) logo.src = config.logo;

    // Descrição
    const desc = document.querySelector('footer p.text-gray-400');
    if (desc) desc.textContent = config.description;

    // Social icons (apenas links)
    const socialLinks = document.querySelectorAll('footer .flex.mt-6.-mx-2 a');
    if (Array.isArray(config.social)) {
      socialLinks.forEach((a, i) => {
        if (config.social[i]) {
          a.href = config.social[i].link;
          a.setAttribute('aria-label', config.social[i].icon.charAt(0).toUpperCase() + config.social[i].icon.slice(1));
          // Se quiser trocar o SVG, descomente a linha abaixo:
          // a.innerHTML = config.social[i].svg;
        }
      });
    }

    // About
    const aboutLinks = document.querySelectorAll('footer .grid > div:nth-child(1) a');
    if (config.about && Array.isArray(config.about.items)) {
      aboutLinks.forEach((a, i) => {
        if (config.about.items[i]) {
          a.href = config.about.items[i].link;
          a.textContent = config.about.items[i].text;
        }
      });
      // Título
      const aboutTitle = document.querySelector('footer .grid > div:nth-child(1) h3');
      if (aboutTitle) aboutTitle.textContent = config.about.title;
    }

    // Products
    const productsLinks = document.querySelectorAll('footer .grid > div:nth-child(2) a');
    if (config.products && Array.isArray(config.products.items)) {
      productsLinks.forEach((a, i) => {
        if (config.products.items[i]) {
          a.href = config.products.items[i].link;
          a.textContent = config.products.items[i].text;
        }
      });
      // Título
      const productsTitle = document.querySelector('footer .grid > div:nth-child(2) h3');
      if (productsTitle) productsTitle.textContent = config.products.title;
    }

    // Contact
    const contactSpans = document.querySelectorAll('footer .grid > div:nth-child(3) span');
    if (config.contact && Array.isArray(config.contact.items)) {
      contactSpans.forEach((span, i) => {
        if (config.contact.items[i]) {
          span.textContent = config.contact.items[i].text;
        }
      });
      // Título
      const contactTitle = document.querySelector('footer .grid > div:nth-child(3) h3');
      if (contactTitle) contactTitle.textContent = config.contact.title;
    }

    // Copyright
    const copyright = document.querySelector('footer p.text-center');
    if (copyright) copyright.textContent = config.copyright;
  })
  .catch(err => console.error('Failed to load footer config:', err)); 