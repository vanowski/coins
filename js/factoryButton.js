function FactoryButton() {
    this.x = DIMENSIONS.BUTTON_MARGIN;
    this.y = DIMENSIONS.CANVAS_HEIGHT - DIMENSIONS.CONTROL_PANEL_HEIGHT + DIMENSIONS.BUTTON_MARGIN;
    this.$sprite = document.querySelector('[data-js=sprite-factory]');
}

FactoryButton.prototype = Object.create(GameObject.prototype);
FactoryButton.prototype.constructor = GameObject;

FactoryButton.prototype.handleClick = function() {
    document.dispatchEvent(new Event('factoryButtonClicked'));
};