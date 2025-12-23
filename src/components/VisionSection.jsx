import React from "react";
import { useInView } from "../hooks/useInView";

const VisionSection = () => {
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <section
      id="vision"
      className="py-32 px-8 md:px-16 lg:px-24 bg-heritage-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <div className="space-y-8 max-w-xl">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-heritage-primary mb-4 block">
                Our Vision
              </span>
              <h2 className="font-serif text-5xl md:text-7xl leading-tight text-heritage-dark">
                Beyond Textbooks.{" "}
                <span className="italic font-light text-heritage-deepStone/40">
                  Into Experience.
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-heritage-deepStone font-light leading-relaxed">
              We help people understand Indian culture by experiencing it, not
              just reading about it. Understanding why we do what we do - the
              meaning behind rituals, chants, and traditions.
            </p>
          </div>

          {/* Image Grid Start */}
          <div className="relative">
            {/* Primary Image: Ritual */}
            <div className="relative z-10 w-full aspect-[7/5] rounded-t-[10rem] overflow-hidden shadow-2xl">
              <img
                src="ritual.webp"
                alt="The Science of Ritual"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 text-white">
                <span className="material-symbols-outlined text-4xl mb-4">
                  self_improvement
                </span>
                <h3 className="font-serif text-3xl italic">
                  The Science of Ritual
                </h3>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-heritage-gold/20 border rounded-full"></div>
          </div>
        </div>

        {/* Shloka + Vision Anchor */}
        <div className="my-24 flex justify-center">
          <div className="max-w-md text-center relative">
            {/* faint divider */}
            <div className="w-px h-20 bg-heritage-dark/20 mx-auto mb-6"></div>

            {/* shloka */}
            <p className="font-serif text-2xl md:text-6xl tracking-[0.1em] text-heritage-dark mb-2">
              मूलं हि बलम्
            </p>

            {/* meaning */}
            <p className="text-[14px] uppercase tracking-[0.35em] text-heritage-dark/50 mb-6">
              Our roots are our strength
            </p>

            {/* vision in simplest language */}
            <p className="text-sm text-heritage-deepStone/70 leading-relaxed">
              We help people understand Indian culture by experiencing it -
              through stories, art, rituals, and shared journeys.
            </p>

            {/* subtle bottom divider */}
            <div className="w-px h-20 bg-heritage-dark/20 mx-auto mt-6"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20 items-end">
          <div className="md:col-span-1 space-y-6">
            <p className="text-lg text-heritage-deepStone/60 leading-relaxed italic">
              Important values and life lessons are not taught as lectures. They
              are taught through stories, where students learn by watching
              characters, their choices, and the results of those choices.
            </p>

            <div className="p-8 bg-white/50 border border-heritage-stone/30 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-heritage-primary mb-4">
                temple_hindu
              </span>
              <h4 className="font-serif text-2xl mb-2">Storytelling</h4>
              <p className="text-xs text-heritage-deepStone/70 leading-relaxed uppercase tracking-widest">
                Teaching morals, values, and cultural wisdom through epics,
                folklore, theatre, and narrative learning.
              </p>
            </div>
          </div>

          <div
            ref={ref}
            className="md:col-span-2 relative transition-transform duration-700 hover:scale-[1.02]"
          >
            {/* Natya Image */}
            <div className="relative aspect-video overflow-hidden shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
              <img
                src="story.jpg"
                alt="Storytelling"
                className={`
    w-full h-full object-cover
    transition-all duration-[1200ms] ease-out
    ${
      inView
        ? "grayscale-0 saturate-100 brightness-100 contrast-110"
        : "grayscale-[85%] saturate-[0.6] brightness-[0.55] contrast-[1.05]"
    }
  `}
              />

              {/* Overlay */}
              <div
                className={`
    absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
    transition-opacity duration-[1200ms]
    ${inView ? "opacity-60" : "opacity-90"}
  `}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-4xl text-white mb-2">
                      Storytelling
                    </h3>
                    <p className="text-white/60 text-xs tracking-widest uppercase max-w-xs">
                      Learning through the oldest method: "narration"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inset Text Block Floating Effect */}
            <div className="absolute -bottom-8 -right-8 max-w-sm bg-heritage-dark p-8 shadow-2xl z-20">
              <div className="border border-white/10 p-4">
                <h5 className="font-serif italic text-white text-xl mb-1">
                  The Manuscript Tradition
                </h5>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Wisdom decoded from our epics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
