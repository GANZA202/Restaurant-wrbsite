import React from 'react';
import { FOUR_ELEMENTS } from '../data/restaurantData';

export const FourElements: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#0D0C0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#C87D4A] font-medium mb-3">
              Our Foundation
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light">
              The Four Elements
            </h2>
          </div>
          <p className="text-sm text-[#A39D93] max-w-md font-light leading-relaxed">
            Every dish served at Ember &amp; Oak passes through these four essential stages of hearth cooking.
          </p>
        </div>

        {/* Editorial Four Elements Grid with Subtle Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2520] border border-[#2A2520]">
          {FOUR_ELEMENTS.map((elem) => (
            <div
              key={elem.number}
              className="bg-[#141210] p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:bg-[#1A1815] transition-colors duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#C87D4A] italic font-light">
                    {elem.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C87D4A]/40 group-hover:bg-[#C87D4A] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFEA] font-normal group-hover:text-[#C87D4A] transition-colors">
                  {elem.title}
                </h3>

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A39D93] font-medium block">
                  {elem.subtitle}
                </span>
              </div>

              <p className="text-sm text-[#A39D93] font-light leading-relaxed pt-4 border-t border-[#2A2520]/60">
                {elem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
