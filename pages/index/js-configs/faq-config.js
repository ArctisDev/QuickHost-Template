fetch('./pages/index/configs/faq-config.json')
  .then(res => res.json())
  .then(config => {
    // Preenche o título
    document.querySelector('.faq-title').textContent = config.title;

    // Preenche o menu lateral (Table of Content)
    const toc = document.querySelector('.faq-toc');
    toc.innerHTML = '';
    config.categories.forEach(cat => {
      const a = document.createElement('a');
      a.href = `#faq-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
      a.className = 'block text-gray-300 hover:underline fade-in-elements';
      a.textContent = cat.name;
      toc.appendChild(a);
    });

    // Preenche as perguntas e respostas
    const content = document.querySelector('.faq-content');
    content.innerHTML = '';
    config.categories.forEach(cat => {
      cat.questions.forEach((q, idx) => {
        const div = document.createElement('div');
        div.id = `faq-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '')}-${idx}`;
        div.innerHTML = `
          <button onclick="toggleFaq(this)" class="w-full text-left flex items-center focus:outline-none">
            <svg class="flex-shrink-0 w-6 h-6 transition-transform duration-300 transform faqs-cards-icons" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
            <h1 class="mx-4 text-xl text-white fade-in-elements">${q.question}</h1>
          </button>
          <div class="hidden mt-4 md:mx-10 text-gray-400 fade-in-elements">
            <p>${q.answer}</p>
          </div>
          <hr class="border-gray-700">
        `;
        content.appendChild(div);
      });
    });
  })
  .catch(err => console.error('Failed to load faq config:', err));

// Função global para abrir/fechar respostas do FAQ
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  if (answer) {
    answer.classList.toggle('hidden');
  }
}