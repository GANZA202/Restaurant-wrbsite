import React from 'react';
import { VISITING_EXPERIENCE } from '../data/restaurantData.js';
import { Flame } from 'lucide-react';

export const EveningTimeline = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#141210] relative overflow-hidden border-t border-[#2A2520]/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium flex items-center gap-2">
            <Flame className="w-3.5 h-3.5" />
            <span>The Visiting Experience</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light">
            An Evening in Kigali
          </h2>
          <p className="text-sm sm:text-base text-[#A39D93] font-light italic">
            What happens when you visit Ember &amp; Oak
          </p>
        </div>

        {/* Storytelling Timeline Grid (4 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2520] border border-[#2A2520]">
          {VISITING_EXPERIENCE.map((step) => (
            <div
              key={step.number}
              className="bg-[#0D0C0B] p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:bg-[#1A1815] transition-colors duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#C85832] font-normal italic">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C85832]/40 group-hover:bg-[#C85832] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFEA] font-normal group-hover:text-[#C85832] transition-colors">
                  {step.title}
                </h3>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#2A2520]">
                <p className="text-sm text-[#F3EFEA]/90 font-light leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs text-[#A39D93] font-light italic">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
