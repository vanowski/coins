function Plant() {
    Plant.prototype.constructor.apply(this, arguments);
    this.$sprite = document.querySelector('[data-js=sprite-plant]');
    window.setInterval(function() {
        document.dispatchEvent(new Event('coinProduced'));
        document.dispatchEvent(new Event('coinProduced'));
    }, COIN_PRODUCTION_INTERVAL);
}

Plant.prototype = Object.create(Factory.prototype);
Plant.prototype.constructor = Factory;