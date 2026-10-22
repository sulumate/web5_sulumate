const tasks = [];
let nextTaskId = 1;

const taskForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskFeedback = document.getElementById("task-feedback");
const emptyMessage = document.getElementById("empty-message");
const taskSummary = document.getElementById("task-summary");

function renderTasks() {
  taskList.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    item.classList.add("todo-item");
    item.classList.toggle("completed", task.completed);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task-" + task.id;
    checkbox.checked = task.completed;
    label.htmlFor = checkbox.id;

    const text = document.createElement("span");
    text.textContent = task.text;

    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      item.classList.toggle("completed", task.completed);
      updateSummary();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete task: " + task.text);

    deleteButton.addEventListener("click", function () {
      const index = tasks.findIndex(function (currentTask) {
        return currentTask.id === task.id;
      });
      if (index !== -1) {
        tasks.splice(index, 1);
      }
      renderTasks();
      taskFeedback.textContent = "Task deleted.";
      taskInput.focus();
    });

    label.append(checkbox, text);
    item.append(label, deleteButton);
    taskList.appendChild(item);
  }

  emptyMessage.hidden = tasks.length > 0;
  updateSummary();
}

function updateSummary() {
  const completedCount = tasks.filter(function (task) {
    return task.completed;
  }).length;
  taskSummary.textContent = tasks.length + (tasks.length === 1 ? " task" : " tasks") + " · " + completedCount + " completed";
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (text === "") {
    taskFeedback.textContent = "Please enter a task first.";
    taskInput.focus();
    return;
  }

  tasks.push({ id: nextTaskId, text: text, completed: false });
  nextTaskId += 1;
  renderTasks();
  taskInput.value = "";
  taskFeedback.textContent = "Task added.";
  taskInput.focus();
});

renderTasks();
