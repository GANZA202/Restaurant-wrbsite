import React from 'react';
import { FIRE_STAGES } from '../data/restaurantData';

export const FireProcess: React.FC = () => {
  return (
    <section id="story" className="py-24 lg:py-36 bg-[#0D0C0B] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#2A2520] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 lg:mb-36">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#C85832]" />
            <span>Our Philosophy of Flame</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFEA] font-light leading-tight tracking-tight">
            The fire is not a technique.<br />
            <span className="italic text-[#C85832] font-normal">It is the beginning</span> of everything.
          </h2>
        </div>

        {/* Stages - Asymmetric Editorial Layout */}
        <div className="space-y-24 lg:space-y-40">
          {FIRE_STAGES.map((stage, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={stage.number}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-7/12 relative group">
                  <div className="overflow-hidden border border-[#2A2520] bg-[#141210] aspect-[4/3] sm:aspect-[16/10]">
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110 brightness-90"
                      loading="lazy"
                    />
                  </div>
                  {/* Subtle Border Frame Accent */}
                  <div
                    className={`absolute -bottom-4 ${
                      isEven ? '-right-4' : '-left-4'
                    } hidden sm:block w-32 h-32 border border-[#C85832]/20 pointer-events-none -z-10`}
                  />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-5/12 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-5xl lg:text-6xl text-[#C85832] font-light italic">
                      {stage.number}
                    </span>
                    <span className="h-px flex-1 bg-[#2A2520]" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFEA] tracking-wide font-normal">
                    {stage.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#A39D93] leading-relaxed font-light">
                    {stage.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832]/80 font-medium">
                      Stage {stage.number} · Hearth Craft
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
