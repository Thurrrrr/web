function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeBtn");
  const card = document.getElementById("themeCard");
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  body.classList.toggle("bg-light");
  body.classList.toggle("text-dark");
  if (body.classList.contains("bg-dark")) {
    btn.classList.remove("btn-dark");
    btn.classList.add("btn-outline-light");
    card.classList.remove("border-dark", "text-bg-light");
    card.classList.add("border-light", "text-bg-dark");
    btn.textContent = "Tema claro";
  } else {
    btn.classList.remove("btn-outline-light");
    btn.classList.add("btn-dark");
    card.classList.remove("border-light", "text-bg-dark");
    card.classList.add("border-dark", "text-bg-light");
    btn.textContent = "Tema escuro";
  }
}
