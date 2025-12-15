export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">U-Check</div>
          <nav className="text-sm text-slate-600">
            <a className="mr-6 hover:text-slate-900" href="#produkt">Produkt</a>
            <a className="mr-6 hover:text-slate-900" href="#technik">Technik</a>
            <a className="hover:text-slate-900" href="/waitlist">Warteliste</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-14 pt-6">
        <div className="rounded-2xl border border-slate-200 p-10">
          <p className="text-sm font-medium text-slate-600">Wissen statt schätzen.</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            U-Check macht die In-situ-Bewertung von Verglasungen messbar!!!
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Mobiles Messsystem zur Bestimmung des U-Werts von 2- und 3-fach-Verglasungen im Bestand
            auf Basis von Temperatur-, Wärmefluss- und Lichtsensorik mit dynamischer Auswertung.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-lg bg-slate-900 px-5 py-3 text-white"
              href="/waitlist"
            >
              Warteliste
            </a>
            <a
              className="rounded-lg border border-slate-300 px-5 py-3"
              href="#produkt"
            >
              Mehr erfahren
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-semibold">Schneller Messaufbau</div>
              <div className="mt-2 text-sm text-slate-700">
                Befestigung und Start in kurzer Zeit; Bedienung über lokale Weboberfläche.
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-semibold">Dynamische Auswertung</div>
              <div className="mt-2 text-sm text-slate-700">
                RC-/Grey-Box-Ansatz zur robusten Interpretation transienter Randbedingungen.
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-semibold">Für Praxisentscheidungen</div>
              <div className="mt-2 text-sm text-slate-700">
                Ziel: belastbare Kenngrößen für Beratung, Qualitätssicherung und Bestandserfassung.
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Hinweis: U-Check befindet sich in aktiver Entwicklung; Validierung und Optimierungen laufen.
          </p>
        </div>
      </section>

      <section id="produkt" className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Produkt</h2>
        <p className="mt-3 text-slate-700">
          U-Check erfasst Innen- und Außentemperaturen, Wärmefluss und Licht/Sonneneinstrahlung.
          Daraus wird der Wärmetransport durch die Verglasung dynamisch ausgewertet.
        </p>
      </section>

      <section id="technik" className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">Technik</h2>
        <p className="mt-3 text-slate-700">
          Die Auswertung basiert auf einem reduzierten physikalischen Modell (RC-Struktur),
          dessen Parameter aus Messdaten identifiziert werden. Ziel ist eine robuste Abschätzung
          unter realen, transienten Randbedingungen.
        </p>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-600">
          © {new Date().getFullYear()} U-Check — <a className="underline" href="/waitlist">Warteliste</a>
        </div>
      </footer>
    </main>
  );
}
