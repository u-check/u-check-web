export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Datenschutzerklärung</h1>

      <p className="mt-6 text-slate-700">
        Mit dieser Datenschutzerklärung informieren wir über die Verarbeitung personenbezogener Daten beim Besuch
        dieser Website sowie bei der Eintragung in die <span className="whitespace-nowrap">U-Check</span> Warteliste.
      </p>

      <h2 className="mt-10 text-xl font-semibold">1. Verantwortlicher</h2>
      <p className="mt-3 text-slate-700">
        Verantwortlicher im Sinne der DSGVO ist:
        <br />
        <strong>Christoph Hauser</strong>
        <br />
        Goethestraße 13
        <br />
        83024 Rosenheim, Deutschland
        <br />
        E-Mail:{" "}
        <a className="underline" href="mailto:info@u-check.online">
          info@u-check.online
        </a>
      </p>

      <h2 className="mt-10 text-xl font-semibold">2. Hosting und Bereitstellung der Website</h2>
      <p className="mt-3 text-slate-700">
        Diese Website wird über Vercel bereitgestellt. Im Rahmen des Betriebs können technische Protokolldaten
        (z. B. IP-Adresse, Zeitpunkt, abgerufene Ressourcen) verarbeitet werden, um die Website auszuliefern und die
        Sicherheit zu gewährleisten. Vercel stellt hierzu u. a. eine Datenschutzerklärung und eine
        Datenverarbeitungsvereinbarung (DPA) bereit.
      </p>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>
          Vercel Privacy Policy:{" "}
          <a
            className="underline"
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            vercel.com/legal/privacy-policy
          </a>
        </li>
        <li>
          Vercel DPA:{" "}
          <a className="underline" href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">
            vercel.com/legal/dpa
          </a>
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer, stabiler Bereitstellung).
      </p>

      <h2 className="mt-10 text-xl font-semibold">3. Warteliste / Newsletter (Brevo, Double-Opt-In)</h2>
      <p className="mt-3 text-slate-700">
        Wenn Sie sich in die Warteliste eintragen, verarbeiten wir Ihre E-Mail-Adresse zum Zweck, Sie über den
        Produktstart und relevante Updates zu U-Check zu informieren. Die Anmeldung erfolgt per Double-Opt-In: Sie
        erhalten eine E-Mail mit einem Bestätigungslink; erst nach Klick wird die Eintragung wirksam.
      </p>
      <p className="mt-3 text-slate-700">
        Für die Durchführung und Verwaltung der Warteliste nutzen wir den Dienst <strong>Brevo</strong> (Sendinblue
        SAS, Paris). Brevo stellt Funktionen für Anmeldeformulare, Double-Opt-In und Versand bereit.
      </p>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>
          Anbieterinformationen:{" "}
          <a className="underline" href="https://www.brevo.com/legal/notice/" target="_blank" rel="noreferrer">
            brevo.com/legal/notice
          </a>
        </li>
        <li>
          Hinweise zu DSGVO-konformen Sign-up-Forms und Double-Opt-In:{" "}
          <a
            className="underline"
            href="https://help.brevo.com/hc/en-us/articles/360000454204-Guidelines-for-a-GDPR-compliant-sign-up-form"
            target="_blank"
            rel="noreferrer"
          >
            Brevo Help Center
          </a>
        </li>
      </ul>
      <p className="mt-3 text-slate-700">
        Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können die Einwilligung jederzeit mit
        Wirkung für die Zukunft widerrufen, z. B. über den Abmeldelink in E-Mails.
      </p>

      <h3 className="mt-8 text-lg font-semibold">Welche Daten werden verarbeitet?</h3>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>E-Mail-Adresse (Pflichtfeld)</li>
        <li>Einwilligungs-/Double-Opt-In-Nachweis (z. B. Zeitpunkt der Anmeldung/Bestätigung)</li>
        <li>Technische Metadaten, soweit für Versand/Nachweis erforderlich</li>
      </ul>

      <h3 className="mt-8 text-lg font-semibold">Speicherdauer</h3>
      <p className="mt-3 text-slate-700">
        Wir speichern die Daten, bis Sie sich abmelden oder Ihre Einwilligung widerrufen, sofern keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2 className="mt-10 text-xl font-semibold">4. Empfänger und Auftragsverarbeitung</h2>
      <p className="mt-3 text-slate-700">
        Wir setzen Dienstleister als Auftragsverarbeiter ein (insbesondere Brevo und Vercel). Soweit erforderlich,
        werden entsprechende Vereinbarungen zur Auftragsverarbeitung abgeschlossen (Art. 28 DSGVO).
      </p>

      <h2 className="mt-10 text-xl font-semibold">5. Ihre Rechte</h2>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen (Art. 21 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">6. Kontakt</h2>
      <p className="mt-3 text-slate-700">
        Für Datenschutzanfragen wenden Sie sich bitte an{" "}
        <a className="underline" href="mailto:info@u-check.online">
          info@u-check.online
        </a>
        .
      </p>

      <p className="mt-10 text-xs text-slate-500">Stand: 15.12.2025</p>
    </main>
  );
}
