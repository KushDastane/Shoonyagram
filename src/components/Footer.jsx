import React from "react";

const Footer = () => {
  return (
    <footer
      id="sangha"
      className="bg-[#0c0807] py-20 px-6 md:px-8 text-heritage-cream relative"
    >
      {/* top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-heritage-primary/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* ✅ KEPT EXACTLY SAME */}
        <div className="space-y-6">
          <div className="inline-block p-4 border border-heritage-primary/20 rounded-full mb-6">
            <span className="material-symbols-outlined text-4xl text-heritage-primary/80">
              temple_hindu
            </span>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Your Heritage Awaits.
            <br />
            <span className="italic text-heritage-deepStone text-3xl md:text-4xl">
              Will you step through?
            </span>
          </h2>

          <p className="text-heritage-stone/40 max-w-xl mx-auto font-light leading-relaxed">
            This is not just about learning the past — it is about living it in
            a way that stays with you. Join the Sangha.
          </p>
        </div>

        <div className="max-w-md mx-auto relative">
          <div className="flex flex-col gap-3 p-1.5 bg-heritage-dark/50 border border-white/5 rounded-lg shadow-2xl backdrop-blur-sm">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-none text-white placeholder:text-white/20 text-center py-4 focus:ring-0 font-serif text-lg italic"
            />
            <button className="bg-heritage-primary text-white py-4 px-8 uppercase tracking-[0.2em] font-bold text-[10px] hover:bg-heritage-primary/90 transition-all rounded shadow-lg shadow-heritage-primary/20">
              Begin the Journey
            </button>
          </div>
        </div>
        {/* ✅ END unchanged block */}

        {/* Refined links section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-left max-w-3xl mx-auto">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Vision</li>
              <li>Pathways</li>
              <li>Timeline</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">
             Updates
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Community</li>
              <li>Events</li>
              <li>Join</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">
              Social
            </h4>
            <div className="flex gap-4 text-white/50">
              <a href="#" className="hover:text-heritage-primary transition">
                <span className="material-symbols-outlined text-lg">
                  public
                </span>
              </a>
              <a href="#" className="hover:text-heritage-primary transition">
                <span className="material-symbols-outlined text-lg">
                  rss_feed
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-[10px] tracking-[0.25em] text-white/25 uppercase">
            © 2025 Shoonyagram Foundation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
