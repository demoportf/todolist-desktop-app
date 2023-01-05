class LeftSidenavCtrl {
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
    this.$mdSidenav("left")
      .close()
      .then(() => {
        this.$log.debug("close LEFT is done");
      });
  };

  goTo(link) {
    console.log("link ", link);
    this.$mdSidenav("left").close();
    this.$location.path(link);
  }
}

module.exports = {
  bindings: {},
  templateUrl: "./app/leftSidenav/leftSidenav.html",
  controller: LeftSidenavCtrl
};
