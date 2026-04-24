/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-12 gap-y-12 md:gap-y-0">
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-outline flex items-center gap-2">
              <span className="w-8 h-[1px] bg-outline-variant"></span>
              Frontend Developer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-headline font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-on-surface"
          >
            TECHNICAL<br />
            <span className="text-outline-variant">MONOGRAPH</span><span className="text-on-surface">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-20 md:ml-[20%] max-w-lg"
          >
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Engineering performant web experiences through the lens of Swiss minimalism and rigorous code standards.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <a
                href="/projects"
                className="group flex items-center gap-4 bg-on-surface text-surface px-8 py-4 rounded-md font-headline font-medium tracking-tight hover:opacity-90 transition-all"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="font-sans text-sm uppercase tracking-widest border-b-2 border-on-surface pb-1 hover:text-outline transition-colors"
              >
                The Methodology
              </a>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-4 flex items-end justify-end relative h-[400px] md:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 md:-right-8 bg-surface-container-low rounded-xl overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/tech/800/1000"
              alt="Minimalist abstract render"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 bg-on-surface p-8 w-full md:w-auto -mb-12 md:-ml-24 shadow-2xl rounded-sm"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700 opacity-30"></div>
            </div>
            <code className="font-mono text-sm text-surface block leading-relaxed">
              <span className="text-gray-400">const</span> developer = {"{"} <br />
              &nbsp;&nbsp;focus: <span className="text-gray-300">'Performance'</span>,<br />
              &nbsp;&nbsp;stack: [<span className="text-gray-300">'React'</span>, <span className="text-gray-300">'TypeScript'</span>],<br />
              &nbsp;&nbsp;aesthetic: <span className="text-gray-300">'Technical Mono'</span><br />
              {"}"};
            </code>
          </motion.div>
        </div>
      </section>

      <section className="mt-40 max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects[0] && (
            <div className="md:col-span-2 group relative bg-surface-container p-8 min-h-[400px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:scale-110 transition-transform duration-700">
                <img
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10">
                <span className="font-headline text-4xl font-light text-outline-variant">01</span>
                <div className="mt-24 max-w-xs">
                  <h3 className="font-headline font-bold text-3xl uppercase tracking-tight mb-4">{featuredProjects[0].title.split(' - ')[0]}</h3>
                  <p className="text-on-surface-variant text-base leading-relaxed mb-6">{featuredProjects[0].description}</p>
                  <a href={`/projects/${featuredProjects[0].id}`} className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-on-surface font-bold group/link">
                    Case Study
                    <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {featuredProjects[1] && (
            <div className="group relative bg-surface-container-low p-8 min-h-[400px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start">
                <span className="font-headline text-4xl font-light text-outline-variant">02</span>
                <Terminal className="text-outline" size={24} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-2">{featuredProjects[1].title.split(' - ')[0]}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{featuredProjects[1].description}</p>
                <a href={`/projects/${featuredProjects[1].id}`} className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-on-surface font-bold group/link">
                  View Project
                  <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
