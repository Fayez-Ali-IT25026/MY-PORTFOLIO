import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="border-t border-[#48FF91]/20 bg-[#050807] px-6 py-8 text-white sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a
          href="#home"
          className="font-mono text-xl font-bold tracking-wider"
        >
          FAYEZ<span className="text-[#48FF91]">.DEV</span>
        </a>

        <p className="text-center text-sm text-gray-400">
          ICT Engineering Student @ MBSTU
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Fayez-Ali-IT25026"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 transition hover:text-[#48FF91]"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:fayezali210906@gmail.com"
            className="text-sm text-gray-400 transition hover:text-[#48FF91]"
          >
            Email ↗
          </a>
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-6xl border-t border-white/10 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fayez Ali. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
        </div>
    );
};

export default Footer;