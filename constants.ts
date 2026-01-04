import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ATS Redesign",
    category: "Product Design / AI",
    image: "Images/SCREEN.webp",
    description: "Redesigning the applicant tracking experience to optimize the 'Clicks-to-Decision' metric for high-volume recruiters.",
    link: "#",
    year: "2025",
    client: "HIREDLY",
    role: "UI/UX Intern",
    challenge: "High-volume recruiters at Hiredly were experiencing significant workflow friction. Critical candidate information was buried behind multiple clicks, forcing them to open individual profiles just to check basic qualifications. The ambiguous filtering system created distrust, with recruiters unsure if their filters were even working. These pain points created a frustrating 'click-heavy' experience that slowed screening by 40%.",
    solution: "We redesigned the entire screening workflow around a 'Zero Navigation' philosophy. Critical data fields (Age, Location, Position) were surfaced directly in the candidate list, eliminating unnecessary clicks. AI Smart Ranking automatically prioritizes top matches, while Document-First interaction lets recruiters verify credentials instantly. Bulk actions enable pipeline management at scale, and a persistent Filter Chip Bar restores system transparency.",
    evidence: [
      {
        title: "Hidden Information Slows Decisions",
        category: "Problem Evidence",
        imageAlt: "Candidate Row UI Comparison - Before and After",
        imageUrl: "gifs/Namecard New.gif",
        beforeImageUrl: "gifs/Namecard Old.gif",
        caption: "Previously, recruiters had to click into each profile to see Age, Location, and Position—their primary screening criteria. The redesigned candidate row surfaces this critical information upfront, enabling instant visual scanning without navigation."
      },
      {
        title: "Filter Ambiguity Creates Distrust",
        category: "Problem Evidence",
        imageAlt: "Filter interface comparison showing old vs new filter design",
        imageUrl: "gifs/New Filter.gif",
        beforeImageUrl: "gifs/Old filter.gif",
        caption: "The old filter system provided no visual confirmation of active filters, leading recruiters to question whether their selections were actually applied. The new persistent Filter Chip Bar makes all active filters visible at a glance, restoring system trust."
      },
      {
        title: "AI Smart Ranking",
        category: "Solution Feature",
        imageAlt: "AI Smart Ranking activation showing candidate list re-sorting",
        imageUrl: "gifs/SmartRank.gif",
        caption: "Instead of manual sorting, recruiters can activate AI Smart Ranking to automatically prioritize candidates by match score. This shifts focus from searching to evaluating top-tier talent first."
      },
      {
        title: "Document-First Interaction",
        category: "Solution Feature",
        imageAlt: "One-click resume overlay - Before and After workflow",
        imageUrl: "gifs/Resume New.gif",
        beforeImageUrl: "gifs/Resume Old.gif",
        caption: "The new interaction model recognizes that resumes are the source of truth. Clicking a candidate now shows their resume immediately in an overlay, bypassing the profile view entirely and reducing clicks-to-decision."
      },
      {
        title: "Bulk Select & Move",
        category: "Solution Feature",
        imageAlt: "Bulk selection interface with pipeline status bar",
        imageUrl: "gifs/BulkMove.gif",
        caption: "High-volume screening requires batch operations. Recruiters can now select multiple candidates and move them through the pipeline in one action, achieving true zero-navigation workflow for mass decisions."
      }
    ],
    impact: {
      description: "The redesigned ATS significantly improved recruiter efficiency and satisfaction, with measurable gains in screening speed and workflow confidence.",
      metrics: [
        {
          value: "60%",
          label: "Faster Screening",
          description: "Reduction in time-to-decision per candidate"
        },
        {
          value: "75%",
          label: "Fewer Clicks",
          description: "Reduction in clicks needed for common tasks"
        },
        {
          value: "100%",
          label: "Filter Transparency",
          description: "Recruiters now trust the filtering system"
        }
      ]
    },
    process: [
      {
        title: "Discovery & Insights",
        steps: [
          { title: "User Research", description: "Interviewed stakeholders and analyzed professional recruiting communities to understand the 'High-Rejection' mental model." },
          { title: "Pain Point Identification", description: "Mapping struggles like 'Workflow Stagnation' and 'Filter Ambiguity'." },
          { title: "Competitive Analysis", description: "Auditing top ATS platforms to benchmark screening speed." },
          { title: "Data Strategy", description: "Sorting and prioritizing critical fields (Age, Location, Position) for the row redesign." }
        ]
      },
      {
        title: "Ideation & Intelligence",
        steps: [
          { title: "Wireframing", description: "Rapid low-fidelity iterations focusing on 'Document-First' layouts." },
          { title: "Flow Creation", description: "Mapping the end-to-end journey from application to hire." },
          { title: "AI Prototyping", description: "Built an interactive prototype in **Google AI Studio** to simulate and test the AI Smart Ranking logic." },
          { title: "Dev Collaboration", description: "Syncing with engineers early to ensure the feasibility of Bulk Actions and AI Ranking." }
        ]
      },
      {
        title: "Validation & Pivot",
        steps: [
          { title: "Stakeholder Presentation", description: "Aligning the 'Zero Navigation' goal with business objectives." },
          { title: "User Testing", description: "Gathering feedback from recruiters on the initial prototype." },
          { title: "The Strategic Pivot", description: "Based on testing, removed the 'Similar Candidate' feature (high cognitive load) and added 'Bulk Select & Move' (high utility).", highlight: true }
        ]
      },
      {
        title: "Delivery & Hand-off",
        steps: [
          { title: "Figma Hand-off", description: "Delivering high-fidelity UI and documentation for implementation." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Bus Siswa Mobile App",
    category: "Mobile App Design",
    image: "Images/Bus Tracker.webp",
    description: "A self-initiated case study addressing the pain points of campus bus tracking. Designed to help students locate and track campus buses in real-time, reducing wait times and improving daily commute experience.",
    link: "https://www.behance.net/gallery/234733257/UiTM-Bus-Tracker-UIUX-Case-Study",
    year: "2024",
    client: "GreenLife Inc.",
    role: "UI/UX Designer",
    challenge: "Motivating users to track daily habits is difficult. The challenge was to transform a mundane data-entry task into an engaging, rewarding experience without feeling like a chore.",
    solution: "We designed a gamified experience using micro-interactions and haptic feedback. A 'growth' metaphor was used where the user's virtual garden grows as they log sustainable habits, creating an emotional connection to the data."
  },
  {
    id: 3,
    title: "Hiredly Internship Bank",
    category: "Product Design",
    image: "Images/WIP.webp",
    description: "Designing a dedicated internship application page to streamline the student hiring process and improve the internship discovery experience.",
    link: "wip",
    year: "2025",
    client: "HIREDLY",
    role: "UI/UX Intern",
    challenge: "Students struggle to find relevant internship opportunities efficiently.",
    solution: "Creating a dedicated page that simplifies internship browsing and application workflows."
  }
];