const toggleBtn = document.querySelector(".toggle-theme");
const body = document.body;



if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") body.classList.add("dark");

  const tagline = document.querySelector(".tagline");
  const text = "MERN STACK DEVELOPER";
  let i = 0;
  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i++);
      setTimeout(type, 100);
    }
  }
  type();
});

// Navigation
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  });
});
