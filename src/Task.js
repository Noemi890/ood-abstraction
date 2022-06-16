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
    if(this.#dateDue === null) return true

    return false
  }

  getDateDue() {
    const dateDue = this.#dateDue
    return dateDue
  }

  getDescription() {
    const description = this.#description
    return description
  }

  getStatus() {
    if(this.#status === "incomplete") return true

    return false
  }

  setStatusComplete() {
    this.#status = "complete"
  }
}

module.exports = Task