import React from 'react';
import { Flame, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090807] border-t border-[#2A2520] pt-20 pb-12 text-[#A39D93] text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#C85832]/50 flex items-center justify-center bg-[#1A1815]">
                <Flame className="w-4 h-4 text-[#C85832]" />
              </div>
              <span className="font-serif text-2xl tracking-wider text-[#F3EFEA] font-normal uppercase">
                Ember <span className="text-[#C85832] font-light">&amp;</span> Oak
              </span>
            </div>

            <p className="text-sm font-light leading-relaxed max-w-sm">
              Live-fire hearth kitchen in Kigali, Rwanda. Sourcing local ingredients, charcoal grilling, and welcoming hospitality.
            </p>

            <div className="text-xs space-y-1 text-[#F3EFEA]/80">
              <p>{RESTAURANT_INFO.address}</p>
              <p className="text-[#A39D93] mt-1">{RESTAURANT_INFO.hours}</p>
            </div>
          </div>

          {/* Useful Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-3 font-light">
              <li>
                <a href="#menu" className="hover:text-[#F3EFEA] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F3EFEA] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#hearth" className="hover:text-[#F3EFEA] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F3EFEA] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#F3EFEA] transition-colors">
                  Visit
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#F3EFEA] transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block">
              Contact
            </span>
            <div className="space-y-2 font-light text-xs text-[#F3EFEA]/80">
              <p>Kigali, Rwanda</p>
              <p>{RESTAURANT_INFO.phone}</p>
              <p className="text-[#A39D93]">{RESTAURANT_INFO.email}</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] font-semibold block">
              The Hearth Dispatch
            </span>
            <p className="text-xs font-light leading-relaxed">
              Subscribe for updates on seasonal menu releases and live-fire events in Kigali Heights.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#141210] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#C85832] text-[#F8F5F0] px-4 py-3 hover:bg-[#B24B27] transition-colors shrink-0 cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-[#2A2520] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A39D93]/60">
          <p>© {new Date().getFullYear()} Ember &amp; Oak Kigali. All rights reserved. (Academic Portfolio Demo)</p>

          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C85832] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#C85832] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <span className="text-xs font-serif italic text-[#C85832]">Kigali Heights, Rwanda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
