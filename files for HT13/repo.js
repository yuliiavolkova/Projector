const token = "My_token"; // відправила додатково

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
};

// Функція для отримання репозиторіїв
function getRepositories(username) {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    headers,
  }).then((response) => response.json());
}

export default getRepositories;
