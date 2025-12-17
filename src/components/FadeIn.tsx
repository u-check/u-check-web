"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string,
  direction?: "up" | "left" | "right" | "none"
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return "translate-y-8";
        case "left": return "-translate-x-8";
        case "right": return "translate-x-8";
        default: return "";
      }
    }
    return "translate-y-0 translate-x-0";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
