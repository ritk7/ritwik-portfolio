"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import { TerminalIcon, MoonIcon, SunIcon, MenuIcon, CloseIcon } from "./Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Awards" },
];

export default function Nav() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked — theme still applies for this visit */
    }
  }

  return (
    <div className="nav-wrap">
      <nav className="navbar">
        <a className="nav-logo" href="#home" aria-label="Home">
          {profile.initials}
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-btn"
            type="button"
            aria-label="Open terminal"
            onClick={() => window.dispatchEvent(new CustomEvent("open-terminal"))}
          >
            <TerminalIcon />
          </button>

          <a className="nav-cta" href="#contact">
            Get in Touch!
          </a>

          <button
            className={`icon-btn ${dark ? "is-dark" : ""}`}
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="icon-btn nav-burger"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" style={{ display: "flex" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
