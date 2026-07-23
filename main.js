// ---------------------------------------------------------------------------
// Content data
// Kept separate from markup so the repeated project/skill-chip structure
// only has to be written once (in the render functions below) instead of
// once per item in index.html.
// ---------------------------------------------------------------------------

const PROJECTS = [
  {
    title: 'SeismoAI',
    url: 'https://github.com/namneyugn21/SeismoAI.git',
    thumb: 'assets/SeismoAI.png',
    desc: 'SeismoAI is a predictive modeling tool that overcomes the delay in traditional earthquake impact assessment by estimating "Significance Scores" instantly using real-time geophysical data.',
    tags: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'XGBoost', 'PyTorch'],
  },
  {
    title: 'Hotelytics',
    url: 'https://github.com/namneyugn21/Hotelytics.git',
    thumb: 'https://github.com/namneyugn21/Hotelytics/raw/main/assets/home.png',
    desc: 'Helps visitors find the most suitable hotel in Vancouver based on surrounding amenities and generates a personalized walking tour to nearby attractions using real street network data.',
    tags: ['Python', 'Streamlit', 'GeoPandas', 'OSMNX', 'NetworkX', 'Folium'],
  },
  {
    title: 'Roaming',
    url: 'https://github.com/namneyugn21/Roaming.git',
    thumb: 'assets/Roaming.png',
    desc: 'A visual storytelling app that helps users capture raw, aesthetic moments and build a digital footprint — highlighting places and cityscapes instead of selfies.',
    tags: ['React Native', 'Expo', 'Firebase', 'MapLibre', 'Gemini'],
  },
  {
    title: 'BMP Image Editor',
    url: 'https://github.com/namneyugn21/BmpImageViewer.git',
    thumb: 'assets/BMP.png',
    desc: 'A Python GUI application for viewing and modifying BMP images — brightness, nearest-neighbor scaling, and RGB channel toggles in a Tkinter interface.',
    tags: ['Python', 'Tkinter'],
  },
  {
    title: 'Sort Visualizer',
    url: 'https://github.com/namneyugn21/SortVisualizer.git',
    thumb: 'https://github.com/namneyugn21/SortVisualizer/raw/main/src/assets/images/preview.png',
    desc: 'Visualize and understand sorting algorithms with real-time animations, customizable array sizes, gradient bars, and sound effects.',
    tags: ['React.js', 'CSS', 'TypeScript'],
  },
  {
    title: 'Realtorest',
    url: 'https://github.com/namneyugn21/Realtorest.git',
    thumb: 'https://github.com/namneyugn21/Realtorest/raw/main/Documentation/Screenshots/I2%20Home%20Page.png',
    desc: 'A full-stack website for hosting a personal realtor site — exploration and contact for visitors, listing management for admins, all ad-free.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
  },
  {
    title: 'Tokimon World',
    url: 'https://github.com/namneyugn21/TokimonWorld.git',
    thumb: 'assets/Tokimon World.png',
    desc: 'A Spring Boot application for managing Tokimon cards through a JavaFX interface, with full CRUD support over a RESTful API.',
    tags: ['Java', 'JavaFX', 'Spring Boot', 'REST API', 'JUnit'],
  },
];

const SKILLS = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Java', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-svg-download-png-2945017.png?f=webp' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/E9EDF3' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/E9EDF3' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Spring', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
];

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function renderProjects() {
  const list = document.getElementById('projects-list');

  list.innerHTML = PROJECTS.map((project, index) => `
    <a href="${project.url}" target="_blank" rel="noopener" class="project-row">
      <div class="flex items-baseline gap-6">
        <span class="project-num">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3 class="project-title">
            ${project.title}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"></path></svg>
          </h3>
          <p class="project-desc text-sm mt-2 mb-3">${project.desc}</p>
          <div class="flex gap-2 flex-wrap">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="project-thumb hidden sm:block">
        <img src="${project.thumb}" alt="${project.title}">
      </div>
    </a>
  `).join('');
}

function renderSkillsBento() {
  const container = document.getElementById('skills-bento');

  container.innerHTML = SKILLS.map(({ name, icon }) => `
    <div class="skill-tile">
      <img src="${icon}" alt="">
      <span>${name}</span>
    </div>
  `).join('');
}

// ---------------------------------------------------------------------------
// Theme toggle
// Initial theme is set inline in <head> to avoid a flash of the wrong theme.
// ---------------------------------------------------------------------------

function initThemeToggle() {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
}

// ---------------------------------------------------------------------------
// Full-screen nav overlay
// ---------------------------------------------------------------------------

function initNavOverlay() {
  const menuTrigger = document.getElementById('menu-trigger');
  const navOverlay = document.getElementById('nav-overlay');
  const overlayClose = document.getElementById('nav-overlay-close');

  const closeOverlay = () => {
    navOverlay.classList.remove('open');
    menuTrigger.classList.remove('active');
    menuTrigger.setAttribute('aria-expanded', 'false');
  };

  menuTrigger.addEventListener('click', () => {
    const isOpen = navOverlay.classList.toggle('open');
    menuTrigger.classList.toggle('active', isOpen);
    menuTrigger.setAttribute('aria-expanded', String(isOpen));
  });

  overlayClose.addEventListener('click', closeOverlay);

  document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', closeOverlay);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
  });
}

// ---------------------------------------------------------------------------
// Scroll-triggered reveal animations
// ---------------------------------------------------------------------------

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-fadeInUp').forEach(element => observer.observe(element));
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

document.getElementById('current-year').textContent = new Date().getFullYear();

renderProjects();
renderSkillsBento();
initThemeToggle();
initNavOverlay();
initScrollReveal();
