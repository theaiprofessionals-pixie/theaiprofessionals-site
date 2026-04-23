// app.js
document.addEventListener('DOMContentLoaded', () => {
  const shell = document.querySelector('.page-shell');
  if (!shell) return;

  // Fade-in on load
  requestAnimationFrame(() => shell.classList.add('page-loaded'));

  // Fade-out on nav click before navigating
  const links = document.querySelectorAll('a[href]:not([href^="#"])');
  links.forEach(link => {
    // Skip external targets
    if (link.target && link.target !== '_self') return;

    link.addEventListener('click', (e) => {
      const url = link.href;

      // Only handle internal pages
      if (!url.startsWith(location.origin)) return;
      if (url === location.href) return;

      e.preventDefault();
      shell.classList.remove('page-loaded');
      shell.classList.add('page-exit');
      setTimeout(() => { window.location.href = url; }, 220);
    });
  });
});
