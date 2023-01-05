class TodoFilter {

  constructor() {

  }

  static cropString() {
    return str => {
      const ourString = str.substr(0, 50);
      return ourString + "...";
    };
  }

  static countTodayTasks() {
    return _tasks => {
      const _startDay = new Date();
      _startDay.setHours(0, 0, 0, 0);
      const startDay = _startDay.getTime();

      const _endDay = new Date();
      _endDay.setHours(23, 59, 59, 999);
      const endDay = _endDay.getTime();

      let countToday = 0;
      for (let i = 0; i < _tasks.length; i++) {
        const _currentDate = new Date(_tasks[i].createdAt);
        const currentDate = _currentDate.getTime();
        if (startDay <= currentDate && currentDate <= endDay) {
          countToday = countToday + 1;
        }
      }
      return countToday;
    };
  }
  static countSevenDaysTasks(moment) {
    return _tasks => {
      const _startDay = new Date();
      _startDay.setHours(0, 0, 0, 0);

      const _endDay = new Date();
      _endDay.setHours(23, 59, 59, 999);
      const __endDay = _startDay.setDate(_startDay.getDate() + 6);

      let countToday = 0;
      for (let i = 0; i < _tasks.length; i++) {
        const _taskDate = _tasks[i].createdAt;

        if (_startDay <= _taskDate || _taskDate < __endDay) {
          countToday = countToday + 1;
        }
      }

      return countToday;
    };
  }
}

module.exports = TodoFilter;