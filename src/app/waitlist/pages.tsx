export default function Waitlist() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Warteliste</h1>
      <p className="mt-3 text-slate-700">
        Hinterlassen Sie Ihre E-Mail für Pilot-Updates und Verfügbarkeit.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">E-Mail</label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            type="email"
            required
            placeholder="name@domain.de"
          />
        </div>

        <button className="rounded-lg bg-slate-900 px-5 py-3 text-white" type="submit">
          Eintragen
        </button>

        <p className="text-xs text-slate-500">
          Platzhalter: Als nächster Schritt binden wir ein echtes Lead-Backend (Double-Opt-In) an.
        </p>
      </form>
    </main>
  );
}
