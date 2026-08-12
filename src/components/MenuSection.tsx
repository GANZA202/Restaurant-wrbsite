import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { Utensils } from 'lucide-react';

interface MenuSectionProps {
  onReserveItem?: (itemName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onReserveItem }) => {
  const [activeTab, setActiveTab] = useState<typeof MENU_CATEGORIES[number]['id']>('all');

  const filteredItems = activeTab === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="py-24 lg:py-36 bg-[#0D0C0B] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium inline-flex items-center gap-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>Hearth Menu</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light">
            Food &amp; Drinks
          </h2>
          <p className="text-sm sm:text-base text-[#A39D93] font-light italic">
            Live-fire grilling inspired by Rwanda and East Africa
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center border-b border-[#2A2520] mb-16 overflow-x-auto no-scrollbar">
          <div className="flex space-x-1 sm:space-x-6 px-4 pb-px">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`py-4 px-3 sm:px-5 text-xs uppercase tracking-[0.2em] font-medium transition-all relative whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#F3EFEA]'
                      : 'text-[#A39D93] hover:text-[#F3EFEA]'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C85832] shadow-sm shadow-[#C85832]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items List - Pure Editorial Layout */}
        <div className="space-y-8 sm:space-y-10 max-w-4xl mx-auto">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="group pt-3 pb-5 border-b border-[#2A2520]/60 hover:border-[#C85832]/50 transition-colors duration-300 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
            >
              <div className="space-y-2 flex-1 pr-0 sm:pr-8">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFEA] font-normal group-hover:text-[#C85832] transition-colors">
                    {item.name}
                  </h3>
                  {item.featured && (
                    <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#C85832]/50 text-[#C85832] bg-[#1A1815]">
                      Signature
                    </span>
                  )}
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-[0.15em] text-[#A39D93] bg-[#141210] px-2 py-0.5 border border-[#2A2520]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#A39D93] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center sm:flex-col items-end justify-between sm:justify-start gap-2 shrink-0">
                <span className="font-serif text-xl sm:text-2xl text-[#F3EFEA] font-semibold whitespace-nowrap">
                  {item.price}
                </span>

                {onReserveItem && (
                  <button
                    type="button"
                    onClick={() => onReserveItem(item.name)}
                    className="text-[10px] uppercase tracking-[0.2em] text-[#C85832] opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:underline cursor-pointer"
                  >
                    Select for Booking
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Footer Note */}
        <div className="mt-16 text-center text-xs text-[#A39D93] max-w-lg mx-auto font-light space-y-2 border-t border-[#2A2520]/40 pt-8">
          <p>
            Prices in Rwandan Francs (RWF). Prices shown are sample demo pricing for student evaluation.
          </p>
          <p>
            Please inform our team of any dietary requirements or food allergies before ordering.
          </p>
        </div>

      </div>
    </section>
  );
};
