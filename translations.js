'use strict';

/* =========================================================
   TRANSLATIONS
   All user-visible strings for PT (Brazilian Portuguese)
   and EN (English). Keys map to data-i18n attributes in
   index.html. Nested keys use dot notation: "a.b".
   ========================================================= */
window.TRANSLATIONS = {

  /* ---------- Portuguese (default) ---------- */
  pt: {
    // <html lang>
    htmlLang: 'pt-BR',

    // <title>
    pageTitle: 'Renato Corte — Desenvolvedor Full-Stack Pleno',

    // Typed phrases in hero
    typedPhrases: [
      'Full-Stack Developer',
      'Engenheiro Back-end',
      'Artesão Front-end',
      'Especialista em Go & Java',
      'Entusiasta de Cloud & DevOps',
      'Desenvolvedor Potencializado por IA',
    ],

    // Navbar
    nav: {
      about:      'Sobre',
      experience: 'Experiência',
      skills:     'Skills',
      education:  'Formação',
      projects:   'Projetos',
      contact:    'Contato',
      downloadCv: 'Download CV',
      langToggle: 'EN',
      langAriaLabel: 'Switch to English',
    },

    // Hero
    hero: {
      greeting: 'Olá, eu sou',
      aiBadgeText: 'Desenvolvedor Potencializado por IA',
      lead: 'Desenvolvedor Full-Stack Pleno com <strong>2+ anos</strong> de experiência em <span class="text-accent">Next.js</span>, <span class="text-accent">React</span>, <span class="text-accent">Java Spring Boot</span>, <span class="text-accent">Go</span> e <span class="text-accent">Node.js</span>. Construindo soluções escaláveis de ponta a ponta — <span class="text-ai"><strong>amplificadas por IA</strong></span>.',
      ctaPortfolio: 'Ver Portfólio',
      ctaContact:   'Entrar em Contato',
      scroll: 'scroll',
    },

    // About
    about: {
      sectionTitle: 'Sobre Mim',
      lead: 'Sou um <strong>Desenvolvedor Full-Stack Pleno</strong> apaixonado por transformar ideias complexas em produtos digitais robustos e elegantes.',
      p1: 'Atuo no desenvolvimento front-end moderno com <strong>Next.js</strong> e <strong>React</strong>, e no back-end com <strong>Java Spring Boot</strong>, <strong>Go</strong> e <strong>Node.js</strong>. Tenho experiência em ambientes de cloud (<strong>GCP</strong>), containerização com <strong>Docker</strong> e bancos de dados SQL e NoSQL.',
      p2: 'Meu foco está na entrega de soluções completas, escaláveis e de alto desempenho — do design de arquitetura ao deploy em produção.',
      aiCallout: 'Utilizo <span class="text-ai"><strong>Inteligência Artificial</strong></span> como multiplicador de capacidade — do planejamento à revisão de código — para construir a próxima geração de soluções digitais com mais velocidade, qualidade e visão.',
      stat1Label: 'Anos de Experiência',
      stat2Label: 'Cargos na Carreira',
      stat3Label: 'Tecnologias',
      cardTitle:  'Informações de Contato',
      labelPhone:    'Telefone',
      labelEmail:    'Email',
      labelLinkedIn: 'LinkedIn',
      labelGitHub:   'GitHub',
      labelLocation: 'Localização',
      location:      'Mogi das Cruzes, SP — Brasil',
      labelLanguage: 'Inglês',
      languageValue: 'Leitura e escrita — nível profissional',
    },

    // Experience
    experience: {
      sectionTitle: 'Experiência Profissional',

      job1: {
        role:    'Desenvolvedor Full-Stack Pleno',
        company: 'ODEEN',
        companyNote: '(Anteriormente SWINT)',
        period:  'Jun 2025 – Atual',
        badge:   'Atual',
        location: 'Mogi das Cruzes, SP, Brasil',
        bullets: [
          'Manutenção e evolução de microsserviço em <strong>Go</strong>, com foco em performance e escalabilidade.',
          'Implementação de testes unitários utilizando <strong>Jest</strong> para garantir a qualidade do código.',
        ],
      },

      job2: {
        role:    'Desenvolvedor Back-end Sênior',
        company: 'ODEEN',
        period:  'Dez 2024 – Mai 2025',
        location: 'Mogi das Cruzes, SP, Brasil',
        bullets: [
          'Processamento de dados geoespaciais com <strong>Turf.js</strong> em Node.js para funcionalidades de geoposicionamento.',
          'Implementação de monitoramento e métricas em serviços <strong>Java Spring Boot</strong> com <strong>Prometheus</strong>.',
          'Adoção de banco de dados NoSQL (<strong>Firebase</strong>) para otimizar o desempenho em funcionalidades específicas.',
        ],
      },

      job3: {
        role:    'Desenvolvedor Back-end Pleno',
        company: 'ODEEN',
        period:  'Jun 2024 – Nov 2024',
        location: 'Mogi das Cruzes, SP, Brasil',
        bullets: [
          'Desenvolvimento de novos microsserviços usando <strong>Python</strong>, <strong>Node.js</strong> e <strong>Java Spring Boot</strong> desde a arquitetura até o deploy na <strong>GCP</strong>.',
          'Transmissão de dados em tempo real utilizando <strong>WebSockets</strong>.',
          'Otimização de imagens <strong>Docker</strong> reduzindo tamanho e tempo de build.',
          'Integração de Proxy Reverso <strong>HAProxy</strong> para roteamento de tráfego.',
        ],
      },

      job4: {
        role:    'Programador Júnior',
        company: 'ODEEN',
        period:  'Out 2023 – Mai 2024',
        location: 'Mogi das Cruzes, SP, Brasil',
        bullets: [
          'Criação de páginas e componentes customizados em <strong>React</strong>, focando em performance e UX.',
          'Utilização de <strong>Web Workers</strong> para processamento de documentos de maneira assíncrona.',
          'Construção de APIs com <strong>Node.js</strong> e Express, integrando com bancos <strong>MySQL</strong>.',
        ],
      },

      job5: {
        role:    'Assistente de TI Júnior',
        company: 'ODEEN',
        period:  'Jun 2023 – Set 2023',
        location: 'Mogi das Cruzes, SP, Brasil',
        bullets: [
          'Implementação de páginas e melhorias de interface em aplicações existentes usando <strong>React</strong> e <strong>TypeScript</strong>.',
        ],
      },
    },

    // Skills
    skills: {
      sectionTitle: 'Habilidades Técnicas',
      groupLanguages: 'Linguagens',
      groupFrontend:  'Front-end',
      groupBackend:   'Back-end',
      groupCloud:     'Cloud & DevOps',
      groupDatabases: 'Bancos de Dados',
      legendPrimary:     'Principal',
      legendComfortable: 'Intermediário',
      chipAriaJava:       'Java — principal',
      chipAriaTS:         'TypeScript — principal',
      chipAriaGo:         'Go — principal',
      chipAriaPython:     'Python — intermediário',
      chipAriaSQL:        'SQL — intermediário',
      chipAriaNext:       'Next.js — principal',
      chipAriaReact:      'React — principal',
      chipAriaTailwind:   'TailwindCSS — intermediário',
      chipAriaZustand:    'Zustand — intermediário',
      chipAriaSpring:     'Spring Boot — principal',
      chipAriaExpress:    'Express.js — principal',
      chipAriaFastAPI:    'FastAPI — intermediário',
      chipAriaDocker:     'Docker — principal',
      chipAriaGit:        'Git — principal',
      chipAriaGCP:        'GCP — intermediário',
      chipAriaLinux:      'Linux — intermediário',
      chipAriaPostgres:   'PostgreSQL — principal',
      chipAriaMySQL:      'MySQL — principal',
      chipAriaFirebase:   'Firebase — intermediário',
      chipAriaMongo:      'MongoDB — intermediário',
      groupAI:            'IA & Produtividade',
      chipAriaOpenCode:   'OpenCode — ferramenta de IA',
      chipAriaCopilot:    'GitHub Copilot — ferramenta de IA',
      chipAriaClaude:     'Claude — ferramenta de IA',
      chipAriaAIWorkflow: 'AI-Driven Workflow — metodologia',
      chipAIWorkflow:     'AI-Driven Workflow',
    },

    // Education
    education: {
      sectionTitle: 'Formação Acadêmica',
      degree:      'Bacharelado em Ciência da Computação',
      institution: 'Centro Universitário Braz Cubas',
      location:    'Mogi das Cruzes, SP, Brasil',
      period:      'Fev 2022 – Dez 2025',
      badge:       'Em conclusão',
    },

    // Projects
    projects: {
      sectionTitle: 'Projetos & Portfólio',
      intro: 'Explore meu trabalho diretamente no GitHub — projetos pessoais, experimentos com novas tecnologias e contribuições open-source.',
      card1Title: 'Microsserviços em Go',
      card1Desc:  'Arquitetura de microsserviços de alta performance desenvolvida em Go, com foco em escalabilidade e observabilidade com Prometheus.',
      card2Title: 'Plataforma Geoespacial',
      card2Desc:  'Sistema de processamento e visualização de dados geoespaciais usando Turf.js e Node.js com transmissão em tempo real via WebSockets.',
      card3Title: 'Frontend com Next.js & React',
      card3Desc:  'Aplicações front-end modernas com React e Next.js, utilizando Web Workers para processamento assíncrono e alta performance.',
      cta:        'Ver todos os projetos no GitHub',
      ariaGitHub: 'Ver no GitHub',
    },

    // Contact
    contact: {
      sectionTitle: 'Vamos Conversar',
      intro: 'Estou aberto a novas oportunidades, colaborações ou apenas uma boa conversa sobre tecnologia. Entre em contato!',
      labelPhone:    'Telefone',
      labelEmail:    'Email',
      labelLinkedIn: 'LinkedIn',
      labelGitHub:   'GitHub',
      formName:        'Nome',
      formNamePH:      'Seu nome completo',
      formEmail:       'Email',
      formEmailPH:     'seu@email.com',
      formMessage:     'Mensagem',
      formMessagePH:   'Como posso ajudar?',
      formSubmit:      'Enviar Mensagem',
      formErrorEmpty:  'Por favor, preencha todos os campos.',
      formErrorEmail:  'Por favor, informe um email válido.',
      formOpening:     'Abrindo seu cliente de email...',
      mailSubject:     'Contato via Portfólio',
    },

    // Footer
    footer: {
      navAbout:      'Sobre',
      navExperience: 'Experiência',
      navSkills:     'Skills',
      navProjects:   'Projetos',
      navContact:    'Contato',
      copy: '&copy; 2026 Renato Corte. Desenvolvido com <span class="text-accent">&hearts;</span>, código e <span class="text-ai">IA</span>.',
    },
  },

  /* ---------- English ---------- */
  en: {
    htmlLang: 'en',

    pageTitle: 'Renato Corte — Mid-Level Full-Stack Developer',

    typedPhrases: [
      'Full-Stack Developer',
      'Back-end Engineer',
      'Front-end Craftsman',
      'Go & Java Specialist',
      'Cloud & DevOps Enthusiast',
      'AI-Augmented Developer',
    ],

    nav: {
      about:      'About',
      experience: 'Experience',
      skills:     'Skills',
      education:  'Education',
      projects:   'Projects',
      contact:    'Contact',
      downloadCv: 'Download CV',
      langToggle: 'PT',
      langAriaLabel: 'Mudar para Português',
    },

    hero: {
      greeting: 'Hi, I\'m',
      aiBadgeText: 'AI-Augmented Developer',
      lead: 'Mid-Level Full-Stack Developer with <strong>2+ years</strong> of experience in <span class="text-accent">Next.js</span>, <span class="text-accent">React</span>, <span class="text-accent">Java Spring Boot</span>, <span class="text-accent">Go</span> and <span class="text-accent">Node.js</span>. Building scalable end-to-end solutions — <span class="text-ai"><strong>amplified by AI</strong></span>.',
      ctaPortfolio: 'View Portfolio',
      ctaContact:   'Get in Touch',
      scroll: 'scroll',
    },

    about: {
      sectionTitle: 'About Me',
      lead: 'I\'m a <strong>Mid-Level Full-Stack Developer</strong> passionate about turning complex ideas into robust and elegant digital products.',
      p1: 'I work on modern front-end development with <strong>Next.js</strong> and <strong>React</strong>, and on the back-end with <strong>Java Spring Boot</strong>, <strong>Go</strong> and <strong>Node.js</strong>. I have experience with cloud environments (<strong>GCP</strong>), containerisation with <strong>Docker</strong>, and both SQL and NoSQL databases.',
      p2: 'My focus is on delivering complete, scalable and high-performance solutions — from architecture design all the way to production deployment.',
      aiCallout: 'I leverage <span class="text-ai"><strong>Artificial Intelligence</strong></span> as a force multiplier — from planning to code review — to build the next generation of digital solutions with greater speed, quality and vision.',
      stat1Label: 'Years of Experience',
      stat2Label: 'Career Positions',
      stat3Label: 'Technologies',
      cardTitle:  'Contact Information',
      labelPhone:    'Phone',
      labelEmail:    'Email',
      labelLinkedIn: 'LinkedIn',
      labelGitHub:   'GitHub',
      labelLocation: 'Location',
      location:      'Mogi das Cruzes, SP — Brazil',
      labelLanguage: 'English',
      languageValue: 'Reading & writing — professional level',
    },

    experience: {
      sectionTitle: 'Professional Experience',

      job1: {
        role:    'Mid-Level Full-Stack Developer',
        company: 'ODEEN',
        companyNote: '(Formerly SWINT)',
        period:  'Jun 2025 – Present',
        badge:   'Current',
        location: 'Mogi das Cruzes, SP, Brazil',
        bullets: [
          'Maintenance and evolution of a microservice in <strong>Go</strong>, focusing on performance and scalability.',
          'Implementation of unit tests using <strong>Jest</strong> to ensure code quality.',
        ],
      },

      job2: {
        role:    'Senior Back-end Developer',
        company: 'ODEEN',
        period:  'Dec 2024 – May 2025',
        location: 'Mogi das Cruzes, SP, Brazil',
        bullets: [
          'Geospatial data processing with <strong>Turf.js</strong> in Node.js for geo-positioning features.',
          'Implementation of monitoring and metrics in <strong>Java Spring Boot</strong> services using <strong>Prometheus</strong>.',
          'Adoption of a NoSQL database (<strong>Firebase</strong>) to improve performance in specific features.',
        ],
      },

      job3: {
        role:    'Mid-Level Back-end Developer',
        company: 'ODEEN',
        period:  'Jun 2024 – Nov 2024',
        location: 'Mogi das Cruzes, SP, Brazil',
        bullets: [
          'Built new microservices using <strong>Python</strong>, <strong>Node.js</strong> and <strong>Java Spring Boot</strong> from architecture to deployment on <strong>GCP</strong>.',
          'Real-time data streaming using <strong>WebSockets</strong>.',
          'Optimised <strong>Docker</strong> images, reducing size and build time.',
          'Integrated <strong>HAProxy</strong> reverse proxy for traffic routing.',
        ],
      },

      job4: {
        role:    'Junior Developer',
        company: 'ODEEN',
        period:  'Oct 2023 – May 2024',
        location: 'Mogi das Cruzes, SP, Brazil',
        bullets: [
          'Built custom pages and components in <strong>React</strong>, focusing on performance and UX.',
          'Used <strong>Web Workers</strong> for asynchronous document processing.',
          'Built APIs with <strong>Node.js</strong> and Express, integrated with <strong>MySQL</strong> databases.',
        ],
      },

      job5: {
        role:    'Junior IT Assistant',
        company: 'ODEEN',
        period:  'Jun 2023 – Sep 2023',
        location: 'Mogi das Cruzes, SP, Brazil',
        bullets: [
          'Implemented pages and UI improvements in existing applications using <strong>React</strong> and <strong>TypeScript</strong>.',
        ],
      },
    },

    skills: {
      sectionTitle: 'Technical Skills',
      groupLanguages: 'Languages',
      groupFrontend:  'Front-end',
      groupBackend:   'Back-end',
      groupCloud:     'Cloud & DevOps',
      groupDatabases: 'Databases',
      legendPrimary:     'Primary',
      legendComfortable: 'Comfortable',
      chipAriaJava:       'Java — primary',
      chipAriaTS:         'TypeScript — primary',
      chipAriaGo:         'Go — primary',
      chipAriaPython:     'Python — comfortable',
      chipAriaSQL:        'SQL — comfortable',
      chipAriaNext:       'Next.js — primary',
      chipAriaReact:      'React — primary',
      chipAriaTailwind:   'TailwindCSS — comfortable',
      chipAriaZustand:    'Zustand — comfortable',
      chipAriaSpring:     'Spring Boot — primary',
      chipAriaExpress:    'Express.js — primary',
      chipAriaFastAPI:    'FastAPI — comfortable',
      chipAriaDocker:     'Docker — primary',
      chipAriaGit:        'Git — primary',
      chipAriaGCP:        'GCP — comfortable',
      chipAriaLinux:      'Linux — comfortable',
      chipAriaPostgres:   'PostgreSQL — primary',
      chipAriaMySQL:      'MySQL — primary',
      chipAriaFirebase:   'Firebase — comfortable',
      chipAriaMongo:      'MongoDB — comfortable',
      groupAI:            'AI & Productivity',
      chipAriaOpenCode:   'OpenCode — AI tool',
      chipAriaCopilot:    'GitHub Copilot — AI tool',
      chipAriaClaude:     'Claude — AI tool',
      chipAriaAIWorkflow: 'AI-Driven Workflow — methodology',
      chipAIWorkflow:     'AI-Driven Workflow',
    },

    education: {
      sectionTitle: 'Academic Background',
      degree:      'Bachelor\'s Degree in Computer Science',
      institution: 'Centro Universitário Braz Cubas',
      location:    'Mogi das Cruzes, SP, Brazil',
      period:      'Feb 2022 – Dec 2025',
      badge:       '',
    },

    projects: {
      sectionTitle: 'Projects & Portfolio',
      intro: 'Explore my work directly on GitHub — personal projects, experiments with new technologies, and open-source contributions.',
      card1Title: 'Go Microservices',
      card1Desc:  'High-performance microservice architecture built in Go, focused on scalability and observability with Prometheus.',
      card2Title: 'Geospatial Platform',
      card2Desc:  'Geospatial data processing and visualisation system using Turf.js and Node.js with real-time streaming via WebSockets.',
      card3Title: 'Next.js & React Frontend',
      card3Desc:  'Modern front-end applications with React and Next.js, using Web Workers for asynchronous processing and high performance.',
      cta:        'View all projects on GitHub',
      ariaGitHub: 'View on GitHub',
    },

    contact: {
      sectionTitle: 'Let\'s Talk',
      intro: 'I\'m open to new opportunities, collaborations, or just a good conversation about technology. Get in touch!',
      labelPhone:    'Phone',
      labelEmail:    'Email',
      labelLinkedIn: 'LinkedIn',
      labelGitHub:   'GitHub',
      formName:        'Name',
      formNamePH:      'Your full name',
      formEmail:       'Email',
      formEmailPH:     'you@email.com',
      formMessage:     'Message',
      formMessagePH:   'How can I help?',
      formSubmit:      'Send Message',
      formErrorEmpty:  'Please fill in all fields.',
      formErrorEmail:  'Please enter a valid email address.',
      formOpening:     'Opening your email client...',
      mailSubject:     'Contact via Portfolio',
    },

    footer: {
      navAbout:      'About',
      navExperience: 'Experience',
      navSkills:     'Skills',
      navProjects:   'Projects',
      navContact:    'Contact',
      copy: '&copy; 2026 Renato Corte. Built with <span class="text-accent">&hearts;</span>, code and <span class="text-ai">AI</span>.',
    },
  },
};
