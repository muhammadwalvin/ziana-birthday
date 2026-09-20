// petals.js — animasi kelopak bunga jatuh, dipakai di semua halaman
(function(){
  var container = document.getElementById('petals');
  if(!container) return;
  var emojis = ['🌸','🌷','💮','🌺'];
  var n = window.innerWidth < 600 ? 12 : 20;
  for(var i=0;i<n;i++){
    var p = document.createElement('div');
    p.className='petal';
    p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    p.style.left = Math.random()*100 + 'vw';
    p.style.animationDuration = (9 + Math.random()*10) + 's';
    p.style.animationDelay = (Math.random()*10) + 's';
    p.style.fontSize = (12 + Math.random()*10) + 'px';
    container.appendChild(p);
  }
})();
