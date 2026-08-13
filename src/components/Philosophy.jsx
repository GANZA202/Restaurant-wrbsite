import React from 'react';

export const Philosophy = () => {
  return (
    <section className="py-28 lg:py-44 bg-[#141210] relative overflow-hidden border-y border-[#2A2520]/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-12">
        <div className="text-[11px] uppercase tracking-[0.3em] text-[#C85832] font-medium inline-block border-b border-[#C85832]/40 pb-2">
          Fire Brings People Together
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F3EFEA] font-light leading-tight tracking-tight">
          Simple ingredients.<br />
          <span className="italic text-[#C85832] font-normal">Patient hands.</span><br />
          Live fire.
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 pt-4 text-base sm:text-lg text-[#A39D93] font-light leading-relaxed">
          <p>
            At Ember &amp; Oak, our hearth is open. Every morning, we stoke embers using seasoned native hardwood and local charcoal, building the clean, white-hot bed of coals that defines our kitchen.
          </p>
          <p>
            We source fresh whole tilapia from Lake Kivu, prime tenderloin beef from Gicumbi, and sweet plantains, cassava, and mountain herbs from local farmers. The heat of open coals transforms honest ingredients into shared meals made for good conversation.
          </p>
        </div>

        <div className="pt-6">
          <span className="font-serif italic text-xl text-[#F3EFEA]/80 tracking-widest">
            — Kigali Heights, Rwanda
          </span>
        </div>
      </div>
    </section>
  );
};
