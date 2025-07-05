  const progressBar = document.getElementById('progress-bar');
  const preloader = document.getElementById('preloader');

  // Verifica se já carregou antes
  const alreadyLoaded = localStorage.getItem('site_already_loaded');

  if (!alreadyLoaded) {
    let progress = 0;

    const loadingInterval = setInterval(() => {
      if (progress < 100) {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';
      } else {
        clearInterval(loadingInterval);
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.transition = 'opacity 0.5s ease';
          setTimeout(() => preloader.remove(), 500);
          localStorage.setItem('site_already_loaded', 'true');
        }, 300);
      }
    }, 300);
  } else {
    // Já carregou antes → remove o loader instantaneamente
    preloader.remove();
  }