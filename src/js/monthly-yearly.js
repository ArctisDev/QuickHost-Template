const monthlyBtn = document.getElementById('monthly-btn');
const yearlyBtn = document.getElementById('yearly-btn');
const pricingCards = document.querySelectorAll('.pricing-cards h4');
const toast = document.getElementById('success-toast');
const errorToast = document.getElementById('error-toast');

let isInitialLoad = true;
let canSwitch = true;

const monthlyPrices = [10, 20, 70, 100];
const yearlyPrices = [
  monthlyPrices[0] * 12,
  monthlyPrices[1] * 12 - 40,
  monthlyPrices[2] * 12 - 60,
  monthlyPrices[3] * 12 - 80,
];

// TOAST DE SUCESSO
function showToast() {
  toast.classList.remove('hidden', 'fade-out');
  toast.classList.add('fade-in');

  setTimeout(() => {
    toast.classList.remove('fade-in');
    toast.classList.add('fade-out');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 3000);
}


// TOAST DE ERRO
function showErrorToast() {
  errorToast.classList.remove('hidden', 'fade-out');
  errorToast.classList.add('fade-in');

  setTimeout(() => {
    errorToast.classList.remove('fade-in');
    errorToast.classList.add('fade-out');
    setTimeout(() => errorToast.classList.add('hidden'), 400);
  }, 3000);
}

// ATUALIZA PREÇOS
function updatePrices(prices, label) {
  pricingCards.forEach((card, index) => {
    card.innerHTML = `R$${prices[index]} <span class="text-base font-normal text-gray-400">/ ${label}</span>`;
  });

  if (!isInitialLoad) {
    showToast();  // mostra o toast independente do canSwitch
  }
}

// LÓGICA DE ESTILO DE BOTÕES
function clearActiveButtons() {
  monthlyBtn.classList.remove('bg-indigo-600', 'text-white');
  monthlyBtn.classList.add('text-gray-700');
  monthlyBtn.classList.remove('bg-gray-200');

  yearlyBtn.classList.remove('bg-indigo-600', 'text-white');
  yearlyBtn.classList.add('text-gray-700');
  yearlyBtn.classList.remove('bg-gray-200');
}

function setActiveButton(activeBtn) {
  clearActiveButtons();
  activeBtn.classList.add('bg-indigo-600', 'text-white');
  activeBtn.classList.remove('text-gray-700');
}

// EVENTOS DE CLIQUE COM COOLDOWN
monthlyBtn.addEventListener('click', () => {
  if (!canSwitch) return showErrorToast();

  canSwitch = false;  // bloqueia troca rápida
  updatePrices(monthlyPrices, 'Month');
  setActiveButton(monthlyBtn);

  setTimeout(() => canSwitch = true, 3000);
});


yearlyBtn.addEventListener('click', () => {
  if (!canSwitch) return showErrorToast();

  canSwitch = false;
  updatePrices(yearlyPrices, 'Year');
  setActiveButton(yearlyBtn);

  setTimeout(() => canSwitch = true, 3000);
});


// INICIALIZAÇÃO
updatePrices(monthlyPrices, 'Month');
setActiveButton(monthlyBtn);
isInitialLoad = false;
