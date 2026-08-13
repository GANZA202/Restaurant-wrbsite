import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData.js';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

export const VisitSection = () => {
  return (
    <section id="visit" className="py-24 lg:py-36 bg-[#141210] relative overflow-hidden border-t border-[#2A2520]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Information Side */}
          <div className="lg:col-span-6 space-y-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Us in Kigali</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light leading-tight">
                EMBER &amp; OAK<br />
                <span className="italic text-[#C85832] font-normal">Kigali, Rwanda</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A39D93] font-light leading-relaxed">
                Situated in Kigali Heights along KG 7 Ave, Ember &amp; Oak overlooks the vibrant rolling hills of Kigali with open hearth seating and outdoor terrace dining.
              </p>
            </div>

            {/* Location & Contact Details */}
            <div className="space-y-6 pt-6 border-t border-[#2A2520]">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#0D0C0B] border border-[#2A2520] text-[#C85832] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block font-medium">
                    Address (Demo Location)
                  </span>
                  <p className="text-base text-[#F3EFEA] font-light">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#0D0C0B] border border-[#2A2520] text-[#C85832] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block font-medium">
                    Opening Hours
                  </span>
                  <div className="text-sm text-[#F3EFEA] font-light space-y-0.5">
                    <p>Monday — Thursday: <span className="text-[#A39D93]">11:30 — 22:00</span></p>
                    <p>Friday — Saturday: <span className="text-[#A39D93]">11:30 — 23:00</span></p>
                    <p>Sunday: <span className="text-[#A39D93]">12:00 — 21:00</span></p>
                  </div>
                  <p className="text-xs text-[#C85832]/80 pt-1">
                    {RESTAURANT_INFO.kitchenHours}
                  </p>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#0D0C0B] border border-[#2A2520] text-[#C85832] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block font-medium">
                    Direct Contact
                  </span>
                  <p className="text-base text-[#F3EFEA] font-light">
                    {RESTAURANT_INFO.phone}
                  </p>
                  <p className="text-xs text-[#A39D93]">
                    {RESTAURANT_INFO.email}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#2A2520] bg-[#0D0C0B] hover:border-[#C85832] text-[#F3EFEA] text-xs uppercase tracking-[0.15em] font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-[#C85832]" />
                <span>Call Us</span>
              </a>

              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#2A2520] bg-[#0D0C0B] hover:border-[#C85832] text-[#F3EFEA] text-xs uppercase tracking-[0.15em] font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-[#C85832]" />
                <span>Email</span>
              </a>

              <a
                href={`https://wa.me/250788123456`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#C85832] hover:bg-[#B24B27] text-[#F8F5F0] text-xs uppercase tracking-[0.15em] font-medium transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Visual Map / Location Presentation */}
          <div className="lg:col-span-6 relative min-h-[400px] border border-[#2A2520] bg-[#0D0C0B] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="Ember & Oak venue exterior at Kigali Heights"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop";
              }}
              className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-[#0D0C0B]/40" />

            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0D0C0B]/90 backdrop-blur-md border border-[#2A2520] space-y-3">
              <div className="flex items-center gap-2 text-[#C85832]">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Kigali Heights Complex
                </span>
              </div>
              <p className="text-xs text-[#A39D93] leading-relaxed">
                Secure basement and outdoor parking available at Kigali Heights. Accessible via main KG 7 Avenue entrance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
