export const profile = {
  name: "Ritwik Katta",
  initials: "RK",
  role: "CSE (AI) Student",
  tagline: "Backend & AI systems",
  location: "Bengaluru, India",
  email: "ritwikkatta7@gmail.com",
  phone: "+91 74830 88704",
  phoneHref: "tel:+917483088704",
  github: "https://github.com/ritk7",
  githubHandle: "@ritk7",
  linkedin: "https://www.linkedin.com/in/ritwik-katta-407696289/",
  linkedinHandle: "in/ritwik-katta",
  leetcode: "https://leetcode.com/u/dynamo1806/",
  hackerrank: "https://www.hackerrank.com/profile/ritwikkatta7",
  resume: "/Ritwik-Katta-Resume.pdf",
  heroChip: "Backend & AI builder",
  heroBio:
    "Computer Science (AI) student in Bengaluru who builds backend systems that run against live data — an event-driven NSE intraday trading platform, RAG document search with a hand-rolled HNSW index, and ML services measured on real metrics. Top Rated on Upwork.",
};

export const heroTags = [
  "Python",
  "FastAPI",
  "React",
  "Node.js",
  "SQL",
  "MongoDB",
  "ChromaDB",
  "XGBoost",
  "n8n",
  "Linux",
];

export const marqueeTags = [
  "Python",
  "FastAPI",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Java",
  "C",
  "SQL",
  "MySQL",
  "SQLite",
  "MongoDB",
  "ChromaDB",
  "scikit-learn",
  "XGBoost",
  "REST APIs",
  "n8n",
  "Git",
  "Linux",
  "Airtable",
];

export const about = {
  paragraphs: [
    {
      text: "I'm a Computer Science engineering student at {{Manipal Institute of Technology, Bengaluru}}, specializing in AI. Most of what I build lives on the backend — event loops, data pipelines, search indexes and the boring reliability work that keeps them running when something goes wrong.",
    },
    {
      text: "I previously worked as a {{Software Engineer on Upwork}}, where I hold Top Rated status for Python, API and automation work. The largest engagement was an {{NSE intraday trading platform}}: eight modular components spanning market data, strategy, execution, persistence and risk, processing live data for 50 NIFTY instruments, with a 5-year backtesting engine that models brokerage, taxes and slippage.",
    },
    {
      text: "On my own time I build AI tooling I can actually measure — a {{PR review assistant}} with a transparent risk-scoring formula, and a {{document platform}} where I implemented HNSW search from scratch and benchmarked it against brute force and ChromaDB. I've solved 150+ DSA problems on LeetCode and hold a 5-star Gold Badge on HackerRank.",
    },
  ],
  facts: [
    { label: "based in", value: "Bengaluru, India" },
    { label: "B.Tech CSE (AI), MIT Bengaluru", value: "2023 – 2027 · 4th year · SGPA 8.4" },
    { label: "Past: Software Engineer @ Upwork", value: "May 2025 – May 2026" },
    { label: "Top Rated on Upwork", value: "Python · APIs · automation" },
    { label: "LeetCode & HackerRank", value: "150+ solved · 5★ Gold" },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Upwork · Freelance, Remote",
    dates: "May 2025 – May 2026",
    summary: "NSE Intraday Trading Platform — live market data, strategy, execution and risk",
    bullets: [
      "Built an event-driven trading platform with 8 modular components spanning market data, strategy, execution, persistence and risk.",
      "Processed live market data for 50 NIFTY instruments across NSE.",
      "Built a 5-year backtesting engine modeling brokerage, taxes and slippage.",
      "Added crash recovery and persistent risk controls for reliability.",
    ],
    tech: ["Python", "Zerodha Kite Connect API", "SQLite"],
  },
  {
    role: "Software Engineer",
    org: "Upwork · Freelance, Remote",
    dates: "May 2025 – May 2026",
    summary: "SEO Landing Page Automation Engagement — frontend for an automated page workflow",
    bullets: [
      "Built the frontend of an automated SEO landing-page workflow.",
      "Delivered page structure, reusable UI components and REST API integration.",
    ],
    tech: ["n8n", "REST APIs", "Web Scraping"],
  },
];

