import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1350px] mx-auto p-3 pt-0 mt-auto">
      <ul className="flex flex-row gap-9 items-center">
        <li>
          <Link href="/" className="underline">
            Home
          </Link>
        </li>
        <li className="list-disc text-rose pl-2">
          <Link href="/resources" className="underline text-black">
            Resources
          </Link>
        </li>
        <li className="list-disc text-rose pl-2">
          <Link href="#" className="underline text-black">
            Contact
          </Link>
        </li>
        <li className="list-disc text-rose pl-2">
          <Link href="#" className="underline text-black">
            Legal
          </Link>
        </li>
      </ul>
    </footer>
  );
}
