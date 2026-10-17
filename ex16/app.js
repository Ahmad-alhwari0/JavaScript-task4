const theme = document.querySelector("#theme");
const language = document.querySelector("#language");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("theme", theme.value);
  localStorage.setItem("language", language.value);
});

theme.value = localStorage.getItem("theme") || "light";
language.value = localStorage.getItem("language") || "en";

function applyTheme() {
  document.body.style.backgroundColor =
    theme.value === "dark" ? "#222" : "#fff";

  document.body.style.color = theme.value === "dark" ? "#fff" : "#000";
}

theme.addEventListener("change", applyTheme);

applyTheme();
