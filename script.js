const navLinks = [...document.querySelectorAll(".section-nav a")];
const sections = [...document.querySelectorAll("section.panel")];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
);

sections.forEach((section) => observer.observe(section));
document.getElementById("year").textContent = new Date().getFullYear();
