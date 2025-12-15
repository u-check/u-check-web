export default function Waitlist() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">U-Check Warteliste</h1>
      <p className="mt-3 text-slate-700">
        Tragen Sie sich ein und erhalten Sie zum Produktstart eine kurze Information. (Double-Opt-In)
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
        <iframe
          title="U-Check Warteliste Formular"
          src="https://f0c05fc7.sibforms.com/serve/MUIFAA4lpcjXkUEGTVf5oywjzEyPmngXfoCouO9toVgYboUXSQUHDboq4iX045zXhJWBGyuEYg8tgQcTlu4aRZ0osmTGl4AeNnDYQ5TQbYrOl0EL5tdZET3iBGeBaWhXyyCRbrzkMQK4c5CkdoLExJDPwzA_8NMu3jKTj7yuN9FGO3mlCvVemXgAwCRowwkyx3CFft1nrdOuHDtJ"
          className="h-[520px] w-full"
          frameBorder={0}
          scrolling="auto"
          allowFullScreen
        />
      </div>

      <p className="mt-6 text-xs text-slate-500">
        Hinweis: Ihre Anmeldung wird erst nach Klick auf den Bestätigungslink in der E-Mail aktiv.
      </p>
    </main>
  );
}
