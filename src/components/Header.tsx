"use client";

import { useState } from "react";
import Image from "next/image";
import { useWaitlist } from "@/context/WaitlistContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-32">
            <Image src="/u-check-logo.png" alt="U-Check" fill className="object-contain object-left" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a className="transition hover:text-[var(--uc-blue)]" href="#problem">Problem</a>
          <a className="transition hover:text-[var(--uc-blue)]" href="#loesung">Lösung</a>
          <a className="transition hover:text-[var(--uc-blue)]" href="#rechner">Rechner</a>
          <a className="transition hover:text-[var(--uc-blue)]" href="#team">Team</a>
        </nav>

        {/* Desktop Button */}
        <button
          onClick={openWaitlist}
          className="hidden md:block rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 hover:shadow-lg"
        >
          Warteliste
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-4">
          <a className="text-lg font-medium text-slate-600 hover:text-[var(--uc-blue)]" href="#problem" onClick={() => setIsMenuOpen(false)}>Problem</a>
          <a className="text-lg font-medium text-slate-600 hover:text-[var(--uc-blue)]" href="#loesung" onClick={() => setIsMenuOpen(false)}>Lösung</a>
          <a className="text-lg font-medium text-slate-600 hover:text-[var(--uc-blue)]" href="#rechner" onClick={() => setIsMenuOpen(false)}>Rechner</a>
          <a className="text-lg font-medium text-slate-600 hover:text-[var(--uc-blue)]" href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
          <hr className="border-slate-100" />
          <button
            onClick={() => {
              setIsMenuOpen(false);
              openWaitlist();
            }}
            className="text-center rounded-full bg-slate-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-800 w-full"
          >
            Warteliste
          </button>
        </div>
      )}
    </header>
  );
}
