"use client";

import { useState } from "react";

export default function AmortizationCalculator() {
  const [area, setArea] = useState(20); // m²
  const [uOld, setUOld] = useState(2.8); // W/m²K (typisch Isolierglas alt)
  const [uNew, setUNew] = useState(0.7); // W/m²K (3-fach modern)
  const [energyPrice, setEnergyPrice] = useState(0.12); // €/kWh (Gas/Öl Mix)
  const [heatingDegreeDays] = useState(3500); // kKh (Mittelwert DE)
  
  // Derived State (Calculated on every render, no useEffect needed)
  const deltaU = uOld - uNew;
  
  let savingsKwh = 0;
  let savingsEuro = 0;
  let co2Savings = 0;

  if (deltaU > 0) {
    // 24h * Heizgradtage (z.B. 3500) / 1000 (W zu kW)
    const kwh = deltaU * area * (heatingDegreeDays * 24) / 1000;
    const euro = kwh * energyPrice;
    const co2 = kwh * 0.2; // ca. 0.2 kg/kWh für Gas

    savingsKwh = Math.round(kwh);
    savingsEuro = Math.round(euro);
    co2Savings = Math.round(co2);
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="font-heading text-xl font-semibold text-slate-900">
        Lohnt sich ein Fenstertausch?
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Berechne dein Einsparpotenzial basierend auf dem U-Wert.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Fensterfläche (m²)</label>
            <input
              type="range"
              min="1"
              max="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[var(--uc-blue)]"
            />
            <div className="mt-1 text-right text-sm font-semibold text-slate-900">{area} m²</div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Aktueller U-Wert (W/m²K)</label>
            <div className="flex items-center gap-3">
                <input
                type="number"
                step="0.1"
                value={uOld}
                onChange={(e) => setUOld(Number(e.target.value))}
                className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm"
                />
                <span className="text-xs text-slate-400">(z.B. 2.8 für altes Iso-Glas)</span>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Neuer U-Wert (W/m²K)</label>
            <div className="flex items-center gap-3">
                <input
                type="number"
                step="0.1"
                value={uNew}
                onChange={(e) => setUNew(Number(e.target.value))}
                className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm"
                />
                <span className="text-xs text-slate-400">(z.B. 0.7 für 3-fach)</span>
            </div>
          </div>
          
          <div>
             <label className="mb-1 block text-xs font-medium text-slate-500">Energiepreis (€/kWh)</label>
             <input
                type="number"
                step="0.01"
                value={energyPrice}
                onChange={(e) => setEnergyPrice(Number(e.target.value))}
                className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm"
             />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-slate-50 p-6">
          <div className="mb-6 text-center">
            <div className="text-sm text-slate-500">Jährliche Ersparnis</div>
            <div className="font-heading text-4xl font-bold text-[var(--uc-blue)]">
              {savingsEuro} €
            </div>
            <div className="text-xs text-slate-400">ca. {savingsKwh} kWh Wärmeenergie</div>
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">CO₂-Reduktion:</span>
              <span className="font-semibold text-slate-900">{co2Savings} kg/Jahr</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Amortisation (bei 500€/m²):</span>
              <span className="font-semibold text-slate-900">
                {savingsEuro > 0 ? Math.ceil((area * 500) / savingsEuro) : "∞"} Jahre
              </span>
            </div>
          </div>
          
          <div className="mt-4 rounded-lg bg-blue-50 p-3 text-xs text-blue-800">
            <strong>Hinweis:</strong> Der Rechner vereinfacht. U-Check zielt darauf, den kritischen Input — den Ist-U-Wert — messbar zu machen.
          </div>
        </div>
      </div>
    </div>
  );
}
