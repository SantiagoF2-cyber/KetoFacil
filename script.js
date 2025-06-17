// Smooth scroll to sections
const links = document.querySelectorAll("nav a[href^='#']");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Alert when download is clicked
const downloads = document.querySelectorAll("#descargas a");

downloads.forEach(link => {
  link.addEventListener("click", () => {
    alert("📥 ¡Gracias por descargar un recurso keto!");
  });
});
