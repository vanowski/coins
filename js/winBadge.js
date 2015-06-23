function WinBadge() {
    this.x = DIMENSIONS.CANVAS_HEIGHT / 3;
    this.y = DIMENSIONS.CANVAS_WIDTH / 3;
    this.$sprite = document.querySelector('[data-js=sprite-win-badge]');
}

WinBadge.prototype = Object.create(GameObject.prototype);
WinBadge.prototype.constructor = GameObject;