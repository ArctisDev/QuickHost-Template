fetch('./pages/index/configs/contact-config.json')
  .then(res => res.json())
  .then(config => {
    document.querySelector('.contact-info-address').textContent = config.address;
    document.querySelector('.contact-info-phone').textContent = config.phone;
    document.querySelector('.contact-info-email').textContent = config.email;
  })
  .catch(err => console.error('Failed to load contact config:', err)); 