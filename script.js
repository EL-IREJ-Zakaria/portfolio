
(() => {
  const html = document.documentElement;

  const setTheme = (theme) => {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const icon = document.querySelector("#themeToggle i");
    if (icon) {
      icon.className = theme === "dark" ? "bi bi-moon-stars" : "bi bi-sun";
    }
  };

  const initTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      return;
    }
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
    setTheme(prefersLight ? "light" : "dark");
  };

  const initReveal = () => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (!elements.length) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
  };

  const initSmoothScroll = () => {
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Collapse navbar on mobile after click
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar?.classList.contains("show")) {
        const bsCollapse = bootstrap?.Collapse?.getOrCreateInstance(navbar);
        bsCollapse?.hide();
      }
    });
  };

  const initActiveNav = () => {
    const navLinks = Array.from(document.querySelectorAll('.navbar a.nav-link[href^="#"]'));
    const sections = navLinks
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if (!sections.length) return;

    const setActive = (id) => {
      navLinks.forEach((a) => {
        const href = a.getAttribute("href");
        a.classList.toggle("active", href === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.05, 0.1, 0.2] }
    );

    sections.forEach((s) => observer.observe(s));
  };

  const initContactForm = () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const emailLink = document.querySelector('a[href^="mailto:"]');
    const toEmail = emailLink?.getAttribute("href")?.replace(/^mailto:/, "") || "your.email@example.com";

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message");

      const fields = [name, email, message];
      fields.forEach((f) => f.classList.remove("is-invalid"));

      let ok = true;
      if (!name.value.trim()) {
        name.classList.add("is-invalid");
        ok = false;
      }
      if (!email.value.trim() || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value.trim())) {
        email.classList.add("is-invalid");
        ok = false;
      }
      if (!message.value.trim()) {
        message.classList.add("is-invalid");
        ok = false;
      }
      if (!ok) return;

      const subject = encodeURIComponent(`Portfolio contact — ${name.value.trim()}`);
      const body = encodeURIComponent(`Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`);
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    });
  };

  const initYear = () => {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  };

  const initGSAPHero = () => {
    if (!window.gsap) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    // Keep this subtle: small stagger on load only.
    gsap.fromTo(
      ".hero-section .reveal",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.06, delay: 0.05 }
    );
  };

  const initThemeToggle = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(current === "dark" ? "light" : "dark");
    });
  };

  initTheme();
  initThemeToggle();
  initSmoothScroll();
  initReveal();
  initActiveNav();
  initContactForm();
  initYear();
  initGSAPHero();
})();

