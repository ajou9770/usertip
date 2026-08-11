(() => {
  'use strict';

  const modalEl = document.getElementById('commonNoticeModal');
  if (!modalEl || typeof bootstrap === 'undefined') return;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  const storageKey = modalEl.dataset.storageKey || '';
  const autoOpen = modalEl.dataset.autoOpen !== 'false';
  const delay = Number(modalEl.dataset.delay || 350);
  const hideTodayBtn = modalEl.querySelector('[data-hide-today]');

  const canShow = () => {
    if (!storageKey) return true;
    const hideUntil = Number(localStorage.getItem(storageKey) || 0);
    return !hideUntil || Date.now() >= hideUntil;
  };

  const tomorrowMidnight = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow.getTime();
  };

  hideTodayBtn?.addEventListener('click', () => {
    if (storageKey) localStorage.setItem(storageKey, String(tomorrowMidnight()));
    modal.hide();
  });

  if (autoOpen && canShow()) {
    window.setTimeout(() => modal.show(), Math.max(0, delay));
  }
})();
