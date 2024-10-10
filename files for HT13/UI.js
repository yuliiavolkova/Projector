// UI.js
export class UI {
  constructor(githubApi) {
    this.githubApi = githubApi;
    this.searchForm = document.querySelector("#searchForm");
    this.searchInput = document.querySelector("#searchInput");
    this.resultsContainer = document.querySelector("#resultsContainer");
    this.loadingIndicator = document.querySelector("#loadingIndicator");
    this.typingTimer = null;
    this.typingDelay = 500; // 0.5 секунди затримка після завершення введення
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSearch();
    });

    // Виклик handleSearch із затримкою після завершення введення
    this.searchInput.addEventListener("input", () => {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(
        () => this.handleSearch(),
        this.typingDelay
      );
    });
  }

  async handleSearch() {
    const username = this.searchInput.value.trim();
    if (!username) {
      this.showError("Please enter a GitHub username!");
      return;
    }

    this.clearResult();
    this.setLoading(true);

    try {
      const user = await this.githubApi.getUser(username);
      const repos = await this.githubApi.getUserRepos(username); // Отримання репозиторіїв
      this.displayUserProfile(user, repos);
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(isLoading) {
    this.loadingIndicator.style.display = isLoading ? "block" : "none";
    this.searchInput.disabled = isLoading;
    const searchButton = this.searchForm.querySelector("button");
    if (searchButton) searchButton.disabled = isLoading;
  }

  showError(message) {
    const errorHTML = `
        <div class="error-container text-center py-5">
          <div class="text-danger mb-3">
            <i class="bi bi-exclamation-circle" style="font-size: 3rem;"></i>
          </div>
          <h3 class="h4 mb-3">Oops! Something went wrong</h3>
          <p class="text-muted mb-3">${message}</p>
        </div>
      `;
    this.resultsContainer.innerHTML = errorHTML;
  }

  clearResult() {
    this.resultsContainer.innerHTML = "";
  }

  displayUserProfile(user, repos) {
    const reposList = repos
      .map(
        (repo) =>
          `<li>${repo.name} - <a href="${repo.html_url}" target="_blank">View</a></li>`
      )
      .join("");

    const userHTML = `
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img src="${user.avatar_url}" class="avatar" alt="Profile avatar">
              <div>
                <h2 class="mb-0">${user.name || user.login}</h2>
                <p class="text-muted mb-0">@${user.login}</p>
              </div>
            </div>
            <a href="${user.html_url}" target="_blank" class="btn btn-primary">
              <i class="bi bi-box-arrow-up-right"></i> View Profile
            </a>
          </div>
          <div class="card-body">
            ${
              user.bio
                ? `<div class="alert alert-light" role="alert"><i class="bi bi-quote"></i> ${user.bio}</div>`
                : ""
            }
            
            <h5>Last 5 Repositories:</h5>
            <ul>${reposList}</ul>
            
            <div class="row mb-3">
              <div class="col-md-3 col-6 mb-2">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <h5 class="mb-1">${user.followers}</h5>
                    <small class="text-muted">Followers</small>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-2">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <h5 class="mb-1">${user.following}</h5>
                    <small class="text-muted">Following</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    this.resultsContainer.innerHTML = userHTML;
  }
}
