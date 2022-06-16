class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    const today = new Date()
    const overdueTasks = []
    for (const task of this.tasks) {
      if (task.getStatus() && !task.isNull() && today > task.getDateDue()) {
            overdueTasks.push(task)
          }
    }

    return overdueTasks
  }
}

module.exports = TaskList