// Project filtering, rendering and tag search logic
(function(){
  function debounce(fn, delay=200){
    let t;
    return function(...args){
      clearTimeout(t);
      t = setTimeout(()=>fn.apply(this,args), delay);
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof projects === 'undefined') return;

    const allTags = [...new Set(projects.flatMap(p => p.tags))].sort((a,b)=>a.localeCompare(b));
    const activeTags = [];

    const tagSearchInput = document.getElementById('tag-search');
    const tagSuggestionsDiv = document.getElementById('tag-suggestions');
    const activeTagDiv = document.getElementById('active-tags');
    const grid = document.getElementById('project-grid');

    function renderSuggestions(query){
      tagSuggestionsDiv.innerHTML = '';
      if (!query) { tagSuggestionsDiv.style.display = 'none'; return; }
      const q = query.toLowerCase();
      const filtered = allTags.filter(t => t.toLowerCase().includes(q) && !activeTags.includes(t));
      if (!filtered.length) { tagSuggestionsDiv.style.display = 'none'; return; }
      tagSuggestionsDiv.style.display = 'block';
      const frag = document.createDocumentFragment();
      filtered.forEach(tag => {
        const option = document.createElement('div');
        option.className = 'tag-suggestion';
        option.textContent = tag;
        option.addEventListener('click', ()=>{
          activeTags.push(tag);
          tagSearchInput.value = '';
          tagSuggestionsDiv.style.display = 'none';
          renderActiveTags();
          renderProjects();
        });
        frag.appendChild(option);
      });
      tagSuggestionsDiv.appendChild(frag);
    }

    tagSearchInput.addEventListener('input', debounce(function(){ renderSuggestions(this.value); }, 150));

    tagSearchInput.addEventListener('focus', function(){ renderSuggestions(this.value); });

    document.addEventListener('click', function(e){
      if (!tagSearchInput.contains(e.target) && !tagSuggestionsDiv.contains(e.target)) {
        tagSuggestionsDiv.style.display = 'none';
      }
    });

    function renderActiveTags(){
      activeTagDiv.innerHTML = '';
      activeTags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'active-tag';
        span.textContent = tag + ' ✕';
        span.addEventListener('click', ()=>{
          const idx = activeTags.indexOf(tag);
          if (idx > -1) activeTags.splice(idx,1);
          renderActiveTags();
          renderProjects();
        });
        activeTagDiv.appendChild(span);
      });
    }

    function renderProjects(){
      grid.innerHTML = '';
      let filtered = projects;
      if (activeTags.length) {
        filtered = projects.filter(p => activeTags.every(tag => p.tags.includes(tag)));
      }
      const frag = document.createDocumentFragment();
      filtered.forEach(p => {
        const box = document.createElement('div');
        box.className = 'project-box';
        box.addEventListener('click', ()=>{ window.location.href = p.link; });

        const img = document.createElement('img');
        img.className = 'project-img';
        img.src = p.image;
        img.alt = p.name;
        img.loading = 'lazy';
        img.decoding = 'async';

        const title = document.createElement('div');
        title.className = 'project-title';
        const strong = document.createElement('strong');
        strong.textContent = p.name;
        title.appendChild(strong);

        const desc = document.createElement('div');
        desc.className = 'project-desc';
        desc.textContent = p.description;

        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'project-tags';
        p.tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'tag';
          span.textContent = t;
          tagsDiv.appendChild(span);
        });

        box.appendChild(img);
        box.appendChild(title);
        box.appendChild(desc);
        box.appendChild(tagsDiv);
        frag.appendChild(box);
      });
      grid.appendChild(frag);
    }

    // initialize
    renderActiveTags();
    renderProjects();
  });
})();
