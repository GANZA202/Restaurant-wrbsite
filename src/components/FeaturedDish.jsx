import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

export const FeaturedDish = ({ onSelectDish }) => {
  return (
    <section className="py-24 lg:py-36 bg-[#0D0C0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 lg:space-y-36">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>House Signatures</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFEA] font-light leading-tight">
            Prepared over open coals.<br />
            <span className="italic font-normal text-[#C85832]">Defined by fire.</span>
          </h2>
        </div>

        {/* Dish 1: Ember Beef Brochettes */}
        <div className="relative border border-[#2A2520] bg-[#141210] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C85832]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="overflow-hidden aspect-[4/3] border border-[#2A2520] bg-[#0D0C0B]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                  alt="Ember Beef Brochettes"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110 brightness-95"
                />
              </div>

              <div className="absolute top-4 left-4 bg-[#0D0C0B]/90 backdrop-blur-md px-4 py-2 border border-[#C85832]/50 flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C85832]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#F3EFEA] font-semibold">
                  Signature Brochette
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block">
                  01 · From the Grill
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl text-[#F3EFEA] font-light leading-tight">
                  Ember Beef <br />
                  <span className="italic font-normal text-[#C85832]">Brochettes</span>
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#A39D93] leading-relaxed font-light">
                Char-grilled tenderloin beef skewers rubbed in local mountain spices, seared over white-hot hardwood coals and served with roasted peppers, onions, and sweet plantains.
              </p>

              <div className="pt-4 border-t border-[#2A2520] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A39D93] block">Price</span>
                  <span className="font-serif text-3xl text-[#F3EFEA] font-semibold">22,000 RWF</span>
                </div>

                <a
                  href="#reservation"
                  onClick={() => onSelectDish && onSelectDish('Ember Beef Brochettes')}
                  className="px-6 py-3 border border-[#C85832] hover:bg-[#C85832] hover:text-[#0D0C0B] text-[#F3EFEA] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
                >
                  Reserve Table for This Dish
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dish 2: Fire-Roasted Lake Kivu Tilapia */}
        <div className="relative border border-[#2A2520] bg-[#141210] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block">
                  02 · Fresh Catch
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl text-[#F3EFEA] font-light leading-tight">
                  Fire-Roasted <br />
                  <span className="italic font-normal text-[#C85832]">Lake Kivu Tilapia</span>
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#A39D93] leading-relaxed font-light">
                Whole tilapia caught fresh from Lake Kivu, stuffed with lemon and local herbs, grilled whole over charcoal, and served with wild greens and tomato-chili salsa.
              </p>

              <div className="pt-4 border-t border-[#2A2520] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A39D93] block">Price</span>
                  <span className="font-serif text-3xl text-[#F3EFEA] font-semibold">25,000 RWF</span>
                </div>

                <a
                  href="#reservation"
                  onClick={() => onSelectDish && onSelectDish('Fire-Roasted Lake Kivu Tilapia')}
                  className="px-6 py-3 border border-[#C85832] hover:bg-[#C85832] hover:text-[#0D0C0B] text-[#F3EFEA] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
                >
                  Reserve Table for This Dish
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative group order-1 lg:order-2">
              <div className="overflow-hidden aspect-[16/10] border border-[#2A2520] bg-[#0D0C0B]">
                <img
                  src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1600&auto=format&fit=crop"
                  alt="Fire-Roasted Lake Kivu Tilapia"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1600&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110 brightness-95"
                />
              </div>

              <div className="absolute top-4 right-4 bg-[#0D0C0B]/90 backdrop-blur-md px-4 py-2 border border-[#C85832]/50 flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C85832]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#F3EFEA] font-semibold">
                  Lake Specialty
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Dish 3: Kigali Ember Chicken */}
        <div className="relative border border-[#2A2520] bg-[#1A1815] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 relative group">
              <div className="overflow-hidden aspect-[4/3] border border-[#2A2520] bg-[#0D0C0B]">
                <img
                  src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1600&auto=format&fit=crop"
                  alt="Kigali Ember Chicken"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110 brightness-95"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block">
                03 · House Poultry
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3EFEA] font-light">
                Kigali <span className="italic text-[#C85832]">Ember Chicken</span>
              </h3>

              <p className="text-base text-[#A39D93] leading-relaxed font-light">
                Charred half-chicken marinated in garlic and herb oil, basted with smoky Akabanga chili butter, served alongside roasted sweet plantains (Mizuzu).
              </p>

              <div className="pt-4 border-t border-[#2A2520] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A39D93] block">Price</span>
                  <span className="font-serif text-3xl text-[#F3EFEA] font-semibold">20,000 RWF</span>
                </div>

                <a
                  href="#reservation"
                  onClick={() => onSelectDish && onSelectDish('Kigali Ember Chicken')}
                  className="px-6 py-3 border border-[#C85832] hover:bg-[#C85832] hover:text-[#0D0C0B] text-[#F3EFEA] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
                >
                  Reserve Table for This Dish
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
