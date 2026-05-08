import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart, Activity, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Specialized Medical Surveillance
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Elevating Workforce <span className="text-blue-600">Health & Safety</span> Standards
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Complete Care Clinic provides comprehensive occupational health services, combining rigorous medical surveillance with proactive employee wellness programs to keep your workforce healthy, safe, and productive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services/surveillance" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-center gap-2">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6 relative mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3 opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1581594693736-3837789a66a7?auto=format&fit=crop&q=80&w=800"
                alt="Modern Clinic"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Pillars of Care</h2>
            <p className="text-slate-600">We balance the technical requirements of occupational safety with a compassionate approach to individual wellness.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Medical Surveillance */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-50">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Medical Surveillance</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Rigorous monitoring of employee health to identify early signs of work-related illness and ensure compliance with OHS regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  Periodic Health Examinations
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  Audiometric & Lung Function Testing
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  Pre-employment & Return-to-Work Screening
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  Biological Monitoring & Risk Assessment
                </li>
              </ul>
              <Link href="/services/surveillance" className="mt-8 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Employee Wellness */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-50">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-200">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Employee Wellness</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Holistic health support designed to prevent burnout, reduce stress, and improve the overall quality of life for your staff.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Mental Health & Stress Management
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Ergonomic Assessments & Advice
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Nutritional Guidance & Health Coaching
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Corporate Wellness Workshops
                </li>
              </ul>
              <Link href="/services/wellness" className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1576091166015-7577f79f213e?auto=format&fit=crop&q=80&w=800"
                alt="Clinical Precision"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:pl-4">
              <h2 className="text-3xl md:text la-4 font-bold mb-8">Why Choose Complete Care Clinic?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold mb-2">Regulatory Compliance</h4>
                    <p className="text-slate-400">Our medical surveillance programs are designed to meet and exceed OHS regulatory requirements, reducing liability for employers.</p>
                  </div>
                </div>
                <div className="flex gap- la-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold mb-2">Clinical Precision</h4>
                    <p className="text-slate-400">State-of-the-art diagnostic tools and highly trained medical professionals ensure accurate assessments and timely interventions.</p>
                  </div>
                </div>
                <div className="flex gap- la-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold mb-2">Employee-Centric Care</h4>
                    <p className="text-slate-400">We treat every individual with dignity and compassion, focusing on long-term health rather than just a checkbox for compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sneak Peek */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 relative">
              <img
                src="https://images.unsplash.com/photo-1559839914-7566f2965717?auto=format&fit=crop&q=80&w=800"
                alt="Sister Romona Joseph"
                className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                Clinic Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Led by Sister Romona Joseph</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With a deep commitment to the intersection of faith, healing, and professional healthcare, Sister Romona Joseph leads Complete Care Clinic with a vision of holistic excellence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Her leadership ensures that every employee receives not just a clinical examination, but a genuine commitment to their lifelong wellbeing.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                Meet Sister Romona <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Workforce?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Complete Care Clinic for medical-grade surveillance andWellness programs that make a real difference.
          </p>
          <Link href="/contact" className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 w-fit mx-auto">
            Request a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
