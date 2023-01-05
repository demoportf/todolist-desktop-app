class MainCtrl {
  constructor($scope, $timeout, $mdSidenav, $log) {
    this.$mdSidenav = $mdSidenav;
    this.$log = $log;
  }
  onOpen(value) {
    this.toggleLeft(value.sidenav);
  }
  toggleLeft (value) {
    this.$mdSidenav(value)
        .toggle()
        .then(() => {
          this.$log.debug("toggle " + value + " is done");
        });
  }
}

module.exports = {
  bindings: {},
  templateUrl: "./app/main/main.html",
  controller: MainCtrl
};
