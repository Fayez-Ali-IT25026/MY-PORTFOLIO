import React from 'react';
import Link from 'next/link';



const highlights = [
  {
    number: "01",
    title: "Learn",
    description:
      "Strengthening my foundations in programming, web technologies, and problem-solving.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turning what I learn into practical projects for my portfolio and university.",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Improving my coding skills, exploring new technologies, and learning from challenges.",
  },
];






const AboutSection = () => {
    return (
        <div>
            <section
      id="about"
      className="relative overflow-hidden bg-[#070B08] px-5 py-24 text-white md:px-8 lg:py-32"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(72,255,145,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(72,255,145,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="font-mono text-sm tracking-[0.25em] text-[#48FF91]">
            01 // ABOUT ME
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            More than just
            <br />
            <span className="bg-gradient-to-r from-[#48FF91] to-[#C6FF00] bg-clip-text text-transparent">
              lines of code.
            </span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#48FF91]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Story */}
          <div>
            <div className="rounded-2xl border border-[#48FF91]/20 bg-[#0A120D]/80 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#48FF91]/10 font-mono text-sm text-[#48FF91]">
                  {"</>"}
                </span>

                <div>
                  <p className="font-mono text-sm text-white">
                    my_journey.ts
                  </p>
                  <p className="mt-1 text-xs text-[#668574]">
                    A work in progress — always learning
                  </p>
                </div>
              </div>

              <p className="text-base leading-8 text-[#B1C2B6]">
                I&apos;m an Information and Communication Technology (ICT)
                Engineering student at Mawlana Bhashani Science and Technology
                University (MBSTU), Bangladesh.
              </p>

              <p className="mt-5 text-base leading-8 text-[#B1C2B6]">
                I&apos;m exploring web development with React, Next.js,
                TypeScript, and Tailwind CSS while improving my understanding
                of Data Structures and Algorithms. I enjoy learning by building
                projects and solving problems step by step.
              </p>

              <p className="mt-5 text-base leading-8 text-[#B1C2B6]">
                My goal is to become a capable developer who can turn ideas
                into useful, reliable digital products. I know there&apos;s
                always more to learn, and that&apos;s what keeps me moving
                forward.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="rounded-lg bg-[#48FF91] px-5 py-3 text-sm font-bold text-[#041009] transition hover:bg-[#C6FF00]"
                >
                  See My Projects ↗
                </Link>

                <a
                  href="https://github.com/Fayez-Ali-IT25026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#48FF91]/30 px-5 py-3 text-sm font-semibold text-[#BDE8CA] transition hover:border-[#48FF91] hover:text-[#48FF91]"
                >
                  GitHub Profile ↗
                </a>
              </div>
            </div>
          </div>

          {/* Learn / Build / Grow cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-white/10 bg-[#0A100C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#48FF91]/40 hover:bg-[#0D1810]"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-sm text-[#48FF91]/60">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold transition group-hover:text-[#48FF91]">
                      {item.title}
                      <span className="text-[#48FF91]">.</span>
                    </h3>

                    <p className="mt-3 leading-7 text-[#91A69A]">
                      {item.description}
                    </p>
                  </div>

                  <span className="ml-auto font-mono text-xl text-[#48FF91]/40 transition group-hover:text-[#48FF91]">
                    ↗
                  </span>
                </div>
              </article>
            ))}

            {/* Student identity card */}
            <div className="rounded-2xl border border-[#48FF91]/25 bg-gradient-to-br from-[#102419] to-[#080D0A] p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-[#48FF91]">
                CURRENT IDENTITY
              </p>

              <h3 className="mt-3 text-xl font-bold">
                ICT Engineering Student
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#9EB5A5]">
                MBSTU · Bangladesh
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-[#48FF91]">
                <span className="h-2 w-2 rounded-full bg-[#48FF91]" />
                LEARNING. BUILDING. IMPROVING.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default AboutSection;