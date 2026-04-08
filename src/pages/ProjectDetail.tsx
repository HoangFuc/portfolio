/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Terminal, ArrowUpRight, Code2, Rocket, Palette, Database, ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

const iconMap: Record<string, any> = {
  Code2: Code2,
  Database: Database,
  Rocket: Rocket,
  Palette: Palette,
};

export default function ProjectDetail({ id }: { id?: string }) {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-32 pb-32 px-8 max-w-screen-2xl mx-auto text-center">
        <h1 className="text-4xl font-headline font-bold mb-8">Project Not Found</h1>
        <a href="/projects" className="text-on-surface border-b border-on-surface pb-1">
          Back to Projects
        </a>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32">
      <header className="px-8 max-w-screen-2xl mx-auto mb-20">
        <div className="mb-8">
          <a href="/projects" className="group flex items-center gap-2 text-outline hover:text-on-surface transition-colors text-xs uppercase tracking-widest">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="text-outline uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">Case Study {project.id}</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-on-surface uppercase">
              {project.title.split(' - ')[0]}<br />{project.title.split(' - ')[1] || ''}
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <p className="font-headline text-lg italic text-outline">{project.category}</p>
            <p className="font-sans text-xs uppercase tracking-widest text-outline-variant">Completed: {project.completionDate}</p>
          </div>
        </div>
        <div className="w-full aspect-[21/9] overflow-hidden rounded-xl bg-surface-container">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <div className="px-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8 space-y-24">
          <section>
            <div className="flex items-start gap-8">
              <span className="text-outline-variant font-headline text-4xl font-light opacity-30">01</span>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-8">The Challenge</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg font-light mb-6">
                  {project.challenge}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low p-12 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Terminal className="text-outline-variant w-16 h-16 opacity-20" />
            </div>
            <div className="flex items-start gap-8 relative z-10">
              <span className="text-outline-variant font-headline text-4xl font-light opacity-30">02</span>
              <div className="w-full">
                <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Solution</h2>
                <div className="space-y-8">
                  <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-8">
              <span className="text-outline-variant font-headline text-4xl font-light opacity-30">03</span>
              <div className="w-full">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {project.results.map((result, index) => (
                    <div key={index} className="bg-surface p-8 rounded-lg border-l-4 border-on-surface shadow-sm">
                      <p className="text-4xl font-bold font-headline mb-2">{result.value}</p>
                      <p className="text-xs uppercase tracking-widest text-outline">{result.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="md:col-span-4">
          <div className="sticky top-32 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-outline mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => {
                  const Icon = iconMap[tech.icon] || Code2;
                  return (
                    <div key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-sm">
                      <Icon size={14} />
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-12 border-t-2 border-surface-container">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-outline mb-6">Engagement</h4>
              <div className="space-y-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full p-4 bg-on-surface text-surface rounded-lg hover:scale-[0.98] transition-transform">
                    <span className="font-headline text-sm tracking-widest uppercase">Live Demo</span>
                    <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full p-4 bg-surface-container text-on-surface rounded-lg hover:bg-outline-variant/10 transition-colors">
                    <span className="font-headline text-sm tracking-widest uppercase">View Repository</span>
                    <Code2 className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
            {project.quote && (
              <div className="p-8 bg-surface-container-low rounded-xl">
                <p className="font-body text-sm italic text-on-surface-variant leading-relaxed">
                  "{project.quote}"
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
