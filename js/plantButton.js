function PlantButton() {
    this.x = DIMENSIONS.BUTTON_MARGIN + DIMENSIONS.BUTTON_SLOT + DIMENSIONS.BUTTON_MARGIN;
    this.y = DIMENSIONS.CANVAS_HEIGHT - DIMENSIONS.CONTROL_PANEL_HEIGHT + DIMENSIONS.BUTTON_MARGIN;
    this.$sprite = document.querySelector('[data-js=sprite-plant]');
}

PlantButton.prototype = Object.create(GameObject.prototype);
PlantButton.prototype.constructor = GameObject;

PlantButton.prototype.handleClick = function() {
    document.dispatchEvent(new Event('plantButtonClicked'));
};