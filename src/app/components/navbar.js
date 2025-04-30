"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "properties", href: "#properties" },
        { id: "about", href: "#about" },
        { id: "contact", href: "#contact" },
      ];

      let currentSection = "/";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.href;
          }
        }
      });

      setActiveLink(currentSection);
    };

    if (pathname.startsWith("/properties/")) {
      setActiveLink("#properties");
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const getCorrectHref = (hash) =>
    pathname.startsWith("/properties/") ? `/${hash}` : hash;

  return (
    <nav className="flex w-full bg-white justify-between items-center px-5 py-4 rounded-full">
      <Link href="/">
        <Image
          src="/logo.png"
          className=""
          alt="Logo"
          height={150}
          width={150}
          loading="lazy"
        />
      </Link>

      <button className="xl:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            style={{ color: "#33333" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
            style={{ color: "#33333" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <div className="hidden xl:flex items-center rounded-full py-2 px-2 gap-4">
        {[
          { href: "/", label: "Home" },
          { href: "#properties", label: "Properties" },
          { href: getCorrectHref("#attractions"), label: "Attractions" },
          { href: getCorrectHref("#about"), label: "About Us" },
          { href: getCorrectHref("#contact"), label: "Contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-8 py-2 rounded-full ${
              activeLink === item.href ? "btn-primary" : ""
            }`}
            onClick={() => handleLinkClick(item.href)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <a
        className="hidden xl:block btn btn-primary rounded-full px-8 py-3"
        href="#properties"
      >
        Book your stay
      </a>

      <div
        className={`fixed top-0 left-0 h-svh w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out xl:hidden z-50`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-start p-6 gap-4 mt-12">
          {[
            { href: "/", label: "Home" },
            { href: "#properties", label: "Properties" },
            { href: getCorrectHref("#attractions"), label: "Attractions" },
            { href: getCorrectHref("#about"), label: "About Us" },
            { href: getCorrectHref("#contact"), label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-6 py-2 w-full text-left hover:bg-gray-200 rounded-xl"
              onClick={() => handleLinkClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="btn btn-primary rounded-full px-6 py-2 mt-2 w-full text-center"
            href="#properties"
          >
            Book your stay
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
