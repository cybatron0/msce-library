window.openSubject = function openSubject(key) {
      const data = subjects[key];
      if (!data) return;

      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalSubtitle').textContent = data.subtitle;
      document.getElementById('modalBody').innerHTML = data.body;

      const linksDiv = document.getElementById('modalLinks');
      const externalBox = document.getElementById('modalExternal');

      if (data.links && data.links.length) {
        linksDiv.innerHTML = data.links.map(l =>
          `<a href="${l.url}" target="_blank" rel="noopener">${l.name} →</a>`
        ).join('');
        externalBox.style.display = 'block';
      } else {
        externalBox.style.display = 'none';
      }

      document.getElementById('subjectModal').classList.add('active');
    }

    function closeModal() {
      document.getElementById('subjectModal').classList.remove('active');
    }

    document.getElementById('subjectModal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });

    document.querySelectorAll('nav a').forEach(a => {
      a.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
