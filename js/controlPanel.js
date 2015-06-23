function ControlPanel() {
    this.x = 0;
    this.y = DIMENSIONS.CANVAS_HEIGHT - DIMENSIONS.CONTROL_PANEL_HEIGHT;
    this.$sprite = document.querySelector('[data-js=sprite-control-panel]');
}

ControlPanel.prototype = Object.create(GameObject.prototype);
ControlPanel.prototype.constructor = GameObject;