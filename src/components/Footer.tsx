import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-6">
              <Image
                src="/logo.jpg"
                alt="Complete Care Clinic Logo"
                width={96}
                height={96}
                className="rounded-full object-cover shadow-lg"
              />
              <div className="text-left">
                <span className="text-white font-bold block text-xl">Complete Care Clinic</span>
                <span className="text-sm text-slate-400">© 2026 All Rights Reserved</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Dedicated to the health, safety, and wellbeing of the workforce. We provide medical-grade surveillance and holistic wellness programs tailored to modern industrial needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-xs font-bold uppercase">FB</a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-xs font-bold uppercase">IN</a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-xs font-bold uppercase">TW</a>
            </div>
          </div>



          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services/surveillance" className="hover:text-white transition-colors">Medical Surveillance</Link></li>
              <li><Link href="/services/wellness" className="hover:text-white transition-colors">Employee Wellness</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Sister Romona</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>123 Health Ave, Medical District, City, Country</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@completecareclinic.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
