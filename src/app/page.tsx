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
            <a className="transition hover:text-[var(--uc-blue)]" href="#team">Team</a>
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
                In-situ-Messung für Verglasungen
              </div>
              
              <h1 className="font-heading mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                U-Check macht den Ist-U-Wert messbar.
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Schluss mit Schätzungen aus Baujahrstabellen. U-Check ermittelt den realen energetischen Zustand von Verglasungen im Bestand – direkt vor Ort. Fundierte Daten für Eigentümer, Energieberater und Planer.
              </p>

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
                  Rechner testen
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none space-y-6">
               {/* Main Product Image */}
               <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                  <div className="aspect-video relative">
                    <Image 
                        src="/U-Check-Produktfoto.png" 
                        alt="U-Check Messgerät am Fenster" 
                        fill 
                        className="object-cover"
                    />
                  </div>
               </div>
               
               {/* 3D View */}
               <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-lg w-2/3 ml-auto -mt-12 border-4 border-white">
                  <div className="aspect-video relative">
                    <Image 
                        src="/U-Check-Produktfoto-3D-Ansicht.png" 
                        alt="U-Check 3D Ansicht" 
                        fill 
                        className="object-cover"
                    />
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
            Das Problem: Unbekannter Ist-Zustand.
          </h2>
          
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p>
              Im Bestand wird der U-Wert oft nur geschätzt. Baujahr und Typenschilder liefern jedoch keine Informationen über Alterungseffekte wie Gasverlust oder degradierte Beschichtungen.
            </p>
            <p>
              Die Folge: Intakte Fenster werden unnötig getauscht, während energetische Schwachstellen unentdeckt bleiben. U-Check ersetzt Annahmen durch Messwerte und schafft so Investitionssicherheit.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Relevanz Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            U-Wert = Bares Geld.
          </h2>
          
          <div className="mt-8 space-y-6 text-lg text-slate-600">
            <p>
              Der U-Wert bestimmt den Wärmeverlust. Je genauer Sie ihn kennen, desto präziser können Sie Sanierungsmaßnahmen planen und deren Wirtschaftlichkeit berechnen.
            </p>
            
            <div className="rounded-lg bg-slate-100 p-6 text-center">
                <div className="text-xl font-mono bg-white p-4 rounded border border-slate-200 inline-block">
                    <InlineMath math="\dot{Q} = U \, A \, \Delta T" />
                </div>
                <p className="mt-4 text-sm text-slate-500">
                    Wärmeverlust ist direkt proportional zum U-Wert.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Lösung Section */}
      <section id="loesung" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Die Lösung: Messen statt Schätzen.
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              U-Check ist ein mobiles Messsystem für 2- und 3-fach Verglasungen. Es liefert reproduzierbare Ergebnisse unter realen Bedingungen – inklusive Einordnung der Messunsicherheit.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Einfach",
                desc: "Schnelle Montage, definierter Kontakt, geführter Messablauf."
              },
              {
                title: "Präzise",
                desc: "Zeitreihenanalyse statt Einzelwert. Berücksichtigung dynamischer Randbedingungen."
              },
              {
                title: "Verständlich",
                desc: "Ergebnisaufbereitung für Beratung und Dokumentation."
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
            In 3 Schritten zum Ergebnis.
          </h2>
          
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Anbringen",
                desc: "Sensoren innen und außen positionieren."
              },
              {
                step: "2",
                title: "Messen",
                desc: "Kurze Messphase zur Datenerfassung."
              },
              {
                step: "3",
                title: "Auswerten",
                desc: "Automatische Berechnung des U-Werts."
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
        </div>
      </section>

      {/* 6) Visuelle Erklärung */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
                <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                    Wärmefluss verstehen.
                </h2>
            </div>
            
            <MoleculeAnimation />
            
            <div className="mt-8 text-center">
                <a
                  href="#rechner"
                  className="inline-block rounded-xl bg-[var(--uc-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
                >
                  Zum Rechner
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
                        Amortisations-Rechner
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Berechnen Sie das Einsparpotenzial durch Fenstertausch.
                    </p>
                </div>
                <AmortizationCalculator />
            </div>

            {/* 7B) Ug Rechner */}
            <div>
                <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-3xl font-bold text-slate-900">
                        Ug-Rechner (DIN EN 673)
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Simulieren Sie den Einfluss von Gasfüllung und Beschichtung.
                    </p>
                </div>
                <UgCalculator />
            </div>
        </div>
      </section>

      {/* Team & Partner Section */}
      <section id="team" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold text-slate-900">
                    Team & Partner
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                    Kompetenz aus Forschung und Praxis.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Team Members */}
                <div className="space-y-8">
                    <h3 className="font-heading text-xl font-bold text-slate-900 border-b pb-2">Gründerteam</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="text-center">
                            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full bg-slate-200 mb-4 shadow-md">
                                <Image src="/christoph-hauser.jpg" alt="Christoph Hauser" fill className="object-cover" />
                            </div>
                            <h4 className="font-bold text-slate-900">Christoph Hauser</h4>
                            <p className="text-sm text-slate-500">Co-Founder</p>
                        </div>
                        <div className="text-center">
                            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full bg-slate-200 mb-4 shadow-md">
                                <Image src="/StefanBriem.jpg" alt="Stefan Briem" fill className="object-cover" />
                            </div>
                            <h4 className="font-bold text-slate-900">Stefan Briem</h4>
                            <p className="text-sm text-slate-500">Co-Founder</p>
                        </div>
                    </div>
                </div>

                {/* Partners & Awards */}
                <div className="space-y-8">
                    <h3 className="font-heading text-xl font-bold text-slate-900 border-b pb-2">Partner & Auszeichnungen</h3>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-center gap-6">
                        <div className="relative h-20 w-20 flex-shrink-0">
                             <Image src="/IDEAchallenge.png" alt="IDEA Challenge" fill className="object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-yellow-900">Gewinner IDEAchallenge 2025</h4>
                            <p className="text-sm text-yellow-800 mt-1">Ausgezeichnet für innovative Gründungsideen.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 items-center">
                        <div className="relative h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
                            <Image src="/Logo_HFT.png" alt="HFT Stuttgart" fill className="object-contain" />
                        </div>
                        <div className="relative h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
                            <Image src="/Logo_TH Rosenheim.png" alt="TH Rosenheim" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 11) FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-12">
                FAQ
            </h2>
            <div className="space-y-6">
                {[
                    {
                        q: "Einsatzbereich?",
                        a: "2-fach und 3-fach Verglasungen im Bestand."
                    },
                    {
                        q: "Messdauer?",
                        a: "Abhängig von den Randbedingungen, optimiert für schnelle Ergebnisse."
                    },
                    {
                        q: "Genauigkeit?",
                        a: "Liefert Messergebnisse inklusive Unsicherheitsbetrachtung."
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
                Interessiert?
            </h2>
            <p className="mt-4 text-slate-600">
                Tragen Sie sich unverbindlich in die Warteliste ein.
            </p>
            
            <div className="mt-10 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-6 bg-slate-50 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900">Warteliste</h3>
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
        </div>
      </section>

      {/* 13) Footer */}
      <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <span className="font-bold text-white text-lg">U-Check</span>
            </div>
            <div className="flex gap-6">
                <a href="/impressum" className="hover:text-white">Impressum</a>
                <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
                <a href="mailto:info@u-check.online" className="hover:text-white">Kontakt</a>
            </div>
        </div>
      </footer>
    </main>
  );
}
