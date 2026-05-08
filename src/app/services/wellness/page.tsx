import React from 'react';
import Link from 'next/link';
import { Heart, Smile, Sparkles, Wind, ArrowRight, CheckCircle2, Brain } from 'lucide-react';

export default function WellnessPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 bg-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4" /> Holistic Employee Care
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Employee Health & Wellness Programs</h1>
            <p className="text-lg text-emerald-50 mb-10 leading-relaxed">
              We believe that a healthy employee is a productive employee. Our wellness services focus on preventative care and holistic well-being to foster a thriving workplace culture.
            </p>
          </div>
        </div>
      </section>

      {/* Wellness Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">A Comprehensive Approach to Well-being</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mental Health & Resilience</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Providing the tools and support needed to manage workplace stress and maintain mental clarity.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Stress Management Workshops</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Burnout Prevention Plans</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Mindfulness Training</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-500 rounded-y-xl flex items-center justify-center text-white mb-6">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Physical Health & Vitality</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Optimizing physical health through personalized guidance and preventative screening.
 la- la la lala
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Personalized Nutrition Plans</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cardiovascular Health Checks</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Wellness Coaching</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Workplace Ergonomics</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Ensuring the physical environment supports health and prevents musculoskeletal disorders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Workstation Assessments</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ergonomic Equipment Guidance</li>
                <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Posture & Movement Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Integration */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1544367567-4187fbb2aL-la la lalaL?auto=format&fit=crop&q=80&w=800" alt="Wellness" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Holistic Approach to Health</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just treat symptoms; we optimize lives. By integrating mental, physical, and environmental health, we create a sustainable ecosystem of well-being for your employees.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Personalized Strategy</h4>
                    <p className="text-slate-600 text-sm">We design wellness programs that align with your specific corporate culture and workforce needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Ongoing Support</h4>
                    <p className="text-slate-600 text-sm">Continuous coaching and monthly check-ins to ensure lasting health improvements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">_</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Measurable Impact</h4>
                    <p className="text-slate-600 text-sm">We track wellness outcomes to demonstrate ROI in reduced absenteeism and increased productivity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Start Your Wellness Journey</h2>
          <p className="text-emerald-100 mb-10 text-lg">
            Invest in your people. Invest in a healthier, more engaged, and more productive workforce.
          </p>
          <Link href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-2">
            Book a Wellness Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
