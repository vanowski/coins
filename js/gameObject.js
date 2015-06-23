function GameObject(x, y, $sprite) {
    this.x = x;
    this.y = y;
    this.$sprite = $sprite;
    this.deleted = false;
}

GameObject.prototype.render = function(context) {
    context.beginPath();
    context.drawImage(this.$sprite, this.x, this.y);
    this.width = this.$sprite.width;
    this.height = this.$sprite.height;
};

GameObject.prototype.clicked = function(x, y) {
    if (this.$sprite) {
        return (
            x > this.x && x < this.x + this.width &&
            y > this.y && y < this.y + this.height
        );
    } else {
        return false;
    }
};

GameObject.prototype.handleClick = function() {};