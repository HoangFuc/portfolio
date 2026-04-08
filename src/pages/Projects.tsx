/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  const categories = ["All", "Mobile", "Web", "Integration"];

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-outline mb-4">Curated Artifacts</p>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none mb-6">SELECTED<br />PROJECTS.</h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-lg">
              A systematic exploration of frontend architectures, focusing on performance, typography, and mathematical precision.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-outline">
            <span>Filter:</span>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`transition-colors hover:text-on-surface ${filter === cat ? "text-on-surface border-b border-on-surface" : ""}`}
              >
                {cat === "All" ? "All Works" : cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={project.id}
              className={`${
                project.size === "large" ? "md:col-span-8" : project.size === "small" ? "md:col-span-4" : "md:col-span-6"
              }`}
            >
              <a
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden bg-surface-container-low rounded-lg transition-all duration-500 hover:-translate-y-1 block h-full"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between h-[calc(100%-56.25%)]">
                  <div>
                    <div className="flex gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] rounded-sm font-sans uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-headline font-bold tracking-tight mb-3">{project.title}</h3>
                    <p className="text-on-surface-variant font-body text-sm max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <span className="text-outline group-hover:text-on-surface transition-colors text-4xl">↗</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
