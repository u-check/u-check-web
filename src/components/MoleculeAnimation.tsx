"use client";

import { useState, useEffect } from "react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Particle {
  id: number;
  width: string;
  height: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay?: string;
  opacity?: number;
}

export default function MoleculeAnimation() {
  const [uValue, setUValue] = useState(2.8); // Startwert hoch
  const [deltaT, setDeltaT] = useState(20); // Temperaturdifferenz
  const [particlesLeft, setParticlesLeft] = useState<Particle[]>([]);
  const [particlesFlow, setParticlesFlow] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticlesLeft = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: Math.random() * 6 + 2 + 'px',
      height: Math.random() * 6 + 2 + 'px',
      left: Math.random() * 80 + '%',
      top: Math.random() * 100 + '%',
      animationDuration: Math.random() * 3 + 2 + 's'
    }));
    // eslint-disable-next-line
    setParticlesLeft(newParticlesLeft);
  }, []);

  useEffect(() => {
    // Re-generate flow particles when uValue or deltaT changes
    // Flow intensity depends on U * DeltaT
    const intensity = uValue * deltaT;
    const count = Math.min(Math.floor(intensity * 0.8), 100); // Cap at 100 particles
    
    const newParticlesFlow = Array.from({ length: count }).map((_, i) => ({
      id: i,
      width: '40px',
      height: '4px', // fixed height for flow
      left: '50%',
      top: Math.random() * 100 + '%',
      opacity: Math.random() * 0.8,
      animationDuration: (200 / intensity) + Math.random() + 's', // Faster when intensity is high
      animationDelay: Math.random() * 2 + 's'
    }));
    // eslint-disable-next-line
    setParticlesFlow(newParticlesFlow);
  }, [uValue, deltaT]);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,_var(--uc-blue),_transparent_70%)]" />
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <h3 className="font-heading text-2xl font-bold">Wärmefluss sichtbar gemacht</h3>
            <p className="mt-2 text-slate-300">
              Verstehen Sie intuitiv, wie U-Wert und Temperaturdifferenz den Energieverlust treiben.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium text-slate-300">U-Wert (Dämmqualität)</label>
                <span className="font-mono text-sm text-[var(--uc-pink)]">{uValue.toFixed(1)} W/m²K</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={uValue}
                onChange={(e) => setUValue(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-[var(--uc-pink)]"
              />
              <div className="mt-1 flex justify-between text-[10px] text-slate-500">
                <span>Gut (0.5)</span>
                <span>Schlecht (5.0)</span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium text-slate-300">Temperaturdifferenz <InlineMath math="\Delta T" /></label>
                <span className="font-mono text-sm text-[var(--uc-blue)]">{deltaT} K</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={deltaT}
                onChange={(e) => setDeltaT(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-[var(--uc-blue)]"
              />
              <div className="mt-1 flex justify-between text-[10px] text-slate-500">
                <span>Gleich (0 K)</span>
                <span>Kalt draußen (40 K)</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-800/50 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--uc-pink)]/20 text-[var(--uc-pink)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-400">Wärmeverlustleistung</div>
                <div className="font-mono text-lg font-bold text-white">
                  <InlineMath math="\dot{Q} \approx" /> {(uValue * deltaT).toFixed(0)} <span className="text-sm font-normal text-slate-500">W/m²</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] text-slate-500">
            Die Animation ist eine Visualisierung des Wärmeflusses und keine Darstellung realer Molekülbahnen.
          </div>
        </div>

        {/* Animation Window */}
        <div className="relative h-64 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 md:h-auto">
          {/* Left Side (Warm/Inside) */}
          <div className="absolute bottom-0 left-0 top-0 w-1/3 bg-gradient-to-r from-orange-900/20 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-orange-500/10">INNEN</div>
            {particlesLeft.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-orange-500 blur-[1px]"
                style={{
                  width: p.width,
                  height: p.height,
                  left: p.left,
                  top: p.top,
                  animation: `float ${p.animationDuration} infinite ease-in-out`
                }}
              />
            ))}
          </div>

          {/* Middle (Window) */}
          <div className="absolute bottom-0 left-1/3 top-0 w-1/3 border-x border-slate-800 bg-slate-900/50 backdrop-blur-sm">
             {/* Flow Particles */}
             {particlesFlow.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-gradient-to-r from-orange-500 to-blue-500"
                style={{
                  width: p.width,
                  height: p.height,
                  left: '0%', // Start from left of the window section
                  top: p.top,
                  opacity: p.opacity,
                  animation: `flow ${p.animationDuration} infinite linear`,
                  animationDelay: p.animationDelay
                }}
              />
            ))}
          </div>

          {/* Right Side (Cold/Outside) */}
          <div className="absolute bottom-0 right-0 top-0 w-1/3 bg-gradient-to-l from-blue-900/20 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-500/10">AUSSEN</div>
          </div>
          
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translate(0, 0); }
              50% { transform: translate(10px, -10px); }
            }
            @keyframes flow {
              0% { transform: translateX(0); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateX(300%); opacity: 0; } 
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
