"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
     const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      setReducedMotion(true);
      setVisible(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible || reducedMotion) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050807] px-6"
    >
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="mb-12 flex items-center justify-between font-mono text-xs tracking-[0.2em]">
          <span className="text-[#48FF91]">FAYEZ.DEV</span>
          <span className="animate-pulse text-[#48FF91]/70">
            INITIALIZING...
          </span>
        </div>

        {/* FA logo */}
        <div className="flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#48FF91]/70 bg-[#48FF91]/5 shadow-[0_0_35px_rgba(72,255,145,0.12)]">
            <span className="font-mono text-4xl font-bold tracking-tighter text-[#48FF91]">
              FA
            </span>
          </div>

          <h1 className="mt-8 text-center font-mono text-lg font-bold tracking-[0.15em] text-[#48FF91] sm:text-xl">
            BUILDING THE FUTURE
          </h1>

          <p className="mt-3 text-center font-mono text-xs text-gray-500">
            Loading developer portfolio...
          </p>
        </div>

        {/* Animated progress line */}
        <div
          className="mt-10 h-1 overflow-hidden rounded-full bg-[#48FF91]/10"
          aria-hidden="true"
        >
          <div className="loading-progress h-full rounded-full bg-[#48FF91] shadow-[0_0_12px_#48FF91]" />
        </div>

        <p className="mt-4 text-center font-mono text-[10px] tracking-[0.25em] text-[#48FF91]/60">
          WELCOME TO MY DIGITAL WORLD
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;