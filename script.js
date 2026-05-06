// ========== 1. 填写你的 GitHub 用户名 ==========
const GITHUB_USERNAME = "anshenggui"

// ========== 2. 暗黑模式 ==========
const themeBtn = document.getElementById("theme-toggle")
const html = document.documentElement

themeBtn.addEventListener("click", () => {
  html.classList.toggle("dark")
  if (html.classList.contains("dark")) {
    themeBtn.textContent = "☀️ 浅色模式"
  } else {
    themeBtn.textContent = "🌙 暗黑模式"
  }
})

// ========== 3. 自动加载 GitHub 项目 ==========
async function loadRepos() {
  const list = document.getElementById("repo-list")
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
    )
    const repos = await res.json()
    repos.forEach(repo => {
      const item = document.createElement("div")
      item.className = "repo-item"
      item.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "暂无描述"}</p>
        <a href="${repo.html_url}" target="_blank">查看代码</a>
        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank">在线演示</a>` : ""}
      `
      list.appendChild(item)
    })
  } catch (err) {
    list.innerHTML = "<p>加载项目失败</p>"
  }
}

loadRepos()