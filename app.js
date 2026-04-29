const form = document.getElementById('leadForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  result.textContent = `${name}, заявка принята! Мастер свяжется с вами в ближайшее время.`;
  form.reset();
});
