// ── Hamburger Menu ─────────────────────────────
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// ── Tech Tab Switching ─────────────────────────
function switchTab(id, e) {
  document.querySelectorAll('.tech-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tech-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tech-tab').forEach(t => {
    if (t.getAttribute('onclick') && t.getAttribute('onclick').includes("'" + id + "'")) {
      t.classList.add('active');
    }
  });
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  if (e && e.currentTarget) e.currentTarget.classList.add('active');
}

// ── Product Filter ─────────────────────────────
function filterProducts(cat, el) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ── News Tabs ──────────────────────────────────
document.querySelectorAll('.news-tab').forEach(t => {
  t.addEventListener('click', function() {
    document.querySelectorAll('.news-tab').forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  });
});

// ── Scroll Reveal ──────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Active Nav on Scroll ───────────────────────
const sections = document.querySelectorAll('section[id], div[id="partners"]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = 'home';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}, { passive: true });
