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
    image: "Images/SCREEN.png",
    description: "Redesigning the applicant tracking experience to optimize the 'Clicks-to-Decision' metric for high-volume recruiters.",
    link: "#",
    year: "2025",
    client: "HIREDLY",
    role: "UI/UX Intern",
    challenge: "Recruiters were suffering from 'Workflow Stagnation' due to ambiguous filters and high click costs. The existing system forced a high-rejection mental model that slowed down screening time by 40%.",
    solution: "We introduced a 'Zero Navigation' dashboard with AI Smart Ranking. By surfacing critical data fields (Age, Location, Position) and enabling Bulk Actions, we reduced screening time by 60%.",
    evidence: [
      {
        title: "The Scannability Problem",
        category: "Problem Evidence",
        imageAlt: "Candidate Row UI Comparison",
        imageUrl: "gifs/Namecard New.gif",
        beforeImageUrl: "gifs/Namecard Old.gif",
        caption: "Transitioning from hidden data to surfacing Age, Location, and Role/Duration upfront to satisfy the recruiter's primary filters."
      },
      {
        title: "AI Smart Ranking",
        category: "Discovery Accelerator",
        imageAlt: "Smart Ranking Activation",
        imageUrl: "gifs/SmartRank.gif",
        caption: "Moving away from manual sorting. The AI Smart Ranking auto-sorts the list by match score, allowing recruiters to focus on top-tier talent instantly upon activation."
      },
      {
        title: "Document-First Interaction",
        category: "Workflow Optimization",
        imageAlt: "One-click resume overlay",
        imageUrl: "gifs/Resume New.gif",
        beforeImageUrl: "gifs/Resume Old.gif",
        caption: "The 'Document-First' approach. Clicking a candidate bypasses the profile view to show the resume immediately, honoring the recruiter's need to verify credentials as the source of truth."
      },
      {
        title: "Bulk Select & Move",
        category: "Mass Action",
        imageAlt: "Bulk selection and status change bar",
        imageUrl: "gifs/BulkMove.gif",
        caption: "Eliminating 'Interaction Cost.' Users can now select multiple candidates to move them through the pipeline in one click, achieving the 'Zero Navigation' goal."
      },
      {
        title: "Trust & Reliability",
        category: "System Evidence",
        imageAlt: "Filter chip bar and blacklist warning",
        imageUrl: "gifs/New Filter.gif",
        beforeImageUrl: "gifs/Old filter.gif",
        caption: "Restoring trust with a persistent Filter Chip Bar."
      }
    ],
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
    image: "Images/Bus Tracker.png",
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
    image: "Images/WIP.jpg",
    description: "Designing a dedicated internship application page to streamline the student hiring process and improve the internship discovery experience.",
    link: "wip",
    year: "2025",
    client: "HIREDLY",
    role: "UI/UX Intern",
    challenge: "Students struggle to find relevant internship opportunities efficiently.",
    solution: "Creating a dedicated page that simplifies internship browsing and application workflows."
  }
];