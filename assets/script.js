// تب فعال
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });
})();

// همبرگری
(function(){
  const btn = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if(!btn || !links) return;
  btn.addEventListener('click', ()=> links.classList.toggle('show'));
  document.addEventListener('click', (e)=>{
    if(!links.contains(e.target) && !btn.contains(e.target)) links.classList.remove('show');
  });
})();

// منوی «سامانه‌ها»
(function(){
  const menu = document.querySelector('.menu');
  if(!menu) return;
  const btn = menu.querySelector('button');
  btn.setAttribute('aria-expanded','false');
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', ()=>{
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  });
})();
