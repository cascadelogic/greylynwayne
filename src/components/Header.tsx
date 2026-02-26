"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  {
    name: "Staging",
    href: "/home-staging",
    children: [
      { name: "Home Staging", href: "/home-staging" },
      { name: "New Construction", href: "/new-construction-staging" },
      { name: "Before & After", href: "/before-and-after" },
    ],
  },
  {
    name: "Design",
    href: "/interior-design",
    children: [
      { name: "Interior Design", href: "/interior-design" },
      { name: "Short-Term Rental", href: "/short-term-rental-design" },
      { name: "Street of Dreams", href: "/street-of-dreams" },
      { name: "Alla Famiglia", href: "/alla-famiglia" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Meet Jody Wallace", href: "/meet-jody-wallace" },
      { name: "Service Areas", href: "/service-areas" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="text-sm tracking-wide text-charcoal-light hover:text-teal transition-colors duration-200 uppercase flex items-center gap-1"
      >
        {item.name}
        <svg className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </Link>
      <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
        <div className="bg-white border border-gray-100 shadow-lg py-2 min-w-[200px]">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-2.5 text-sm text-charcoal-light hover:text-teal hover:bg-warm transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-teal.png"
              alt="Greylyn Wayne Interior Design & Staging"
              width={200}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navigation.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm tracking-wide text-charcoal-light hover:text-teal transition-colors duration-200 uppercase"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-2 bg-teal text-white px-6 py-2.5 text-sm tracking-wide uppercase hover:bg-teal-dark transition-colors duration-200 font-medium"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                      className="w-full flex items-center justify-between py-3 text-sm tracking-wide text-charcoal-light hover:text-teal transition-colors uppercase"
                    >
                      {item.name}
                      <svg
                        className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-charcoal-light hover:text-teal transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm tracking-wide text-charcoal-light hover:text-teal transition-colors uppercase"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-teal text-white px-6 py-3 text-sm tracking-wide uppercase text-center hover:bg-teal-dark transition-colors font-medium"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
