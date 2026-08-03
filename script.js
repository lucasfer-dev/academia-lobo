const WHATSAPP_NUMBER = '5521969865904';
const WHATSAPP_DIRECT = 'https://api.whatsapp.com/message/F6U2PLHJL65GF1?autoload=1&app_absent=0&utm_source=ig';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = WHATSAPP_DIRECT;
  link.target = '_blank';
  link.rel = 'noopener';
});

document.getElementById('leadForm').addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const objetivo = document.getElementById('objetivo').value;
  const horario = document.getElementById('horario').value;
  const text = `Olá! Meu nome é ${nome}. Gostaria de agendar uma aula experimental na Academia Lobo do Vilar. Meu objetivo é ${objetivo} e prefiro treinar no período da ${horario.toLowerCase()}.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
