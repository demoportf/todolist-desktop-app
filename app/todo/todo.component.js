const angular = require("angular");

class ToDoCtrl {
  constructor(TodoService, moment) {
    console.log(TodoService.tasks);

    this.today = {
      name: "Сегодня",
      extraScreen: "today",
      icon: "calendar_today",
      enabled: true
    };

    this.sevenDays = {
      name: "Следующие 7 дней",
      extraScreen: "next_seven_days",
      icon: "calendar_view_day",
      enabled: true
    };
    this.TodoService = TodoService;
    this.stateTodoList = false;
  }

  stateTab(_tab) {
    this.stateTodoList = _tab;
  }

  addTask() {
    const _newTask = {
      title: this.task.title,
      completed: false,
      createdAt: ""
    };

    let newTask = angular.copy(_newTask);
    if (!newTask.title) {
      return;
    }
    newTask.createdAt = new Date();
    this.TodoService.tasks.push(newTask);
    this.TodoService.set();
    this.task.title = "";
  }

  removeTask(_deleteTask) {
    const i = this.TodoService.tasks.indexOf(_deleteTask);
    if (i != -1) {
      this.TodoService.tasks.splice(i, 1);
    }
    this.TodoService.set();
  }

  onCompleteTodo() {
    this.TodoService.set();
  }

  keypressHandler(parm) {
    if (parm.key === "Enter") {
      this.addTask();
    }
  }
}

ToDoCtrl.$inject = ["TodoService", "moment"];

module.exports = {
  bindings: {},
  templateUrl: "./app/todo/todo.html",
  controller: ToDoCtrl
};