export const skills = [
  {
    title: "Languages",
    icon: "code",
    accent: "cobalt",
    items: ["Python", "JavaScript", "Java", "C", "SQL"],
  },
  {
    title: "Backend",
    icon: "server",
    accent: "mint",
    items: ["FastAPI", "Node.js", "Express", "REST API design"],
  },
  {
    title: "AI & ML",
    icon: "spark",
    accent: "lilac",
    items: ["RAG pipelines", "HNSW vector search", "Cross-encoder re-ranking", "scikit-learn", "XGBoost"],
  },
  {
    title: "Databases",
    icon: "database",
    accent: "cobalt",
    items: ["MySQL", "SQLite", "MongoDB", "ChromaDB"],
  },
  {
    title: "Frontend",
    icon: "layout",
    accent: "mint",
    items: ["React", "HTML & CSS", "Component design"],
  },
  {
    title: "Tools",
    icon: "tools",
    accent: "lilac",
    items: ["Git", "GitHub", "Linux", "n8n", "Airtable"],
  },
  {
    title: "CS Fundamentals",
    icon: "cpu",
    accent: "cobalt",
    items: ["Operating Systems", "Computer Networks", "OOPs", "DBMS"],
  },
  {
    title: "Practice",
    icon: "trophy",
    accent: "mint",
    items: ["LeetCode, 150+ solved", "HackerRank, 5★ Gold"],
  },
];

export const projects = [
  {
    name: "AI PR & Code Review Assistant",
    stack: "MongoDB · Express · React · Node.js",
    link: "https://github.com/ritk7/ai-pr-analyzer",
    bullets: [
      "Full-stack tool that connects to GitHub, analyzes real PRs and flags risky changes, with AI-generated summaries explaining each flag.",
      "Transparent risk-scoring formula built on diff size, sensitive files and test coverage — no black box verdicts.",
      "Server-side sorting and pagination keep the highest-risk changes surfaced first.",
    ],
    metrics: [
      { value: "40", label: "automated tests" },
      { value: "5+", label: "real repos validated" },
    ],
  },
  {
    name: "AI Knowledge & Document Platform",
    stack: "Python · FastAPI · ChromaDB",
    link: "https://github.com/ritk7/AI-Knowledge-Document-Management-Platform",
    bullets: [
      "FastAPI service where you upload files and get answers with page-level citations, using hybrid search and AI-based re-ranking.",
      "Implemented a custom HNSW search algorithm from scratch and verified it correct against brute-force search.",
      "Benchmarked end to end against brute force and ChromaDB across a 35-question evaluation set.",
    ],
    metrics: [
      { value: "0.950", label: "MRR, cross-encoder re-rank" },
      { value: "35", label: "eval questions" },
    ],
  },
  {
    name: "Predictive Maintenance for Jet Engines",
    stack: "Python · scikit-learn · XGBoost · FastAPI",
    link: "https://github.com/ritk7/predictive-maintenance-ml",
    bullets: [
      "Predicts jet engine failure from real NASA sensor data, comparing three regression models behind a FastAPI service.",
      "Found and fixed a critical, safety-relevant bug that returned wrong risk levels for low-history engines.",
      "Tuned the decision threshold with F2-weighted evaluation, prioritising recall on failures.",
    ],
    metrics: [
      { value: "-47%", label: "missed failures" },
      { value: "3", label: "models compared" },
    ],
  },
];

export const achievements = [
  {
    title: "LeetCode",
    badge: "150+ SOLVED",
    note: "Data structures & algorithms",
    link: "https://leetcode.com/u/dynamo1806/",
  },
  {
    title: "HackerRank",
    badge: "5★ GOLD",
    note: "Problem solving badge",
    link: "https://www.hackerrank.com/profile/ritwikkatta7",
  },
  {
    title: "Upwork",
    badge: "TOP RATED",
    note: "Python, API & automation work",
    link: null,
  },
];

export const education = {
  degree: "B.Tech in Computer Science Engineering (AI)",
  school: "Manipal Institute of Technology",
  place: "Bengaluru, Karnataka, India",
  dates: "2023 – 2027",
  detail: "SGPA 8.4",
};

export const heroPanel = {
  label: "LIVE MARKET FEED",
  symbol: "NIFTY 50",
  base: 24812.35,
  stats: [
    { label: "Instruments tracked", value: "50" },
    { label: "Backtest window", value: "5Y" },
    { label: "Core components", value: "8" },
    { label: "Crash recovery", value: "ON" },
  ],
  caption: "Simulated view of the NSE intraday platform built on Upwork",
};
