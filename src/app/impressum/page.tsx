export default function Impressum() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

      <h2 className="mt-10 text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
      <p className="mt-3 text-slate-700">
        <strong>Christoph Hauser</strong>
        <br />
        Goethestraße 13
        <br />
        83024 Rosenheim
        <br />
        Deutschland
      </p>

      <h2 className="mt-10 text-xl font-semibold">Kontakt</h2>
      <p className="mt-3 text-slate-700">
        E-Mail:{" "}
        <a className="underline" href="mailto:info@u-check.online">
          info@u-check.online
        </a>
      </p>

      <h2 className="mt-10 text-xl font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className="mt-3 text-slate-700">
        Christoph Hauser, Goethestraße 13, 83024 Rosenheim, Deutschland
      </p>

      <h2 className="mt-10 text-xl font-semibold">Haftung für Inhalte</h2>
      <p className="mt-3 text-slate-700">
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Haftung für Links</h2>
      <p className="mt-3 text-slate-700">
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Urheberrecht</h2>
      <p className="mt-3 text-slate-700">
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <p className="mt-10 text-xs text-slate-500">Stand: 15.12.2025</p>
    </main>
  );
}
