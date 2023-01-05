const angular = require("angular");
const ngMaterial = require("angular-material");
const ngMessages = require("angular-messages");
const ngArea = require("angular-aria");
const ngAnimate = require("angular-animate");
const ngRouter = require("angular-route");
require("angular-moment");
const moment = require("moment");
const momentTimezone = require("moment-timezone");
const momentLocaleRu = require("moment/locale/ru");
const router = require("./app/router");
const mainComponent = require("./app/main/main.component");
const mtoolbarComponent = require("./app/mToolbar/mtoolbar.component");
const leftSidenavComponent = require("./app/leftSidenav/leftSidenav.component");
const rightSidenavComponent = require("./app/rightSidenav/rightSidenav.component");
const todoComponent = require("./app/todo/todo.component");
const settingsComponent = require("./app/settings/settings.component");
const todoService = require("./app/todo/todo.service");
const todoFilter = require("./app/todo/todo.filter");
const ngInfiniteScroll = require("ng-infinite-scroll");

angular
  .module("App", [
    ngMaterial,
    ngMessages,
    ngArea,
    ngAnimate,
    ngRouter,
    "angularMoment",
    ngInfiniteScroll
  ])
  .constant("moment", moment)
  .constant("moment-timezone", momentTimezone)
  .constant("ru", momentLocaleRu)
  .component("main", mainComponent)
  .component("mtoolbar", mtoolbarComponent)
  .component("leftSidenav", leftSidenavComponent)
  .component("rightSidenav", rightSidenavComponent)
  .component("todo", todoComponent)
  .component("settings", settingsComponent)
  .service("TodoService", todoService)
  .filter("cropString", todoFilter.cropString)
  .filter("countTodayTasks", todoFilter.countTodayTasks)
  .filter("countSevenDayTasks", ["moment", todoFilter.countSevenDaysTasks])
  .config(router);


// angular.bootstrap(document, ["App"]);
// var fs = require("fs");
// var file = fs.readFileSync("package.json");
// document.write(file);
