"use client";

import { useState, useEffect } from "react";

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
    // Re-generate flow particles when uValue changes significantly or just keep a pool
    // For simplicity, we just regenerate them to match the count
    const count = Math.floor(uValue * 15);
    const newParticlesFlow = Array.from({ length: count }).map((_, i) => ({
      id: i,
      width: '40px',
      height: '4px', // fixed height for flow
      left: '50%',
      top: Math.random() * 100 + '%',
      opacity: Math.random() * 0.8,
      animationDuration: 2/uValue + Math.random() + 's',
      animationDelay: Math.random() * 2 + 's'
    }));
    // eslint-disable-next-line
    setParticlesFlow(newParticlesFlow);
  }, [uValue]);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        {/* Grid Background */}
        <div className="h-full w-full" 
             style={{backgroundImage: 'radial-gradient(#4F72BB 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
        </div>
      </div>

      <div className="relative z-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-heading text-2xl font-semibold">Wie Wärme entweicht</h3>
          <p className="mt-2 text-slate-300">
            Stell dir Wärme als Energie-Teilchen vor. Ein hoher U-Wert bedeutet, dass die Barriere (das Fenster) durchlässig ist.
          </p>
          
          <div className="mt-8">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Simulierter U-Wert: <span className="text-white font-bold">{uValue.toFixed(1)} W/m²K</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={uValue}
              onChange={(e) => setUValue(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-[var(--uc-pink)]"
            />
            <div className="mt-2 flex justify-between text-xs text-slate-500">
              <span>0.5 (Passivhaus)</span>
              <span>5.0 (Einfachglas)</span>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-xs text-slate-400">Geschätzter Verlust pro Heizperiode (20m²)</div>
            <div className="mt-1 font-heading text-3xl font-bold text-[var(--uc-pink)]">
              {Math.round(uValue * 20 * 84)} kWh
            </div>
            <div className="text-xs text-slate-400">~ {Math.round(uValue * 20 * 84 * 0.12)} € (bei 12ct/kWh)</div>
          </div>
        </div>

        <div className="relative flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
            {/* Window Frame */}
            <div className="absolute h-full w-4 bg-slate-700 left-1/2 -translate-x-1/2 z-20"></div>
            
            {/* Particles Left (Warm/Inside) */}
            <div className="absolute inset-0 left-0 w-1/2 overflow-hidden">
                {particlesLeft.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-orange-500 blur-[1px]"
                        style={{
                            width: p.width,
                            height: p.height,
                            left: p.left,
                            top: p.top,
                            opacity: 0.6,
                            animation: `float ${p.animationDuration} infinite linear`
                        }}
                    />
                ))}
            </div>

            {/* Particles Passing Through (Leakage) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                 {/* Flow visualization */}
                 <div className="w-full h-32 relative overflow-hidden">
                    {particlesFlow.map((p) => (
                        <div
                            key={`flow-${p.id}`}
                            className="absolute h-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-400"
                            style={{
                                width: p.width,
                                left: p.left,
                                top: p.top,
                                opacity: p.opacity,
                                animation: `passThrough ${p.animationDuration} infinite linear`,
                                animationDelay: p.animationDelay
                            }}
                        />
                    ))}
                 </div>
            </div>

            {/* Particles Right (Cold/Outside) */}
             <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden bg-blue-900/10">
             </div>
             
             <div className="absolute bottom-2 right-2 text-xs text-blue-300">Außen (Kalt)</div>
             <div className="absolute bottom-2 left-2 text-xs text-orange-300">Innen (Warm)</div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
        }
        @keyframes passThrough {
            0% { transform: translateX(-100px) scaleX(0.5); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100px) scaleX(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
