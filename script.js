// Alternância do Modo Escuro com Transição
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  }
});

// Lógica do Botão de Curtida (Alterna se clicado mais de uma vez)
function toggleLike(buttonId, countId) {
  const button = document.getElementById(buttonId);
  const countSpan = document.getElementById(countId);
  let currentLikes = parseInt(countSpan.textContent, 10);

  if (button.classList.contains('liked')) {
    // Desfaz a curtida
    button.classList.remove('liked');
    countSpan.textContent = currentLikes - 1;
  } else {
    // Adiciona a curtida
    button.classList.add('liked');
    countSpan.textContent = currentLikes + 1;
  }
}