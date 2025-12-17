"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useWaitlist } from "@/context/WaitlistContext";

const BREVO_IFRAME_SRC =
  "https://f0c05fc7.sibforms.com/serve/MUIFAA4lpcjXkUEGTVf5oywjzEyPmngXfoCouO9toVgYboUXSQUHDboq4iX045zXhJWBGyuEYg8tgQcTlu4aRZ0osmTGl4AeNnDYQ5TQbYrOl0EL5tdZET3iBGeBaWhXyyCRbrzkMQK4c5CkdoLExJDPwzA_8NMu3jKTj7yuN9FGO3mlCvVemXgAwCRowwkyx3CFft1nrdOuHDtJ";

export default function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist();
  const [mounted, setMounted] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(550);

  useEffect(() => {
    setMounted(true);
    
    const handleMessage = (e: MessageEvent) => {
      if (e.origin.includes("sibforms.com") || e.origin.includes("sendinblue.com")) {
        try {
            if (typeof e.data === 'string' && e.data.startsWith('sibforms_iframe_height:')) {
                const height = parseInt(e.data.split(':')[1]);
                if (!isNaN(height)) setIframeHeight(height);
            }
            else if (typeof e.data === 'object' && e.data && e.data.type === 'sibforms_resize' && e.data.height) {
                 setIframeHeight(e.data.height);
            }
        } catch (err) {
            console.error("Error parsing iframe message", err);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Simple Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeWaitlist}
      />

      {/* Clean White Card */}
      <div className="relative w-full max-w-[440px] overflow-hidden rounded-xl bg-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={closeWaitlist}
          className="absolute top-3 right-3 z-10 p-2 text-slate-400 hover:text-slate-600 transition-colors bg-white/50 backdrop-blur-sm rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <iframe
          width="100%"
          height={iframeHeight}
          src={BREVO_IFRAME_SRC}
          style={{ 
              display: "block", 
              width: "100%", 
              border: "none",
              backgroundColor: "white",
              transition: "height 0.3s ease-out"
          }}
          scrolling="no"
        />
      </div>
    </div>,
    document.body
  );
}
