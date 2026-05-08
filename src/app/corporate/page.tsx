import React from 'react';
import Link from 'next/link';
import { Building2, FileCheck, TrendingUp, Users, ArrowRight, BadgeCheck } from 'lucide-react';

export default function CorporatePage() {
  return (
    <div className="flex flex-col">
      {/* Corporate Hero */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" /> B2B Health Partnerships
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Corporate Health Strategy</h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              We partner with organizations to design and implement comprehensive occupational health strategies that reduce risk, ensure compliance, and improve employee retention.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Complete Care Clinic?</h2>
            <p className="text-slate-600">Our corporate programs are designed to protect your organization from liability while genuinely improving the health of your workforce.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
              <p className="text-slate-600 leading-relaxed">
                Rigorous medical surveillance reduces the likelihood of workplace accidents and long-term occupational illness claims.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Productivity Boost</h3>
              <p className="text-slate-600 leading-relaxed">
                Our wellness programs reduce absenteeism and burnout, leading to higher engagement and operational efficiency.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Employee Value</h3>
              <p className="text-slate-600 leading-relaxed">
                Offering a comprehensive health package makes your company a more attractive place to work, aiding in recruitment and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Offerings */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1497366216548-375260702979?auto=format&fit=crop&q=80&w=800" alt="Corporate Meeting" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tailored Corporate Solutions</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Full Compliance Audits</h4>
                    <p className="text-slate-600 text-sm">Comprehensive review of your current OHS health protocols and gap analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Custom Surveillance Calendars</h4>
                    <p className="text-slate-600 text-sm">We create and manage the schedule for all employee screenings, ensuring no one is missed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">On-Site Wellness Days</h4>
                    <p className="text-slate-600 text-sm">We bring the clinic to you with on-site health screenings and wellness workshops.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Start Your Corporate Partnership</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Our specialists are ready to help you design a health strategy that fits your industry and your people.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-2">
            Request a Corporate Proposal <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
