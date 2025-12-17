"use client";

import { useWaitlist } from "@/context/WaitlistContext";

export default function HeroWaitlistButton() {
  const { openWaitlist } = useWaitlist();

  return (
    <button
      onClick={openWaitlist}
      className="rounded-xl uc-gradient px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:opacity-90 hover:shadow-xl"
    >
      Auf die Warteliste
    </button>
  );
}
