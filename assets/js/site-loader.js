// Site Loader - Controla o preloader da página
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress-bar');
    
    if (preloader && progressBar) {
        // Simula o carregamento
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    preloader.style.transform = 'translateY(-100%)';
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 500);
                }, 300);
            }
        }, 100);
    }
}); 