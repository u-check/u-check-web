import Image from "next/image";
import AmortizationCalculator from "@/components/calculators/AmortizationCalculator";
import UgCalculator from "@/components/calculators/UgCalculator";
import MoleculeAnimation from "@/components/MoleculeAnimation";

const BREVO_IFRAME_SRC =
  "https://f0c05fc7.sibforms.com/serve/MUIFAA4lpcjXkUEGTVf5oywjzEyPmngXfoCouO9toVgYboUXSQUHDboq4iX045zXhJWBGyuEYg8tgQcTlu4aRZ0osmTGl4AeNnDYQ5TQbYrOl0EL5tdZET3iBGeBaWhXyyCRbrzkMQK4c5CkdoLExJDPwzA_8NMu3jKTj7yuN9FGO3mlCvVemXgAwCRowwkyx3CFft1nrdOuHDtJ";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-900">
               {/* Placeholder Logo if image fails, or use the image */}
               <Image src="/u-check-mark.png" alt="U-Check" fill className="object-cover" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-slate-900">
              U-Check
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-[var(--uc-blue)]" href="#problem">Problem</a>
            <a className="transition hover:text-[var(--uc-blue)]" href="#loesung">Lösung</a>
            <a className="transition hover:text-[var(--uc-blue)]" href="#rechner">Rechner</a>
            <a className="transition hover:text-[var(--uc-blue)]" href="#faq">FAQ</a>
          </nav>

          <a
            href="#warteliste"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 hover:shadow-lg"
          >
            Warteliste
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70"></div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-600"></span>
                Wissen statt Schätzen
              </div>
              
              <h1 className="font-heading mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                U-Check misst den <span className="uc-text-gradient">U-Wert</span> von Verglasungen vor Ort.
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Schnell, nachvollziehbar, wirtschaftlich. Statt Tabellenwerten und Schätzungen erhältst du belastbare Messdaten zum Ist-Zustand bestehender Fenster — auch dann, wenn Low-E-Schichten altern oder Edelgasfüllungen verloren gehen.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#warteliste"
                  className="rounded-xl bg-[var(--uc-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl"
                >
                  In Warteliste eintragen
                </a>
                <a
                  href="#rechner"
                  className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Rechner testen
                </a>
              </div>

              <div className="mt-8 space-y-3 border-t border-slate-100 pt-8">
                {[
                  "Messung als In-situ-Verfahren unter realen Randbedingungen.",
                  "Dynamische Auswertung: Störeinflüsse werden genutzt, nicht gefiltert.",
                  "Fokus auf Praxistauglichkeit: Schneller Aufbau, klare Ergebnisse."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--uc-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
               {/* Hero Visual with Logo and Dots */}
               <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-50 shadow-2xl">
                  {/* Background Dots */}
                  <div className="absolute inset-0 opacity-30">
                    <Image src="/u-check-dots.png" alt="" fill className="object-cover" />
                  </div>
                  
                  {/* Gradient Overlay for softness */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-transparent"></div>

                  {/* Main Logo Centered */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <Image 
                      src="/u-check-logo.png" 
                      alt="U-Check Logo" 
                      width={560} 
                      height={140} 
                      className="h-auto w-full object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                  
                  {/* Floating Card 1 - Status */}
                  <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur sm:bottom-12 sm:left-12 sm:right-auto sm:w-64">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <div className="text-xs font-medium text-slate-500">Status</div>
                            <div className="text-sm font-bold text-slate-900">Messung läuft</div>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Warum Fensterdaten heute oft unsicher sind
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Fenster sind energetisch überproportional relevant. Doch im Bestand bleibt der tatsächliche U-Wert oft ein Rätsel.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Tabellen statt Realität</h3>
              <p className="mt-3 text-slate-600">
                Richtwerte nach Baujahr bilden Alterungseffekte nicht ab. Low-E-Schichten können korrodieren, Gasfüllungen entweichen.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Fehlallokation</h3>
              <p className="mt-3 text-slate-600">
                Intakte Fenster werden teuer ersetzt, während echte energetische Schwachstellen unentdeckt bleiben.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Wirtschaftlichkeit</h3>
              <p className="mt-3 text-slate-600">
                Der U-Wert entscheidet über Amortisation. Kleine Abweichungen ändern die Rechnung um Jahre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / How it works */}
      <section id="loesung" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                Was U-Check konkret macht
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                U-Check ist ein kompaktes Messsystem zur Bestimmung des Wärmedurchgangskoeffizienten. Es erfasst zeitaufgelöst Temperaturen, Wärmestrom und Licht.
              </p>
              
              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Anbringen</h4>
                    <p className="text-sm text-slate-600">Zwei Sensormodule werden innen und außen positioniert. Reproduzierbarer Kontakt, schneller Aufbau.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Messen</h4>
                    <p className="text-sm text-slate-600">Kurze Messphase unter realen Bedingungen. Transiente Effekte werden erfasst.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-900">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Auswerten</h4>
                    <p className="text-sm text-slate-600">Der Algorithmus identifiziert Parameter (RC-Modell) und liefert den U-Wert inkl. Export.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
                {/* Animation Component */}
                <MoleculeAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section id="rechner" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Interaktive Tools
            </h2>
            <p className="mt-4 text-slate-400">
              Verstehe die Physik und die Wirtschaftlichkeit dahinter.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <AmortizationCalculator />
            <UgCalculator />
          </div>
        </div>
      </section>

      {/* Target Group */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading mb-12 text-center text-3xl font-bold text-slate-900">
            Für wen ist U-Check gemacht?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-l-4 border-[var(--uc-blue)] bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Energieberatung</h3>
              <p className="mt-2 text-sm text-slate-600">Objektive Messdaten statt Näherungen; stärkt Nachvollziehbarkeit der Empfehlung.</p>
            </div>
            <div className="border-l-4 border-[var(--uc-pink)] bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Fensterbau & Bestand</h3>
              <p className="mt-2 text-sm text-slate-600">Klärung, ob tatsächlich ein Defizit vorliegt oder ob andere Maßnahmen priorisiert werden sollten.</p>
            </div>
            <div className="border-l-4 border-slate-400 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Bauphysik / Gutachten</h3>
              <p className="mt-2 text-sm text-slate-600">Messdaten als belastbare Ergänzung zu Berechnung und Erfahrung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading mb-10 text-center text-3xl font-bold text-slate-900">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {[
              { q: "Welche Fenster/Verglasungen?", a: "Fokus auf 2-fach und 3-fach Verglasungen im Bestand. Sonderfälle folgen später." },
              { q: "Wie lange dauert eine Messung?", a: "Ziel ist deutlich kürzer als mehrtägige Verfahren. Die genaue Dauer hängt von den Randbedingungen ab." },
              { q: "Geht das bei Tageslicht?", a: "Ja. Lichtmessung und die Erkennung solarer Einträge sind Teil des Konzepts." },
              { q: "Wie belastbar ist das Ergebnis?", a: "Wir nutzen ein physikalisches Modell mit Unsicherheitsbetrachtung. Das Ergebnis ist ein Messwert mit Einordnung." },
              { q: "Was kostet es?", a: "Die Preise sind noch in Finalisierung. Trag dich in die Warteliste ein für Launch-Infos." }
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
                <h4 className="font-semibold text-slate-900">{item.q}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist / Contact */}
      <section id="warteliste" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12">
                <h2 className="font-heading text-3xl font-bold text-white">
                  Produktstart nicht verpassen.
                </h2>
                <p className="mt-4 text-slate-300">
                  Trag dich ein und erhalte zum Launch eine kurze E-Mail mit Verfügbarkeit, Preisen und Pilotangeboten. Maximal wenige Nachrichten, jederzeit abmeldbar.
                </p>
                
                <div className="mt-8">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="h-px flex-1 bg-slate-700"></div>
                    <span>Status</span>
                    <div className="h-px flex-1 bg-slate-700"></div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    U-Check befindet sich in aktiver Entwicklung. Der aktuelle Stand umfasst funktionsfähige Prototypik und Datenerfassung.
                  </p>
                </div>

                <div className="mt-10 text-xs text-slate-500">
                  Wir verarbeiten deine E-Mail nur für Launch-Infos. Details in der Datenschutzerklärung.
                </div>
              </div>
              
              <div className="bg-white p-2">
                <iframe
                  title="U-Check Warteliste Formular"
                  src={BREVO_IFRAME_SRC}
                  className="h-full w-full min-h-[500px]"
                  frameBorder={0}
                  scrolling="auto"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-slate-900">U-Check</span>
            <span>— Wissen statt Schätzen.</span>
          </div>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-slate-900">Impressum</a>
            <a href="/datenschutz" className="hover:text-slate-900">Datenschutz</a>
            <a href="mailto:info@u-check.online" className="hover:text-slate-900">Kontakt</a>
          </div>
          <div>
            © {new Date().getFullYear()} Christoph Hauser
          </div>
        </div>
      </footer>
    </main>
  );
}
