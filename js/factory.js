function Factory(x, y) {
    Factory.prototype.constructor.apply(this, arguments);
    this.$sprite = document.querySelector('[data-js=sprite-factory]');
    window.setInterval(function() {
        document.dispatchEvent(new Event('coinProduced'));
    }, COIN_PRODUCTION_INTERVAL);
}

Factory.prototype = Object.create(GameObject.prototype);
Factory.prototype.constructor = GameObject;