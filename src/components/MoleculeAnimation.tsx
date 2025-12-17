"use client";

import { useState, useEffect } from "react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Particle {
  id: number;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

export default function MoleculeAnimation() {
  const [uValue, setUValue] = useState(2.8); // Startwert
  const [deltaT, setDeltaT] = useState(20); // Temperaturdifferenz
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Flow intensity depends on U * DeltaT
    const intensity = uValue * deltaT;
    // More particles and faster speed for higher intensity
    const count = Math.min(Math.floor(intensity * 1.5), 80); 
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      opacity: Math.random() * 0.5 + 0.2,
      // Higher intensity = faster animation (lower duration)
      animationDuration: Math.max(0.5, 50 / (intensity + 5)) + Math.random() * 0.5 + 's', 
      animationDelay: Math.random() * 2 + 's'
    }));
    setParticles(newParticles);
  }, [uValue, deltaT]);

  return (
    <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl border border-slate-800">
      <div className="grid gap-8 lg:grid-cols-3 items-center">
        
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">Wärmestrom-Simulation</h3>
            <p className="text-xs text-slate-400 mt-1">
              Visualisierung des Energieverlusts in Abhängigkeit von <span className="whitespace-nowrap">U-Wert</span> und Temperatur.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <label className="text-xs font-medium text-slate-300 whitespace-nowrap">U-Wert</label>
                <span className="font-mono text-xs text-[var(--uc-pink)]">{uValue.toFixed(1)} W/m²K</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={uValue}
                onChange={(e) => setUValue(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-[var(--uc-pink)]"
              />
            </div>

            <div>
              <div className="mb-1 flex justify-between">
                <label className="text-xs font-medium text-slate-300">Temperaturdifferenz</label>
                <span className="font-mono text-xs text-[var(--uc-blue)]">{deltaT} K</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={deltaT}
                onChange={(e) => setDeltaT(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-[var(--uc-blue)]"
              />
            </div>
          </div>
        </div>

        {/* Visualization Window */}
        <div className="lg:col-span-2 relative h-48 w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
            
            {/* Glass Pane Representation */}
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-slate-800/50 backdrop-blur-sm border-x border-slate-700 transform -translate-x-1/2 z-10"></div>
            
            {/* Labels */}
            <div className="absolute left-4 top-4 text-xs font-bold text-orange-500/80">INNEN (Warm)</div>
            <div className="absolute right-4 top-4 text-xs font-bold text-blue-500/80">AUSSEN (Kalt)</div>

            {/* Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{
                        top: p.top,
                        left: '10%', // Start position
                        opacity: p.opacity,
                        animation: `flowRight ${p.animationDuration} linear infinite`,
                        animationDelay: p.animationDelay
                    }}
                />
            ))}
            
            {/* CSS for Animation */}
            <style jsx>{`
                @keyframes flowRight {
                    0% {
                        transform: translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(600px); /* Adjust based on container width approx */
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
      </div>
    </div>
  );
}
