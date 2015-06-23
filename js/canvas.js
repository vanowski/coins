function Canvas($canvas) {
    this.$canvas = $canvas;
    this.gameFieldHeight = DIMENSIONS.CANVAS_HEIGHT - DIMENSIONS.CONTROL_PANEL_HEIGHT;
    this.context = $canvas.getContext('2d');
    this.gameObjects = [];

    this.addGameObject(new ControlPanel());
    this.addGameObject(new FactoryButton());
    this.addGameObject(new PlantButton());
    this.addGameObject(new Counter(
        DIMENSIONS.CANVAS_WIDTH - DIMENSIONS.BUTTON_SLOT,
        this.gameFieldHeight + DIMENSIONS.BUTTON_MARGIN * 3
    ));

    this.coinsProduction = window.setInterval(this.placeCoin.bind(this), COIN_PRODUCTION_INTERVAL);

    this.$canvas.addEventListener('click', this.handleClick.bind(this));
    document.addEventListener('factoryPaid', this.buildFactory.bind(this));
    document.addEventListener('plantPaid', this.buildPlant.bind(this));
    document.addEventListener('coinProduced', this.placeCoin.bind(this));

    document.addEventListener('win', function() {
        this.gameObjects = [];
        window.clearInterval(this.coinsProduction);
        this.addGameObject(new WinBadge());
    }.bind(this));
}

Canvas.prototype.randomFromRange = function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

Canvas.prototype.findFreeSpot = function() {
    var genX = this.randomFromRange(0, DIMENSIONS.CANVAS_WIDTH - DIMENSIONS.OFFSET_LEFT);
    var genY = this.randomFromRange(0, this.gameFieldHeight - DIMENSIONS.OFFSET_TOP);

    var intersections = this.gameObjects.some(function(obj) {
        return (
            genX > obj.x && genX < obj.x + obj.width &&
            genY > obj.y && genY < obj.y + obj.height
        );
    });

    if (intersections.length) {
        this.findFreeSpot();
    } else {
        return [genX, genY];
    }
};

Canvas.prototype.clear = function() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
};

Canvas.prototype.render = function() {
    this.clear();
    this.gameObjects.forEach(function(obj) {
        if (obj.deleted) {
            var index = this.gameObjects.indexOf(obj);

            if (index > -1) {
                this.gameObjects.splice(index, 1);
            }
        } else {
            obj.render(this.context);
        }
    }.bind(this));
};

Canvas.prototype.handleClick = function(e) {
    var x = e.pageX - this.$canvas.offsetLeft;
    var y = e.pageY - this.$canvas.offsetTop;

    this.gameObjects.forEach(function(obj) {
        if (obj.clicked(x, y)) {
            obj.handleClick();
        }
    }.bind(this));
};

Canvas.prototype.addGameObject = function(obj) {
    this.gameObjects.push(obj);
    this.render();
};

Canvas.prototype.buildFactory = function() {
    var coords = this.findFreeSpot();

    this.addGameObject(new Factory(coords[0], coords[1]));
};

Canvas.prototype.buildPlant = function() {
    var coords = this.findFreeSpot();

    this.addGameObject(new Plant(coords[0], coords[1]));
};

Canvas.prototype.placeCoin = function() {
    var coords = this.findFreeSpot();

    this.addGameObject(new Coin(coords[0], coords[1]));
};