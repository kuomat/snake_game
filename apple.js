function Apple(x, y) {
    // randomize the apple's row and column
    this.row = x;
    this.col = y;
    this.rad = 15;

    this.show = function() {
        fill(125);
        circle(this.col, this.row, this.rad);
    }
}