var startButton = document.getElementById('start');

function showText() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('congratulation').style.display = 'block';
}

startButton.addEventListener('click', showText);