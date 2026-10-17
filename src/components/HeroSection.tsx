import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myPic from "@/assets/mypic5.png";



const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "DSA",
];

const HeroSection = () => {
    return (
        <div>
            <section
      id="home"
      className="relative isolate overflow-hidden bg-[#050807] text-white"
    >
      {/* Cyber grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(72,255,145,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(72,255,145,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* Ambient neon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#00FF88]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#39FF14]/5 blur-[100px]"
      />

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
        {/* Left: Introduction */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#48FF91]/20 bg-[#48FF91]/5 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48FF91] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#48FF91]" />
            </span>

            <span className="font-mono text-xs tracking-[0.18em] text-[#8CFFB5] sm:text-sm">
              HELLO, WORLD!_
            </span>
          </div>

          <p className="mb-3 font-mono text-sm tracking-widest text-[#48FF91]">
            &gt; INTRODUCING MYSELF
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            I&apos;m Fayez
            <br />
            <span className="bg-gradient-to-r from-[#48FF91] via-[#00F5A0] to-[#C6FF00] bg-clip-text text-transparent">
              Ali.
            </span>
            <br />
            <span className="text-3xl font-bold text-[#E2F5E9] sm:text-4xl xl:text-5xl">
              ICT Student &
              <br />
              Web Developer
            </span>
          </h1>

          <p className="mt-7 max-w-xl font-mono text-sm uppercase leading-7 tracking-[0.12em] text-[#48FF91]/80">
            Building modern web experiences,
            <br className="hidden sm:block" />
            one line of code at a time.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#A6B8AC]">
            I&apos;m an ICT Engineering student at MBSTU, passionate about
            web development, problem-solving, and building useful digital
            products. Currently learning React, Next.js, TypeScript,
            Tailwind CSS, and Data Structures &amp; Algorithms.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#48FF91] px-6 py-3.5 font-bold text-[#041009] shadow-[0_0_25px_rgba(72,255,145,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#C6FF00] hover:shadow-[0_0_32px_rgba(72,255,145,0.3)]"
            >
              Explore My Work
              <span className="text-lg transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <a
              href="/Fayez-Ali-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-[#48FF91]/40 bg-white/[0.02] px-6 py-3.5 font-medium text-[#D8F5E2] transition hover:border-[#48FF91] hover:bg-[#48FF91]/10 hover:text-[#48FF91]"
            >
              <span aria-hidden="true">↓</span>
              View CV
            </a>
          </div>

          {/* Technology labels */}
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-[#648572]">
               CURRENTLY LEARNING
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#48FF91]/15 bg-[#0A130D] px-3 py-2 font-mono text-xs text-[#A8CBB5] transition hover:border-[#48FF91]/60 hover:text-[#48FF91]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub and location */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-6">
            <a
              href="https://github.com/Fayez-Ali-IT25026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#B7C8BC] transition hover:text-[#48FF91]"
            >
              <span className="font-mono text-[#48FF91]">&lt;/&gt;</span>
              GitHub Profile ↗
            </a>

            <span className="font-mono text-xs text-[#648572]">
              ICT · MBSTU · Bangladesh
            </span>
          </div>
        </div>

        {/* Right: Profile visual */}
        
{/* Profile visual */}
<div className="relative mx-auto w-full max-w-lg lg:ml-auto">
  {/* Neon frame */}
  <div className="absolute -inset-3 rounded-3xl border border-[#48FF91]/25" />

  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#48FF91]/30 bg-[#08110B]">
    <Image
      src={myPic}
      alt="Portrait of Fayez Ali"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 45vw"
      className="object-cover object-center"
    />

    {/* Subtle cyberpunk tint, not a text overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050807]/20 via-transparent to-[#48FF91]/[0.04]" />
  </div>

  {/* Separate terminal card — outside the portrait */}
  <div className="absolute -left-4 top-5 z-20 max-w-[220px] rounded-xl border border-[#48FF91]/30 bg-[#050807]/95 p-4 shadow-[0_0_25px_rgba(72,255,145,0.08)] sm:-left-8">
    <p className="mb-2 font-mono text-xs text-[#48FF91]">
      ● user_profile.exe
    </p>
    <p className="font-mono text-xs leading-6 text-[#B4D7C0]">
      &gt; whoami
      <br />
      <span className="text-white">Fayez Ali</span>
      <br />
      ICT Student @ MBSTU
      <br />
      Web Developer
    </p>
  </div>

  {/* Separate caption below the image */}
  <div className="mt-6 flex items-center justify-between gap-4">
    <div>
      <p className="font-mono text-xs tracking-[0.2em] text-[#48FF91]">
        SYSTEM STATUS
      </p>
      <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
        CODE<span className="text-[#48FF91]">.</span> LEARN
        <span className="text-[#48FF91]">.</span> BUILD
        <span className="text-[#48FF91]">.</span>
      </h2>
      <p className="mt-1 text-sm text-[#A6B8AC]">
        Turning ideas into real projects.
      </p>
    </div>

    <span className="hidden font-mono text-xs text-[#48FF91]/70 sm:block">
      FA // 001
    </span>
  </div>
</div>
 
      </div>
    </section>
        </div>
    );
};

export default HeroSection;