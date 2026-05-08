import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ClipboardCheck, Activity, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SurveillancePage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Regulatory Compliance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Medical Surveillance & Occupational Health</h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Our medical surveillance programs are designed to protect employees from work-related health hazards and ensure that your organization remains compliant with all health and safety regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Comprehensive Screening Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Periodic Health Exams</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Regular health screenings to monitor the effects of workplace exposures and identify early signs of occupational illness.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Full Physical Assessments</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Cardiovascular Screening</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Metabolic Panels</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Respiratory & Lung Function</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Advanced spirometry and lung function tests to assess respiratory health for workers in hazardous environments.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Spirometry Testing</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Chest X-Ray Coordination</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Respiratory Fit Testing</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Audiometric Testing</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Precision hearing tests to monitor noise-induced hearing loss and evaluate the effectiveness of hearing conservation programs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Baseline Audiometry</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Annual Hearing Audits</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Noise Exposure Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Workflow */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Compliance-First Approach</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Medical surveillance is not just a regulatory requirement; it's a critical safety layer. We integrate our screenings into your existing safety management systems.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Risk Profiling</h4>
                    <p className="text-slate-600 text-sm">We analyze your workplace hazards to determine the appropriate surveillance protocol.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Scheduled Testing</h4>
                    <p className="text-slate-600 text-sm">Efficient, non-disruptive testing schedules that prioritize employee health and productivity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Reporting & Analysis</h4>
                    <p className="text-slate-600 text-sm">Clear, actionable reports that help employers make informed safety decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15160H-E1D?auto=format&fit=crop&q=80&w=800" alt="Clinical Audit" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ensure Your Workforce Compliance</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Avoid regulatory fines and protect your employees with our medical-grade surveillance programs.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-2">
            Book a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
