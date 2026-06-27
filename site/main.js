const state = {
  lang: localStorage.getItem("miantuan-pod-lang") || "en",
  messages: {},
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

async function readJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  return response.json();
}

function applyMessages() {
  $$("[data-i18n]").forEach((node) => {
    node.textContent = state.messages[node.dataset.i18n] || node.textContent;
  });
  $$(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
  document.documentElement.lang = state.lang;
}

function renderSkills() {
  const skills = $("#skills");
  const template = $("#skill-template");
  skills.replaceChildren();
  state.messages.skills.forEach((skill) => {
    const card = template.content.cloneNode(true);
    $("h2", card).textContent = skill.name;
    $(".purpose", card).textContent = skill.purpose;
    $(".deps", card).textContent = `${state.messages.dependencies}: ${skill.dependencies}`;
    skills.append(card);
  });
}

async function load() {
  state.messages = await readJson(`./data/i18n/${state.lang}.json`);
  applyMessages();
  renderSkills();
}

$$(".lang-button").forEach((button) => {
  button.addEventListener("click", async () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("miantuan-pod-lang", state.lang);
    await load();
  });
});

load().catch((error) => {
  $("#skills").textContent = error.message;
});
