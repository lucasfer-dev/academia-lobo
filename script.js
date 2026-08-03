<<<<<<< HEAD
const WHATSAPP_NUMBER = "5521969865904";

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.classList.toggle('active', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('lead-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const objetivo = document.getElementById('objetivo').value;
  const horario = document.getElementById('horario').value;

  const mensagem = `Olá! Meu nome é ${nome}. Vi o site da Academia Lobo do Vilar e gostaria de agendar uma aula experimental. Meu objetivo é ${objetivo.toLowerCase()} e prefiro treinar no período da ${horario.toLowerCase()}.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
=======
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
>>>>>>> eb0b531 (Site Academia Lobo do Vilar)
