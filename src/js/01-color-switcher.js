const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
stopBtn.disabled = true;
let intervalId = null;

function stopColorChanging() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function startColorChanging() {
  clearInterval(intervalId);
  intervalId = setInterval(changeBackgroundColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
stopBtn.addEventListener('click', stopColorChanging);
startBtn.addEventListener('click', startColorChanging);
