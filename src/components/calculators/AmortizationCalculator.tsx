"use client";

import { useState, useMemo } from "react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function AmortizationCalculator() {
  const [area, setArea] = useState(20); // m²
  const [uOld, setUOld] = useState(2.8); // W/m²K
  const [uNew, setUNew] = useState(0.7); // W/m²K
  const [hdd, setHdd] = useState(3500); // K·d (Heizgradtage)
  const [energyPrice, setEnergyPrice] = useState(0.12); // €/kWh
  const [investment, setInvestment] = useState(8000); // €
  const [showDetails, setShowDetails] = useState(false);

  const results = useMemo(() => {
    // Q_saved = (U_old - U_new) * Area * HDD * 24 / 1000
    const uDiff = uOld - uNew;
    const energySaved = uDiff * area * hdd * 24 / 1000; // kWh/a
    const moneySaved = energySaved * energyPrice; // €/a
    const amortization = moneySaved > 0 ? investment / moneySaved : 0;

    return {
      energySaved: Math.round(energySaved),
      moneySaved: Math.round(moneySaved),
      amortization: amortization.toFixed(1),
    };
  }, [area, uOld, uNew, hdd, energyPrice, investment]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 text-slate-900">
      <h3 className="font-heading text-xl font-semibold text-slate-900">
        Was bringt ein besserer U-Wert?
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Berechnen Sie Ersparnis & Amortisation basierend auf Ihren Daten.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Fensterfläche <InlineMath math="A" /> [m²]
            </label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
            />
            <p className="mt-1 text-[10px] text-slate-400">Summe der Glasflächen.</p>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Ist-U-Wert <InlineMath math="U_{alt}" /> [W/(m²K)]
            </label>
            <input
              type="number"
              step="0.1"
              value={uOld}
              onChange={(e) => setUOld(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
            />
            <p className="mt-1 text-[10px] text-slate-400">Wenn unbekannt: typische Bandbreite testen.</p>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Neuer U-Wert <InlineMath math="U_{neu}" /> [W/(m²K)]
            </label>
            <input
              type="number"
              step="0.1"
              value={uNew}
              onChange={(e) => setUNew(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Heizgradtage <InlineMath math="HDD" /> [K·d]
            </label>
            <input
              type="number"
              value={hdd}
              onChange={(e) => setHdd(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
            />
            <p className="mt-1 text-[10px] text-slate-400">Standortkennwert (Default: 3500).</p>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Energiepreis <InlineMath math="p" /> [€/kWh]
            </label>
            <input
              type="number"
              step="0.01"
              value={energyPrice}
              onChange={(e) => setEnergyPrice(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Investition <InlineMath math="I" /> [€]
            </label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-blue-50 p-4 text-center">
          <div className="text-xs font-medium text-[var(--uc-blue)]">Einsparung Energie</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">{results.energySaved}</div>
          <div className="text-[10px] text-slate-500">kWh/Jahr</div>
        </div>
        <div className="rounded-xl bg-green-50 p-4 text-center">
          <div className="text-xs font-medium text-green-700">Einsparung Geld</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">{results.moneySaved} €</div>
          <div className="text-[10px] text-slate-500">pro Jahr</div>
        </div>
        <div className="rounded-xl bg-slate-100 p-4 text-center">
          <div className="text-xs font-medium text-slate-600">Amortisation</div>
          <div className="mt-1 text-2xl font-bold text-slate-900">{results.amortization}</div>
          <div className="text-[10px] text-slate-500">Jahre (statisch)</div>
        </div>
      </div>

      <div className="mt-6">
        <button 
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-[var(--uc-blue)] underline hover:text-blue-700"
        >
            {showDetails ? "Details ausblenden" : "Berechnungslogik anzeigen"}
        </button>
        
        {showDetails && (
            <div className="mt-4 rounded-lg bg-slate-50 p-4 text-xs text-slate-600 space-y-3 overflow-x-auto">
                <p className="font-semibold">Berechnungslogik:</p>
                <p>Jährliche Transmissionswärmeverluste:</p>
                <div className="my-2">
                    <InlineMath math="Q_{\mathrm{J}} \approx U \cdot A \cdot HDD \cdot \frac{24}{1000}" />
                </div>
                <p>Jährliche Einsparung:</p>
                <div className="my-2">
                    <InlineMath math="S_{\mathrm{J}} \approx (U_{\mathrm{alt}}-U_{\mathrm{neu}}) \cdot A \cdot HDD \cdot \frac{24}{1000} \cdot p" />
                </div>
                <p>Statische Amortisationszeit:</p>
                <div className="my-2">
                    <InlineMath math="t_{PB} = \frac{I}{S_{\mathrm{J}}}" />
                </div>
            </div>
        )}
      </div>
      
      <p className="mt-4 text-[10px] text-slate-400 text-center">
        Dieser Rechner ist eine transparente Näherung. Ohne Kenntnis von <InlineMath math="U_{alt}" /> bleibt die Rechnung unsicher.
      </p>
    </div>
  );
}
