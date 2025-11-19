document.addEventListener('DOMContentLoaded', function(){
  const nameInput = document.getElementById('name');
  const greetBtn = document.getElementById('greetBtn');
  const greeting = document.getElementById('greeting');
  const toggleDark = document.getElementById('toggleDark');
  const timeEl = document.getElementById('time');

  function updateClock(){
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,'0');
    const mm = String(now.getMinutes()).padStart(2,'0');
    const ss = String(now.getSeconds()).padStart(2,'0');
    timeEl.textContent = `${hh}:${mm}:${ss}`;
  }

  // reloj cada segundo
  updateClock();
  setInterval(updateClock, 1000);

  // saludo
  greetBtn.addEventListener('click', function(){
    const name = (nameInput.value || '').trim();
    if(!name){
      greeting.textContent = 'Por favor, escribe tu nombre.';
      greeting.style.color = '#b91c1c';
      return;
    }
    greeting.style.color = '';
    greeting.textContent = `¡Hola, ${name}! Encantado de conocerte.`;
  });

  // alternar modo oscuro
  toggleDark.addEventListener('click', function(){
    document.documentElement.classList.toggle('dark-mode');
  });
});
