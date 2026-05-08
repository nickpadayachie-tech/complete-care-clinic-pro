'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Medical Surveillance', href: '/services/surveillance' },
    { name: 'Employee Wellness', href: '/services/wellness' },
    { name: 'About', href: '/about' },
    { name: 'Corporate', href: '/corporate' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end h-auto py-4">
          <Link href="/" className="flex items-center gap-6 pb-2 group">
            <div className="relative">
                <Image
                    src="/logo.jpg"
                    alt="Complete Care Clinic Logo"
                    width={128}
                    height={128}
                    className="rounded-full object-cover shadow-xl border-4 border-blue-50"
                    priority
                />
            </div>
            <div className="flex flex-col pb-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight block leading-tight group-hover:text-blue-600 transition-colors">
                Complete Care Clinic
              </span>
              <span className="text-base font-bold text-blue-600 uppercase tracking-widest mt-1">
                Occupational Health & Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pb-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-center text-sm font-semibold hover:bg-blue-700 transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
