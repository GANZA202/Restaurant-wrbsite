import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const Hero = ({ onOpenReservation }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  // Initialize ambient hearth sound effect if available
  useEffect(() => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2281/2281-preview.mp3');
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.play().then(() => {
        setIsMuted(false);
      }).catch(() => {
        setIsMuted(false);
      });
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReservation = (e) => {
    e.preventDefault();
    if (onOpenReservation) {
      onOpenReservation();
    } else {
      const resEl = document.getElementById('reservation');
      if (resEl) {
        resEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="top"
      className="relative w-full min-h-[100dvh] h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#0D0C0B]"
    >
      {/* 1. Full-screen Background Food Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
          alt="Ember & Oak Live Fire Roasted Dish"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover object-center scale-105 filter contrast-125 brightness-90 transition-transform duration-10000 motion-safe:animate-pulse"
        />

        {/* 2. Dark Image Overlay Layers */}
        <div className="absolute inset-0 bg-[#0D0C0B]/55 backdrop-brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-[#0D0C0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B]/80 via-transparent to-[#0D0C0B]/60" />

        <div className="absolute bottom-1/4 -left-12 w-80 h-80 bg-[#C85832]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto w-full max-w-4xl space-y-6 sm:space-y-8 pt-4 sm:pt-8">
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-[#F3EFEA] font-normal leading-[0.92] tracking-tight flex flex-col">
          <span>Where fire</span>
          <span>becomes</span>
          <span className="italic font-normal text-[#C85832] font-serif">
            flavor.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-[#E6E1DA]/90 max-w-xl font-sans font-light leading-relaxed">
          A hearth kitchen in Kigali Heights, where hardwood charcoal embers bring out the authentic depth of Rwandan live-fire cooking.
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full max-w-lg sm:max-w-none">
          <button
            onClick={scrollToReservation}
            className="w-full sm:w-auto px-8 py-4 bg-[#C85832] hover:bg-[#B24B27] active:scale-[0.99] text-[#F8F5F0] text-xs sm:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-none shadow-2xl flex items-center justify-center cursor-pointer min-h-[54px]"
          >
            RESERVE A TABLE
          </button>

          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#F3EFEA]/10 border border-[#A39D93]/60 hover:border-[#F3EFEA] text-[#F8F5F0] text-xs sm:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-none flex items-center justify-center cursor-pointer min-h-[54px]"
          >
            EXPLORE THE MENU
          </button>
        </div>
      </div>

      {/* Sound Toggle */}
      <div className="relative z-20 flex justify-end items-center w-full">
        <button
          type="button"
          onClick={toggleSound}
          className="group w-12 h-12 rounded-full border border-[#6A5A4D] hover:border-[#C85832] bg-[#141210]/80 backdrop-blur-md flex items-center justify-center text-[#F8F5F0] hover:text-[#C85832] transition-all duration-300 focus:outline-none shadow-lg cursor-pointer"
          aria-label={isMuted ? 'Unmute hearth sound' : 'Mute hearth sound'}
          title={isMuted ? 'Unmute hearth sound' : 'Mute hearth sound'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-[#A39D93] group-hover:text-[#C85832] transition-colors" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#C85832] animate-pulse" />
          )}
        </button>
      </div>
    </section>
  );
};
