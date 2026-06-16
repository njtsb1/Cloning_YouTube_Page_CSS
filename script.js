const i18n = {
  "en-US": {
    brand: "YouTube Clone",
    searchLabel: "Search",
    heroTitle: "Featured Video",
    channel: "DIO - Digital Innovation One",
    description: "Documentary used for educational cloning exercise.",
    more: "More Videos",
    home: "Home",
    explore: "Explore",
    subscriptions: "Subscriptions",
    library: "Library"
  },
  "pt-BR": {
    brand: "Clone do YouTube",
    searchLabel: "Pesquisar",
    heroTitle: "Vídeo em Destaque",
    channel: "DIO - Digital Innovation One",
    description: "Documentário usado para exercício educativo de clonagem.",
    more: "Mais Vídeos",
    home: "Início",
    explore: "Explorar",
    subscriptions: "Inscrições",
    library: "Biblioteca"
  },
  "es-ES": {
    brand: "Clon de YouTube",
    searchLabel: "Buscar",
    heroTitle: "Vídeo Destacado",
    channel: "DIO - Digital Innovation One",
    description: "Documental usado para ejercicio educativo de clonación.",
    more: "Más Videos",
    home: "Inicio",
    explore: "Explorar",
    subscriptions: "Suscripciones",
    library: "Biblioteca"
  }
};

const defaultLocale = "en-US";
const themeKey = "ytclone_theme";
const langKey = "ytclone_lang";

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const langSelect = document.getElementById("lang");
  const yearSpan = document.getElementById("year");

  // Initialize year
  yearSpan.textContent = new Date().getFullYear();

  // Load saved preferences
  const savedTheme = localStorage.getItem(themeKey) || "dark";
  const savedLang = localStorage.getItem(langKey) || defaultLocale;

  // Apply theme and language
  applyTheme(savedTheme);
  langSelect.value = savedLang;
  applyLanguage(savedLang);

  // Theme toggle click
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(themeKey, next);
    themeToggle.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
  });

  // Language change
  langSelect.addEventListener("change", (e) => {
    const locale = e.target.value;
    applyLanguage(locale);
    localStorage.setItem(langKey, locale);
  });

  // Keyboard accessibility: toggle theme with T
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "t" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      themeToggle.click();
    }
  });

  // Generate sample grid
  generateSampleGrid();

  // Search button basic behavior (no backend)
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  searchBtn.addEventListener("click", () => {
    const q = searchInput.value.trim();
    if (!q) {
      searchInput.focus();
      return;
    }
    // For demo: filter cards by title
    filterGrid(q);
  });

  // Enter key on search
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchBtn.click();
  });
});

// Apply theme function
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("themeIcon").innerHTML = moonSVG();
    document.getElementById("themeToggle").setAttribute("aria-pressed", "true");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("themeIcon").innerHTML = sunSVG();
    document.getElementById("themeToggle").setAttribute("aria-pressed", "false");
  }
}

// Apply language function
function applyLanguage(locale) {
  const strings = i18n[locale] || i18n["en-US"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) el.textContent = strings[key];
  });
  // Update placeholder for search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.setAttribute("placeholder", strings.searchLabel || "Search");
  // Update document lang attribute
  document.documentElement.lang = locale;
}

// Generate sample cards for grid
function generateSampleGrid() {
  const grid = document.getElementById("videoGrid");
  const sample = [
    {title: "Startups: Como começar", channel: "DIO", meta: "1.2M views"},
    {title: "Design de Produto", channel: "DIO", meta: "540K views"},
    {title: "React para iniciantes", channel: "DIO", meta: "2.1M views"},
    {title: "Carreira em TI", channel: "DIO", meta: "320K views"},
    {title: "Metodologias Ágeis", channel: "DIO", meta: "410K views"},
    {title: "Cloud e DevOps", channel: "DIO", meta: "780K views"}
  ];

  grid.innerHTML = "";
  sample.forEach((s, i) => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <div class="thumb" role="img" aria-label="${escapeHtml(s.title)} thumbnail"></div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(s.title)}</h3>
        <div class="card-meta">${escapeHtml(s.channel)} • ${escapeHtml(s.meta)}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Simple filter for demo
function filterGrid(query) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(q)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Small helper to escape HTML in generated content
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function(m) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

// SVG icons
function moonSVG(){
  return `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
}
function sunSVG(){
  return `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm7.03-2.03l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM20 11v2h3v-2h-3zM4.22 19.78l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM12 6a6 6 0 100 12 6 6 0 000-12z"/></svg>`;
}
