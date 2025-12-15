"use client";

import { useState, useMemo } from "react";

export default function UgCalculator() {
  const [panes, setPanes] = useState<2 | 3>(2);
  const [gas, setGas] = useState<"air" | "argon" | "krypton">("argon");
  const [szr, setSzr] = useState(16); // mm
  const [lowE, setLowE] = useState(true);

  const ugValue = useMemo(() => {
    // Vereinfachtes Modell nach EN 673 Prinzipien (Lookup-Logik für Demo)
    
    // Basis-Widerstände (m²K/W)
    const R_si = 0.13;
    const R_se = 0.04;
    
    // Emissivität (korrigiert)
    // Normales Glas: 0.837
    // Low-E: ca. 0.03 - 0.05
    const e_normal = 0.84;
    const e_lowE = 0.04;
    
    // Effektive Emissivität im SZR
    // 1/e_eff = 1/e1 + 1/e2 - 1
    const getEffectiveEmissivity = (hasLowE: boolean) => {
        const e1 = hasLowE ? e_lowE : e_normal;
        const e2 = e_normal; // Gegenüberliegende Seite meist unbeschichtet im SZR
        return 1 / (1/e1 + 1/e2 - 1);
    };

    const e_eff = getEffectiveEmissivity(lowE);

    // Gas-Leitfähigkeit (vereinfacht, inkl. Konvektionseffekte grob genähert für SZR 10-20mm)
    // Lambda in W/mK
    let lambda_gas = 0.025; // Luft
    if (gas === "argon") lambda_gas = 0.017;
    if (gas === "krypton") lambda_gas = 0.009;

    // Strahlungswärmeübergangskoeffizient hr
    // hr = 4 * sigma * Tm^3 * e_eff
    // Bei 283K (10°C): 4 * 5.67e-8 * 283^3 * e_eff approx 5.1 * e_eff
    const h_r = 5.1 * e_eff;

    // Gasleitwert hg (Konduktion + Konvektion)
    // Nu (Nusselt) ist bei schmalen Spalten ca 1, bei breiten > 1.
    // Wir vereinfachen: hg = lambda / d
    // Für SZR < 10mm dominiert Leitung. Für > 15mm setzt Konvektion ein (Nu steigt).
    // Wir nutzen eine "effektive" Leitfähigkeit die bei großen SZR schlechter wird (steigt).
    
    // Korrekturfaktor für Konvektion bei großen SZR (sehr grob)
    let nu = 1;
    if (szr > 15 && gas === "air") nu = 1.1;
    if (szr > 18 && gas === "argon") nu = 1.2;

    const h_g = (lambda_gas * nu) / (szr / 1000);

    const h_total = h_r + h_g;
    const R_gap = 1 / h_total;

    // Gesamtwiderstand
    // Bei 3-fach Glas haben wir 2 SZR
    const numGaps = panes === 3 ? 2 : 1;
    const totalR = R_si + R_se + (numGaps * R_gap);

    const u = 1 / totalR;
    
    return u.toFixed(2);
  }, [panes, gas, szr, lowE]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="font-heading text-xl font-semibold text-slate-900">
        DIN EN 673-Rechner (Ug)
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Simuliere den Norm-Wert basierend auf technischen Daten.
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

        <div className="mt-6 rounded-xl bg-slate-900 p-5 text-center text-white">
          <div className="text-xs text-slate-400">Berechneter Ug-Wert</div>
          <div className="font-heading text-4xl font-bold tracking-tight">
            {ugValue} <span className="text-lg font-normal text-slate-500">W/m²K</span>
          </div>
          <div className="mt-2 text-[10px] text-slate-500">
            Nach vereinfachtem Modell. Normative Randbedingungen angenommen.
          </div>
        </div>
      </div>
    </div>
  );
}
