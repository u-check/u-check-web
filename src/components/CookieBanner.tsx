"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("uc-cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("uc-cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-lg border border-slate-200 bg-white p-4 shadow-xl md:bottom-6 md:right-6 md:left-auto md:w-[400px]">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-slate-600">
          Wir nutzen technisch notwendige Cookies und externe Dienste (Brevo) für die Warteliste. 
          Weitere Infos in der <a href="/datenschutz" className="underline hover:text-slate-900">Datenschutzerklärung</a>.
        </p>
        <div className="flex justify-end">
          <button
            onClick={accept}
            className="rounded bg-slate-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Alles klar
          </button>
        </div>
      </div>
    </div>
  );
}
