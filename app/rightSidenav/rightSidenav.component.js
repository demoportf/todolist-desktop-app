class RightSidenavCtrl {
  constructor($scope, $timeout, $mdSidenav, $log, $location) {
    this.$mdSidenav = $mdSidenav;
    this.$log = $log;
    this.$location = $location;
    
    this.menu = [
      { link: "todo", title: "ToDo", icon: "list" },
      { link: "settings", title: "Settings", icon: "settings" }
    ];
  }

  close() {
    this.$mdSidenav("right")
      .close()
      .then(() => {
        this.$log.debug("close RIGHT is done");
      });
  };

  goTo(link) {
    console.log("link ", link);
    this.$mdSidenav("right").close();
    this.$location.path(link);
  }
}

module.exports = {
  bindings: {},
  templateUrl: "./app/rightSidenav/rightSidenav.html",
  controller: RightSidenavCtrl
};
