import React from 'react';


import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Bazar-Dor",
    category: "WEB DEVELOPMENT",
    description:
      "An online grocery store project built to explore modern web development, product browsing, categories, and authentication.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    github:
      "https://github.com/Fayez-Ali-IT25026/Bazar-Dor-Online-Grocery-Store",
    demo: "https://bazar-dor-online-grocery-store-dhzu.vercel.app/",
    featured: true,
    symbol: "৳",
  },
  {
    number: "02",
    name: "Smart Library Management",
    category: "UNIVERSITY PROJECT",
    description:
      "A C/C++ university project focused on managing books, student records, borrowing, and returning library books.",
    tech: ["C++", "File Handling", "Data Structures"],
    github: "https://github.com/Fayez-Ali-IT25026/1st-Year-2nd-Semester-Final-Project",
    demo: "",
    featured: false,
    symbol: "▤",
  },
 
{
  number: "03",
  name: "FitLog",
  category: "WEB DEVELOPMENT",
  description:
    "A fitness tracking application built to practice React, TypeScript, API integration, and managing workout plans and saved items.",
  tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
  github: "https://github.com/Fayez-Ali-IT25026/Assignment__6",
  demo: "https://assignment-6-two-blue.vercel.app",
  featured: false,
  symbol: "↗",
},


]







const ProjectsSection = () => {
    return (
        <div>
             <section
      id="projects"
      className="relative overflow-hidden bg-[#070B08] px-5 py-24 text-white md:px-8 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#48FF91]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] text-[#48FF91]">
              03 // SELECTED WORK
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Ideas into
              <br />
              <span className="bg-gradient-to-r from-[#48FF91] to-[#C6FF00] bg-clip-text text-transparent">
                reality.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#9EB2A4]">
              A selection of projects where I practice my skills, explore
              technologies, and turn concepts into working applications.
            </p>
          </div>

          <Link
            href="https://github.com/Fayez-Ali-IT25026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#48FF91]/30 px-5 py-3 text-sm font-semibold text-[#48FF91] transition hover:bg-[#48FF91]/10"
          >
            More on GitHub <span>↗</span>
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group relative overflow-hidden rounded-2xl border bg-[#0A100C] transition duration-300 hover:-translate-y-1 hover:border-[#48FF91]/50 hover:shadow-[0_0_35px_rgba(72,255,145,0.06)] ${
                project.featured
                  ? "border-[#48FF91]/30 lg:col-span-2"
                  : "border-white/10"
              }`}
            >
              {/* Card accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#48FF91] transition-all duration-500 group-hover:w-full" />

              <div
                className={`grid gap-6 p-6 sm:p-8 ${
                  project.featured
                    ? "md:grid-cols-[0.8fr_1.2fr] md:items-center"
                    : ""
                }`}
              >
                {/* Project visual */}
                <div className="relative flex min-h-52 items-center justify-center overflow-hidden rounded-xl border border-[#48FF91]/15 bg-[radial-gradient(ellipse_at_center,_rgba(72,255,145,0.12),_transparent_65%),linear-gradient(135deg,#101C13,#050807)]">
                  <div className="absolute inset-3 rounded-lg border border-dashed border-[#48FF91]/15" />

                  <span className="absolute left-4 top-4 font-mono text-xs text-[#48FF91]/60">
                    PROJECT_{project.number}
                  </span>

                  <span className="relative font-mono text-6xl font-bold text-[#48FF91] transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(72,255,145,0.4)]">
                    {project.symbol}
                  </span>

                  <span className="absolute bottom-4 right-4 font-mono text-xs text-[#6B8977]">
                     BUILD IN PROGRESS
                  </span>
                </div>

                {/* Project details */}
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-[#48FF91]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold transition group-hover:text-[#48FF91] sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 leading-7 text-[#9EB2A4]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-[#B8CBBE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#48FF91] px-4 py-2.5 text-sm font-bold text-[#041009] transition hover:bg-[#C6FF00]"
                    >
                      View Source ↗
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#48FF91]/30 px-4 py-2.5 text-sm font-semibold text-[#48FF91] transition hover:bg-[#48FF91]/10"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="font-mono text-xs leading-6 text-[#718879]">
            {"// Every project is another opportunity to learn something new."}
          </p>
        </div>
      </div>
    </section>


        </div>
    );
};

export default ProjectsSection;