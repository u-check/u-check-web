import Image from "next/image";

const BREVO_IFRAME_SRC =
  "https://f0c05fc7.sibforms.com/serve/MUIFAA4lpcjXkUEGTVf5oywjzEyPmngXfoCouO9toVgYboUXSQUHDboq4iX045zXhJWBGyuEYg8tgQcTlu4aRZ0osmTGl4AeNnDYQ5TQbYrOl0EL5tdZET3iBGeBaWhXyyCRbrzkMQK4c5CkdoLExJDPwzA_8NMu3jKTj7yuN9FGO3mlCvVemXgAwCRowwkyx3CFft1nrdOuHDtJ";

export default function Home() {
  return (
    <main>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/u-check-mark.png"
              alt="U-Check"
              width={34}
              height={34}
              priority
            />
            <span className="font-heading text-lg font-semibold tracking-tight">
              U-Check
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#produkt">
              Produkt
            </a>
            <a className="hover:text-slate-900" href="#vorteile">
              Nutzen
            </a>
            <a className="hover:text-slate-900" href="#methodik">
              Methodik
            </a>
            <a className="hover:text-slate-900" href="#kontakt">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm"
            style={{
              background: "linear-gradient(90deg, var(--uc-blue), var(--uc-pink))",
            }}
          >
            Warteliste
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/brand/u-check-gradient-soft.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 opacity-35">
            <Image
              src="/brand/u-check-dots.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <Image
              src="/brand/u-check-logo.png"
              alt="U-Check"
              width={520}
              height={120}
              className="mb-10 h-auto w-[320px] md:w-[420px]"
              priority
            />

            <p className="text-sm font-semibold text-slate-700">
              Wissen statt schätzen.
            </p>

            <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              In-situ-U-Wert-Bewertung von Verglasungen – belastbar, praxisnah, skalierbar.
            </h1>

            <p className="mt-5 text-lg text-slate-700">
              U-Check ist ein mobiles Messsystem zur Bewertung von 2- und 3-fach-Verglasungen im Bestand.
              Temperatur-, Wärmefluss- und Lichtsensorik werden mit einer dynamischen Auswertung kombiniert,
              um reale Randbedingungen methodisch sauber abzubilden.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm"
                style={{
                  background:
                    "linear-gradient(90deg, var(--uc-blue), var(--uc-pink))",
                }}
              >
                Auf die Warteliste
              </a>

              <a
                href="#methodik"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
              >
                Methodik ansehen
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Hinweis: U-Check befindet sich in Entwicklung. Eintragung per Double-Opt-In; Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>
      </section>

      {/* Produkt */}
      <section id="produkt" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900">
              Produktfokus
            </h2>
            <p className="mt-4 text-slate-700">
              Im Bestand sind Verglasungen häufig energetisch schlechter als angenommen – oder besser als vermutet.
              U-Check zielt darauf, die Qualität einzelner Fenster systematisch zu bewerten und Entscheidungen zu
              Sanierung, Austausch oder Weiterbetrieb auf Messdaten zu stützen.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Messung unter realen, transienten Randbedingungen</li>
              <li>• Fokus auf Verglasungen (2-fach / 3-fach) statt opake Bauteile</li>
              <li>• Ergebnis: belastbare Kennwerte für Beratung und Qualitätssicherung</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">Sensorik</div>
                <div className="mt-2 text-sm text-slate-700">
                  Temperatur innen/außen, Wärmefluss, Licht/Sonneneinstrahlung.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">Auswertung</div>
                <div className="mt-2 text-sm text-slate-700">
                  Dynamische Identifikation eines reduzierten physikalischen Modells.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">Workflow</div>
                <div className="mt-2 text-sm text-slate-700">
                  Messaufbau, Aufzeichnung, Upload/Export, Ergebnisbericht.
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">Zielgruppe</div>
                <div className="mt-2 text-sm text-slate-700">
                  Bauphysik, Energieberatung, Bestandshalter, Qualitätssicherung.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section id="vorteile" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl p-10 md:p-12 uc-soft">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900">
              Nutzen in der Praxis
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">Bessere Entscheidungen</div>
                <p className="mt-2 text-sm text-slate-700">
                  Investitionen dorthin lenken, wo der energetische und wirtschaftliche Effekt nachweislich am größten ist.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">Bestand erfassen</div>
                <p className="mt-2 text-sm text-slate-700">
                  Alterungseffekte (z. B. Gasverlust, Low-E-Degradation) systematisch sichtbar machen.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">Skalierbar</div>
                <p className="mt-2 text-sm text-slate-700">
                  Standardisierter Mess- und Auswerteprozess für wiederholbare Ergebnisse über viele Objekte hinweg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodik */}
      <section id="methodik" className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900">
              Methodik: dynamisch statt nur stationär
            </h2>
            <p className="mt-4 text-slate-700">
              In der Praxis sind Randbedingungen selten stationär. U-Check setzt deshalb auf eine dynamische
              Auswertung, die Transienten explizit berücksichtigt und Modellparameter aus Messdaten identifiziert.
              Ziel ist eine robuste Abschätzung, die im Bestand belastbar bleibt.
            </p>
            <p className="mt-4 text-slate-700">
              Die Systemarchitektur trennt Datenerfassung und rechenintensive Auswertung: Der Messkopf protokolliert
              zuverlässig, die Identifikation und Unsicherheitsanalyse kann extern erfolgen.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div
              className="rounded-2xl p-6 text-white"
              style={{
                background:
                  "linear-gradient(90deg, var(--uc-blue), var(--uc-pink))",
              }}
            >
              <div className="text-sm font-semibold">Technische Kurzform</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• RC-/Grey-Box-Modell reduzierter Ordnung</li>
                <li>• Parameteridentifikation aus Zeitreihen</li>
                <li>• Ergebnisdarstellung mit Unsicherheitsbezug</li>
              </ul>
            </div>

            <div className="mt-6 text-sm text-slate-700">
              Wenn Sie Pilotpartner sind (Beratung/Bestandshalter/Hersteller), ist besonders interessant:
              reproduzierbare Prozesse, Vergleichbarkeit über Standorte und systematische Erfassung von Alterung.
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt + Brevo */}
      <section id="kontakt" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="font-contact text-3xl font-semibold tracking-tight text-slate-900">
                  Kontakt & Warteliste
                </h2>
                <p className="mt-4 text-slate-700">
                  Tragen Sie sich ein und erhalten Sie zum Produktstart eine kurze Information.
                  Die Anmeldung erfolgt per Double-Opt-In; ohne Bestätigung werden Sie nicht in den Verteiler aufgenommen.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 p-6 uc-soft">
                  <div className="text-sm font-semibold text-slate-900">Direktkontakt</div>
                  <p className="mt-2 text-sm text-slate-700">
                    E-Mail:{" "}
                    <a className="underline" href="mailto:info@u-check.online">
                      info@u-check.online
                    </a>
                    <br />
                    Rechtliches:{" "}
                    <a className="underline" href="/impressum">
                      Impressum
                    </a>{" "}
                    ·{" "}
                    <a className="underline" href="/datenschutz">
                      Datenschutz
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
                <iframe
                  title="U-Check Warteliste Formular"
                  src={BREVO_IFRAME_SRC}
                  className="h-[560px] w-full"
                  frameBorder={0}
                  scrolling="auto"
                  allowFullScreen
                />
                <p className="mt-3 text-xs text-slate-500">
                  Hinweis: Abmeldung jederzeit möglich. Datenschutzinformationen finden Sie unter{" "}
                  <a className="underline" href="/datenschutz">
                    u-check.online/datenschutz
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} U-Check</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="/impressum">
              Impressum
            </a>
            <a className="hover:text-slate-900" href="/datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
