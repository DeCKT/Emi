"use client";

import { usePathname } from "next/navigation";

export default function HomePageBackground() {
  const path = usePathname();

  if (path !== "/") {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 bg-[url('/confetti-background.png')] -z-10">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-b from-transparent to-white"></div>
    </div>
  );
}
