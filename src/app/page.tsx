import Image from "next/image";
import AmortizationCalculator from "@/components/calculators/AmortizationCalculator";
import UgCalculator from "@/components/calculators/UgCalculator";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import HeroWaitlistButton from "@/components/HeroWaitlistButton";
import WaitlistSectionButton from "@/components/WaitlistSectionButton";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const BREVO_IFRAME_SRC =
  "https://f0c05fc7.sibforms.com/serve/MUIFAA4lpcjXkUEGTVf5oywjzEyPmngXfoCouO9toVgYboUXSQUHDboq4iX045zXhJWBGyuEYg8tgQcTlu4aRZ0osmTGl4AeNnDYQ5TQbYrOl0EL5tdZET3iBGeBaWhXyyCRbrzkMQK4c5CkdoLExJDPwzA_8NMu3jKTj7yuN9FGO3mlCvVemXgAwCRowwkyx3CFft1nrdOuHDtJ";

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-slate-900">
      {/* Header */}
      <Header />

      {/* 1) Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70"></div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-0">
            <div className="max-w-2xl relative z-10">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.1] animate-fade-in-up">
                <span className="whitespace-nowrap">U-Werte</span> von Verglasungen vor Ort einfach und präzise bestimmen.
              </h1>
              
              <p className="mt-8 text-lg leading-relaxed text-slate-600 animate-fade-in-up delay-100 max-w-xl">
                <span className="whitespace-nowrap">U-Check</span> macht fortschrittlichste Auswertungsmethoden zugänglich, liefert schnell valide Ergebnisse und unterstützt dabei effiziente und fundierte Sanierungsentscheidungen zu treffen. <span className="whitespace-nowrap">U-Check</span> liefert dort präzise Ergebnisse, wo konkurrierende Verfahren kapitulieren.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-200">
                <HeroWaitlistButton />
                <a
                  href="#rechner"
                  className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Rechner testen
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-fade-in-up delay-300 flex justify-center lg:justify-end pointer-events-none select-none">
               <div className="relative w-full h-[180px] sm:h-[350px] lg:h-[450px]">
                 <Image 
                     src="/u-check-Produkfoto-3D-Frontal.PNG" 
                     alt="U-Check Frontalansicht" 
                     fill 
                     className="object-contain drop-shadow-2xl"
                     quality={100}
                     priority
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Problem Section */}
      <section id="problem" className="bg-slate-50 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl leading-tight">
              Das Problem: Fenster sind teuer – und der Ist-Zustand ist oft unbekannt.
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="mt-10 space-y-8 text-lg leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
              <p>
                Im Bestand entscheiden Eigentümer, Energieberatung und Planung häufig auf Basis von Tabellenwerten oder Baujahrannahmen. Diese sind oft zu ungenau, da Alterungseffekte nicht berücksichtigt werden.
              </p>
              <p>
                Bei Bestandsgebäuden ist der energetische Zustand einzelner Fenster in der Regel nicht gemessen, sondern abgeleitet. In der Praxis wird der <span className="whitespace-nowrap">U-Wert</span> häufig aus Baujahr, Typbezeichnungen oder typischen Katalogwerten geschätzt. Damit entsteht eine systematische Unsicherheit genau an der Stelle, an der über Investitionen in Höhe von mehreren tausend Euro entschieden wird.
              </p>
              <p>
                Verglasungen können altern: Gasfüllungen können sich verändern, Beschichtungen können degradieren. Solche Effekte sind für Nutzerinnen und Nutzer oft nicht sichtbar, können aber energetisch relevant sein. Das führt dazu, dass „ähnlich aussehende“ Fenster in der Realität sehr unterschiedliche <span className="whitespace-nowrap">U-Werte</span> besitzen können.
              </p>
              <p>
                Diese Unsicherheit hat Konsequenzen: Intakte Verglasungen werden ersetzt, obwohl der energetische Nutzen gering ist, während tatsächlich schwache Verglasungen im Bestand bleiben. Eine Messung des Ist-<span className="whitespace-nowrap">U-Werts</span> verschiebt die Entscheidung von „Glauben und Erfahrung“ hin zu „Daten und Begründbarkeit“.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3) Relevanz Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl leading-tight">
              <span className="whitespace-nowrap">U-Wert</span> ist nicht Theorie: Er übersetzt sich direkt in Kosten.
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="mt-10 space-y-8 text-lg leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
              <p>
                Der <span className="whitespace-nowrap">U-Wert</span> beschreibt, wie stark ein Bauteil Wärme bei einer Temperaturdifferenz durchlässt. Für Verglasungen bedeutet das: Je höher der <span className="whitespace-nowrap">U-Wert</span>, desto größer der Wärmeverlust in Heizperioden. Die entscheidende Größe in der Praxis ist nicht nur „<span className="whitespace-nowrap">U-Wert</span>“, sondern „<span className="whitespace-nowrap">U-Wert</span> im konkreten Gebäude“ – mit realen Temperaturen, realer Nutzung und realen Energiepreisen.
              </p>
              <p>
                Aus Nutzerperspektive ist die Frage fast immer: „Was bringt eine Verbesserung in Euro pro Jahr und wie lange dauert es, bis sich die Investition amortisiert?“
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4) Lösung Section */}
      <section id="loesung" className="bg-slate-900 py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl leading-tight">
                Die Lösung: <span className="whitespace-nowrap">U-Check</span> misst den Ist-<span className="whitespace-nowrap">U-Wert</span> von Verglasungen vor Ort.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-10 text-lg leading-relaxed text-slate-300 md:text-xl md:leading-relaxed">
                <span className="whitespace-nowrap">U-Check</span> ist ein mobiles Messsystem, das den energetischen Zustand von 2-fach und 3-fach Verglasungen im Bestand bewertet. Ziel ist ein Ergebnis, das in der Praxis nachvollziehbar ist: Messdaten, Einordnung und ein klarer, reproduzierbarer Ablauf.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl md:leading-relaxed">
                Das System nutzt ein komplexes physikalisches Modell, um aus den dynamischen Reaktionen der Verglasung auf Temperaturänderungen den <span className="whitespace-nowrap">U-Wert</span> zu bestimmen. Dabei werden reale Randbedingungen berücksichtigt, statt nur ideale Laborbedingungen anzunehmen.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
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
              <FadeIn key={i} delay={i * 150 + 300} className="h-full">
                <div className="rounded-2xl bg-slate-800 p-8 transition hover:bg-slate-700 h-full">
                  <h3 className="font-heading text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-400">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5) So funktioniert's */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-center text-3xl font-bold text-slate-900 md:text-4xl">
              Ablauf: Anbringen – Messen – Auswerten.
            </h2>
          </FadeIn>
          
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
                desc: "Über eine kurze Messphase werden relevante Umgebungsparameter als Zeitreihen protokolliert."
              },
              {
                step: "3",
                title: "Auswerten",
                desc: <>Die Auswertung identifiziert die relevanten Parameter eines physikalischen Modells und leitet daraus den <span className="whitespace-nowrap">U-Wert</span> ab.</>
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 200} className="h-full">
                <div className="relative text-center h-full">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-[var(--uc-blue)]">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-slate-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Interaktive Tools */}
      <section id="rechner" className="bg-slate-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-12 md:space-y-20">
            
            {/* 7A) Amortisation */}
            <div>
                <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-3xl font-bold text-slate-900">
                        Was bringt ein besserer <span className="whitespace-nowrap">U-Wert</span> in Euro pro Jahr?
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Dieser Rechner zeigt, wie sich <span className="whitespace-nowrap">U-Wert</span>, Fläche und Standortkennwerte in jährliche Energie- und Kosteneffekte übersetzen. Er dient als Orientierung und macht transparent, warum der Ist-<span className="whitespace-nowrap">U-Wert</span> der entscheidende Unsicherheitsfaktor ist.
                    </p>
                </div>
                <div className="w-full">
                    <AmortizationCalculator />
                </div>
            </div>

            {/* 7B) Ug Rechner */}
            <div>
                <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-3xl font-bold text-slate-900">
                        Ug-Rechner nach DIN EN 673 – als transparente Referenz
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Dieser Rechner ist als didaktische Referenz gedacht: Er macht sichtbar, wie stark Annahmen (Gasfüllung, SZR, Low-E) den berechneten Ug-Wert beeinflussen.
                    </p>
                </div>
                <UgCalculator />
            </div>
        </div>
      </section>

      {/* Team & Partner Section */}
      <section id="team" className="py-12 md:py-20">
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
                <div className="space-y-12">
                    <h3 className="font-heading text-xl font-bold text-slate-900 border-b pb-2">Gründerteam</h3>
                    
                    {/* Christoph */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-slate-200 shadow-md mx-auto sm:mx-0">
                            <Image src="/christoph-hauser.jpg" alt="Christoph Hauser" fill className="object-cover" quality={100} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Christoph Hauser</h4>
                            <p className="text-sm text-[var(--uc-blue)] font-medium mb-2">Co-Founder</p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Seit seiner Jugend faszinieren Christoph physikalische sowie technische Lösungen und deren praktische Umsetzung. Dieser Weg führte ihn von der IT-Schule über den Bachelor in Bauphysik zu seinem aktuellen Masterstudium in Gebäudephysik. Seine Leidenschaft ist es, Dinge tiefgreifend zu verstehen und dieses theoretische Wissen in praktische Lösungen umzusetzen. Gebäude, Energieeffizienz, Zahlen und Fakten aber auch Verkauf und Marketing sind seine Leidenschaft. Er freut sich, dass jetzt alles zusammengekommen ist und er mit seinem guten Freund Stefan eine spannende neue Technologie in ein echtes Produkt umsetzen darf.
                            </p>
                        </div>
                    </div>

                    {/* Stefan */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-slate-200 shadow-md mx-auto sm:mx-0">
                            <Image src="/StefanBriem.jpg" alt="Stefan Briem" fill className="object-cover" quality={100} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Stefan Briem</h4>
                            <p className="text-sm text-[var(--uc-blue)] font-medium mb-2">Co-Founder</p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Schon während seiner Ausbildung zum Mechatroniker bei Bosch und seinem Bachelor in Elektrotechnik hat Stefan sich auf Sensorik und Entwicklung spezialisiert und parallel unter anderem in einem Startup im Bereich Maschinenbau und Messanwendungen gearbeitet. Seitdem er seinen Master „Systems Engineering“ abgeschlossen hat, arbeitet er bei ewo Fluid Power GmbH. Dort hat er die Entwicklung und Fertigung von Elektronik-Komponenten als neues Geschäftsfeld hauptverantwortlich aufgebaut und ein hydraulisches Hubstützsystem für Wohnmobile inklusive Hard- und Software entwickelt. All diese Erfahrungen möchte er nun bei U-Check einbringen, da ihn die Produktidee von Anfang an überzeugt hat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Partners & Awards */}
                <div className="space-y-8">
                    <h3 className="font-heading text-xl font-bold text-slate-900 border-b pb-2">Partner & Auszeichnungen</h3>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
                        <div className="relative h-24 w-24 flex-shrink-0">
                             <Image src="/IDEAchallenge.png" alt="IDEA Challenge" fill className="object-contain" quality={100} />
                        </div>
                        <div>
                            <h4 className="font-bold text-yellow-900">Gewinner IDEAchallenge 2025</h4>
                            <p className="text-sm text-yellow-800 mt-1">U-Check wurde mit dem mit 1.000 € dotierten Preis ausgezeichnet.</p>
                        </div>
                    </div>

                    {/* YouTube Video Link */}
                    <a 
                        href="https://www.youtube.com/watch?v=DY1xTG-Uuq0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group block relative overflow-hidden rounded-xl bg-slate-900 shadow-lg hover:shadow-xl transition"
                    >
                        <div className="aspect-video relative bg-slate-800 flex items-center justify-center">
                            <Image 
                                src="https://img.youtube.com/vi/DY1xTG-Uuq0/maxresdefault.jpg" 
                                alt="U-Check Pitch Video" 
                                fill 
                                className="object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                                <span className="text-white font-bold text-sm drop-shadow-md">Pitch Video ansehen</span>
                            </div>
                        </div>
                    </a>

                    <div className="grid grid-cols-2 gap-6 items-center pt-4">
                        <div className="relative h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
                            <Image src="/Logo_HFT.png" alt="HFT Stuttgart" fill className="object-contain" quality={100} />
                        </div>
                        <div className="relative h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
                            <Image src="/Logo_TH Rosenheim.png" alt="TH Rosenheim" fill className="object-contain" quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 11) FAQ */}
      <section id="faq" className="py-12 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-12">
                Häufige Fragen
            </h2>
            <div className="space-y-4">
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
                    <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 transition hover:bg-slate-50">
                            {faq.q}
                            <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-180 group-open:bg-[var(--uc-blue)] group-open:text-white">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </div>
      </section>

      {/* 12) Warteliste */}
      <section id="warteliste" className="py-12 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-xl px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl font-bold text-slate-900">
                  Zum Produktstart informiert werden.
              </h2>
              <p className="mt-4 text-slate-600">
                  Tragen Sie sich ein und erhalten Sie zum Launch eine kurze Information mit Verfügbarkeit und den wichtigsten Eckdaten. Wir senden wenige Nachrichten und verzichten auf unnötige Daten.
              </p>
              
              <WaitlistSectionButton />

              <p className="mt-8 text-xs text-slate-400">
                  Sie können sich jederzeit abmelden. Datenschutz: <a href="/datenschutz" className="underline">u-check.online/datenschutz</a>
              </p>
            </FadeIn>
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
