(function () {
  const STORAGE_KEY = 'msce-library-progress';

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getSubjectKeys() {
    if (typeof subjects === 'object' && subjects) return Object.keys(subjects);
    return [];
  }

  function updateProgressUI() {
    const p = loadProgress();
    const keys = getSubjectKeys();
    const done = keys.filter(k => p[k]).length;
    const total = keys.length || 12;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const label = document.getElementById('progressLabel');
    const fill = document.getElementById('progressFill');
    if (label) label.textContent = 'Your progress: ' + done + ' / ' + total + ' subjects reviewed';
    if (fill) fill.style.width = pct + '%';

    document.querySelectorAll('.subject-list li button').forEach(btn => {
      const onclick = btn.getAttribute('onclick') || '';
      const m = onclick.match(/openSubject\('([^']+)'\)/);
      if (!m) return;
      const key = m[1];
      let mark = btn.querySelector('.done-mark');
      if (p[key]) {
        if (!mark) {
          mark = document.createElement('span');
          mark.className = 'done-mark';
          mark.textContent = ' ✓';
          mark.style.color = '#16a34a';
          mark.style.fontWeight = '700';
          btn.appendChild(mark);
        }
      } else if (mark) {
        mark.remove();
      }
    });
  }

  function markStudied(key) {
    const p = loadProgress();
    p[key] = true;
    saveProgress(p);
    updateProgressUI();
  }

  function filterSubjects() {
    const q = (document.getElementById('subjectSearch')?.value || '').toLowerCase().trim();
    document.querySelectorAll('.subject-list li').forEach(li => {
      const btn = li.querySelector('button');
      const text = (btn?.textContent || '').toLowerCase();
      const onclick = btn?.getAttribute('onclick') || '';
      const m = onclick.match(/openSubject\('([^']+)'\)/);
      let extra = '';
      if (m && typeof subjects !== 'undefined' && subjects[m[1]]) {
        extra = ((subjects[m[1]].subtitle || '') + ' ' + (subjects[m[1]].body || '')).toLowerCase();
      }
      li.style.display = (!q || text.includes(q) || extra.includes(q)) ? '' : 'none';
    });
  }

  function injectUI() {
    const section = document.getElementById('subjects');
    if (!section || document.getElementById('subjectSearch')) return;

    const desc = section.querySelector('.section-desc');
    const wrap = document.createElement('div');
    wrap.className = 'search-wrap';
    wrap.innerHTML = `
      <input type="search" id="subjectSearch" placeholder="Search subjects… (e.g. algebra, map work, English)" aria-label="Search subjects"
        style="width:100%;max-width:420px;padding:0.75rem 1rem;border:2px solid #e2e8f0;border-radius:12px;font-family:inherit;font-size:0.95rem;outline:none;margin-bottom:0.75rem;">
      <div id="progressLabel" style="font-size:0.85rem;color:#64748b;margin-bottom:0.35rem;">Your progress: 0 / 12 subjects reviewed</div>
      <div style="background:#e2e8f0;border-radius:999px;height:8px;overflow:hidden;margin-bottom:1rem;">
        <div id="progressFill" style="height:100%;width:0%;background:linear-gradient(90deg,#2563eb,#8b5cf6);border-radius:999px;transition:width 0.3s;"></div>
      </div>
    `;
    if (desc && desc.nextSibling) {
      desc.parentNode.insertBefore(wrap, desc.nextSibling);
    } else if (desc) {
      desc.after(wrap);
    } else {
      section.insertBefore(wrap, section.firstChild);
    }

    document.getElementById('subjectSearch').addEventListener('input', filterSubjects);
  }

  // Hook openSubject
  const _origOpen = window.openSubject;
  window.openSubject = function (key) {
    markStudied(key);
    if (typeof _origOpen === 'function') return _origOpen(key);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectUI();
      updateProgressUI();
    });
  } else {
    injectUI();
    updateProgressUI();
  }
})();
