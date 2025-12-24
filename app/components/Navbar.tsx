// This is a Server Component by default (no "use client")
import { createClient } from "../lib/supabase/server";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  // 1. Fetch the user on the server
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 2. Pass the user down to the client component
  return <NavbarClient user={user} />;
}
