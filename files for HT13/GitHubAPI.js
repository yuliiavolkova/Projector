// GitHubAPI.js
export class GitHubAPI {
  constructor(token) {
    this.baseURL = "https://api.github.com/users";
    this.token = token;
  }

  async getUser(username) {
    try {
      const response = await axios.get(`${this.baseURL}/${username}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getUserRepos(username) {
    try {
      const response = await axios.get(`${this.baseURL}/${username}/repos`, {
        headers: { Authorization: `Bearer ${this.token}` },
        params: { per_page: 5, sort: "updated" }, // Отримуємо останні 5 оновлених репозиторіїв
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          throw new Error("User not found.");
        case 403:
          throw new Error("API rate limit exceeded.");
        default:
          throw new Error(`Server error: ${error.response.status}`);
      }
    } else {
      throw new Error("Something went wrong");
    }
  }
}
