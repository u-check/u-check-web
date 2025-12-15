import Image from "next/image";
import AmortizationCalculator from "@/components/calculators/AmortizationCalculator";
import UgCalculator from "@/components/calculators/UgCalculator";
import MoleculeAnimation from "@/components/MoleculeAnimation";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const BREVO_IFRAME_SRC =
  "https://f0c05fc7.sibforms.com/serve/MUIFAA4lpcjXkUEGTVf5oywjzEyPmngXfoCouO9toVgYboUXSQUHDboq4iX045zXhJWBGyuEYg8tgQcTlu4aRZ0osmTGl4AeNnDYQ5TQbYrOl0EL5tdZET3iBGeBaWhXyyCRbrzkMQK4c5CkdoLExJDPwzA_8NMu3jKTj7yuN9FGO3mlCvVemXgAwCRowwkyx3CFft1nrdOuHDtJ";

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-slate-900">
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

      {/* 1) Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70"></div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-600"></span>
                In-situ-Messung für Verglasungen im Bestand
              </div>
              
              <h1 className="font-heading mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                U-Check macht den Ist-U-Wert von Fenstern messbar – direkt am Gebäude.
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Im Bestand entscheiden Eigentümer, Energieberatung und Planung häufig auf Basis von Tabellenwerten, Baujahrannahmen oder Erfahrungswerten. Diese Annahmen sind oft zu grob, weil Verglasungen altern können, ohne dass es sichtbar wird. U-Check zielt darauf, den realen Zustand einzelner Fenster belastbar zu erfassen und damit Sanierungsentscheidungen auf Messdaten zu stützen.
              </p>

              <div className="mt-8 space-y-3 border-t border-slate-100 pt-8">
                {[
                  "Daten statt Schätzung: realer U-Wert als Grundlage für Wirtschaftlichkeit und Priorisierung.",
                  "Praxisnah: kurze Messphase, klare Ergebnisdarstellung, reproduzierbarer Ablauf.",
                  "Technisch fundiert: dynamische Auswertung statt reiner Stationärannahme."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--uc-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#warteliste"
                  className="rounded-xl bg-[var(--uc-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl"
                >
                  Auf die Warteliste
                </a>
                <a
                  href="#rechner"
                  className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Ersparnis-Rechner testen
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Eintragung per Double-Opt-In. Wir senden wenige, relevante Updates und informieren zum Produktstart. Abmeldung jederzeit möglich.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none space-y-6">
               {/* Image 1 */}
               <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                  <div className="aspect-video relative bg-slate-200 flex items-center justify-center text-slate-400">
                    <span className="text-sm">Bild 1: Produkt am Fenster (Gesamtsystem)</span>
                  </div>
                  <div className="bg-white p-3 text-xs text-slate-500 italic">
                    „U-Check im Einsatz: Messaufbau an einer Bestandsverglasung.“
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                 {/* Image 2 */}
                 <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                    <div className="aspect-square relative bg-slate-200 flex items-center justify-center text-slate-400 p-4 text-center">
                        <span className="text-sm">Bild 2: Detail Sensor/Anpressung</span>
                    </div>
                    <div className="bg-white p-3 text-xs text-slate-500 italic">
                        „Detailansicht des Sensormoduls: reproduzierbarer Kontakt und robuste Montage.“
                    </div>
                 </div>
                 {/* Image 3 */}
                 <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                    <div className="aspect-square relative bg-slate-200 flex items-center justify-center text-slate-400 p-4 text-center">
                        <span className="text-sm">Bild 3: UI-Screenshot (Chart/Export)</span>
                    </div>
                    <div className="bg-white p-3 text-xs text-slate-500 italic">
                        „Datenansicht: Zeitreihen und Ergebnisexport für Auswertung und Dokumentation.“
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Problem Section */}
      <section id="problem" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Das Problem: Fenster sind teuer – und der Ist-Zustand ist oft unbekannt.
          </h2>
          
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p>
              Bei Bestandsgebäuden ist der energetische Zustand einzelner Fenster in der Regel nicht gemessen, sondern abgeleitet. In der Praxis wird der U-Wert häufig aus Baujahr, Typbezeichnungen oder typischen Katalogwerten geschätzt. Damit entsteht eine systematische Unsicherheit genau an der Stelle, an der über Investitionen in Höhe von mehreren tausend Euro entschieden wird.
            </p>
            <p>
              Verglasungen können altern: Gasfüllungen können sich verändern, Beschichtungen können degradieren, Randverbünde können über die Zeit an Performance verlieren. Solche Effekte sind für Nutzerinnen und Nutzer oft nicht sichtbar, können aber energetisch relevant sein. Das führt dazu, dass „ähnlich aussehende“ Fenster in der Realität sehr unterschiedliche U-Werte besitzen können.
            </p>
            <p>
              Diese Unsicherheit hat Konsequenzen: Intakte Verglasungen werden ersetzt, obwohl der energetische Nutzen gering ist, während tatsächlich schwache Verglasungen im Bestand bleiben, weil sie in der Schätzung „gut genug“ wirken. Eine Messung des Ist-U-Werts verschiebt die Entscheidung von „Glauben und Erfahrung“ hin zu „Daten und Begründbarkeit“.
            </p>
          </div>

          <div className="mt-8 rounded-xl border-l-4 border-[var(--uc-pink)] bg-white p-6 shadow-sm">
            <p className="font-medium text-slate-900">
              Wenn der Ist-U-Wert nicht bekannt ist, schwankt die berechnete Einsparung stark. Genau diese Streuung bestimmt, ob ein Fenstertausch wirtschaftlich ist – oder erst nach sehr langer Zeit.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Relevanz Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            U-Wert ist nicht Theorie: Er übersetzt sich direkt in Wärmeverlust und Kosten.
          </h2>
          
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p>
              Der U-Wert beschreibt, wie stark ein Bauteil Wärme bei einer Temperaturdifferenz durchlässt. Für Verglasungen bedeutet das: Je höher der U-Wert, desto größer der Wärmeverlust in Heizperioden. Die entscheidende Größe in der Praxis ist nicht nur „U-Wert“, sondern „U-Wert im konkreten Gebäude“ – mit realen Temperaturen, realer Nutzung und realen Energiepreisen.
            </p>
            
            <div className="rounded-lg bg-slate-100 p-6 text-center">
                <p className="mb-4 text-left">
                    Näherungsweise skaliert die Wärmeverlustleistung <InlineMath math="\dot{Q}" /> mit dem U-Wert <InlineMath math="U" />, der Fensterfläche <InlineMath math="A" /> und der Temperaturdifferenz <InlineMath math="\Delta T" />. Damit wird sofort klar, warum Fläche und Ist-U-Wert entscheidend sind.
                </p>
                <div className="text-xl font-mono bg-white p-4 rounded border border-slate-200 inline-block">
                    <InlineMath math="\dot{Q} = U \, A \, \Delta T" />
                </div>
            </div>

            <p>
              Aus Nutzerperspektive ist die Frage fast immer: „Was bringt eine Verbesserung in Euro pro Jahr und wie lange dauert es, bis sich die Investition amortisiert?“ Eine professionelle Website sollte diese Übersetzung früh liefern, weil sie die Motivation erzeugt, sich mit Details zu beschäftigen.
            </p>
            
            <p className="text-sm text-slate-500 italic">
                Wenn Sie Ihren Ist-U-Wert nur schätzen, testen Sie den Rechner mit einem Wertebereich. U-Check ist dafür gedacht, genau diesen kritischen Input messbar zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* 4) Lösung Section */}
      <section id="loesung" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Die Lösung: U-Check misst den Ist-U-Wert von Verglasungen vor Ort.
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              U-Check ist ein mobiles Messsystem, das den energetischen Zustand von 2-fach und 3-fach Verglasungen im Bestand bewertet. Ziel ist ein Ergebnis, das in der Praxis nachvollziehbar ist: Messdaten, Einordnung und ein klarer, reproduzierbarer Ablauf.
            </p>
            <p className="mt-4 text-slate-400">
              U-Check ist nicht als „magische Zahl auf Knopfdruck“ gedacht, sondern als methodisch sauberes Mess- und Auswerteverfahren, das reale Randbedingungen berücksichtigt. In der Realität sind Temperaturen, Konvektion und solare Einflüsse nicht konstant. Eine professionelle Lösung erkennt diese Dynamik und nutzt sie in der Auswertung, statt sie zu ignorieren.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Schneller, reproduzierbarer Aufbau",
                desc: "Kurze Montagezeit und ein definierter Kontakt sind zentral, damit Messungen vergleichbar werden."
              },
              {
                title: "Zeitreihen statt Einzelwerte",
                desc: "Messdaten werden als Verlauf aufgezeichnet. Das erhöht Informationsgehalt und Robustheit."
              },
              {
                title: "Ergebnis mit Einordnung",
                desc: "Ausgabe nicht nur als Zahl, sondern als Ergebnis mit plausibler Interpretation und Dokumentation."
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl bg-slate-800 p-8 transition hover:bg-slate-700">
                <h3 className="font-heading text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-4 text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) So funktioniert's */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Ablauf: Anbringen – Messen – Auswerten.
          </h2>
          
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Anbringen",
                desc: "Das System wird an der Verglasung positioniert, sodass Innen- und Außenseite erfasst werden können und der Kontakt reproduzierbar ist."
              },
              {
                step: "2",
                title: "Messen",
                desc: "Über eine kurze Messphase werden Temperatur- und Wärmestromdaten (und optional Lichteinfluss) als Zeitreihen protokolliert."
              },
              {
                step: "3",
                title: "Auswerten",
                desc: "Die Auswertung identifiziert die relevanten Parameter eines physikalischen Modells und leitet daraus den U-Wert ab; das Ergebnis wird dokumentierbar ausgegeben."
              }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-[var(--uc-blue)]">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-slate-500">
            Die optimale Messdauer hängt von Randbedingungen ab. U-Check ist darauf ausgelegt, praxisnahe Messzeiten zu ermöglichen und trotzdem methodisch belastbar zu bleiben.
          </p>
        </div>
      </section>

      {/* 6) Visuelle Erklärung */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
                <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                    Wärmefluss sichtbar gemacht – intuitiv, aber nicht vereinfachend.
                </h2>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                    Viele Nutzer verstehen U-Werte erst dann wirklich, wenn Wärmeverlust nicht nur als Zahl, sondern als anschauliche Bewegung dargestellt wird. Eine Animation mit „Energiepunkten“ ist dafür ideal: Sie ist sofort verständlich, ohne falsche physikalische Behauptungen über Molekülmechanik zu machen.
                </p>
            </div>
            
            <MoleculeAnimation />
            
            <div className="mt-8 text-center">
                <a
                  href="#rechner"
                  className="inline-block rounded-xl bg-[var(--uc-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
                >
                  Jetzt mit Ihrem Fenster rechnen
                </a>
            </div>
        </div>
      </section>

      {/* 7) Interaktive Tools */}
      <section id="rechner" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
            
            {/* 7A) Amortisation */}
            <div>
                <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-3xl font-bold text-slate-900">
                        Was bringt ein besserer U-Wert in Euro pro Jahr?
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Dieser Rechner zeigt, wie sich U-Wert, Fläche und Standortkennwerte in jährliche Energie- und Kosteneffekte übersetzen. Er dient als Orientierung und macht transparent, warum der Ist-U-Wert der entscheidende Unsicherheitsfaktor ist. Wenn Sie den Ist-U-Wert nicht kennen, testen Sie bewusst einen Wertebereich.
                    </p>
                </div>
                <AmortizationCalculator />
                <div className="mt-6 text-center">
                    <a href="#warteliste" className="text-[var(--uc-blue)] font-semibold hover:underline">
                        Ist-U-Wert messen lassen / Warteliste
                    </a>
                </div>
            </div>

            {/* 7B) Ug Rechner */}
            <div>
                <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-3xl font-bold text-slate-900">
                        Ug-Rechner nach DIN EN 673 – als transparente Referenz
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Dieser Rechner ist als didaktische Referenz gedacht: Er macht sichtbar, wie stark Annahmen (Gasfüllung, SZR, Low-E) den berechneten Ug-Wert beeinflussen. Er ist nicht als Ersatz für eine vollständige normative Auslegung aller Sonderfälle gedacht, sondern als verständliche Vergleichsbasis.
                    </p>
                </div>
                <UgCalculator />
                <div className="mt-6 text-center">
                    <a href="#warteliste" className="text-[var(--uc-blue)] font-semibold hover:underline">
                        Vergleich mit Messung: Warteliste für U-Check
                    </a>
                </div>
            </div>

            {/* 7C) Mini-Tool Schätzen vs Messen */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Wie viel streut die Entscheidung, wenn der Ist-U-Wert nur geschätzt wird?
                </h3>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Wählen Sie eine plausible Bandbreite für <InlineMath math="U_{alt}" /> und sehen Sie, wie stark Einsparung und Amortisation schwanken. Genau hier setzt U-Check an: Der Messwert reduziert die Streuung der Entscheidung.
                </p>
            </div>

        </div>
      </section>

      {/* 8) Warum U-Check */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-3xl font-bold text-slate-900">
                Warum Messdaten den Unterschied machen.
            </h2>
            <div className="mt-8 space-y-6 text-lg text-slate-600">
                <p>
                    Professionelle Energieberatung ist dann überzeugend, wenn Empfehlungen nachvollziehbar sind. Tabellenwerte sind dafür oft zu grob, weil sie den Ist-Zustand einzelner Verglasungen nicht abbilden. Eine Messung schafft einen objektiven Ausgangspunkt: Sie macht transparent, ob ein Fenster tatsächlich der dominante Verlustpfad ist oder ob andere Maßnahmen vorrangig wirken.
                </p>
                <p>
                    U-Check positioniert sich bewusst als Brücke zwischen zwei Welten: auf der einen Seite physikalisch belastbare Modelle und Zeitreihenanalyse, auf der anderen Seite ein Workflow, der im Bestand praktisch umsetzbar ist. Das Ziel ist nicht maximale theoretische Komplexität, sondern maximale Entscheidungsqualität pro Aufwand.
                </p>
            </div>
        </div>
      </section>

      {/* 9) Zielgruppen */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
                Für wen U-Check gedacht ist.
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: "Energieberatung",
                        text: "Sie erhalten einen belastbaren Ist-Wert für die Beratungspraxis. Das verbessert Priorisierung, Dokumentation und Plausibilisierung gegenüber Auftraggebern."
                    },
                    {
                        title: "Bestandshalter / Eigentümer",
                        text: "Sie investieren dort, wo es sich nachweislich lohnt. Intakte Fenster werden gezielt weitergenutzt, schwache Verglasungen werden identifiziert und priorisiert."
                    },
                    {
                        title: "Fensterbau / QS",
                        text: "U-Check kann helfen, den energetischen Zustand im Feld zu bewerten, Reklamationen einzuordnen und Alterungseffekte systematisch zu erfassen."
                    },
                    {
                        title: "Forschung / Innovation",
                        text: "Zeitreihenbasierte Auswertung und Unsicherheitsbezug sind anschlussfähig an wissenschaftliche Weiterentwicklung und Datensammlung im Feld."
                    }
                ].map((group, i) => (
                    <div key={i} className="bg-slate-800 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-3 text-[var(--uc-pink)]">{group.title}</h3>
                        <p className="text-slate-300 text-sm">{group.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 10) Status & Roadmap */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900">
                Status: Entwicklung mit Fokus auf Praxistauglichkeit.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
                U-Check befindet sich in Entwicklung. Der Schwerpunkt liegt auf einem robusten Messworkflow, einer nachvollziehbaren Auswertung und einer Ergebnisdarstellung, die in Beratung und Bestandspraxis sofort nutzbar ist. Wenn Sie Pilotpartner sind oder Interesse an frühen Tests haben, ist die Warteliste der schnellste Weg zur Kontaktaufnahme.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-left md:text-center">
                {[
                    "Pilotmessungen und Workflow-Feinschliff",
                    "Auswertungsautomatisierung und Reporting",
                    "Launch-Phase und skalierbare Verfügbarkeit"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[var(--uc-blue)]"></div>
                        <span className="font-medium text-slate-800">{item}</span>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <a href="#warteliste" className="inline-block rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    Pilotinteresse anmelden
                </a>
            </div>
        </div>
      </section>

      {/* Team & Trust Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
                        Das Team & Partner
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                        U-Check entsteht in Kooperation mit der <strong>Hochschule für Technik Stuttgart (HFT)</strong>. Wir verbinden akademische Forschung mit praktischer Anwendung.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                        <h3 className="font-bold text-yellow-800 mb-2">🏆 Gewinner der IDEAchallenge 2025</h3>
                        <p className="text-yellow-700 text-sm mb-4">
                            U-Check wurde mit dem mit 1.000 € dotierten Preis ausgezeichnet.
                        </p>
                        <a href="https://www.youtube.com/watch?v=DY1xTG-Uuq0" target="_blank" rel="noopener noreferrer" className="text-yellow-800 underline text-sm font-semibold hover:text-yellow-900">
                            Zum Video ansehen (YouTube) &rarr;
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                        <span className="text-sm">Team Foto 1</span>
                    </div>
                    <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                        <span className="text-sm">Team Foto 2</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 11) FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-12">
                Häufige Fragen
            </h2>
            <div className="space-y-6">
                {[
                    {
                        q: "Welche Fenster kann U-Check bewerten?",
                        a: "U-Check zielt primär auf 2-fach und 3-fach Verglasungen im Bestand. Sonderfälle (z. B. spezielle Beschichtungen oder Geometrien) werden als Erweiterung betrachtet, sobald der Standard-Workflow robust etabliert ist."
                    },
                    {
                        q: "Wie lange dauert eine Messung?",
                        a: "Die Messdauer hängt von Randbedingungen und gewünschter Sicherheit ab. Das System ist auf praxisnahe Messzeiten ausgelegt und nutzt Zeitreiheninformation, um auch bei transienten Bedingungen auswertbar zu bleiben."
                    },
                    {
                        q: "Funktioniert das auch bei Tageslicht?",
                        a: "Tageslicht und solare Einflüsse sind reale Randbedingungen im Bestand. Ein professioneller Ansatz macht diese Einflüsse sichtbar und berücksichtigt sie methodisch, statt nur „ideal stationäre“ Situationen zu verlangen."
                    },
                    {
                        q: "Wie „genau“ ist das Ergebnis?",
                        a: "U-Check soll Ergebnisse nicht als isolierte Zahl liefern, sondern mit Einordnung. Entscheidend ist die Nachvollziehbarkeit: Messdaten, plausibler Auswerteweg und eine Aussage, wie sensitiv das Ergebnis gegenüber Randbedingungen ist."
                    },
                    {
                        q: "Wie oft schreibt ihr mir?",
                        a: "Wenige E-Mails, klarer Zweck: Produktstart, wesentliche Updates, Pilotmöglichkeiten. Abmeldung jederzeit per Link."
                    },
                    {
                        q: "Was passiert mit meinen Daten?",
                        a: "Wir verarbeiten Ihre E-Mail ausschließlich für Warteliste/Launch-Information. Eintragung per Double-Opt-In. Details stehen in der Datenschutzerklärung."
                    }
                ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                        <p className="text-slate-600 text-sm">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 12) Warteliste */}
      <section id="warteliste" className="py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900">
                Zum Produktstart informiert werden.
            </h2>
            <p className="mt-4 text-slate-600">
                Tragen Sie sich ein und erhalten Sie zum Launch eine kurze Information mit Verfügbarkeit und den wichtigsten Eckdaten. Wir senden wenige Nachrichten und verzichten auf unnötige Daten.
            </p>
            
            <div className="mt-10 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-6 bg-slate-50 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900">U-Check Warteliste</h3>
                </div>
                <div className="p-6">
                    <iframe
                        width="100%"
                        height="450"
                        src={BREVO_IFRAME_SRC}
                        frameBorder="0"
                        scrolling="auto"
                        style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
                    ></iframe>
                </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">
                Sie können sich jederzeit abmelden. Datenschutz: <a href="/datenschutz" className="underline">u-check.online/datenschutz</a>
            </p>
        </div>
      </section>

      {/* 13) Footer */}
      <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <span className="font-bold text-white text-lg">U-Check</span> – Wissen statt Schätzen.
            </div>
            <div className="flex gap-6">
                <a href="/impressum" className="hover:text-white">Impressum</a>
                <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
                <a href="mailto:info@u-check.online" className="hover:text-white">Kontakt</a>
            </div>
            <div>
                info@u-check.online
            </div>
        </div>
      </footer>
    </main>
  );
}
