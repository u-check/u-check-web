"use client";

import { useState, useMemo, useEffect } from "react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface Particle {
  id: number;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

export default function UgCalculator() {
  const [panes, setPanes] = useState<2 | 3>(2);
  const [gas, setGas] = useState<"air" | "argon" | "krypton">("argon");
  const [szr, setSzr] = useState(16); // mm
  const [lowE, setLowE] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const ugValue = useMemo(() => {
    // Constants and Inputs
    const T_m = 283; // Mean temperature in Kelvin (10°C)
    const Delta_T = 15; // Temperature difference (standard assumption)
    const sigma = 5.67e-8;
    
    // Gas Properties (approximate at 10°C)
    const gases = {
      air: { lambda: 0.025, rho: 1.24, mu: 1.78e-5, c: 1006 },
      argon: { lambda: 0.017, rho: 1.70, mu: 2.26e-5, c: 520 },
      krypton: { lambda: 0.0094, rho: 3.56, mu: 2.50e-5, c: 248 }
    };
    
    const props = gases[gas];
    const s = szr / 1000; // convert mm to m

    // 1. Radiation Conductance (h_r)
    // Emissivity
    const eps_normal = 0.89; // Uncoated glass
    // Low-E correction: eps_n = 0.04 -> eps_corr approx 0.047
    // Formula: eps_k = 1.1887*eps_n - 0.4967*eps_n^2 + 0.2452*eps_n^3
    const correctEmissivity = (eps_n: number) => 
      1.1887 * eps_n - 0.4967 * Math.pow(eps_n, 2) + 0.2452 * Math.pow(eps_n, 3);

    const eps_lowE_measured = 0.04;
    const eps_lowE_corrected = correctEmissivity(eps_lowE_measured);

    const eps1 = lowE ? eps_lowE_corrected : eps_normal;
    const eps2 = eps_normal;

    const h_r = 4 * sigma * Math.pow(T_m, 3) * Math.pow(1/eps1 + 1/eps2 - 1, -1);

    // 2. Gas Conductance (h_g)
    // Grashof Number
    // Gr = (9.81 * s^3 * Delta_T * rho^2) / (T_m * mu^2)
    const Gr = (9.81 * Math.pow(s, 3) * Delta_T * Math.pow(props.rho, 2)) / (T_m * Math.pow(props.mu, 2));
    
    // Prandtl Number
    // Pr = (mu * c) / lambda
    const Pr = (props.mu * props.c) / props.lambda;

    // Nusselt Number
    // Nu = A * (Gr * Pr)^n
    // For vertical glazing: A = 0.035, n = 0.38 (if Gr*Pr > 1e4 usually, simplified here)
    // Standard EN 673 logic often uses max(1, Nu_calc)
    // Simplified correlation for vertical cavities often used:
    // Nu = 0.035 * (Gr * Pr)^0.38
    // But strictly EN 673 has specific ranges. We use a robust approximation.
    let Nu = 0.035 * Math.pow(Gr * Pr, 0.38);
    if (Nu < 1) Nu = 1;

    const h_g = (Nu * props.lambda) / s;

    const h_s = h_r + h_g;
    const R_s = 1 / h_s;

    // Total Resistance
    // R_se = 0.04, R_si = 0.13
    const R_se = 0.04;
    const R_si = 0.13;
    
    // Glass resistance (negligible but let's add 4mm glass panes)
    // r_glass = d / lambda = 0.004 / 1.0 = 0.004
    const numPanes = panes;
    const R_glass_total = numPanes * 0.004;

    const numGaps = panes - 1;
    const R_total = R_se + R_si + R_glass_total + (numGaps * R_s);

    return (1 / R_total).toFixed(2);
  }, [panes, gas, szr, lowE]);

  useEffect(() => {
    const u = parseFloat(ugValue);
    // Intensity based on U-Value (assuming standard Delta T of 20K for visualization)
    const intensity = u * 20; 
    const count = Math.min(Math.floor(intensity * 1.5), 50); // Cap at 50 for performance
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      opacity: Math.random() * 0.5 + 0.1,
      animationDuration: Math.max(0.5, 50 / (intensity + 5)) + Math.random() * 0.5 + 's', 
      animationDelay: Math.random() * 2 + 's'
    }));
    setParticles(newParticles);
  }, [ugValue]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 text-slate-900">
      <h3 className="font-heading text-xl font-semibold text-slate-900">
        Ug-Rechner nach DIN EN 673
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Als transparente Referenz: Wie stark beeinflussen Annahmen das Ergebnis?
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-xs font-medium text-slate-500">Verglasung</label>
          <div className="flex gap-2">
            <button
              onClick={() => setPanes(2)}
              className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                panes === 2
                  ? "border-[var(--uc-blue)] bg-blue-50 text-[var(--uc-blue)]"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              2-fach
            </button>
            <button
              onClick={() => setPanes(3)}
              className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                panes === 3
                  ? "border-[var(--uc-blue)] bg-blue-50 text-[var(--uc-blue)]"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              3-fach
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-slate-500">Gasfüllung</label>
          <select
            value={gas}
            onChange={(e) => setGas(e.target.value as "air" | "argon" | "krypton")}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
          >
            <option value="air">Luft</option>
            <option value="argon">Argon (Standard)</option>
            <option value="krypton">Krypton (Edel)</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            Scheibenzwischenraum (SZR): {szr} mm
          </label>
          <input
            type="range"
            min="6"
            max="24"
            value={szr}
            onChange={(e) => setSzr(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[var(--uc-pink)]"
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
          <span className="text-sm text-slate-700">Low-E Beschichtung?</span>
          <button
            onClick={() => setLowE(!lowE)}
            className={`relative h-6 w-11 rounded-full transition ${
              lowE ? "bg-[var(--uc-blue)]" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${
                lowE ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="mt-6 relative overflow-hidden rounded-xl bg-slate-900 p-5 text-center text-white">
          {/* Particles Background */}
          <div className="absolute inset-0 pointer-events-none">
             {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute h-1 w-1 rounded-full bg-white/30"
                    style={{
                        top: p.top,
                        left: '-5%',
                        opacity: p.opacity,
                        animation: `flowRight ${p.animationDuration} linear infinite`,
                        animationDelay: p.animationDelay
                    }}
                />
             ))}
          </div>
          
          <div className="relative z-10">
              <div className="text-xs text-slate-400">Berechneter Ug-Wert</div>
              <div className="font-heading text-4xl font-bold tracking-tight">
                {ugValue} <span className="text-lg font-normal text-slate-500">W/m²K</span>
              </div>
              <div className="mt-2 text-[10px] text-slate-500">
                Berechnung basiert auf Annahmen; der Ist-Zustand kann abweichen.
              </div>
          </div>

          <style jsx>{`
            @keyframes flowRight {
                0% {
                    left: -5%;
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    left: 105%;
                    opacity: 0;
                }
            }
          `}</style>
        </div>

        <div className="mt-4">
            <button 
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-[var(--uc-blue)] underline hover:text-blue-700"
            >
                {showDetails ? "Details ausblenden" : "Berechnungsdetails anzeigen"}
            </button>
            
            {showDetails && (
                <div className="mt-4 rounded-lg bg-slate-50 p-4 text-xs text-slate-600 space-y-3 overflow-x-auto">
                    <p className="font-semibold">Berechnungsgrundlage (DIN EN 673):</p>
                    <p>Der Ug-Wert ergibt sich aus dem Wärmewiderstand des Verglasungsaufbaus sowie den Übergangswiderständen:</p>
                    <div className="my-2">
                        <InlineMath math="U_g = \frac{1}{r_{se} + r_g + r_{si}}" />
                    </div>
                    <p>Mit <InlineMath math="r_{se} = 0.04" /> und <InlineMath math="r_{si} = 0.13" /> m²K/W.</p>
                    
                    <p className="mt-2 font-semibold">Wärmeübergang im SZR:</p>
                    <div className="my-2">
                        <InlineMath math="h_{s,k} = h_{r,k} + h_{g,k}" />
                    </div>
                    <p>Strahlungsanteil (Stefan-Boltzmann):</p>
                    <div className="my-2">
                        <InlineMath math="h_{r,k} = 4\sigma T_{m}^3 \left(\frac{1}{\varepsilon_{1}} + \frac{1}{\varepsilon_{2}} - 1\right)^{-1}" />
                    </div>
                    <p>Gaskonvektion (Nusselt-Korrelation):</p>
                    <div className="my-2">
                        <InlineMath math="h_{g,k} = \mathrm{Nu} \cdot \frac{\lambda}{s}" />
                    </div>
                    <p>Die Nusselt-Zahl <InlineMath math="\mathrm{Nu}" /> wird über Grashof- und Prandtl-Zahlen bestimmt.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
