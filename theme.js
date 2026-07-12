const body = document.body;
const themeButtons = document.querySelectorAll('.theme-btn');

function normalizeThemeName(name) {
  if (!name) return 'dark';
  return String(name).toLowerCase().replace(/\s+/g, '-');
}

function applyTheme(theme) {
  const normalized = normalizeThemeName(theme);
  body.setAttribute('data-theme', normalized);
  themeButtons.forEach((button) => {
    const btnTheme = normalizeThemeName(button.dataset.themeOption);
    button.classList.toggle('active', btnTheme === normalized);
  });
  localStorage.setItem('portfolio-theme', normalized);
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyTheme(button.dataset.themeOption);
  });
});
