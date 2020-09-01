const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeBtn = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%, 50%)`;

const { width, height } = canvas;

ctx.lineJoint = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  hue+=10;
  ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (event.key.includes("Arrow")) {
    event.preventDefault();
    draw({ key: e.key });
  }
}

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0,0,width,height);
  canvas.addEventListener('animationend', function () {
    canvas.classList.remove('shake');
  },{once: true})
}

window.addEventListener("keydown", handleKey);
shakeBtn.addEventListener('click', clearCanvas)