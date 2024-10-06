"use strict";

import getRepositories from "./repo.js";
console.log("🚀 ~ getRepositories:", getRepositories);

// debounce-функція
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Функція для обробки запиту після завершення введення
const fetchRepos = debounce((username) => {
  if (username.length > 0) {
    fetchRepositories(username);
  } else {
    console.log("Username is required");
  }
}, 500);

// Функція для отримання репозиторіїв
function fetchRepositories(username) {
  const repoList = document.getElementById("resultsContainer");
  repoList.innerHTML = ""; // Очищуємо попередні результати

  getRepositories(username).then((data) => {
    console.log(data); // Тут можна обробляти і відображати результати
    if (data.status) {
      alert(`Error fetching repositories: ${data.message}`);
    } else displayRepositories(data);
  });
}

// Відстежуємо введення користувача
document.getElementById("searchInput").addEventListener("input", (event) => {
  fetchRepos(event.target.value);
});

// Виведення репозиторіїв користувача
function displayRepositories(repositories) {
  const repoList = document.getElementById("resultsContainer");
  repoList.innerHTML = ""; // Очищуємо попередні результати

  if (repositories) {
    const amountRepositories = document.createElement("p");
    amountRepositories.textContent = `Current user has ${repositories.length} repositories`;
    repoList.appendChild(amountRepositories);

    repositories.slice(0, 5).forEach((repo) => {
      const listItem = document.createElement("li");
      listItem.textContent = repo.name;
      repoList.appendChild(listItem);
    });
  }
}
