// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
toggle?.addEventListener("click", () => {
  mobileNav.hidden = !mobileNav.hidden;
  toggle.textContent = mobileNav.hidden ? "☰" : "✕";
});
mobileNav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    toggle.textContent = "☰";
  })
);

// Newsletter signup (client-side only demo)
const form = document.getElementById("signup-form");
const ok = document.getElementById("signup-ok");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email.includes("@")) {
    ok.hidden = false;
    form.reset();
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
