var MAX_FACTORIES = 10;
var MAX_PLANTS = 5;
var FACTORY_COST = 20;
var PLANT_COST = 70;
var INITIAL_BUDGET = 10;
var COIN_PRODUCTION_INTERVAL = 5000;
var COINS_TO_WIN = 500;
var DIMENSIONS = {
    CANVAS_WIDTH: 1024,
    CANVAS_HEIGHT: 800,
    CONTROL_PANEL_HEIGHT: 173,
    OFFSET_LEFT: 57,
    OFFSET_TOP: 69,
    BUTTON_MARGIN: 40,
    BUTTON_SLOT: 180
};

function App() {
    this.init();
}

App.prototype.init = function() {
    var $canvas = document.getElementById('canvas');

    this.canvas = new Canvas($canvas);
    this.gamePlay = new GamePlay();
};

App.prototype.play = function() {
    this.setDelta();
    this.canvas.render();
    requestAnimationFrame(this.play.bind(this));
};


App.prototype.setDelta = function() {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
};
