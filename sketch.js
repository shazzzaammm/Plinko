const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Runner = Matter.Runner;
let engine;
let world;
const balls = [];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  Runner.run(engine);
  let spacing = 50;
  let cols = width / spacing;
  let rows = ((height / spacing) * 3) / 4;
  let x = 0;
  let y = spacing * 1.25;
  let state = 2;
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      balls.push(new Ball(x, y, 5, true));
      x += spacing;
    }
    y += spacing;
    state++;
    state % 2 == 0 ? (x = 0) : (x = spacing / 2);
  }
}

function draw() {
  background(20);
  for (let i = balls.length - 1; i >= 0; i--) {
    const b = balls[i];
    b.show();
    if (b.body.position.y > height + 100) {
      balls.splice(i, 1);
    }
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, 0, 10, false));
}
