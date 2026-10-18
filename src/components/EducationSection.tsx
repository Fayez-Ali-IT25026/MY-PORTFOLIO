import React from 'react';
import Image from 'next/image';
import Logo from "@/assets/MBSTU Emblem_ Neon Tech Showcase.png";


const education = [
  {
    period: "2025 — PRESENT",
    degree: "B.Sc. in Engineering",
    subject: "Information and Communication Technology (ICT)",
    institution: "Mawlana Bhashani Science and Technology University",
    location: "Tangail, Bangladesh",
    status: "UNDERGRADUATE",
  },
];


const EducationSection = () => {
    return (
        <div>
             <section
      id="education"
      className="relative overflow-hidden bg-[#050807] px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-sm tracking-[0.3em] text-[#48FF91]">
          04 / EDUCATION
        </p>

        <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
          My <span className="text-[#48FF91]">Education</span>
        </h2>

        <p className="mb-14 max-w-2xl text-gray-400">
          Building a strong foundation in computing, programming, and
          information technology.
        </p>

        <div className="relative border-l border-[#48FF91]/40 pl-6 sm:pl-10">
          {education.map((item) => (
            // <article
            //   key={item.degree}
            //   className="relative rounded-2xl border border-[#48FF91]/20 bg-white/[0.03] p-6 transition duration-300 hover:border-[#48FF91]/60 sm:p-8"
            // >
            //   <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-[#050807] bg-[#48FF91] shadow-[0_0_15px_#48FF91] sm:-left-[49px]" />

            //   <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            //     <span className="font-mono text-sm text-[#48FF91]">
            //       {item.period}
            //     </span>

            //     <span className="rounded-full border border-[#48FF91]/30 px-3 py-1 font-mono text-xs text-[#48FF91]">
            //       {item.status}
            //     </span>
            //   </div>

            //   <h3 className="text-2xl font-bold">{item.degree}</h3>

            //   <p className="mt-2 text-lg text-gray-300">{item.subject}</p>

            //   <p className="mt-5 font-medium text-white">
            //     {item.institution}
            //   </p>

            //   <p className="mt-2 text-sm text-gray-500">{item.location}</p>
            // </article>
            
<article
  key={item.degree}
  className="relative overflow-hidden rounded-2xl border border-[#48FF91]/20 bg-white/[0.03] transition duration-300 hover:border-[#48FF91]/60"
>
  <span className="absolute left-0 top-0 h-full w-1 bg-[#48FF91]/60" />

  <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[240px_1fr] md:items-center">
    {/* Original university logo */}
    <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-xl border border-[#48FF91]/20 bg-[#050807] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(72,255,145,0.12),transparent_70%)]" />

      <Image
        src={Logo}
        alt="Mawlana Bhashani Science and Technology University logo"
        width={220}
        height={220}
        className="relative z-10 h-auto w-full max-w-[190px] object-contain"
      />
    </div>

    {/* Education details */}
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-sm tracking-wider text-[#48FF91]">
          {item.period}
        </span>

        <span className="rounded-full border border-[#48FF91]/30 px-3 py-1 font-mono text-xs text-[#48FF91]">
          {item.status}
        </span>
      </div>

      <h3 className="text-2xl font-bold sm:text-3xl">
        {item.degree}
      </h3>

      <p className="mt-2 text-lg text-[#48FF91]">
        {item.subject}
      </p>

      <p className="mt-5 font-semibold text-white">
        {item.institution}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {item.location}
      </p>

      <div className="mt-6 h-px bg-gradient-to-r from-[#48FF91]/50 to-transparent" />

      <p className="mt-5 leading-7 text-gray-400">
        Currently pursuing my B.Sc. in ICT at MBSTU, building my
        knowledge in programming, networking, and modern technologies.
      </p>
    </div>
  </div>
</article>

          ))}
        </div>
      </div>
    </section>
        </div>







    );
};

export default EducationSection;