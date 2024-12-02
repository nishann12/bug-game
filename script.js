const object = document.getElementById('object');
const speed = 8;
let position = { x: 0, y: 0 };
let rotation = 0; 

function moveUp() {
  if (position.y > 0) position.y -= speed;
  rotation = 0; 
  updatePosition();
}

function moveDown() {
  if (position.y < window.innerHeight - object.clientHeight) position.y += speed;
  rotation = 180; 
  updatePosition();
}

function moveLeft() {
  if (position.x > 0) position.x -= speed;
  rotation = -180; 
  updatePosition();
}

function moveRight() {
  if (position.x < window.innerWidth - object.clientWidth) position.x += speed;
  rotation = 0; 
  updatePosition();
}

function updatePosition() {
  object.style.top = position.y + 'px';
  object.style.left = position.x + 'px';
  object.style.transform = `rotate(${rotation}deg)`; 
}

updatePosition();

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowRight':
      moveRight();
      break;
  }
});

document.getElementById('up').addEventListener('click', moveUp);
document.getElementById('down').addEventListener('click', moveDown);
document.getElementById('left').addEventListener('click', moveLeft);
document.getElementById('right').addEventListener('click', moveRight);
