import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 md:pt-0">
      {/* Background with Grid/Symmetry feel */}
      <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img
            src="bg2.jpg"
            alt="Background Texture Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-heritage-primary mb-8 block">
          The Today's Gurukul
        </span>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-heritage-dark mb-8">
          <span className="text-red-700">Ancient</span> Wisdom.
          <br />
          <span className="italic font-light text-heritage-primary">
            <span className="text-red-700">Modern</span> Spirit.
          </span>
        </h1>

        <p className="font-sans text-lg md:text-lg text-heritage-deepStone/80 max-w-lg mx-auto mb-12 leading-relaxed">
          A bridge between timeless Indian thought and the digital age. Reclaim
          heritage not as history, but as a way of living.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <button className="bg-orange-500/40 text-heritage-cream px-10 py-4 font-serif italic text-xl flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95 shadow-xl">
            Begin the Journey
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_right_alt
            </span>
          </button>

          <button className="flex items-center gap-3 uppercase tracking-widest text-[10px] font-bold text-heritage-dark/60 hover:text-heritage-primary transition-colors">
            <span className="material-symbols-outlined border border-heritage-dark/10 rounded-full p-2">
              play_arrow
            </span>
            Watch the Manifesto
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-scroll-float">
        <div className="w-px h-16 bg-gradient-to-b from-heritage-dark/0 via-heritage-dark/40 to-heritage-dark/0"></div>
        <span className="uppercase text-[9px] tracking-[0.5em] writing-mode-vertical text-heritage-dark/40">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
