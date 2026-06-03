"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Active Codes", href: "#active-codes" },
  { label: "Redeem Guide", href: "#how-to-redeem" },
  { label: "Expired Archive", href: "#expired" },
  { label: "FAQ", href: "#faq" },
  { label: "Roblox Group", href: "https://www.roblox.com/groups/33719001/Sushi-Deluxe", isExternal: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#active-codes");

  useEffect(() => {
    // Sync initial hash if present in URL on mount
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHash(href);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderLinkLabel = (label: string) => {
    switch (label) {
      case "Active Codes":
        return (
          <>
            <span className="seo-active" />{" "}
            <span className="seo-codes" />
          </>
        );
      case "Redeem Guide":
        return (
          <>
            <span className="seo-redeem-cap" />{" "}
            <span className="seo-guide" />
          </>
        );
      case "Expired Archive":
        return (
          <>
            <span className="seo-expired" /> Archive
          </>
        );
      case "FAQ":
        return "FAQ";
      case "Roblox Group":
        return (
          <>
            <span className="seo-roblox" /> Group
          </>
        );
      default:
        return label;
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-rose-900/30 glass-panel shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vought-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vought-red"></span>
            </span>
            <Link 
              href="/codes" 
              onClick={() => handleLinkClick("#active-codes")}
              className="text-xs font-black tracking-widest text-white uppercase sm:text-sm hover:text-vought-red transition-colors flex items-center gap-1"
            >
              <span className="seo-survive" />{" "}
              <span className="seo-homelander" />{" "}
              <span className="text-vought-red">Wiki</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeHash === link.href;
              return link.isExternal ? (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {renderLinkLabel(link.label)}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-3 w-3 text-zinc-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-xs font-semibold tracking-wide uppercase transition-colors
                    ${isActive ? "text-vought-red border-b-2 border-vought-red pb-1" : "text-zinc-400 hover:text-white"}
                  `}
                >
                  {renderLinkLabel(link.label)}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded p-2 text-zinc-400 hover:text-white hover:bg-card-bg border border-card-border"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-card-border bg-[#09090b]/95 backdrop-blur-lg" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeHash === link.href;
              return link.isExternal ? (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-semibold text-zinc-400 hover:bg-rose-950/20 hover:text-vought-red transition-colors"
                >
                  {renderLinkLabel(link.label)} ↗
                </a>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block rounded px-3 py-2 text-sm font-semibold transition-colors
                    ${isActive 
                      ? "bg-rose-500/10 text-vought-red border-l-2 border-vought-red" 
                      : "text-zinc-400 hover:bg-card-bg hover:text-white"
                    }
                  `}
                >
                  {renderLinkLabel(link.label)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
