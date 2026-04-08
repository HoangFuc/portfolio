/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Mail, MapPin, Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-24 lg:w-2/3">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-outline mb-4 block">Inquiries</span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[0.9]">
          Let's architect <br />
          <span className="text-outline-variant">something meaningful.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <section className="lg:col-span-7">
          <div className="bg-surface-container-low p-10 lg:p-16 rounded-xl relative overflow-hidden min-h-[600px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-outline-variant/10 rounded-full -mr-16 -mt-16"></div>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="relative z-10 space-y-12"
                >
                  <div className="group">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-on-surface-variant block mb-2" htmlFor="name">Full Name</label>
                    <input
                      required
                      className="w-full bg-transparent border-b-2 border-outline-variant/20 py-4 focus:outline-none focus:border-on-surface transition-colors text-lg font-headline placeholder:text-outline-variant"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Type your name..."
                      type="text"
                    />
                  </div>
                  <div className="group">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-on-surface-variant block mb-2" htmlFor="email">Email Address</label>
                    <input
                      required
                      className="w-full bg-transparent border-b-2 border-outline-variant/20 py-4 focus:outline-none focus:border-on-surface transition-colors text-lg font-headline placeholder:text-outline-variant"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="phucdev.hoang@gmail.com"
                      type="email"
                    />
                  </div>
                  <div className="group">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-on-surface-variant block mb-2" htmlFor="message">Project Brief</label>
                    <textarea
                      required
                      className="w-full bg-transparent border-b-2 border-outline-variant/20 py-4 focus:outline-none focus:border-on-surface transition-colors text-lg font-headline resize-none placeholder:text-outline-variant"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project vision..."
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full md:w-auto bg-on-surface text-surface px-12 py-5 rounded-md font-headline font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-4 hover:opacity-90 transition-opacity group"
                    type="submit"
                  >
                    Transmit Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <CheckCircle2 size={80} className="text-on-surface" />
                  </div>
                  <h2 className="text-4xl font-headline font-bold tracking-tight">Message Transmitted.</h2>
                  <p className="text-on-surface-variant text-lg max-w-md mx-auto font-light">
                    Your brief has been received. I will analyze the coordinates and respond within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-on-surface border-b border-on-surface pb-1 font-sans text-xs uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <aside className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-16">
            <div>
              <h3 className="font-headline text-2xl font-bold tracking-tight mb-8">Direct Access</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container rounded">
                    <Mail size={18} className="text-on-surface" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-outline mb-1">Electronic Mail</p>
                    <a className="text-lg font-headline font-medium hover:underline underline-offset-4 decoration-outline" href="mailto:phucdev.hoang@gmail.com">
                      phucdev.hoang@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container rounded">
                    <MapPin size={18} className="text-on-surface" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-outline mb-1">Current Coordinates</p>
                    <p className="text-lg font-headline font-medium">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl font-bold tracking-tight mb-8">Ecosystem</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "GitHub", icon: <Github size={16} />, url: "#" },
                  { name: "LinkedIn", icon: <Linkedin size={16} />, url: "#" },
                  { name: "Read.cv", icon: <FileText size={16} />, url: "#" },
                  { name: "Twitter", icon: <Twitter size={16} />, url: "#" },
                ].map((social) => (
                  <a key={social.name} className="flex items-center justify-between p-4 bg-surface-container rounded hover:bg-surface-container-low transition-colors group" href={social.url}>
                    <div className="flex items-center gap-3">
                      {social.icon}
                      <span className="font-headline font-medium">{social.name}</span>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform text-outline">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative aspect-video lg:aspect-square overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/seed/studio/800/800"
              alt="Minimalist desk setup"
              className="w-full h-full object-cover grayscale brightness-90 contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-on-surface/10 mix-blend-overlay"></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
