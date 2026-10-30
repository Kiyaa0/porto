/**
 * ==========================================================================
 * PERSONA 3 RELOAD — CORE APP ENGINE (WAL-PERSONA3 ARCHITECTURE SPECIFICATION)
 * Meniru persis arsitektur menu, transisi shutter, navigasi resume-shell,
 * about-shell, dan socials bar dari wal-persona3.vercel.app
 * ==========================================================================
 */
(function () {
  'use strict';

  // Audio Elements
  const audioBgm = document.getElementById('audioBgm');
  const audioHover = document.getElementById('audioHover');
  const audioSelect = document.getElementById('audioSelect');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const globalBackBtn = document.getElementById('globalBackBtn');

  let bgmPlaying = false;
  function playAudio(audio) {
    if (!audio) return;
    try {
      audio.currentTime = 0;
      audio.volume = 0.6;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  function toggleBgm() {
    if (!audioBgm) return;
    if (bgmPlaying) {
      audioBgm.pause();
      bgmPlaying = false;
      audioToggleBtn.textContent = '🎵 BGM: OFF';
    } else {
      audioBgm.volume = 0.5;
      audioBgm.play().then(() => {
        bgmPlaying = true;
        audioToggleBtn.textContent = '🔊 BGM: ON';
      }).catch(() => {});
    }
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', toggleBgm);
  }

  // ==========================================================================
  // DATA SPECIFICATION (MAIN MENU & RESUME DATASETS)
  // ==========================================================================
  const menuItems = [
    { id: 'about', label: 'ABOUT ME', page: 'about', fontSize: 62, offsetX: 0, offsetY: 0, skew: -6, skewY: 10 },
    { id: 'resume', label: 'RESUME', page: 'resume', fontSize: 54, offsetX: 20, offsetY: 8, skew: -11, skewY: -10 },
    { id: 'socials', label: 'SOCIALS', page: 'socials', fontSize: 58, offsetX: 16, offsetY: 8, skew: -3, skewY: 5 }
  ];

  function calcPolygon(w, h) {
    return `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`;
  }

  // WAL-PERSONA3 RESUME DATASET SPECIFICATION
  const resumeSections = [
    {
      id: 'events',
      title: 'Event List',
      subtitle: 'Timeline With Dates',
      helper: 'Event timeline is unified here with dates and full details.',
      rows: [
        {
          title: 'STT Wastukancana Purwakarta',
          meta: 'Active Student (Kelas Pagi B)',
          description: 'Menempuh pendidikan sarjana S1 Teknik Informatika. Fokus pada pemrograman web, struktur data & algoritma, matematika diskrit, dan perancangan basis data.'
        },
        {
          title: 'CalcKu Web Application Launch',
          meta: 'Vercel Deployment (2024)',
          description: 'Merilis aplikasi web kalkulus otomatis berbasis Python Flask dan SymPy untuk menyelesaikan turunan dan integral fungsi matematika secara visual.',
          href: 'https://calcku.vercel.app'
        },
        {
          title: 'Open Source Development & GitHub',
          meta: 'Ongoing Contributor',
          description: 'Aktif mengembangkan repositori publik di GitHub (@Kiyaa0), mencakup web app game catalog, CLI downloader, dan tugas praktikum pemrograman terstruktur.',
          href: 'https://github.com/Kiyaa0'
        }
      ]
    },
    {
      id: 'skills',
      title: 'Skills',
      subtitle: 'Technical And Creative Stack',
      helper: 'Technical capabilities and development tools applied in practical workflows.',
      rows: [
        {
          title: 'Laravel (PHP)',
          meta: 'Backend Framework',
          description: 'Membangun aplikasi web berarsitektur MVC, RESTful API endpoints, migrasi database, autentikasi aman, dan templating Blade.'
        },
        {
          title: 'Flask (Python)',
          meta: 'Micro Framework',
          description: 'Mengembangkan backend kalkulasi cepat, komputasi matematika dengan SymPy, dan microservices API ringan.'
        },
        {
          title: 'HTML5, Modern CSS & JavaScript',
          meta: 'Frontend Engineering',
          description: 'Menyusun antarmuka responsif performan tinggi, manipulasi DOM interaktif, efek estetika game-style, dan CSS animation/clip-path.'
        },
        {
          title: 'MySQL & Database Design',
          meta: 'Data Architecture',
          description: 'Merancang skema relasional, optimasi kueri SQL, indexing, serta integritas data relasional.'
        },
        {
          title: 'Git & GitHub Workflow',
          meta: 'Version Control',
          description: 'Kolaborasi kode terstruktur, branching, commits convention, deployment ke platform modern (Vercel & cloud hosting).'
        },
        {
          title: 'Figma',
          meta: 'UI/UX Design',
          description: 'Membuat wireframe, desain layout komponen visual, prototipe interaktif, dan panduan desain sebelum tahap implementasi kode.'
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Open Project Links',
      helper: 'Select a project row and press Enter (or click OPEN) to visit the live app or source code.',
      rows: [
        {
          title: 'CalcKu (Kalkulator Kalkulus Web)',
          meta: 'Live Demo on Vercel',
          description: 'Aplikasi web interaktif penyelesaian turunan & integral otomatis dengan Python Flask & SymPy. Antarmuka bersih, cepat, dan mudah dipahami.',
          href: 'https://calcku.vercel.app'
        },
        {
          title: 'GamePedia',
          meta: 'GitHub Repository',
          description: 'Aplikasi web katalog & pencarian game interaktif dengan konsumsi data dari RAWG API serta pengelolaan informasi game.',
          href: 'https://github.com/Kiyaa0/GamePedia'
        },
        {
          title: 'elaina-downloader',
          meta: 'GitHub Repository',
          description: 'Proyek otomatisasi pengunduhan media/file berbasis CLI dan otomasi Python dengan fokus pada performa serta keandalan.',
          href: 'https://github.com/Kiyaa0/elaina-downloader'
        },
        {
          title: 'uts-pwl',
          meta: 'GitHub Repository',
          description: 'Proyek evaluasi praktikum pemrograman web dinamis berstruktur rapi dengan PHP dan integrasi basis data.',
          href: 'https://github.com/Kiyaa0/uts-pwl'
        }
      ]
    }
  ];

  // SOCIALS DATASET (WAL-PERSONA3 SC-ROOT HORIZONTAL BARS)
  const socialsList = [
    {
      title: 'GitHub',
      subtitle: 'Open Source Repositories & Contributions',
      actionLabel: 'VISIT @Kiyaa0',
      url: 'https://github.com/Kiyaa0'
    },
    {
      title: 'CalcKu Web App',
      subtitle: 'Live Production on Vercel',
      actionLabel: 'OPEN APP',
      url: 'https://calcku.vercel.app'
    },
    {
      title: 'Campus Profile',
      subtitle: 'STT Wastukancana Purwakarta — Teknik Informatika',
      actionLabel: 'INFORMATIKA',
      url: 'https://github.com/Kiyaa0'
    }
  ];

  // State Management
  let activeMenuIndex = 0;
  let activeSectionIndex = 0;
  let activeRowIndex = 0;
  let activeSocialIndex = 0;
  let currentScreen = 'menu'; // 'menu', 'resume', 'about', 'socials'
  let isTransitioning = false;

  // DOM Elements
  const mainMenuNav = document.getElementById('mainMenuNav');
  const screenMenu = document.getElementById('screen-menu');
  const screenResume = document.getElementById('screen-resume');
  const screenAbout = document.getElementById('screen-about');
  const screenSocials = document.getElementById('screen-socials');
  const p3Transition = document.getElementById('p3Transition');

  const resumeNavList = document.getElementById('resumeNavList');
  const resumePanelTitle = document.getElementById('resumePanelTitle');
  const resumePanelSubtitle = document.getElementById('resumePanelSubtitle');
  const resumeRows = document.getElementById('resumeRows');
  const resumeDetailText = document.getElementById('resumeDetailText');
  const resumeHelper = document.getElementById('resumeHelper');

  const socialsBarsContainer = document.getElementById('socialsBarsContainer');
  const aboutGoSocialsBtn = document.getElementById('aboutGoSocialsBtn');
  const aboutPanel = document.getElementById('aboutPanel');

  // ==========================================================================
  // RENDER MAIN MENU (EXACT WAL-PERSONA3 ROTATING ROWS)
  // ==========================================================================
  function renderMainMenu() {
    mainMenuNav.innerHTML = '';

    menuItems.forEach((item, n) => {
      const isActive = activeMenuIndex === n;
      const dist = Math.abs(n - activeMenuIndex);
      const opacity = isActive ? 1 : Math.max(0.5, 1 - dist * 0.2);
      const clipWidth = item.label.length * item.fontSize * 0.62 + 80;
      const clipHeight = item.fontSize * 0.94;
      const clipPathVal = calcPolygon(clipWidth, clipHeight);

      const a = document.createElement('a');
      a.href = '#';
      a.className = `p3-row ${isActive ? 'active' : ''} mounted`;
      a.style.marginRight = `${item.offsetX}px`;
      a.style.marginTop = `${item.offsetY}px`;
      a.style.transitionDelay = `${n * 80}ms`;

      a.innerHTML = `
        <div class="p3-glow"></div>
        <div class="p3-skew-wrap" style="transform: skewX(${item.skew}deg) skewY(${item.skewY}deg);">
          <div class="p3-shadow-tri ${isActive ? 'pop' : ''}" style="width: ${clipWidth}px; height: ${clipHeight}px; clip-path: ${clipPathVal};"></div>
          <div class="p3-highlight" style="width: ${clipWidth}px; height: ${clipHeight}px; clip-path: ${clipPathVal}; transform: translateY(-50%) scaleX(${isActive ? 1 : 0});"></div>
          <div class="p3-label-wrap" style="opacity: ${opacity};">
            <span class="p3-label-base p3-label-dark" style="font-size: ${item.fontSize}px;">${item.label}</span>
            <span class="p3-label-base p3-label-bright" style="font-size: ${item.fontSize}px; clip-path: ${clipPathVal};">${item.label}</span>
          </div>
        </div>
      `;

      a.addEventListener('mouseenter', () => {
        if (activeMenuIndex !== n) {
          playAudio(audioHover);
          activeMenuIndex = n;
          renderMainMenu();
        }
      });

      a.addEventListener('click', (e) => {
        e.preventDefault();
        selectMenuItem(n);
      });

      mainMenuNav.appendChild(a);
    });
  }

  function selectMenuItem(index) {
    const item = menuItems[index];
    playAudio(audioSelect);
    transitionToScreen(item.page);
  }

  // ==========================================================================
  // RENDER RESUME SCREEN (WAL-PERSONA3 EXACT GRID LAYOUT)
  // ==========================================================================
  function renderResumeScreen() {
    // 1. Render Left Sidebar Navigation Cards
    resumeNavList.innerHTML = '';
    resumeSections.forEach((section, sIdx) => {
      const isActive = activeSectionIndex === sIdx;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `resume-nav-card ${isActive ? 'active' : ''}`;
      btn.innerHTML = `
        <div class="resume-nav-card-title">${section.title}</div>
        <div class="resume-nav-card-subtitle">${section.subtitle}</div>
      `;

      btn.addEventListener('mouseenter', () => {
        if (activeSectionIndex !== sIdx) {
          playAudio(audioHover);
          activeSectionIndex = sIdx;
          activeRowIndex = 0;
          renderResumeScreen();
        }
      });

      btn.addEventListener('click', () => {
        playAudio(audioSelect);
        activeSectionIndex = sIdx;
        activeRowIndex = 0;
        renderResumeScreen();
      });

      resumeNavList.appendChild(btn);
    });

    // 2. Render Right Panel for Current Section
    const curSection = resumeSections[activeSectionIndex];
    resumePanelTitle.textContent = curSection.title;
    resumePanelSubtitle.textContent = curSection.subtitle;
    resumeHelper.textContent = curSection.helper;

    resumeRows.innerHTML = '';
    curSection.rows.forEach((row, rIdx) => {
      const isFocused = activeRowIndex === rIdx;
      const rowBtn = document.createElement('button');
      rowBtn.type = 'button';
      rowBtn.className = `resume-row ${isFocused ? 'focused' : ''}`;

      rowBtn.innerHTML = `
        <div class="resume-row-main">
          <div class="resume-row-title">${row.title}</div>
          <div class="resume-row-meta">${row.meta}</div>
        </div>
        ${row.href ? '<span class="resume-row-cta">OPEN ↗</span>' : ''}
      `;

      rowBtn.addEventListener('mouseenter', () => {
        if (activeRowIndex !== rIdx) {
          playAudio(audioHover);
          activeRowIndex = rIdx;
          renderResumeRowsOnly();
        }
      });

      rowBtn.addEventListener('click', () => {
        activeRowIndex = rIdx;
        renderResumeRowsOnly();
        if (row.href) {
          playAudio(audioSelect);
          window.open(row.href, '_blank', 'noopener,noreferrer');
        }
      });

      resumeRows.appendChild(rowBtn);
    });

    // Update Detail Text Box
    const curRow = curSection.rows[activeRowIndex] || curSection.rows[0];
    resumeDetailText.textContent = curRow ? curRow.description : 'No details available.';
  }

  function renderResumeRowsOnly() {
    const curSection = resumeSections[activeSectionIndex];
    const rowElements = resumeRows.querySelectorAll('.resume-row');
    rowElements.forEach((el, idx) => {
      if (idx === activeRowIndex) {
        el.classList.add('focused');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        el.classList.remove('focused');
      }
    });

    const curRow = curSection.rows[activeRowIndex] || curSection.rows[0];
    resumeDetailText.textContent = curRow ? curRow.description : 'No details available.';
  }

  // ==========================================================================
  // RENDER SOCIALS SCREEN (WAL-PERSONA3 SC-ROOT BARS)
  // ==========================================================================
  function renderSocialsScreen() {
    socialsBarsContainer.innerHTML = '';

    socialsList.forEach((soc, idx) => {
      const isActive = activeSocialIndex === idx;
      const outer = document.createElement('div');
      outer.className = `sc-bar-outer ${isActive ? 'active' : ''} mounted`;

      outer.innerHTML = `
        <div class="sc-bar-red"></div>
        <div class="sc-bar">
          <div class="sc-bar-info">
            <span class="sc-bar-name">${soc.title}</span>
            <span class="sc-bar-sub">${soc.subtitle}</span>
          </div>
          <span class="sc-bar-action">${soc.actionLabel}</span>
        </div>
      `;

      outer.addEventListener('mouseenter', () => {
        if (activeSocialIndex !== idx) {
          playAudio(audioHover);
          activeSocialIndex = idx;
          renderSocialsBarsOnly();
        }
      });

      outer.addEventListener('click', () => {
        playAudio(audioSelect);
        window.open(soc.url, '_blank', 'noopener,noreferrer');
      });

      socialsBarsContainer.appendChild(outer);
    });
  }

  function renderSocialsBarsOnly() {
    const outerElements = socialsBarsContainer.querySelectorAll('.sc-bar-outer');
    outerElements.forEach((el, idx) => {
      if (idx === activeSocialIndex) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // SCREEN TRANSITIONS (P3R TRIPLE-BLADE SHUTTER)
  // ==========================================================================
  function transitionToScreen(targetScreen) {
    if (isTransitioning || targetScreen === currentScreen) return;
    isTransitioning = true;

    p3Transition.classList.add('animating');

    setTimeout(() => {
      screenMenu.classList.remove('active');
      screenResume.classList.remove('active');
      screenAbout.classList.remove('active');
      screenSocials.classList.remove('active');

      if (targetScreen === 'menu') {
        screenMenu.classList.add('active');
        globalBackBtn.classList.remove('show');
        renderMainMenu();
      } else if (targetScreen === 'resume') {
        screenResume.classList.add('active');
        globalBackBtn.classList.add('show');
        renderResumeScreen();
      } else if (targetScreen === 'about') {
        screenAbout.classList.add('active');
        globalBackBtn.classList.add('show');
      } else if (targetScreen === 'socials') {
        screenSocials.classList.add('active');
        globalBackBtn.classList.add('show');
        renderSocialsScreen();
      }

      currentScreen = targetScreen;
    }, 250);

    setTimeout(() => {
      p3Transition.classList.remove('animating');
      isTransitioning = false;
    }, 520);
  }

  // Global Back Button Listener
  if (globalBackBtn) {
    globalBackBtn.addEventListener('click', () => {
      playAudio(audioSelect);
      transitionToScreen('menu');
    });
  }

  // About Screen Secondary Action
  if (aboutGoSocialsBtn) {
    aboutGoSocialsBtn.addEventListener('click', () => {
      playAudio(audioSelect);
      transitionToScreen('socials');
    });
  }

  // ==========================================================================
  // KEYBOARD & CONTROLLER HANDLER (EXACT WAL-PERSONA3 SPECIFICATION)
  // ==========================================================================
  function handleKeyDown(e) {
    if (isTransitioning || e.ctrlKey || e.altKey || e.metaKey) return;
    const key = e.key.toLowerCase();

    // 1. MAIN MENU
    if (currentScreen === 'menu') {
      if (e.key === 'ArrowUp' || key === 'w' || key === 'z') {
        e.preventDefault();
        playAudio(audioHover);
        activeMenuIndex = (activeMenuIndex - 1 + menuItems.length) % menuItems.length;
        renderMainMenu();
      } else if (e.key === 'ArrowDown' || key === 's') {
        e.preventDefault();
        playAudio(audioHover);
        activeMenuIndex = (activeMenuIndex + 1) % menuItems.length;
        renderMainMenu();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectMenuItem(activeMenuIndex);
      }
    }

    // 2. RESUME SCREEN
    else if (currentScreen === 'resume') {
      const curSection = resumeSections[activeSectionIndex];

      if (e.key === 'ArrowUp' || key === 'w' || key === 'z') {
        e.preventDefault();
        playAudio(audioHover);
        activeSectionIndex = Math.max(0, activeSectionIndex - 1);
        activeRowIndex = 0;
        renderResumeScreen();
      } else if (e.key === 'ArrowDown' || key === 's') {
        e.preventDefault();
        playAudio(audioHover);
        activeSectionIndex = Math.min(resumeSections.length - 1, activeSectionIndex + 1);
        activeRowIndex = 0;
        renderResumeScreen();
      } else if (e.key === 'ArrowLeft' || key === 'a' || key === 'q') {
        e.preventDefault();
        playAudio(audioHover);
        activeRowIndex = Math.max(0, activeRowIndex - 1);
        renderResumeRowsOnly();
      } else if (e.key === 'ArrowRight' || key === 'd') {
        e.preventDefault();
        playAudio(audioHover);
        activeRowIndex = Math.min(curSection.rows.length - 1, activeRowIndex + 1);
        renderResumeRowsOnly();
      } else if (e.key === 'Enter' || e.key === ' ') {
        const curRow = curSection.rows[activeRowIndex];
        if (curRow && curRow.href) {
          e.preventDefault();
          playAudio(audioSelect);
          window.open(curRow.href, '_blank', 'noopener,noreferrer');
        }
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        playAudio(audioSelect);
        transitionToScreen('menu');
      }
    }

    // 3. ABOUT ME SCREEN
    else if (currentScreen === 'about') {
      if (e.key === 'ArrowUp' || key === 'w' || key === 'z') {
        e.preventDefault();
        playAudio(audioHover);
        if (aboutPanel) aboutPanel.scrollBy({ top: -100, behavior: 'smooth' });
      } else if (e.key === 'ArrowDown' || key === 's') {
        e.preventDefault();
        playAudio(audioHover);
        if (aboutPanel) aboutPanel.scrollBy({ top: 100, behavior: 'smooth' });
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playAudio(audioSelect);
        window.open('https://github.com/Kiyaa0', '_blank', 'noopener,noreferrer');
      } else if (key === 'l') {
        e.preventDefault();
        playAudio(audioSelect);
        transitionToScreen('socials');
      } else if (e.key === 'Escape' || e.key === 'Backspace' || key === 'a' || key === 'q') {
        e.preventDefault();
        playAudio(audioSelect);
        transitionToScreen('menu');
      }
    }

    // 4. SOCIALS SCREEN
    else if (currentScreen === 'socials') {
      if (e.key === 'ArrowUp' || key === 'w' || key === 'z') {
        e.preventDefault();
        playAudio(audioHover);
        activeSocialIndex = Math.max(0, activeSocialIndex - 1);
        renderSocialsBarsOnly();
      } else if (e.key === 'ArrowDown' || key === 's') {
        e.preventDefault();
        playAudio(audioHover);
        activeSocialIndex = Math.min(socialsList.length - 1, activeSocialIndex + 1);
        renderSocialsBarsOnly();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playAudio(audioSelect);
        window.open(socialsList[activeSocialIndex].url, '_blank', 'noopener,noreferrer');
      } else if (e.key === 'Escape' || e.key === 'Backspace' || key === 'a' || key === 'q') {
        e.preventDefault();
        playAudio(audioSelect);
        transitionToScreen('menu');
      }
    }
  }

  // Wheel Scrolling in Menu
  window.addEventListener('wheel', (e) => {
    if (isTransitioning) return;
    if (currentScreen === 'menu') {
      if (e.deltaY > 0) {
        playAudio(audioHover);
        activeMenuIndex = (activeMenuIndex + 1) % menuItems.length;
        renderMainMenu();
      } else if (e.deltaY < 0) {
        playAudio(audioHover);
        activeMenuIndex = (activeMenuIndex - 1 + menuItems.length) % menuItems.length;
        renderMainMenu();
      }
    }
  }, { passive: true });

  window.addEventListener('keydown', handleKeyDown);

  // Initialize First Screen
  renderMainMenu();

})();
