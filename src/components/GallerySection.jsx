import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData.js';
import { Maximize2, X } from 'lucide-react';

export const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-[#0D0C0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium mb-3">
              Visual Chronicle
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light">
              Atmosphere &amp; Fire
            </h2>
          </div>
          <p className="text-sm text-[#A39D93] max-w-md font-light italic">
            Moments around our live open hearth, kitchen, guests, and Kigali Heights atmosphere.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const spanClass =
              idx === 0
                ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]'
                : idx === 2
                ? 'aspect-[3/4]'
                : 'aspect-square sm:aspect-[4/3]';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative group overflow-hidden border border-[#2A2520] bg-[#141210] cursor-pointer ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Overlay Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C85832] font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-[#F3EFEA] font-normal">
                      {item.title}
                    </h3>
                    <Maximize2 className="w-4 h-4 text-[#C85832]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#0D0C0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 p-2 text-[#A39D93] hover:text-[#F3EFEA] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="border border-[#2A2520] bg-[#141210] overflow-hidden max-h-[75vh]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop";
                }}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            <div className="mt-4 text-center space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C85832] block">
                {selectedItem.category}
              </span>
              <h3 className="font-serif text-2xl text-[#F3EFEA]">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
