import React from 'react';
import { Quote } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section id="chef" className="py-24 lg:py-36 bg-[#141210] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image Column - Featuring a Black African Chef */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#2A2520] bg-[#0D0C0B] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop"
                alt="Chef Daniel at Ember & Oak hearth"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop";
                }}
                className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block mb-1">
                  Master of the Hearth
                </span>
                <span className="font-serif text-2xl text-[#F3EFEA] block font-light">
                  Chef Daniel
                </span>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C85832]/20 pointer-events-none -z-10 hidden sm:block" />
          </div>

          {/* Biography & Details Column */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium flex items-center gap-2">
                <span className="w-6 h-px bg-[#C85832]" />
                <span>Chef &amp; Founder</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light">
                Chef Daniel
              </h2>
            </div>

            {/* Quote Block */}
            <div className="p-8 border-l-2 border-[#C85832] bg-[#0D0C0B]/60 space-y-4">
              <Quote className="w-8 h-8 text-[#C85832]/40" />
              <p className="font-serif text-xl sm:text-2xl text-[#F3EFEA] italic font-light leading-relaxed">
                “Cooking over charcoal brings out the natural depth of local ingredients. We let the fire bring out the honest flavors of Rwanda.”
              </p>
            </div>

            <p className="text-base text-[#A39D93] font-light leading-relaxed">
              Ember &amp; Oak was founded on a commitment to live-fire hearth cooking. Chef Daniel combines ancestral charcoal techniques with ingredients and flavors inspired by Rwanda — sourcing fresh Lake Kivu tilapia, local Gicumbi beef, and organic mountain produce. Every service is personally led at our central hearth.
            </p>

            {/* Demonstration Content Note for School Project Evaluation */}
            <div className="p-4 border border-[#2A2520] bg-[#0D0C0B] text-xs text-[#A39D93]">
              <span className="text-[#C85832] font-semibold uppercase tracking-wider block mb-0.5">Note:</span>
              Chef profile and biography are demonstration content created for frontend academic portfolio evaluation.
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#2A2520]">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#F3EFEA] font-light block">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block">
                  Live Wood &amp; Coal
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#F3EFEA] font-light block">
                  45
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block">
                  Kigali Seats
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#F3EFEA] font-light block">
                  Local
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block">
                  Rwandan Produce
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
