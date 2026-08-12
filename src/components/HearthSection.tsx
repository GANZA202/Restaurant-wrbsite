import React from 'react';
import { Flame, Heart } from 'lucide-react';

interface HearthSectionProps {
  onOpenReservation?: () => void;
}

export const HearthSection: React.FC<HearthSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="hearth" className="relative py-32 lg:py-44 overflow-hidden bg-[#0D0C0B]">
      {/* Background Image with Dark Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1800&auto=format&fit=crop"
          alt="Ember & Oak Open Hearth Kitchen Kigali"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1800&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover object-center filter contrast-125 brightness-50 opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B] via-[#0D0C0B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-[#0D0C0B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1A1815]/80 border border-[#C85832]/40 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-[#C85832]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F3EFEA] font-semibold">
              Rwandan Hospitality
            </span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3EFEA] font-light leading-none">
            Good food is only<br />
            <span className="italic font-normal text-[#C85832]">part of the experience.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A39D93] font-light leading-relaxed">
            Come for the food. Stay for the fire. At Ember &amp; Oak, we believe that true hospitality begins with a genuine welcome. Whether you sit by the crackling open hearth or out on our Kigali Heights terrace, our team is dedicated to creating a warm, relaxed evening for friends and family.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <a
              href="#reservation"
              onClick={(e) => {
                if (onOpenReservation) {
                  e.preventDefault();
                  onOpenReservation();
                }
              }}
              className="px-8 py-4 bg-[#C85832] hover:bg-[#B24B27] text-[#F8F5F0] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 text-center shadow-xl"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
