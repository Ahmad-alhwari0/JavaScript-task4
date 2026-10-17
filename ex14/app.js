const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskCount = document.querySelector("#taskCount");
const taskList = document.querySelector("#taskList");
const clearBtn = document.querySelector("#clearBtn");

let tasks = [];

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
  }
}
loadTasks();

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", () => {
  const title = taskInput.value.trim();

  if (title === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
  };

  tasks.push(newTask);

  saveTasks();
  renderTasks();

  taskInput.value = "";
});
clearBtn.addEventListener("click", () => {
  tasks = [];

  localStorage.removeItem("tasks");

  renderTasks();
});

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

function renderTasks() {
  taskList.innerHTML = "";

  taskCount.textContent = tasks.length;

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.textContent = "delete";
    btn.addEventListener("click", () => {
      deleteTask(task.id);
      saveTasks();
      renderTasks();
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
    });
    li.appendChild(checkbox);

    const title = document.createElement("span");
    title.textContent = task.title;

    li.appendChild(title);
    li.appendChild(btn);

    taskList.appendChild(li);
  });
}

renderTasks();

// localStorage.clear()
