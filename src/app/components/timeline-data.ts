import i1Image from "../../imports/mockup_copy-1.png";
import khoroshero from "../../imports/khoroshero.png";
import innspirehero from "../../imports/innspirebanner.png";


export const eras = [
  {
    id: "freelance",
    years: "2017 — 2021",
    shortYears: "'17 – '21",
    startYear: 2017,
    endYear: 2021,
    duration: 4,
    role: "Freelance UX Designer",
    companies: "Unicorn Startups",
    headline: "Designing across industries to simplify complex problems — one client at a time.",
    summary:
      "Four years. Seven clients. Countless problems worth solving. Working across industries taught me how to think fast, design smart and deliver work that moved the needle - building the foundation that every role since has stood on.",
    projectsLabel: "clients",
    projectsCount: 7,
    color: "#8fa41a",
    darkColor: "#8fa41a",
    lightBg: "#f0f3da",
    midBg: "#c6d08d",
    darkBg: "#8fa41a",
    textDark: "#8fa41a",
    projects: [
      {
        id: "f1",
        cardTitle: "Cutting through the noise - the dashboard that saved hours of review management for hoteliers",
        cardDescription: "How I turned one of hospitality's biggest frustrations into an award winning product for Innspire, with an AI based reputation management tool.",
        title: "Cutting through the noise in hotel management",
        client: "Innspire",
        description: "The dashboard that saved 30+ hrs of manual work for hoteliers and turned hospitality's biggest frustrations into an AI powered reputation management platform that won the prestigious HTNG TechOvation award.",
        image: innspirehero,
        team: "Solo designer",
        projectTypes: "Product Design, UX Research",
      },
    ],
  },
  {
    id: "khoros",
    years: "2021 — 2022",
    shortYears: "'21 – '22",
    startYear: 2021,
    endYear: 2023,
    duration: 1.5,
    role: "Design System Architect",
    companies: "Khoros",
    headline: "Building the design language that all products speak — at an enterprise SaaS platform.",
    summary:
      "Khoros had multiple products with no shared design language. I was responsible for building and maintaining the component library, design tokens and documentation that became the single source of truth for the entire platform.",
    projectsLabel: "components",
    projectsCount: 80,
    color: "#3b3bdb",
    darkColor: "#3b3bdb",
    lightBg: "#eef0fd",
    midBg: "#ede9fe",
    darkBg: "#9b9eef",
    textDark: "#3b3bdb",
    projects: [
      {
        id: "k1",
        cardTitle: "From isolated products to a single source of truth - the decisions that shaped Khoros's design foundations",
        cardDescription: "How I challenged existing assumptions and aligned product teams around shared patterns and scalable, reusable components",
        title: "From isolated products to a single source of truth",
        client: "Khoros",
        description: "The decisions that shaped Khoros's design foundations, challenging existing assumptions - and aligning teams around scalable systems and reusable components.",
        image: khoroshero,
        team: "2 designers, 1 developer",
        projectTypes: "Design Systems, Component Library",
      },
    ],
  },
  {
    id: "infineon",
    years: "2023 — Present",
    shortYears: "'23 – '26",
    startYear: 2023,
    endYear: 2026,
    duration: 3.5,
    role: "Senior UX Strategist",
    companies: "Infineon Technologies",
    headline: "Scaling a digital-first culture inside a hardware giant — from the ground up.",
    summary:
      "Infineon was a hardware powerhouse with no digital design culture. As the only UX team member based in India, I collaborated with a global team for 3 years across 12+ projects to help build that culture.",
    projectsLabel: "projects",
    projectsCount: 16,
    color: "#0a8276",
    darkColor: "#0C8175",
    lightBg: "#eef9f8",
    midBg: "#dff4f3",
    darkBg: "#0a8276",
    textDark: "#0a8276",
    projects: [
      {
        id: "i1",
        cardTitle: "Inside a Digital Transformation - the story behind designing across an evolving enterprise ecosystem",
        cardDescription: "How I led 15+ UX projects and shaped connected journeys spanning AI experiences, operational workflows and support platforms.",
        title: "Inside a Digital Transformation",
        client: "Infineon Technologies",
        description: "The story behind leading and strategizing 12+ redesigns inside an evolving enterprise ecosystem — and watching UX grow from execution into strategy.",
        image: i1Image,
        team: "Global UX team + cross-functional stakeholders",
        projectTypes: "UX Strategy, Ecosystem Design, AI UX",
      },
    ],
  },
];

export type Era = typeof eras[number];
export type Project = Era["projects"][number];
