import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            Our Story & Mission
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Commitment to Excellence</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Complete Care Clinic was founded on the principle that professional medical surveillance and holistic employee wellness should go hand-in-hand to ensure a truly healthy workforce.
          </p>
        </div>
      </section>

      {/* Sister Romona Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3 opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1559839914-7566f2965717?auto=format&fit=crop&q=80&w=800"
                alt="Sister Romona Joseph"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Led by Sister Romona Joseph</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  With a deep commitment to the intersection of faith, healing, and professional healthcare, Sister Romona Joseph brings a unique blend of compassionate care and clinical rigor to the clinic.
                </p>
                <p>
                  Her vision is to move beyond the "checklist" approach to occupational health. While regulatory compliance is essential, Sister Romona believes that every employee deserves a healthcare experience that recognizes their humanity and supports their long-term well-being.
                </p>
                <p>
                  Under her leadership, Complete Care Clinic has become a trusted partner for organizations that value their employees' health as much as their productivity.
                </p>
              </div>
              <div className="mt-10 flex gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="font-bold text-slate-900">Certified Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-emerald-500" />
                  <span className="font-bold text-slate-900">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <span className="font-bold text-slate-900">OHS Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower organizations by providing world-class occupational health and wellness services that protect and enhance the lives of every worker.
              </p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the gold standard in integrative occupational healthcare, where clinical precision meets genuine compassion.
              </p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Integrity, Clinical Excellence, Empathy, and Regulatory Rigor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
