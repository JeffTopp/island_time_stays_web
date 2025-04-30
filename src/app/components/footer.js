"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const getCorrectHref = (hash) =>
    pathname.startsWith("/properties/") ? `/${hash}` : hash;

  return (
    <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-primary border-t md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-white sm:text-center">
        © 2025{" "}
        <Link href="/" className="hover:underline">
          Topp Creeks Properties
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        {[
          { href: "/", label: "Home" },
          { href: "#properties", label: "Properties" },
          { href: "#attractions", label: "Attractions" },
          { href: "#about", label: "About Us" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={getCorrectHref(item.href)}
              className="hover:underline me-4 md:me-6"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
