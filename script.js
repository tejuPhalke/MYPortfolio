
// Count up
const countEls = document.querySelectorAll('[data-target]');
const countObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    countEls.forEach(el => {
      const target = +el.dataset.target;
      let n = 0;
      const step = Math.ceil(target / 30);
      const t = setInterval(() => {
        n = Math.min(n + step, target);
        el.textContent = n;
        if (n >= target) clearInterval(t);
      }, 40);
    });
    countObserver.disconnect();
  }
}, { threshold: 0.5 });
if (countEls[0]) countObserver.observe(countEls[0].closest('.stats'));

// Fade in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObserver.observe(el));

