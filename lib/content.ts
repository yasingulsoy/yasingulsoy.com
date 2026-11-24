import type { Locale } from "./site";

// Tüm metinler CV'den (Projects/cv/cv.html ve cv-en.html, 22.11.2026) ve
// GitHub'daki public repolardan alındı. Yeni bilgi eklerken önce CV'yi güncelle.

type Role = { title: string; date: string; current?: boolean; tags: string[] };
type Company = { name: string; note: string; roles: Role[] };
type Project = {
  name: string;
  kind: string;
  text: string;
  stack: string[];
  href?: string;
  linkLabel: string;
};

export type Content = {
  meta: { title: string; description: string; ogAlt: string };
  skip: string;
  ids: Record<SectionKey, string>;
  nav: { href: string; label: string }[];
  menu: { main: string; mobile: string; open: string };
  langSwitch: { label: string; aria: string };
  theme: { toDark: string; toLight: string };
  hero: {
    status: string;
    role: string;
    lead: string;
    location: string;
    cta: string;
    cv: string;
    cvFile: string;
    photoAlt: string;
  };
  trajectory: {
    title: string;
    caption: string;
    steps: { date: string; title: string; short: string; month: number; level: 1 | 2 | 3 }[];
  };
  stats: { value: string; label: string }[];
  about: { kicker: string; title: string; paragraphs: string[] };
  focus: {
    kicker: string;
    title: string;
    items: { title: string; text: string; tags: string[]; icon: IconName }[];
  };
  experience: {
    kicker: string;
    title: string;
    present: string;
    companies: Company[];
    leadershipTitle: string;
    leadership: Company[];
  };
  projects: { kicker: string; title: string; intro: string; items: Project[] };
  skills: { kicker: string; title: string; groups: { title: string; items: string[] }[] };
  education: {
    kicker: string;
    title: string;
    schools: { degree: string; school: string; date: string; note: string; current?: boolean }[];
    certsTitle: string;
    certs: { name: string; org: string }[];
    langsTitle: string;
    langs: { name: string; level: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    email: string;
    cvTr: string;
    cvEn: string;
  };
  footer: { built: string; source: string };
  notFound: { title: string; text: string; back: string };
};

export type SectionKey = "about" | "focus" | "experience" | "projects" | "skills" | "education" | "contact";

export type IconName = "flow" | "code" | "chart" | "data" | "spark" | "search";

const github = "https://github.com/yasingulsoy";

const tr: Content = {
  meta: {
    title: "Yasin Gülsoy · Yazılım Geliştirme Sorumlusu",
    description:
      "Dijital dönüşüm, full-stack geliştirme, iş zekâsı ve veri analitiği. Hospitadent'te Yazılım Geliştirme Sorumlusu, Bilgisayar Mühendisi.",
    ogAlt: "Yasin Gülsoy, Yazılım Geliştirme Sorumlusu",
  },
  skip: "İçeriğe geç",
  ids: { about: "hakkimda", focus: "neler-yapiyorum", experience: "deneyim", projects: "projeler", skills: "yetkinlikler", education: "egitim", contact: "iletisim" },
  nav: [
    { href: "#hakkimda", label: "Hakkımda" },
    { href: "#deneyim", label: "Deneyim" },
    { href: "#projeler", label: "Projeler" },
    { href: "#yetkinlikler", label: "Yetkinlikler" },
    { href: "#iletisim", label: "İletişim" },
  ],
  menu: { main: "Ana menü", mobile: "Mobil menü", open: "Menüyü aç" },
  langSwitch: { label: "EN", aria: "Switch to English" },
  theme: { toDark: "Koyu temaya geç", toLight: "Açık temaya geç" },
  hero: {
    status: "Şu an Hospitadent'te",
    role: "Yazılım Geliştirme Sorumlusu",
    lead: "Kurumsal web uygulamaları ve ERP modülleri geliştiriyor, yönetim için karar destek raporları ve iş zekâsı panelleri hazırlıyorum. Sağlık bilişimi ve kurumsal yazılım alanında ürün geliştirip veriden içgörü çıkarıyorum.",
    location: "Beyoğlu, İstanbul",
    cta: "İletişime geç",
    cv: "CV'yi indir",
    cvFile: "/cv/Yasin_Gulsoy_CV_TR.pdf",
    photoAlt: "Yasin Gülsoy",
  },
  trajectory: {
    title: "Bir yılda stajyerden sorumluya",
    caption: "Hospitadent'teki rollerim, zamana göre",
    steps: [
      { date: "06/2025", title: "BT Sistem Stajyeri", short: "Stajyer", month: 0, level: 1 },
      { date: "08/2025", title: "Yazılım Geliştirme Uzmanı", short: "Uzman", month: 2, level: 2 },
      { date: "06/2026", title: "Yazılım Geliştirme Sorumlusu", short: "Sorumlu", month: 12, level: 3 },
    ],
  },
  stats: [
    { value: "2", label: "terfi, bir yıl içinde" },
    { value: "2022", label: "web ve veriyle çalışmaya başladığım yıl" },
    { value: "%100", label: "burslu Bilgisayar Mühendisliği" },
    { value: "C1", label: "İngilizce" },
  ],
  about: {
    kicker: "Hakkımda",
    title: "Yazılımı, veriyi ve işi aynı masada buluşturuyorum.",
    paragraphs: [
      "Dijital dönüşüm, yazılım geliştirme, iş zekâsı ve veri analitiğini bir arada yürüten bir Bilgisayar Mühendisiyim. Hospitadent'e stajyer olarak katıldım; bir yıl içinde önce Yazılım Geliştirme Uzmanı, ardından Yazılım Geliştirme Sorumlusu oldum.",
      "İlişkisel ve NoSQL veritabanlarıyla çalışıyorum. SEO, GEO ve kendi kurduğum pazarlama otomasyonlarıyla potansiyel müşteri oluşturuyor, ekip koordinasyonunu ve teknik liderliği işimin merkezinde tutuyorum.",
    ],
  },
  focus: {
    kicker: "Ne yapıyorum",
    title: "Altı alanda çalışıyorum",
    items: [
      {
        icon: "flow",
        title: "Dijital dönüşüm",
        text: "Süreçleri dijitalleştiriyor; Zoho ERP ve Digident HBYS gibi sistemleri REST ve SOAP API'lerle birbirine bağlıyorum.",
        tags: ["Zoho ERP", "Digident HBYS", "REST / SOAP"],
      },
      {
        icon: "code",
        title: "Full-stack geliştirme",
        text: "Arka uçta C#, .NET ve Node.js; arayüzde React, Next.js ve Vue.js ile kurumsal siteler ve web uygulamaları.",
        tags: [".NET", "Node.js", "Next.js"],
      },
      {
        icon: "chart",
        title: "İş zekâsı",
        text: "Yönetimin karar verirken baktığı panelleri ve karar destek raporlarını hazırlıyorum.",
        tags: ["Power BI (DAX)", "Bussion BI", "Excel"],
      },
      {
        icon: "data",
        title: "Veri analitiği",
        text: "Veriyi temizliyor, doğruluyor, ETL süreçlerinden geçirip görselleştiriyorum.",
        tags: ["Python", "Pandas", "SQL"],
      },
      {
        icon: "spark",
        title: "Yapay zekâ",
        text: "Küçük dil modellerinde ince ayar deniyor, uygulamalara sohbet, özetleme ve otomasyon özellikleri ekliyorum.",
        tags: ["PyTorch", "Hugging Face", "Claude API"],
      },
      {
        icon: "search",
        title: "SEO, GEO ve otomasyon",
        text: "Arama motorları ve yapay zekâ aramaları için optimizasyon; kurduğum otomasyonlarla potansiyel müşteri oluşturma.",
        tags: ["SEO", "GEO", "Pazarlama otomasyonu"],
      },
    ],
  },
  experience: {
    kicker: "Deneyim",
    title: "İş deneyimi",
    present: "Halen",
    companies: [
      {
        name: "Hospitadent",
        note: "İstanbul",
        roles: [
          {
            title: "Yazılım Geliştirme Sorumlusu",
            date: "06/2026 – Halen",
            current: true,
            tags: ["Teknik Liderlik", ".NET Geliştirme", "Sağlık Bilişimi"],
          },
          {
            title: "Yazılım Geliştirme Uzmanı",
            date: "08/2025 – 06/2026",
            tags: ["Full-Stack Geliştirme", "Sağlık Bilişimi", "İş Zekâsı"],
          },
          {
            title: "Bilgi Teknolojileri Sistem Stajyeri",
            date: "06/2025 – 08/2025",
            tags: ["Sağlık Verisi Analitiği", "İş Zekâsı"],
          },
        ],
      },
      {
        name: "Cloudyflex",
        note: "Zoho İş Ortağı · İstanbul",
        roles: [
          {
            title: "Yazılım Geliştirme Stajyeri (Zoho Developer)",
            date: "06/2024 – 08/2024",
            tags: ["Zoho ERP", ".NET Geliştirme", "Veri Analizi"],
          },
        ],
      },
      {
        name: "İstanbul Beykent Üniversitesi",
        note: "Öğrenci Dekanlığı",
        roles: [
          {
            title: "Web Geliştirici ve Junior Veri Analisti",
            date: "10/2022 – 06/2025",
            tags: ["Web Geliştirme", "Veri Analizi", "Etkinlik ve Tanıtım Organizasyonu"],
          },
        ],
      },
    ],
    leadershipTitle: "Liderlik ve gönüllülük",
    leadership: [
      {
        name: "İstanbul Beykent Üniversitesi",
        note: "Bilgisayar Mühendisliği Kulübü",
        roles: [
          {
            title: "Kulüp Başkanı",
            date: "09/2023 – 08/2025",
            tags: ["Liderlik", "Ekip Yönetimi", "Agile Yaklaşım"],
          },
        ],
      },
    ],
  },
  projects: {
    kicker: "Projeler",
    title: "Seçili işler",
    intro: "Kodu açık olanların bağlantısı GitHub'a gidiyor.",
    items: [
      {
        name: "PortfoyGo",
        kind: "Web uygulaması",
        text: "Gerçek piyasa verileriyle çalışan sanal yatırım simülasyonu. Hisse, kripto, döviz ve emtia alınıp satılıyor; işlem fiyatı her zaman sunucuda belirleniyor. Liderlik tablosu ve ayrı bir yönetim paneli var.",
        stack: ["Next.js", "Express", "PostgreSQL", "Redis", "Docker"],
        href: `${github}/PortfoyGo`,
        linkLabel: "Kodu incele",
      },
      {
        name: "E-Ticaret Platformu",
        kind: "Bitirme projesi",
        text: "Katmanlı mimariyle (Core, Data, Service, WebUI) yazılmış ASP.NET Core MVC e-ticaret sitesi. Yönetim paneli ve iyzico ödeme entegrasyonu içeriyor.",
        stack: ["ASP.NET Core 8", "EF Core", "C#", "iyzico"],
        href: `${github}/E-TicaretBitirmeProje`,
        linkLabel: "Kodu incele",
      },
      {
        name: "İstanbul Monopoly Deal",
        kind: "Çok oyunculu oyun",
        text: "İstanbul'un ilçeleri, ulaşım hatları ve kamu hizmetleriyle temalanmış, 2–5 kişilik gerçek zamanlı kart oyunu.",
        stack: ["Next.js", "Socket.io", "Express", "TypeScript"],
        href: `${github}/monopoly`,
        linkLabel: "Kodu incele",
      },
      {
        name: "Cengaver Soft",
        kind: "Kurumsal platform",
        text: "Cengaver Soft için site, akademi, yönetim paneli ve API.",
        stack: ["Next.js", "Fastify", "PostgreSQL", "Zod"],
        linkLabel: "Kapalı kaynak",
      },
    ],
  },
  skills: {
    kicker: "Yetkinlikler",
    title: "Kullandığım diller ve araçlar",
    groups: [
      {
        title: "Diller",
        items: ["C#", "TypeScript", "JavaScript", "Python", "SQL / T-SQL", "HTML", "CSS", "Kotlin", "Java", "PowerShell"],
      },
      {
        title: "Backend",
        items: [".NET 8", "ASP.NET Core (MVC / Web API)", "Entity Framework Core", "SignalR", "Blazor", "MediatR", "Hangfire", "Serilog", "Node.js", "Express", "NestJS", "Fastify", "Socket.io", "Prisma", "GraphQL", "RabbitMQ"],
      },
      {
        title: "Frontend ve mobil",
        items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Vite", "Framer Motion", "Three.js", "GSAP", "React Native", "Expo"],
      },
      {
        title: "Veri ve iş zekâsı",
        items: ["MSSQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Power BI (DAX)", "Bussion BI", "Zoho Analytics", "Excel (Pivot, Power Query)", "Pandas", "NumPy"],
      },
      {
        title: "Yapay zekâ",
        items: ["PyTorch", "Hugging Face", "Qwen3 ince ayarı", "Claude API", "Vercel AI SDK", "FastAPI", "Jupyter"],
      },
      {
        title: "Altyapı ve süreç",
        items: ["Docker", "Kubernetes", "Nginx", "Linux", "AWS", "Azure", "Vercel", "GitHub Actions", "Git", "Playwright", "Vitest", "Scrum / Agile"],
      },
    ],
  },
  education: {
    kicker: "Eğitim",
    title: "Eğitim ve sertifikalar",
    schools: [
      {
        degree: "Bilgisayar Mühendisliği, Lisans",
        school: "İstanbul Beykent Üniversitesi",
        date: "2021 – 2025",
        note: "%100 burslu",
      },
      {
        degree: "Sağlık Yönetimi, Lisans",
        school: "Anadolu Üniversitesi",
        date: "2026 – Halen",
        note: "İkinci üniversite",
        current: true,
      },
    ],
    certsTitle: "Sertifikalar",
    certs: [
      { name: "AWS Certified Solutions Architect – Associate (SAA-C03)", org: "Amazon Web Services" },
      { name: "AI for Business Applications (PRDV430)", org: "Saylor Academy, 2025" },
      { name: "C# ile Algoritma ve Programlama 101, Veri Manipülasyonu 101", org: "Turkcell Geleceği Yazanlar, 2025" },
      { name: "Siber Güvenliğe Giriş", org: "Bilgi Teknolojileri ve İletişim Kurumu (BTK), 2024" },
    ],
    langsTitle: "Diller",
    langs: [
      { name: "Türkçe", level: "Ana dil" },
      { name: "İngilizce", level: "C1" },
    ],
  },
  contact: {
    kicker: "İletişim",
    title: "Bir proje mi var? Yazın, konuşalım.",
    text: "Proje, iş birliği ya da kısa bir soru için e-posta veya LinkedIn üzerinden ulaşabilirsiniz.",
    email: "E-posta gönder",
    cvTr: "CV (Türkçe, PDF)",
    cvEn: "CV (İngilizce, PDF)",
  },
  footer: { built: "Next.js ile yapıldı.", source: "Kaynak kodu" },
  notFound: {
    title: "Bu sayfa yok",
    text: "Aradığınız adres taşınmış ya da hiç var olmamış olabilir.",
    back: "Ana sayfaya dön",
  },
};

const en: Content = {
  meta: {
    title: "Yasin Gülsoy · Software Development Lead",
    description:
      "Digital transformation, full-stack development, business intelligence and data analytics. Software Development Lead at Hospitadent, Computer Engineer.",
    ogAlt: "Yasin Gülsoy, Software Development Lead",
  },
  skip: "Skip to content",
  ids: { about: "about", focus: "what-i-do", experience: "experience", projects: "projects", skills: "skills", education: "education", contact: "contact" },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  menu: { main: "Main menu", mobile: "Mobile menu", open: "Open menu" },
  langSwitch: { label: "TR", aria: "Türkçeye geç" },
  theme: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
  hero: {
    status: "Currently at Hospitadent",
    role: "Software Development Lead",
    lead: "I build enterprise web applications and ERP modules, and prepare decision-support reports and business intelligence dashboards for management. I work across healthcare IT and enterprise software, building products and turning data into insight.",
    location: "Beyoğlu, Istanbul",
    cta: "Get in touch",
    cv: "Download CV",
    cvFile: "/cv/Yasin_Gulsoy_CV_EN.pdf",
    photoAlt: "Yasin Gülsoy",
  },
  trajectory: {
    title: "From intern to lead in one year",
    caption: "My roles at Hospitadent over time",
    steps: [
      { date: "06/2025", title: "IT Systems Intern", short: "Intern", month: 0, level: 1 },
      { date: "08/2025", title: "Software Development Specialist", short: "Specialist", month: 2, level: 2 },
      { date: "06/2026", title: "Software Development Lead", short: "Lead", month: 12, level: 3 },
    ],
  },
  stats: [
    { value: "2", label: "promotions within a year" },
    { value: "2022", label: "the year I started working with web and data" },
    { value: "100%", label: "scholarship, Computer Engineering" },
    { value: "C1", label: "English" },
  ],
  about: {
    kicker: "About",
    title: "I bring software, data and business to the same table.",
    paragraphs: [
      "I'm a Computer Engineer combining digital transformation, software development, business intelligence and data analytics. I joined Hospitadent as an intern and within a year was promoted to Software Development Specialist and then Software Development Lead.",
      "I work with relational and NoSQL databases, generate leads through SEO, GEO and marketing automations I build myself, and keep team coordination and technical leadership at the centre of my work.",
    ],
  },
  focus: {
    kicker: "What I do",
    title: "Six areas I work in",
    items: [
      {
        icon: "flow",
        title: "Digital transformation",
        text: "I digitise processes and connect systems such as Zoho ERP and Digident HIS through REST and SOAP APIs.",
        tags: ["Zoho ERP", "Digident HIS", "REST / SOAP"],
      },
      {
        icon: "code",
        title: "Full-stack development",
        text: "C#, .NET and Node.js on the back end; React, Next.js and Vue.js on the front end, for corporate sites and web apps.",
        tags: [".NET", "Node.js", "Next.js"],
      },
      {
        icon: "chart",
        title: "Business intelligence",
        text: "I build the dashboards and decision-support reports management relies on.",
        tags: ["Power BI (DAX)", "Bussion BI", "Excel"],
      },
      {
        icon: "data",
        title: "Data analytics",
        text: "I clean and validate data, run it through ETL processes and visualise it.",
        tags: ["Python", "Pandas", "SQL"],
      },
      {
        icon: "spark",
        title: "AI",
        text: "I experiment with fine-tuning small language models and add chat, summarisation and automation features to apps.",
        tags: ["PyTorch", "Hugging Face", "Claude API"],
      },
      {
        icon: "search",
        title: "SEO, GEO and automation",
        text: "Optimisation for search engines and AI search, and lead generation through automations I build.",
        tags: ["SEO", "GEO", "Marketing automation"],
      },
    ],
  },
  experience: {
    kicker: "Experience",
    title: "Work experience",
    present: "Present",
    companies: [
      {
        name: "Hospitadent",
        note: "Istanbul",
        roles: [
          {
            title: "Software Development Lead",
            date: "06/2026 – Present",
            current: true,
            tags: ["Technical Leadership", ".NET Development", "Healthcare IT"],
          },
          {
            title: "Software Development Specialist",
            date: "08/2025 – 06/2026",
            tags: ["Full-Stack Development", "Healthcare IT", "Business Intelligence"],
          },
          {
            title: "IT Systems Intern",
            date: "06/2025 – 08/2025",
            tags: ["Healthcare Data Analytics", "Business Intelligence"],
          },
        ],
      },
      {
        name: "Cloudyflex",
        note: "Zoho Partner · Istanbul",
        roles: [
          {
            title: "Software Development Intern (Zoho Developer)",
            date: "06/2024 – 08/2024",
            tags: ["Zoho ERP", ".NET Development", "Data Analysis"],
          },
        ],
      },
      {
        name: "Istanbul Beykent University",
        note: "Dean of Students Office",
        roles: [
          {
            title: "Web Developer and Junior Data Analyst",
            date: "10/2022 – 06/2025",
            tags: ["Web Development", "Data Analysis", "Event and Outreach Organization"],
          },
        ],
      },
    ],
    leadershipTitle: "Leadership and volunteering",
    leadership: [
      {
        name: "Istanbul Beykent University",
        note: "Computer Engineering Club",
        roles: [
          {
            title: "President",
            date: "09/2023 – 08/2025",
            tags: ["Leadership", "Team Management", "Agile Approach"],
          },
        ],
      },
    ],
  },
  projects: {
    kicker: "Projects",
    title: "Selected work",
    intro: "Open-source projects link to their GitHub repositories.",
    items: [
      {
        name: "PortfoyGo",
        kind: "Web app",
        text: "A virtual investment simulator running on real market data. Users trade stocks, crypto, FX and commodities; trade prices are always set on the server. Includes a leaderboard and a separate admin panel.",
        stack: ["Next.js", "Express", "PostgreSQL", "Redis", "Docker"],
        href: `${github}/PortfoyGo`,
        linkLabel: "View code",
      },
      {
        name: "E-commerce Platform",
        kind: "Graduation project",
        text: "An ASP.NET Core MVC e-commerce site built with a layered architecture (Core, Data, Service, WebUI), with an admin panel and iyzico payment integration.",
        stack: ["ASP.NET Core 8", "EF Core", "C#", "iyzico"],
        href: `${github}/E-TicaretBitirmeProje`,
        linkLabel: "View code",
      },
      {
        name: "Istanbul Monopoly Deal",
        kind: "Multiplayer game",
        text: "A real-time card game for 2–5 players, themed on Istanbul's districts, transit lines and public services.",
        stack: ["Next.js", "Socket.io", "Express", "TypeScript"],
        href: `${github}/monopoly`,
        linkLabel: "View code",
      },
      {
        name: "Cengaver Soft",
        kind: "Company platform",
        text: "Website, academy, admin panel and API for Cengaver Soft.",
        stack: ["Next.js", "Fastify", "PostgreSQL", "Zod"],
        linkLabel: "Closed source",
      },
    ],
  },
  skills: {
    kicker: "Skills",
    title: "Languages and tools I use",
    groups: [
      {
        title: "Languages",
        items: ["C#", "TypeScript", "JavaScript", "Python", "SQL / T-SQL", "HTML", "CSS", "Kotlin", "Java", "PowerShell"],
      },
      {
        title: "Back end",
        items: [".NET 8", "ASP.NET Core (MVC / Web API)", "Entity Framework Core", "SignalR", "Blazor", "MediatR", "Hangfire", "Serilog", "Node.js", "Express", "NestJS", "Fastify", "Socket.io", "Prisma", "GraphQL", "RabbitMQ"],
      },
      {
        title: "Front end and mobile",
        items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Vite", "Framer Motion", "Three.js", "GSAP", "React Native", "Expo"],
      },
      {
        title: "Data and BI",
        items: ["MSSQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Power BI (DAX)", "Bussion BI", "Zoho Analytics", "Excel (Pivot, Power Query)", "Pandas", "NumPy"],
      },
      {
        title: "AI",
        items: ["PyTorch", "Hugging Face", "Qwen3 fine-tuning", "Claude API", "Vercel AI SDK", "FastAPI", "Jupyter"],
      },
      {
        title: "Infrastructure and process",
        items: ["Docker", "Kubernetes", "Nginx", "Linux", "AWS", "Azure", "Vercel", "GitHub Actions", "Git", "Playwright", "Vitest", "Scrum / Agile"],
      },
    ],
  },
  education: {
    kicker: "Education",
    title: "Education and certifications",
    schools: [
      {
        degree: "Bachelor's in Computer Engineering",
        school: "Istanbul Beykent University",
        date: "2021 – 2025",
        note: "100% scholarship",
      },
      {
        degree: "Bachelor's in Health Management",
        school: "Anadolu University",
        date: "2026 – Present",
        note: "Second university program",
        current: true,
      },
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "AWS Certified Solutions Architect – Associate (SAA-C03)", org: "Amazon Web Services" },
      { name: "AI for Business Applications (PRDV430)", org: "Saylor Academy, 2025" },
      { name: "Algorithms and Programming with C# 101, Data Manipulation 101", org: "Turkcell Geleceği Yazanlar, 2025" },
      { name: "Introduction to Cybersecurity", org: "Information and Communication Technologies Authority (BTK), 2024" },
    ],
    langsTitle: "Languages",
    langs: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "C1" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Have a project in mind? Let's talk.",
    text: "For a project, a collaboration or a quick question, reach me by email or on LinkedIn.",
    email: "Send an email",
    cvTr: "CV (Turkish, PDF)",
    cvEn: "CV (English, PDF)",
  },
  footer: { built: "Built with Next.js.", source: "Source code" },
  notFound: {
    title: "This page doesn't exist",
    text: "The address may have moved, or it may never have existed.",
    back: "Back to the home page",
  },
};

export const content: Record<Locale, Content> = { tr, en };
