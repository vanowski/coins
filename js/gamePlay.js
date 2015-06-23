function GamePlay() {
    this.coinsCollected = INITIAL_BUDGET;
    this.factories = 0;
    this.plants = 0;

    document.addEventListener('coinCollected', this.collectCoin.bind(this));
    document.addEventListener('factoryButtonClicked', this.buildFactory.bind(this));
    document.addEventListener('plantButtonClicked', this.buildPlant.bind(this));

    this.update();
}

GamePlay.prototype.collectCoin = function() {
    this.coinsCollected++;
    this.update();
    if (this.coinsCollected >= COINS_TO_WIN) {
        document.dispatchEvent(new Event('win'));
    }
};

GamePlay.prototype.buildPlant = function() {
    if (this.coinsCollected >= PLANT_COST && this.plants < MAX_PLANTS) {
        this.plants++;
        this.coinsCollected -= PLANT_COST;
        this.update();
        document.dispatchEvent(new Event('plantPaid'));
    } else {
        document.dispatchEvent(new Event('notEnoughCoins'));
    }
};

GamePlay.prototype.buildFactory = function() {
    if (this.coinsCollected >= FACTORY_COST && this.factories < MAX_FACTORIES) {
        this.factories++;
        this.coinsCollected -= FACTORY_COST;
        this.update();
        document.dispatchEvent(new Event('factoryPaid'));
    } else {
        document.dispatchEvent(new Event('notEnoughCoins'));
    }
};

GamePlay.prototype.update = function() {
    document.dispatchEvent(new CustomEvent('coinsUpdated', {'detail': this.coinsCollected}));
};
