function Snake(x, y) {
    // randomize the apple's row and column
    this.row = x;
    this.col = y;
    this.rad = 15;

    this.show = function() {
        fill(200);
        rectMode(CENTER);
        rect(this.x, this.y, this.rad, this.rad)
    }
}