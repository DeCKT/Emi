"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js"; // Type helper
import { logout } from "../user/actions";

interface NavbarClientProps {
  user: User | null;
}

export default function NavbarClient({ user }: NavbarClientProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Keep navbar in "scrolled" state on any non-homepage
    if (pathname && pathname !== "/") {
      setHasScrolled(true);
      return;
    }

    // On the homepage, toggle based on scroll position
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 36);
    };

    // run once to set the initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrolledNavClasses: { [hasScrolled: string]: string } = {
    true: "bg-white top-0 shadow-md py-1",
    false: "bg-transparent top-6 shadow-none py-2",
  };

  const scrolledUlClasses: { [hasScrolled: string]: string } = {
    true: "gap-0 text-sm",
    false: "gap-4 text-md",
  };

  return (
    <nav
      className={`sticky top-0 z-10 ${
        hasScrolled ? scrolledNavClasses["true"] : scrolledNavClasses["false"]
      } transition-all duration-300`}
    >
      <div className="flex flex-row justify-between max-w-[1350px] px-3 mx-auto">
        <div>
          <ul
            className={`flex flex-row ${
              hasScrolled
                ? scrolledUlClasses["true"]
                : scrolledUlClasses["false"]
            } transition-all duration-300`}
          >
            <li>
              <Link href="/" className="navlink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="navlink">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/resources" className="navlink">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className={`flex flex-row ${
              hasScrolled
                ? scrolledUlClasses["true"]
                : scrolledUlClasses["false"]
            } transition-all duration-300`}
          >
            <li>
              <Link
                href="/event/create"
                className="block px-5 py-3 rounded-lg bg-rose font-bold"
              >
                Create Event
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={logout} className="navlink">
                  Logout
                </button>
              ) : (
                <Link href="/user/login" className="navlink">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
