import React from 'react';
import { GUEST_NOTES } from '../data/restaurantData.js';
import { MessageSquareQuote } from 'lucide-react';

export const Testimonial = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#141210] relative overflow-hidden border-y border-[#2A2520]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium flex items-center justify-center gap-2">
            <MessageSquareQuote className="w-4 h-4 text-[#C85832]" />
            <span>Guest Notes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFEA] font-light">
            Reflections from the Hearth
          </h2>
          <p className="text-xs text-[#A39D93] uppercase tracking-wider">
            Sample guest impressions · Demonstration feedback
          </p>
        </div>

        {/* Guest Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUEST_NOTES.map((note) => (
            <div
              key={note.id}
              className="p-8 border border-[#2A2520] bg-[#0D0C0B] flex flex-col justify-between space-y-6 hover:border-[#C85832]/40 transition-colors"
            >
              <p className="font-serif text-lg text-[#F3EFEA] font-light leading-relaxed italic">
                “{note.quote}”
              </p>

              <div className="pt-4 border-t border-[#2A2520] space-y-0.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C85832] font-semibold block">
                  {note.author}
                </span>
                <span className="text-[11px] text-[#A39D93] font-light block">
                  {note.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
