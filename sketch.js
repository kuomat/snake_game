var apple;
var snakes = []

function setup() {
  createCanvas(400, 400);
  apple = new Apple(random(30, 350), random(30, 350));

  x = random(50, 300);
  y = random(50, 300);
  for (var i = 0; i < 5; i ++) {
    snakes[i] = new Snake(x + 15 * i, y + 15 * i);
  }
}

function draw() {
  background(220);
  apple.show()

  for (var i = 0; i < snakes.length; i ++) {
    snakes[i].show();
  }
}
