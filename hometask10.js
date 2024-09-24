"use strict";

// 1. Додати нові задачі +
// 2. Видаляти всі задачі +
// 3. Видаляти окремі задачі +
// 4. Пошук/фільтрація +
// 5. Зберігати в стореджі +

// Отримуємо необхідні DOM елементи
const form = document.querySelector(".create-task-form"); // Форма для створення задач
const taskInput = document.querySelector(".task-input"); // Поле для введення задачі
const collection = document.querySelector(".collection"); // Список задач
const clearButton = document.querySelector(".clear-tasks"); // Кнопка для видалення всіх задач
const filterInput = document.querySelector(".filter-input"); // Поле для фільтрації задач

// Ключ для збереження задач в LocalStorage
const TASKS_STORAGE_KEY = "tasks";

// Додаємо обробники подій
document.addEventListener("DOMContentLoaded", renderTasks); // При завантаженні сторінки відображаємо задачі з LocalStorage
form.addEventListener("submit", addTask); // Додаємо задачу при сабміті форми
clearButton.addEventListener("click", removeTasks); // Видаляємо всі задачі при натисканні на кнопку
filterInput.addEventListener("input", filterTasks); // Фільтруємо задачі при введенні тексту у поле

// Відображення задач з LocalStorage
function renderTasks() {
  if (getTasksFromLocalStorage()) {
    const tasks = JSON.parse(getTasksFromLocalStorage());

    // Створюємо елемент для кожної задачі
    tasks.forEach((task) => {
      createTask(task);
    });
  }
}

// Отримуємо індекс останньої задачі для присвоєння новим задачам
function getLastTasksIndex() {
  if (getTasksFromLocalStorage()) {
    const elements = JSON.parse(getTasksFromLocalStorage());
    return elements.length ? elements.at(-1).id + 1 : 0;
  }

  return 0;
}

// Створення HTML-елементу для задачі
function createTask(task) {
  const li = document.createElement("li");
  li.innerHTML = task.name;
  li.classList.add("task");
  li.setAttribute("data-id", task.id); // Присвоюємо задачі унікальний індекс

  // Додаємо кнопку для видалення задачі
  const container = document.createElement("div");

  const button = document.createElement("button");
  button.innerHTML = "x";
  button.className = "button-icon button-delete";
  button.addEventListener("click", function (event) {
    console.log("🚀 ~  task.id:", task.id);

    removeTask(task.id);
  });

  const editButton = document.createElement("button");
  editButton.innerHTML = "edit";
  editButton.className = "button-icon button-delete";
  editButton.addEventListener("click", function (event) {
    const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage

    const taskIndex = tasks.findIndex((t) => t.id == task.id);
    tasks[taskIndex] = {
      ...task,
      name: prompt("Enter text"),
    };

    removeTasks(); // Видаляємо всі задачі з інтерфейсу
    setTasksToLocalStorage(tasks); // Зберігаємо оновлений список задач
    renderTasks(); // Відображаємо задачі після видалення
  });

  container.append(editButton);
  container.append(button);

  li.append(container);

  // Додаємо задачу до колекції (списку)
  collection.append(li);
}

// Додавання нової задачі
function addTask(event) {
  event.preventDefault(); // Відміняємо перезавантаження сторінки при сабміті

  const currentForm = event.target;
  const inputValue = currentForm.task.value; // Отримуємо значення з поля вводу

  if (!inputValue) {
    return; // Якщо поле порожнє, не додаємо задачу
  }

  const currentIndex = getLastTasksIndex(); // Отримуємо індекс для нової задачі

  const newTask = {
    id: currentIndex,
    name: inputValue,
  };

  createTask(newTask, currentIndex); // Створюємо нову задачу

  setTaskToLocalStorage(newTask); // Зберігаємо задачу в LocalStorage

  currentForm.reset(); // Очищаємо поле вводу
}

// Зберігаємо задачу в LocalStorage
function setTaskToLocalStorage(task) {
  let tasks = [];

  if (getTasksFromLocalStorage()) {
    tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо існуючі задачі
  }

  tasks.push(task); // Додаємо нову задачу
  setTasksToLocalStorage(tasks); // Оновлюємо LocalStorage
}

// Оновлюємо LocalStorage
function setTasksToLocalStorage(tasks) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)); // Зберігаємо задачі у форматі JSON
}

// Отримуємо задачі з LocalStorage
function getTasksFromLocalStorage() {
  return localStorage.getItem(TASKS_STORAGE_KEY); // Повертаємо задачі у вигляді рядка
}

// Очищаємо LocalStorage
function clearTasksFromLocalStorage() {
  localStorage.removeItem(TASKS_STORAGE_KEY); // Видаляємо всі задачі з LocalStorage
}

// Видалення всіх задач
function removeTasks() {
  collection.innerHTML = ""; // Очищаємо HTML-код списку задач

  clearTasksFromLocalStorage(); // Очищаємо LocalStorage
}

// Видалення окремої задачі
function removeTask(taskId) {
  if (event.target.classList.contains("button-delete")) {
    const li = event.target.closest(".task"); // Знаходимо батьківський елемент (задачу)
    const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage

    // Фільтруємо задачі, залишаючи лише ті, які не мають індексу видаленої задачі
    const filteredTasks = tasks.filter((task, index) => {
      return task.id !== taskId;
    });

    removeTasks(); // Видаляємо всі задачі з інтерфейсу
    setTasksToLocalStorage(filteredTasks); // Зберігаємо оновлений список задач
    renderTasks(); // Відображаємо задачі після видалення
  }
}

// Фільтрація задач
function filterTasks(event) {
  const filterQuery = event.target.value; // Отримуємо значення з поля фільтрації

  const tasks = collection.querySelectorAll(".task"); // Отримуємо всі задачі

  tasks.forEach((task) => {
    const taskValue = task.firstChild.textContent; // Отримуємо текст задачі
    if (!taskValue.includes(filterQuery.trim())) {
      task.classList.add("hidden"); // Ховаємо задачі, які не відповідають запиту
    } else {
      task.classList.remove("hidden"); // Показуємо задачі, що відповідають запиту
    }
  });
}
