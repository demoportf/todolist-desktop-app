const angular = require("angular");

class SettingsCtrl {
  constructor() {
    this.images = [1];
  }

  loadMore() {
    var last = this.images[this.images.length - 1];
    console.log("last ", last);
    for (var i = 1; i <= 3; i++) {
      this.images.push(last + i);
    }
  }
}

SettingsCtrl.$inject = [];

module.exports = {
  bindings: {},
  templateUrl: "./app/settings/settings.html",
  controller: SettingsCtrl
};
