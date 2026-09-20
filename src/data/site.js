// ─────────────────────────────────────────────────────────────
//  Edit your details here. Everything on the site reads from
//  this one file, so you never need to hunt through the pages.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Aqsa",
  fullName: "Aqsa Sharif",

  // TODO: replace with your real email address
  email: "aqsa@example.com",
  github: "https://github.com/aqsasharif051-dev",

  linkedin: "https://www.linkedin.com/in/aqsa-sharif-b78217435",
  availability: "Available remotely",
};

export const roles = ["Data Analyst", "Frontend Developer"];

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export const stats = [
  { value: 3, suffix: "", label: "Data projects" },
  { value: 2, suffix: "+", label: "Web projects" },
  { value: 100, suffix: "%", label: "Curiosity" },
];

export const education = [
  {
    degree: "BS (Computer Science)",
    school: "Govt Islamia College for Women, Cooper Road, Lahore",
    period: "2023 — present",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    school: "Govt Islamia College for Women, Cooper Road, Lahore",
    period: "2021 — 2023",
  },
];

export const tools = [
  "Data analysis",
  "Excel dashboards",
  "Data cleaning",
  "Data storytelling",
  "SQL",
  "PostgreSQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive design",
  "Sentiment analysis",
];

export const skillBars = [
  { label: "Data analysis & visualization", value: 70, color: "#34e3a0" },
  { label: "HTML & CSS", value: 90, color: "#38d5f5" },
  { label: "JavaScript", value: 78, color: "#ffc857" },
  { label: "React", value: 62, color: "#a78bfa" },
];

// Add a `link` to any project (live demo or GitHub repo) and a
// "View project" button appears on its card automatically.
export const projects = [
  {
    id: "coffee",
    title: "Coffee Shop Sales Dashboard",
    type: "Data analysis",
    image: "images/coffee-sales-dashboard.png",
    alt: "Coffee shop sales dashboard in Excel",
    copy: "An Excel dashboard analyzing $698K in coffee shop sales — trends by hour, category, store location, and weekday, with interactive month and day filters.",
    tags: ["Excel", "Dashboard", "Data cleaning"],
    color: "#ffc857",
    link: "",
  },
  {
    id: "sentiment",
    title: "Internet Sentiment Analyzer",
    type: "Data analysis",
    image: "images/sentiment-analyzer.png",
    alt: "Sentiment analyzer web app interface",
    copy: "A web app that pulls posts and headlines about any topic and scores the internet’s feeling — positive, negative, or neutral — with a live feed view.",
    tags: ["Sentiment", "JavaScript", "Web app"],
    color: "#34e3a0",
    link: "",
  },
  {
    id: "bookstore",
    title: "Online Bookstore Database",
    type: "Data analysis",
    image: "",
    alt: "Online bookstore PostgreSQL database schema",
    copy: "A PostgreSQL database for an online bookstore with Books, Customers and Orders tables, loaded from CSV files and explored with 20 SQL queries — filtering, aggregation, joins, and remaining-stock calculations.",
    tags: ["PostgreSQL", "SQL", "Joins"],
    color: "#60a5fa",
    link: "",
  },
  {
    id: "pulse",
    title: "PulseBoard Analytics",
    type: "Frontend",
    image: "images/pulseboard.png",
    alt: "PulseBoard analytics dashboard interface",
    copy: "A dark-themed analytics dashboard interface with revenue trends, traffic sources, and live metric cards built from scratch.",
    tags: ["Dashboard", "UI", "JavaScript"],
    color: "#38d5f5",
    link: "",
  },
  {
    id: "nexora",
    title: "Nexora Workspace",
    type: "Frontend",
    image: "images/nexora.png",
    alt: "Nexora project management dashboard interface",
    copy: "A project-management dashboard with stat cards, activity charts, and task tracking views — clean layout, fully responsive.",
    tags: ["React", "UI", "Responsive"],
    color: "#a78bfa",
    link: "",
  },
];
