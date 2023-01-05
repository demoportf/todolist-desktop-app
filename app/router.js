class Router {
  constructor($routeProvider) {
    this.$routeProvider = $routeProvider;
    this.$routeProvider
      .when("/all", {
        templateUrl: "./app/todo/index.html"
      })
      .when("/settings", {
        templateUrl: "./app/settings/index.html"
      })
      .otherwise({
        redirectTo: "/all"
      });
  }
}

module.exports = Router;
