'use client';

import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center">
            <Image
              src="/images/logo.jpeg"
              alt="GrossView Consultants"
              width={240}
              height={238}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">Services</a>
            <a href="#software" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">Software</a>
            <a href="#about" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">About</a>
            <a href="#contact" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium">Contact</a>
          </div>

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block gradient-bg text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all font-medium shadow-lg"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[var(--primary)] hover:text-[var(--accent)] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium px-4 py-2"
              >
                Services
              </a>
              <a
                href="#software"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium px-4 py-2"
              >
                Software
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium px-4 py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium px-4 py-2"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-bg text-white px-6 py-3 rounded-full hover:opacity-90 transition-all font-medium shadow-lg text-center mx-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
