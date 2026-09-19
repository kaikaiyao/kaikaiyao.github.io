/* Progressive enhancement: the page and every anchor work without JavaScript. */
(() => {
  const nav = document.querySelector('.home-page .section-nav');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let frame = 0;
  let anchorTarget = sections.find(section => `#${section.id}` === location.hash) || null;

  function updateCurrentSection() {
    frame = 0;
    const threshold = nav.getBoundingClientRect().bottom + 32;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
      current = sections[sections.length - 1];
    }
    // A short section near the footer cannot always reach the top of the viewport.
    // Keep an explicitly selected anchor active until the reader scrolls manually.
    if (anchorTarget) current = anchorTarget;
    for (const link of links) {
      if (link.getAttribute('href') === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  function scheduleUpdate() {
    if (!frame) frame = requestAnimationFrame(updateCurrentSection);
  }
  function resumeScrollTracking() {
    anchorTarget = null;
    scheduleUpdate();
  }
  links.forEach(link => link.addEventListener('click', () => {
    anchorTarget = document.querySelector(link.getAttribute('href'));
    scheduleUpdate();
  }));
  window.addEventListener('hashchange', () => {
    anchorTarget = sections.find(section => `#${section.id}` === location.hash) || null;
    scheduleUpdate();
  });
  window.addEventListener('wheel', resumeScrollTracking, { passive: true });
  window.addEventListener('touchmove', resumeScrollTracking, { passive: true });
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) resumeScrollTracking();
  });
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  window.addEventListener('load', scheduleUpdate, { once: true });
  document.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', scheduleUpdate));
  updateCurrentSection();
})();
