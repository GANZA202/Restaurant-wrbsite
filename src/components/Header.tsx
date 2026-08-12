import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

interface HeaderProps {
  onOpenReservation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['story', 'hearth', 'menu', 'chef', 'gallery', 'reservation', 'visit'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'The Hearth', href: '#hearth', id: 'hearth' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Visit', href: '#visit', id: 'visit' },
    { label: 'Reservations', href: '#reservation', id: 'reservation' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0D0C0B]/90 backdrop-blur-md border-b border-[#2A2520] py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#0D0C0B]/80 via-[#0D0C0B]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="group flex flex-col focus:outline-none"
            aria-label="Ember & Oak Homepage"
          >
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#C85832] group-hover:scale-110 transition-transform fill-[#C85832]/20" />
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] text-[#F3EFEA] font-normal uppercase leading-none group-hover:text-[#C85832] transition-colors">
                EMBER &amp; OAK
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#C85832] mt-1 font-sans font-medium pl-6">
              LIVE FIRE · KIGALI, RWANDA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1 ${
                    isActive ? 'text-[#F3EFEA] font-medium' : 'text-[#A39D93] hover:text-[#F3EFEA]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C87D4A] animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Reservation CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#reservation"
              onClick={(e) => {
                if (onOpenReservation) {
                  e.preventDefault();
                  onOpenReservation();
                } else {
                  handleNavClick(e, '#reservation');
                }
              }}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#F3EFEA] border border-[#C87D4A]/60 rounded-none bg-[#1A1815]/80 hover:bg-[#C87D4A] hover:text-[#0D0C0B] hover:border-[#C87D4A] transition-all duration-300 shadow-md overflow-hidden"
            >
              <span className="relative z-10">Reserve a Table</span>
              <span className="absolute inset-0 bg-[#C87D4A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F3EFEA] hover:text-[#C87D4A] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0C0B]/98 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between px-8 py-24 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-6 pt-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#C87D4A] font-medium border-b border-[#2A2520] pb-3">
            Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-3xl text-[#F3EFEA] hover:text-[#C87D4A] transition-colors tracking-wide flex items-center justify-between group"
            >
              <span>{link.label}</span>
              <span className="text-xs text-[#C87D4A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-6 pt-8 border-t border-[#2A2520]">
          <a
            href="#reservation"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (onOpenReservation) {
                e.preventDefault();
                onOpenReservation();
              } else {
                handleNavClick(e, '#reservation');
              }
            }}
            className="w-full text-center py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0C0B] bg-[#C87D4A] hover:bg-[#E08E53] transition-colors"
          >
            Reserve a Table
          </a>

          <div className="text-center text-xs text-[#A39D93] space-y-1">
            <p>Kigali Heights, KG 7 Ave · Kigali, Rwanda</p>
            <p>Mon–Sun · 11:30–22:00</p>
          </div>
        </div>
      </div>
    </>
  );
};
