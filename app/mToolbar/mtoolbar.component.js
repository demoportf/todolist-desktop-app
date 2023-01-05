class ToolbarCtrl {
  constructor(){}
  toggleMenuButton() {
    console.log("open");
    this.onOpen({ state: true });
  }
}
module.exports = {
  bindings: {
    toolbarMenu: '<',
    onOpen: '&',
  },
  templateUrl: "./app/mToolbar/mtoolbar.html",
  controller: ToolbarCtrl
};