
const canvas = document.getElementById('gearCanvas');
const ctx = canvas.getContext('2d');

const player = {
  base: '#888',
  gloves: 'white',
  sleeves: 'white',
  mouthguard: 'white'
};

function drawPlayer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.base;
  ctx.fillRect(350, 100, 100, 300); // body
  ctx.beginPath();
  ctx.arc(400, 60, 40, 0, Math.PI * 2); // helmet
  ctx.fill();

  // Gloves
  ctx.fillStyle = player.gloves;
  ctx.fillRect(330, 350, 20, 20); // left glove
  ctx.fillRect(450, 350, 20, 20); // right glove

  // Sleeves
  ctx.fillStyle = player.sleeves;
  ctx.fillRect(300, 200, 40, 20); // left sleeve
  ctx.fillRect(460, 200, 40, 20); // right sleeve

  // Mouthguard
  ctx.fillStyle = player.mouthguard;
  ctx.beginPath();
  ctx.arc(400, 100, 10, 0, Math.PI * 2);
  ctx.fill();
}

function changeColor(part, color) {
  player[part] = color;
  drawPlayer();
}

drawPlayer();
