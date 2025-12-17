"use client";

import { useState, useMemo } from "react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function AmortizationCalculator() {
  const [area, setArea] = useState<number | "">(20); // m²
  const [uOld, setUOld] = useState<number | "">(2.8); // W/m²K
  const [uNew, setUNew] = useState<number | "">(0.7); // W/m²K
  const [hdd, setHdd] = useState(3500); // K·d (Heizgradtage)
  const [energyPrice, setEnergyPrice] = useState<number | "">(0.12); // €/kWh
  const [investment, setInvestment] = useState<number | "">(8000); // €
  const [showDetails, setShowDetails] = useState(false);

  const results = useMemo(() => {
    const areaVal = area === "" ? 0 : area;
    const uOldVal = uOld === "" ? 0 : uOld;
    const uNewVal = uNew === "" ? 0 : uNew;
    const energyPriceVal = energyPrice === "" ? 0 : energyPrice;
    const investmentVal = investment === "" ? 0 : investment;

    // Q_saved = (U_old - U_new) * Area * HDD * 24 / 1000
    const uDiff = uOldVal - uNewVal;
    const energySaved = uDiff * areaVal * hdd * 24 / 1000; // kWh/a
    const moneySaved = energySaved * energyPriceVal; // €/a
    const amortization = moneySaved > 0 ? investmentVal / moneySaved : 0;
    
    // Ecological
    const co2Factor = 0.4; // kg/kWh (approx German mix)
    const co2Saved = energySaved * co2Factor; // kg/a
    const co2Lifetime = co2Saved * 20; // kg over 20 years

    return {
      energySaved: Math.round(energySaved),
      moneySaved: Math.round(moneySaved),
      amortization: amortization.toFixed(1),
      co2Saved: Math.round(co2Saved),
      co2Lifetime: Math.round(co2Lifetime / 1000 * 10) / 10, // tons
    };
  }, [area, uOld, uNew, hdd, energyPrice, investment]);

  const handleInputChange = (setter: (val: number | "") => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      setter("");
    } else {
      setter(parseFloat(val));
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 text-slate-900">
      <h3 className="font-heading text-xl font-semibold text-slate-900">
        Was bringt ein besserer <span className="whitespace-nowrap">U-Wert</span>?
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Berechnen Sie Ersparnis & Amortisation basierend auf Ihren Daten.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <div className="order-5 md:order-1">
          <label className="mb-1 block text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="whitespace-nowrap">U-Wert</span> Alt
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              value={uOld}
              onChange={handleInputChange(setUOld)}
              className="w-full rounded border border-slate-200 pl-2 pr-12 py-1 text-base md:text-sm text-slate-700 focus:border-[var(--uc-blue)] focus:outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">
              W/m²K
            </span>
          </div>
        </div>

        <div className="order-6 md:order-2">
          <label className="mb-1 block text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="whitespace-nowrap">U-Wert</span> Neu
          </label>
          <div className="relative">
            <select
              value={uNew}
              onChange={(e) => setUNew(Number(e.target.value))}
              className="w-full rounded border border-slate-200 pl-2 pr-12 py-1 text-base md:text-sm text-slate-700 focus:border-[var(--uc-blue)] focus:outline-none appearance-none bg-white"
            >
              <option value={0.7}>3-fach (0.7)</option>
              <option value={1.1}>2-fach (1.1)</option>
            </select>
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">
              W/m²K
            </span>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-3">
          <label className="mb-1 block text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="md:hidden">Fläche <InlineMath math="A" /></span>
            <span className="hidden md:inline">Fensterfläche <InlineMath math="A" /></span>
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              step="1"
              value={area}
              onChange={handleInputChange(setArea)}
              className="w-full rounded border border-slate-200 pl-2 pr-8 py-1 text-base md:text-sm text-slate-700 focus:border-[var(--uc-blue)] focus:outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">
              m²
            </span>
          </div>
        </div>

        <div className="order-2 md:order-4">
          <label className="mb-1 block text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="md:hidden">Standort <InlineMath math="HDD" /></span>
            <span className="hidden md:inline">Standort <InlineMath math="HDD" /></span>
          </label>
          <select
            value={hdd}
            onChange={(e) => setHdd(Number(e.target.value))}
            className="w-full rounded border border-slate-200 px-2 py-1 text-base md:text-sm text-slate-700 focus:border-[var(--uc-blue)] focus:outline-none"
          >
            <option value={2900}>Freiburg (2900)</option>
            <option value={3200}>Frankfurt (3200)</option>
            <option value={3500}>Deutschland Ø (3500)</option>
            <option value={3600}>Stuttgart (3600)</option>
            <option value={3800}>München (3800)</option>
            <option value={4200}>Rosenheim (4200)</option>
            <option value={4500}>Hof (4500)</option>
          </select>
        </div>

        <div className="order-3 md:order-5">
          <label className="mb-1 block text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="md:hidden">Preis <InlineMath math="p" /></span>
            <span className="hidden md:inline">Energiepreis <InlineMath math="p" /></span>
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              value={energyPrice}
              onChange={handleInputChange(setEnergyPrice)}
              className="w-full rounded border border-slate-200 pl-2 pr-12 py-1 text-base md:text-sm text-slate-700 focus:border-[var(--uc-blue)] focus:outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">
              €/kWh
            </span>
          </div>
        </div>

        <div className="order-4 md:order-6">
          <label className="mb-1 block text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            <span className="md:hidden">Invest <InlineMath math="I" /></span>
            <span className="hidden md:inline">Investition <InlineMath math="I" /></span>
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="numeric"
              step="100"
              value={investment}
              onChange={handleInputChange(setInvestment)}
              className="w-full rounded border border-slate-200 pl-2 pr-8 py-1 text-base md:text-sm text-slate-700 focus:border-[var(--uc-blue)] focus:outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">
              €
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-2 gap-4 text-center">
            {/* Header */}
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ökologisch</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ökonomisch</div>

            {/* Row 1: Savings */}
            <div className="rounded-xl bg-green-50 p-3 flex flex-col justify-center">
                <div className="text-[10px] text-green-700 font-medium uppercase">Einsparung</div>
                <div className="mt-1 text-xl font-bold text-slate-900">{results.co2Saved} <span className="text-sm font-normal text-slate-500">kg</span></div>
                <div className="text-[10px] text-slate-400">CO₂ pro Jahr</div>
            </div>
            <div className="rounded-xl bg-blue-50 p-3 flex flex-col justify-center">
                <div className="text-[10px] text-[var(--uc-blue)] font-medium uppercase">Einsparung</div>
                <div className="mt-1 text-xl font-bold text-slate-900">{results.moneySaved} <span className="text-sm font-normal text-slate-500">€</span></div>
                <div className="text-[10px] text-slate-400">pro Jahr</div>
            </div>

            {/* Row 2: Amortization / Long Term */}
            <div className="rounded-xl bg-slate-50 p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-600 font-medium uppercase">Effekt (20J)</div>
                <div className="mt-1 text-xl font-bold text-slate-900">{results.co2Lifetime} <span className="text-sm font-normal text-slate-500">t</span></div>
                <div className="text-[10px] text-slate-400">CO₂ vermieden</div>
            </div>
            <div className="rounded-xl bg-slate-100 p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-600 font-medium uppercase">Amortisation</div>
                <div className="mt-1 text-xl font-bold text-slate-900">{results.amortization} <span className="text-sm font-normal text-slate-500">a</span></div>
                <div className="text-[10px] text-slate-400">Jahre (ROI)</div>
            </div>
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
