
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#48FF91]/15 bg-[#050807]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#48FF91]/40 bg-[#48FF91]/10 font-mono text-sm font-bold text-[#48FF91] transition group-hover:bg-[#48FF91]/20">
            FA
          </span>

          <span className="text-lg font-bold tracking-tight text-white">
            fayez<span className="text-[#48FF91]">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-2 text-sm text-[#8DA99A] transition hover:text-[#48FF91]"
            >
              <span className="mr-1 font-mono text-xs text-[#48FF91]/50">
                0{index + 1}
              </span>
              {link.name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#48FF91] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-lg border border-[#48FF91]/60 bg-[#48FF91]/10 px-4 py-2.5 text-sm font-semibold text-[#48FF91] shadow-[0_0_18px_rgba(72,255,145,0.06)] transition hover:bg-[#48FF91] hover:text-[#050807] hover:shadow-[0_0_24px_rgba(72,255,145,0.22)] md:inline-flex"
        >
          Let's Connect <span>↗</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="rounded-lg border border-[#48FF91]/30 bg-[#48FF91]/5 px-3 py-2 font-mono text-xl text-[#48FF91] transition hover:bg-[#48FF91]/15 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#48FF91]/15 bg-[#080D0A] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-[#A8BDB0] transition hover:bg-[#48FF91]/10 hover:text-[#48FF91]"
              >
                <span className="mr-3 font-mono text-xs text-[#48FF91]/60">
                  0{index + 1} 
                </span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
