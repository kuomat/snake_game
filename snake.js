function Snake(startingX, startingY, rad) {
    this.startingX = startingX;
    this.startingY = startingY;
    this.rad = rad;
    this.body = [];

    this.createSnake = function() {
        for (var i = 0; i < 10; i++) {
            this.body[i] = [this.startingX + 5 * (i + 1), this.startingY];
        }
    }

    this.show = function() {
        // check if the snake is alive
        if (this.body.length != 0) {
            rectMode(CENTER);

            // show the head
            fill(0, 255, 0);
            for (var i = 0; i < 3; i ++) {
                rect(this.body[0][0], this.body[0][1], this.rad, this.rad, 4);
            }

            // show the body with a different color
            fill(0);
            for (var i = 3; i < this.body.length; i++) {
                rect(this.body[i][0], this.body[i][1], this.rad, this.rad, 4);
            }
        }
    }

    this.move = function(dir) {
        var curHeadX = this.body[0][0];
        var curHeadY = this.body[0][1];
        var prevDir = "";

        if (dir == "UP") {
            newHead = [curHeadX, curHeadY - 5];
            prevDir = "DOWN";
        } else if (dir == "DOWN") {
            newHead = [curHeadX, curHeadY + 5];
            prevDir = "UP";
        } else if (dir == "LEFT") {
            newHead = [curHeadX - 5, curHeadY];
            prevDir = "RIGHT";
        } else if (dir == "RIGHT") {
            newHead = [curHeadX + 5, curHeadY];
            prevDir = "LEFT";
        }

        // check if the snake is going to its tail
        if (this.body[1][0] != newHead[0] || this.body[1][1] != newHead[1]) {
            this.body.pop();
            this.body.unshift(newHead);
        } else {
            this.move(prevDir);
        }
    }

    this.killSnake = function() {
        this.body = [];
    }

    this.eatItself = function() {
        curHeadX = this.body[0][0];
        curHeadY = this.body[0][1];

        for (var i = 1; i < this.body.length; i ++) {
            // eats itself
            if (dist(curHeadX, curHeadY, this.body[i][0], this.body[i][1]) < 3) {
                this.body = [];
            }
        }
    }

    this.increaseLength = function(currentDir) {
        if (currentDir == "UP") {
            newHead = [curHeadX, curHeadY - 5];
        } else if (currentDir == "DOWN") {
            newHead = [curHeadX, curHeadY + 5];
        } else if (currentDir == "LEFT") {
            newHead = [curHeadX - 5, curHeadY];
        } else if (currentDir == "RIGHT") {
            newHead = [curHeadX + 5, curHeadY];
        }

        this.body.unshift(newHead);
    }
}