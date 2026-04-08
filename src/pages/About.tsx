/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Download, MapPin, Briefcase, Code2, Terminal as TerminalIcon, Cpu } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Languages",
      icon: <Code2 size={16} />,
      items: [
        { name: "TypeScript", desc: "Strong Typing & Architecture" },
        { name: "JavaScript (ES6+)", desc: "Dynamic Runtime Logic" },
        { name: "HTML5 / CSS3", desc: "Semantic Layouts & Styling" },
      ],
    },
    {
      category: "Frameworks",
      icon: <Cpu size={16} />,
      items: [
        { name: "React / Next.js", desc: "Component-Based Systems" },
        { name: "React Native", desc: "Cross-Platform Mobile" },
        { name: "Tailwind CSS", desc: "Utility-First Styling" },
      ],
    },
  ];

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-24 flex flex-col items-start gap-4">
        <span className="font-sans text-[10px] tracking-widest uppercase text-outline">Section 02 / Identity</span>
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none text-on-surface">The Craft of <br />Modern Systems.</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant font-body">
              As a specialized frontend engineer, I treat the web as a medium for technical monographs—highly curated, performant digital artifacts.
            </p>
            <p className="text-md leading-loose text-outline font-body max-w-lg">
              Based at the intersection of aesthetic minimalism and rigorous engineering, I build interfaces that prioritize structural clarity over decorative noise. My methodology focuses on deterministic UI states, semantic architecture, and high-fidelity user experiences.
            </p>
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                download 
                className="inline-flex items-center gap-3 bg-on-surface text-surface px-8 py-4 rounded-md font-headline font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity group"
              >
                Download Curriculum Vitae
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-square overflow-hidden bg-surface-container rounded-xl">
            <img
              src="https://picsum.photos/seed/portrait/800/800"
              alt="Developer Portrait"
              className="w-full h-full object-cover grayscale opacity-90 contrast-125 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
              <MapPin size={18} className="text-on-surface" />
              <span className="font-headline text-sm uppercase tracking-widest text-on-surface">Ho Chi Minh City, Vietnam</span>
            </div>
            <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
              <Briefcase size={18} className="text-on-surface" />
              <span className="font-headline text-sm uppercase tracking-widest text-on-surface">Frontend Developer @ StonePine</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-16">
          {skills.map((section, idx) => (
            <section key={section.category}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-outline-variant font-headline text-xl opacity-30">{idx + 1}</span>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface">{section.category}</h3>
                </div>
                <div className="h-[1px] flex-grow ml-8 bg-outline-variant/20"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((skill) => (
                  <div key={skill.name} className="p-6 bg-surface-container-low rounded-lg group hover:bg-surface-container transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="font-headline font-bold text-lg mb-1">{skill.name}</h4>
                    <p className="text-xs text-outline font-body uppercase tracking-tighter">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="text-outline-variant font-headline text-xl opacity-30">3</span>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface">Tools & Infrastructure</h3>
              </div>
              <div className="h-[1px] flex-grow ml-8 bg-outline-variant/20"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Git", "Postman", "AppCenter", "Zod", "PostgreSQL", "RESTful", "JSON", "XML"].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-surface-container text-on-surface-variant font-sans text-xs uppercase tracking-wider rounded-sm">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="text-outline-variant font-headline text-xl opacity-30">4</span>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface">Approach</h3>
              </div>
              <div className="h-[1px] flex-grow ml-8 bg-outline-variant/20"></div>
            </div>
            <div className="bg-on-surface text-surface p-8 rounded-lg font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 opacity-30">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <span className="text-gray-500 italic">// The Developer Philosophy</span><br />
              <span className="text-gray-400">const</span> <span className="text-surface">DevIdentity</span> = {"{"}<br />
              &nbsp;&nbsp;aesthetic: <span className="text-gray-300">"Swiss Minimalism"</span>,<br />
              &nbsp;&nbsp;performance: <span className="text-gray-300">"Deterministic"</span>,<br />
              &nbsp;&nbsp;accessibility: <span className="text-gray-400">true</span>,<br />
              &nbsp;&nbsp;render: () =&gt; <span className="text-gray-300">"Code as Literature"</span><br />
              {"}"};
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
