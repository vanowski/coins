function Coin(x, y) {
    Coin.prototype.constructor.apply(this, arguments);
    this.$sprite = document.querySelector('[data-js=sprite-coin]');
}

Coin.prototype = Object.create(GameObject.prototype);
Coin.prototype.constructor = GameObject;

Coin.prototype.handleClick = function() {
    document.dispatchEvent(new Event('coinCollected'));
    this.deleted = true;
};