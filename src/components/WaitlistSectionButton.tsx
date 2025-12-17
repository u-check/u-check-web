"use client";

import { useWaitlist } from "@/context/WaitlistContext";

export default function WaitlistSectionButton() {
  const { openWaitlist } = useWaitlist();

  return (
    <button
      onClick={openWaitlist}
      className="mt-8 rounded-xl uc-gradient px-10 py-5 text-lg font-bold text-white shadow-xl shadow-blue-200 transition hover:opacity-90 hover:shadow-2xl transform hover:-translate-y-1"
    >
      Jetzt auf die Warteliste setzen
    </button>
  );
}
