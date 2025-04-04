"use client"; // Add this directive at the top

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo-icon.png" alt="All Peoples Innovation Hub Logo" />
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon">{isMenuOpen ? '✖' : '☰'}</span>
      </button>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link href="/" onClick={toggleMenu}>Home</Link>
        <Link href="/about" onClick={toggleMenu}>About Us</Link>
        <Link href="/services" onClick={toggleMenu}>Services</Link>
        <Link href="/projects" onClick={toggleMenu}>Projects</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
}