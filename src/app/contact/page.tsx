'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would normally integrate an API call to send the email
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact & Appointments</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are here to assist you with your health and safety needs. Please reach out via the form below or use our direct contact details.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
                  <p className="text-slate-600 text-sm">+1 (555) 000-0000</p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                  <p className="text-slate-600 text-sm">info@completecareclinic.com</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Our Location</h4>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  123 Health Ave, Medical District<br />
                  City, Country, ZIP 00000
                </p>
                <div className="rounded-2xl overflow-hidden h-64 bg-slate-800 relative">
                  {/* Placeholder for Google Map */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    <p className="text-sm">Interactive Map Integration Coming Soon</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1526778529277-59aC- la la lala?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50" alt="Map" />
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Requested</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                      <option>Medical Surveillance Exam</option>
                      <option>Employee Wellness Check</option>
                      <option>Corporate Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                      placeholder="Please tell us about your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                  >
                    Send Request <Send className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h3>
                  <p className="text-slate-600 mb-10">
                    Our team will review your request and contact you shortly to confirm your appointment.
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Send another request
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
