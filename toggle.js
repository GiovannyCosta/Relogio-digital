const toggle = document.getElementById("toggle-theme");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
// Salva a escolha do tema no localStorage
toggle.addEventListener("change", () => {
  localStorage.setItem("theme", toggle.checked ? "dark" : "light");
});

// Aplica o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    toggle.checked = true;
    document.body.classList.add("dark-mode");
  } else {
    toggle.checked = false;
    document.body.classList.remove("dark-mode");
  }
});
