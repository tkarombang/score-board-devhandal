const p1button = document.getElementById('p1-btn');
const p2button = document.getElementById('p2-btn');
const p1display = document.getElementById('p1-display');
const p2display = document.getElementById('p2-display');
const maxPointOption = document.querySelector('#winpoint')


let p1Score = 0;
let p2Score = 0;
let winPoin = maxPointOption.value;
let isGameOver = false;

console.log(winPoin);

function reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1display.textContent = 0
  p2display.textContent = 0
}

p1button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score >= winPoin) {
      isGameOver = true;
    }
    p1display.textContent = p1Score;
  }
});


p2button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score >= winPoin) {
      isGameOver = true
    }
    p2display.textContent = p2Score;
  }
});


maxPointOption.addEventListener('change', function () {
  winPoin = parseInt(this.value)
  reset();
})