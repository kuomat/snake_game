var apple;
var snake;
var dir = "LEFT";

function setup() {
  createCanvas(400, 400);

  // create snake
  snake = new Snake(random(150, 300), random(150, 300), 20);
  snake.createSnake();

  // create apple
  apple = new Apple(random(50, 150), random(50, 150));
}

function draw() {
  background(220);
  apple.show();

  // check if the snake is still alive
  if (snake.body.length > 0) {
    snake.show();
    snake.move(dir);


    var snakeHeadX = snake.body[0][0];
    var snakeHeadY = snake.body[0][1];

    // check if the snake is out of bounds
    if (snakeHeadX + snake.rad >= width + 15 || snakeHeadX - snake.rad <= -15 ||
        snakeHeadY + snake.rad >= height + 15 || snakeHeadY - snake.rad <= -15) {
          snake.killSnake();
    }

    // snake eats apple
    for (var i = 0; i < snake.body.length; i ++) {
      if (dist(apple.x, apple.y, snakeHeadX, snakeHeadY) < 15) {
        // change the location of the apple
        apple.setLocation(random(50, 350), random(50, 350));

        // make the snake longer
        snake.increaseLength();

        // check if the apple spawns inside the snake
        for (var j = 0; j < snake.body.length; j ++) {
          if (Math.abs(snake.body[j][0] - apple.x) < 20 && Math.abs(snake.body[j][1] - apple.y) < 20) {
            apple.setLocation(random(50, 350), random(50, 350));
            j = -1;
          }
        }
      }
    }
  }
}

function keyPressed(e) {
  if (keyCode == RIGHT_ARROW) {
    dir = "RIGHT";

  } else if (keyCode == LEFT_ARROW) {
    dir = "LEFT";

  } else if (keyCode == UP_ARROW) {
    dir = "UP";

  } else if (keyCode == DOWN_ARROW) {
    dir = "DOWN";
  }
}