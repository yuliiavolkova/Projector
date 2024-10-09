// index.js
import { GitHubAPI } from "./GitHubAPI.js";
import { UI } from "./UI.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = "TOKEN"; // Відправила додатково
  const githubApi = new GitHubAPI(token);
  new UI(githubApi);
});
