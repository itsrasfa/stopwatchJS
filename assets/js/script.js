
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const stop = document.querySelector('.stop');
const campoTempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
stop.addEventListener('click', resetarTempo);

let ms = 0;
let m = 0;
let s = 0;

let start = 10;
let timer;

function iniciarTempo() {
  timer = setInterval(() => { stopwatch(); }, start);
  iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled', '')
}

function resetarTempo() {
  campoTempo.innerText = "00:00:00";
  clearInterval(timer);
  h = 0;
  m = 0;
  s = 0;
  iniciar.removeAttribute('disabled', '')
}

function stopwatch() {
  ms++
  if (ms == 100) {
    ms = 0;
    s++
    if (s == 60) {
      s = 0;
      m++
    }
  }
  campoTempo.innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
}