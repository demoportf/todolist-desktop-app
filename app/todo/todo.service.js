const fs = require("fs");
const os = require("os");

class TodoService {
  constructor($log) {
    this.$log = $log;
    this.tasks = [];
    this.homeDir = os.homedir();
    this.appFile = "todos.json";
    this.appDataDir = this.homeDir + "/.todolist";
    this.fullAppPath = this.appDataDir + "/" + this.appFile;

    $log.log("HOME DIR ", this.fullAppPath);

    if (!fs.existsSync(this.appDataDir)) {
      fs.mkdirSync(this.appDataDir);
    }

    try {
      this.tasks = JSON.parse(
        fs.readFileSync(this.fullAppPath, {
          encoding: "utf8"
        }) || "[]"
      );
    } catch (e) {
      this.$log.error(e);
      this.$log.info("Create database file...");
      const file = JSON.stringify(this.tasks);
      fs.writeFileSync(this.fullAppPath, file);
    }

    this.STORAGE_ID = "todos";
    console.log("Init this.tasks ", this.tasks);
  }

  set() {
    // localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.tasks));
    // const todosStr = localStorage.getItem("todos");
    fs.writeFileSync(this.fullAppPath, JSON.stringify(this.tasks));
    this.tasks = JSON.parse(
      fs.readFileSync(this.fullAppPath, {
        encoding: "utf8"
      }) || "[]"
    );
    //this.tasks = JSON.parse(todosStr);
    return this.tasks;
  }

  get() {
    //this.tasks = JSON.parse(localStorage.getItem(this.STORAGE_ID) || "[]");
    try {
      this.tasks = JSON.parse(
        fs.readFileSync(this.fullAppPath, {
          encoding: "utf8"
        }) || "[]"
      );
      this.$log.log(this.tasks);
      return this.tasks;
    } catch (e) {
      this.$log.error(e);
    }
  }

    getById(_id) {
    //this.tasks = JSON.parse(localStorage.getItem(this.STORAGE_ID) || "[]");
      this.$log.log(this.tasks);
      return this.tasks[_id];
   
  }
}

TodoService.$inject = ["$log"];

module.exports = TodoService;
