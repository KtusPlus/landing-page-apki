document.querySelectorAll('a[href^="#"]').forEach(link =>
{
    link.addEventListener("click", function (e)
    {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

function setTheme(theme) 
{
  body.className = theme;
  localStorage.setItem("theme", theme);
}

toggleBtn.addEventListener("click", () => 
{
  const newTheme = body.classList.contains("light") ? "dark" : "light";
  setTheme(newTheme);
});

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => 
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

reveals.forEach(section =>
{
    observer.observe(section);
});
