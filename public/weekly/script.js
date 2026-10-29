const tabList = document.querySelector("#week-tabs");
const issueRoot = document.querySelector("#issue-panel");
const themeToggle = document.querySelector(".theme-toggle");
const deviceTheme = matchMedia("(prefers-color-scheme: dark)");
const deepdive = document.querySelector(".deepdive");
document.addEventListener("pointerdown", event => {
  if (!deepdive.contains(event.target)) deepdive.open = false;
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && deepdive.open) {
    deepdive.open = false;
    deepdive.querySelector("summary").focus();
  }
});
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#171717" : "#ffffff";
}
applyTheme(document.documentElement.dataset.theme);
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("aman-weekly-theme", next); } catch {}
});
deviceTheme.addEventListener("change", event => {
  try { if (localStorage.getItem("aman-weekly-theme")) return; } catch {}
  applyTheme(event.matches ? "dark" : "light");
});

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function relatedLinksTemplate(related = []) {
  if (!related.length) return "";

  return `
    <details class="related-links">
      <summary>Linked reads</summary>
      <ul>
        ${related
          .map(
            (item) => `
              <li>
                <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
                  ${escapeHtml(item.label)}
                </a>
              </li>
            `
          )
          .join("")}
      </ul>
    </details>
  `;
}

function sourceLabel(entry) {
  if (entry.handle) return entry.handle;
  if (entry.source) return entry.source;
  const source = new URL(entry.url);
  if (source.hostname === "x.com") return `@${source.pathname.split("/")[1]}`;
  return source.hostname.replace(/^www\./, "");
}

function entryTemplate(entry) {
  const themes = [...new Set(entry.themes || [])].filter(theme => readingThemes.includes(theme)).slice(0, 2);
  return `
    <article class="entry">
        <h2>${escapeHtml(entry.title)}</h2>
        <p class="takeaway">${escapeHtml(entry.summary)}</p>
        <p class="application"><strong>For you:</strong> ${escapeHtml(entry.application)}</p>
        <div class="entry-sources">
          <p class="entry-themes">${themes.map(theme => `<span>#${escapeHtml(theme)}</span>`).join(" ")}</p>
          <a class="source-link" href="${escapeHtml(entry.url)}" target="_blank" rel="noreferrer">Source · ${escapeHtml(sourceLabel(entry))}</a>
          ${relatedLinksTemplate(entry.related)}
        </div>
    </article>
  `;
}

function renderIssue(issue) {
  document.title = `${issue.shortLabel} · Aman's Weekly`;
  issueRoot.innerHTML = `
    <section class="issue-intro" aria-labelledby="issue-title">
      <h1 id="issue-title">${escapeHtml(issue.dateRange)}</h1>
      <div class="issue-meta">
        <span>${issue.entries.length} ${issue.entries.length === 1 ? "read" : "reads"}</span>
        <span>${escapeHtml(issue.updated)}</span>
      </div>
    </section>

    <section class="entries" aria-label="This week's reading">
      ${issue.entries.map(entryTemplate).join("")}
    </section>
  `;
}

function selectIssue(issueId, updateHash = true) {
  const issue = weeklyIssues.find((candidate) => candidate.id === issueId) || weeklyIssues[0];
  renderIssue(issue);

  document.querySelectorAll('[role="tab"]').forEach((tab) => {
    const selected = tab.dataset.issue === issue.id;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected) issueRoot.setAttribute("aria-labelledby", tab.id);
  });

  if (updateHash) {
    history.replaceState(null, "", `#week-${issue.id}`);
  }
  document.querySelector('[role="tab"][aria-selected="true"]').scrollIntoView({ block: "nearest", inline: "nearest" });
}

weeklyIssues.forEach((issue, index) => {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.role = "tab";
  tab.id = `week-tab-${issue.id}`;
  tab.dataset.issue = issue.id;
  tab.textContent = issue.shortLabel;
  tab.setAttribute("aria-controls", "issue-panel");
  tab.setAttribute("aria-selected", String(index === 0));
  tab.tabIndex = index === 0 ? 0 : -1;
  tab.addEventListener("click", () => selectIssue(issue.id));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? weeklyIssues.length - 1 : (index + direction + weeklyIssues.length) % weeklyIssues.length;
    const nextIssue = weeklyIssues[nextIndex];
    selectIssue(nextIssue.id);
    document.querySelector(`[data-issue="${nextIssue.id}"]`).focus();
  });
  tabList.append(tab);
});

const requestedIssue = location.hash.replace("#week-", "");
selectIssue(requestedIssue, false);

document.querySelector(".wordmark").addEventListener("click", (event) => {
  event.preventDefault();
  selectIssue(weeklyIssues[0].id);
  window.scrollTo({ top: 0, behavior: "instant" });
});

document.querySelector("#back-to-top").addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
});
