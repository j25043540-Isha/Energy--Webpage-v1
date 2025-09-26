// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight active link if not using server-side logic
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
