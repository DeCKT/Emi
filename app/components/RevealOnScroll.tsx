"use client";

import { useState } from "react";
import { useOnInView } from "react-intersection-observer";

export default function RevealOnScroll(props: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  animation?: string;
  delay?: number;
}) {
  const trackingRef = useOnInView(
    (inView, entry) => {
      if (inView) {
        setMadeVisible(true);
      }
    },
    {
      /* Optional options */
      threshold: props.threshold || 0.1,
      triggerOnce: true,
    }
  );

  const animations: { [name: string]: string } = {
    "reveal-up": "animate-reveal-up",
    "reveal-left": "animate-reveal-left",
  };

  const [madeVisible, setMadeVisible] = useState(false);

  return (
    <div
      ref={trackingRef}
      className={`${props.className} opacity-0 ${
        props.animation && madeVisible ? animations[props.animation] : ""
      }`}
      style={props.delay ? { animationDelay: `${props.delay}ms` } : {}}
    >
      {props.children}
    </div>
  );
}
