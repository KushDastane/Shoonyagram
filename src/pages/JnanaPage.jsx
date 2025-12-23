import React from "react";

const JnanaPage = () => {
  return (
    <main className="bg-[#fdfbf7] text-heritage-dark">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-primary mb-4 block">
            Ekatva
          </span>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Where Minds
            <br />
            <span className="italic text-heritage-deepStone/50">
              Gather & Converse
            </span>
          </h1>

          <p className="text-lg text-heritage-deepStone/70 max-w-2xl mx-auto">
            Offline meet-ups for creators, history lovers, and cultural thinkers
            — held at places where history still breathes.
          </p>

          {/* soft highlights */}
          <div className="flex justify-center gap-6 mt-8 text-xs uppercase tracking-widest text-heritage-deepStone/60">
            <span>Offline</span>
            <span>•</span>
            <span className="border-2 px-2 py-1 bg-orange-600 text-white">Paid</span>
            <span>•</span>
            <span>Across India</span>
          </div>
        </div>
      </section>

      {/* WHAT IS EKATVA – ICON STRIP */}
      <section className="py-14 border-y border-heritage-stone/30 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div className="space-y-3">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              diversity_3
            </span>
            <p className="font-serif text-lg">Like-minded People</p>
          </div>

          <div className="space-y-3">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              account_balance
            </span>
            <p className="font-serif text-lg">Historic Locations</p>
          </div>

          <div className="space-y-3">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              schedule
            </span>
            <p className="font-serif text-lg">Half / One / Two Days</p>
          </div>

          <div className="space-y-3">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              verified
            </span>
            <p className="font-serif text-lg">Curated Meet-up</p>
          </div>
        </div>
      </section>

      {/* WHO COMES – SYMBOL GRID */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-14">
            Who You’ll Meet
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-3">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                history_edu
              </span>
              <p className="font-serif">History Lovers</p>
            </div>

            <div className="space-y-3">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                brush
              </span>
              <p className="font-serif">Artists & Creators</p>
            </div>

            <div className="space-y-3">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                mic
              </span>
              <p className="font-serif">Storytellers & Musicians</p>
            </div>

            <div className="space-y-3">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                psychology
              </span>
              <p className="font-serif">Thinkers & Professors</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS – FLOW, NOT BOXES */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            What Happens at Ekatva
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center text-sm text-heritage-deepStone/70">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-heritage-primary">
                forum
              </span>
              Theme-based conversations
            </div>

            <span className="hidden md:block text-heritage-deepStone/30">
              —
            </span>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-heritage-primary">
                lightbulb
              </span>
              Story & idea sharing
            </div>

            <span className="hidden md:block text-heritage-deepStone/30">
              —
            </span>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-heritage-primary">
                coffee
              </span>
              Cultural networking
            </div>

            <span className="hidden md:block text-heritage-deepStone/30">
              —
            </span>

            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-heritage-primary">
                auto_stories
              </span>
              Creative showcases
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Be Part of Ekatva
        </h2>
        <p className="text-heritage-deepStone/70 mb-10">
          Come for the place. Stay for the people.
        </p>

        <button className="bg-heritage-primary text-white px-10 py-4 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-heritage-primary/90 transition">
          View Upcoming Meet-ups
        </button>
      </section>
    </main>
  );
};

export default JnanaPage;
