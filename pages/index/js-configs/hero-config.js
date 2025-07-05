fetch('./pages/index/configs/hero-config.json')
  .then(res => res.json())
  .then(config => {
    document.getElementById('hero-other-title').textContent = config.otherTitle;
    document.getElementById('hero-title-text').textContent = config.title + " ";
    document.getElementById('hero-title-decoration').textContent = config.titleDecoration;
    document.getElementById('hero-sub-title').textContent = config.subTitle;

    // Botão Get Started
   const getStartedBtn = document.getElementById('hero-get-started');
   if (getStartedBtn) {
     const span = getStartedBtn.querySelector('span');
     if (span) span.textContent = config.getStartedText;
     else getStartedBtn.textContent = config.getStartedText;
     getStartedBtn.href = config.getStartedLink;
   }

    // Botão Learn More
    const learnBtn = document.getElementById('hero-learn-button');
    if (learnBtn) {
      learnBtn.href = config.learnMoreLink;
      const learnText = document.getElementById('hero-learn-text');
      if (learnText) learnText.textContent = config.learnMoreText;
    }
  })
  .catch(err => console.error('Failed to load hero config:', err));