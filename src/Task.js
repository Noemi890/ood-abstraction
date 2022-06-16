class Task {

  #dateDue
  #description
  #status

  constructor(dateDue, description) {
    //Task due date - not all tasks have a due date. If a task has no
    //due date, dueDate will be null
    this.#dateDue = dateDue
    this.#description = description
    this.#status = "incomplete"
  }

  isNull() {
    return this.#dateDue === null
  }

  getDateDue() {
    return this.#dateDue
  }

  getDescription() {
    return this.#description
  }

  getStatus() {
    return this.#status === 'incomplete'
  }

  setStatusComplete() {
    this.#status = 'complete'
  }
}

module.exports = Task