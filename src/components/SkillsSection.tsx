import React from 'react';


const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building modern, responsive web interfaces.",
    skills: [
      { name: "HTML", level: "Learning" },
      { name: "CSS", level: "Learning" },
      { name: "JavaScript", level: "Learning" },
      { name: "React", level: "Learning" },
      { name: "Next.js", level: "Learning" },
      { name: "TypeScript", level: "Learning" },
      { name: "Tailwind CSS", level: "Learning" },
    ],
    symbol: "</>",
  },
  {
    number: "02",
    title: "Programming & CS",
    description: "Strengthening programming and problem-solving foundations.",
    skills: [
      { name: "C", level: "Learning" },
      { name: "C++", level: "Learning" },
      { name: "Data Structures", level: "Learning" },
      { name: "Algorithms", level: "Learning" },
    ],
    symbol: "{ }",
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Tools I use while developing and managing projects.",
    skills: [
      { name: "Git", level: "Learning" },
      { name: "GitHub", level: "Learning" },
      { name: "VS Code", level: "Learning" },
      { name: "Vercel", level: "Learning" },
    ],
    symbol: ">_",
  },
];







const SkillsSection = () => {
    return (
        <div>
            <section
      id="skills"
      className="relative overflow-hidden bg-[#050807] px-5 py-24 text-white md:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#48FF91]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="font-mono text-sm tracking-[0.25em] text-[#48FF91]">
            02 // TECH ARSENAL
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Tools of the
            <br />
            <span className="bg-gradient-to-r from-[#48FF91] to-[#C6FF00] bg-clip-text text-transparent">
              trade.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#9EB2A4]">
            The technologies and tools I&apos;m exploring to build better
            projects, strengthen my foundations, and grow as a developer.
          </p>
        </div>

        {/* Skills dashboard */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group relative overflow-hidden rounded-2xl border border-[#48FF91]/15 bg-[#09110C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#48FF91]/50 hover:shadow-[0_0_35px_rgba(72,255,145,0.07)] sm:p-7"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#48FF91] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs tracking-widest text-[#48FF91]/70">
                    MODULE_{group.number}
                  </p>

                  <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                    {group.title}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#48FF91]/20 bg-[#48FF91]/[0.06] font-mono text-lg text-[#48FF91] transition group-hover:bg-[#48FF91]/15">
                  {group.symbol}
                </div>
              </div>

              <p className="mt-4 min-h-12 text-sm leading-6 text-[#8FA397]">
                {group.description}
              </p>

              <div className="my-6 h-px bg-white/[0.08]" />

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-[#C1D2C7] transition hover:border-[#48FF91]/40 hover:bg-[#48FF91]/[0.06] hover:text-[#48FF91]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#48FF91]/70" />
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="font-mono text-xs text-[#718879]">
                  STATUS
                </span>

                <span className="flex items-center gap-2 font-mono text-xs text-[#48FF91]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#48FF91]" />
                  IN PROGRESS
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#48FF91]/20 bg-gradient-to-r from-[#0D1C12] to-[#080D0A] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#48FF91]">
               DEVELOPER MINDSET
            </p>

            <h3 className="mt-3 text-xl font-bold sm:text-2xl">
              Always learning. Always building.
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#91A69A]">
              Skills grow through practice, projects, and persistence.
            </p>
          </div>

          <span className="whitespace-nowrap font-mono text-sm text-[#48FF91]">
            learn() → build() → repeat()
          </span>
        </div>
      </div>
    </section>
        </div>
    );
};

export default SkillsSection;