function Counter(x, y) {
    Factory.prototype.constructor.apply(this, arguments);
    document.addEventListener('coinsUpdated', function(e) {
        this.coinsCount = e.detail;
    }.bind(this));
}

Counter.prototype = Object.create(GameObject.prototype);
Counter.prototype.constructor = GameObject;

Counter.prototype.render = function(context) {
    if (this.coinsCount) {
        context.beginPath();
        context.font = '100px Verdana';
        context.fillStyle = "white";
        context.fillText(this.coinsCount, this.x, this.y);
    }
};