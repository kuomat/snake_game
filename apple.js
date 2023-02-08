function Apple(x, y) {
    this.x = x;
    this.y = y;
    this.rad = 15;

    this.show = function() {
        fill(255, 0, 0);
        circle(this.x, this.y, this.rad);
    }

    this.setLocation = function(newX, newY){
        this.x = newX;
        this.y = newY;
    }
}