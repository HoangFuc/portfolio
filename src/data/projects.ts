/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  size: "large" | "medium" | "small";
  fullDescription: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  techStack: {
    name: string;
    icon: string; // We'll map these to Lucide icons in the component
  }[];
  demoUrl?: string;
  repoUrl?: string;
  completionDate: string;
  quote?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "ĐẦM SEN WATER PARK - F&B POS",
    category: "Mobile / POS",
    tags: ["React Native", "VNPAY", "SQLite"],
    description: "Led development of POS & Self-Order kiosks for handling 1,000+ daily orders. Integrated VNPAY and built warehouse management module.",
    image: "https://picsum.photos/seed/pos/800/600",
    size: "large",
    fullDescription: "A comprehensive F&B management system designed for high-traffic amusement parks, focusing on reliability and speed.",
    challenge: "Rebuilding a high-traffic F&B POS platform that suffered from slow transaction times and unreliable offline sync. The objective was to create a 'silent' user interface—one that doesn't scream for attention but facilitates frictionless transactions through pure technical efficiency.",
    solution: "Leveraged React Native and SQLite to ensure 100% uptime during network outages. By moving heavy logic to local storage, we achieved a near-instantaneous transaction speed, reducing order-to-serve time by 25%.",
    results: [
      { label: "1,000+", value: "1,000+", sublabel: "Daily Orders Handled" },
      { label: "-25%", value: "-25%", sublabel: "Order-to-Serve Time" },
      { label: "<0.5%", value: "<0.5%", sublabel: "Crash Rate" }
    ],
    techStack: [
      { name: "React Native", icon: "Code2" },
      { name: "SQLite", icon: "Database" },
      { name: "VNPAY", icon: "Rocket" },
      { name: "ESC/POS", icon: "Palette" }
    ],
    completionDate: "Feb 2026",
    quote: "The goal wasn't just to make it fast. It was to make the infrastructure invisible so the content could take center stage.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "02",
    title: "VNSHOP BACKOFFICE",
    category: "Web / Admin",
    tags: ["ReactJS", "REST API"],
    description: "Designed and developed responsive BackOffice UI for merchants to monitor real-time sales and stock levels.",
    image: "https://picsum.photos/seed/admin/800/600",
    size: "small",
    fullDescription: "A robust administrative dashboard for e-commerce merchants to manage their business operations efficiently.",
    challenge: "Merchants needed a way to track complex inventory movements and sales data across multiple channels in real-time without being overwhelmed by data noise.",
    solution: "Developed a modular dashboard architecture using ReactJS and a custom UI kit. Implemented advanced data visualization and real-time notification systems.",
    results: [
      { label: "500+", value: "500+", sublabel: "Active Merchants" },
      { label: "Real-time", value: "Live", sublabel: "Inventory Tracking" },
      { label: "Modular", value: "100%", sublabel: "UI Customization" }
    ],
    techStack: [
      { name: "ReactJS", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "REST API", icon: "Database" },
      { name: "Chart.js", icon: "Rocket" }
    ],
    completionDate: "Dec 2025",
    quote: "Efficiency is the byproduct of well-organized information architecture.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "03",
    title: "VIETNAM AIRLINES TICKETING",
    category: "Integration",
    tags: ["XML API", "GDS"],
    description: "Parsed GDS XML (Galileo/Amadeus) for flight search and booking. Handled rate limits and ensured 100% PNR accuracy.",
    image: "https://picsum.photos/seed/flight/800/600",
    size: "medium",
    fullDescription: "A high-precision integration layer between modern web frontends and legacy Global Distribution Systems (GDS).",
    challenge: "Legacy GDS systems use complex XML structures and strict rate limits. Ensuring 100% accuracy in Passenger Name Records (PNR) while maintaining high performance was critical.",
    solution: "Built a robust middleware layer to parse and normalize GDS data. Implemented intelligent caching and retry mechanisms to handle rate limits and network instability.",
    results: [
      { label: "100%", value: "100%", sublabel: "PNR Accuracy" },
      { label: "Sub-second", value: "<1s", sublabel: "Search Latency" },
      { label: "Robust", value: "99.9%", sublabel: "Uptime" }
    ],
    techStack: [
      { name: "Node.js", icon: "Code2" },
      { name: "XML/SOAP", icon: "Database" },
      { name: "Redis", icon: "Rocket" },
      { name: "Amadeus API", icon: "Palette" }
    ],
    completionDate: "Oct 2025",
    quote: "In the world of ticketing, precision is not a feature; it's the foundation.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "04",
    title: "TICKETING & CHECK-IN APP",
    category: "Mobile",
    tags: ["React Native", "AppCenter"],
    description: "Built QR check-in mobile app for park entry. Optimized performance, boosting check-in efficiency by 70%.",
    image: "https://picsum.photos/seed/checkin/800/600",
    size: "medium",
    fullDescription: "A fast and reliable mobile application for park staff to handle visitor entry and ticket validation.",
    challenge: "Long queues at park entrances due to slow manual check-ins and poor network connectivity in outdoor areas.",
    solution: "Developed a React Native app with high-performance QR scanning capabilities and offline validation logic. Optimized the UI for one-handed operation by staff.",
    results: [
      { label: "+70%", value: "70%", sublabel: "Check-in Efficiency" },
      { label: "Instant", value: "<200ms", sublabel: "QR Scan Time" },
      { label: "Offline", value: "100%", sublabel: "Sync Reliability" }
    ],
    techStack: [
      { name: "React Native", icon: "Code2" },
      { name: "Vision Camera", icon: "Rocket" },
      { name: "AppCenter", icon: "Database" },
      { name: "TypeScript", icon: "Palette" }
    ],
    completionDate: "Aug 2025",
    quote: "The best technology is the one that gets out of the way of the human experience.",
    demoUrl: "#",
    repoUrl: "#"
  }
];
