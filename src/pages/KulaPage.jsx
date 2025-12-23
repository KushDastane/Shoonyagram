import React from "react";

const KulaPage = () => {
  return (
    <main className="bg-[#fdfbf7] text-heritage-dark">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-primary mb-4 block">
              Kula Pathway
            </span>

            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              Learn.
              <br />
              <span className="italic text-heritage-deepStone/50">
                Live. Belong.
              </span>
            </h1>

            <p className="text-lg text-heritage-deepStone/70 max-w-xl">
              A residential holiday experience inspired by the Gurukula way of
              life.
            </p>

            {/* soft highlights */}
            <div className="flex gap-6 mt-8 text-xs uppercase tracking-widest text-heritage-deepStone/60">
              <span>Residential</span>
              <span>•</span>
              <span>1–2 Weeks</span>
              <span>•</span>
              <span>In Nature</span>
            </div>
          </div>

          <div className="relative aspect-[5/5] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/kula.png"
              alt="Kula residential learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WAY OF LIVING – SYMBOL STRIP */}
      <section className="py-14 border-y border-heritage-stone/30 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div className="space-y-2">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              home
            </span>
            <p className="font-serif text-lg">Residential</p>
          </div>

          <div className="space-y-2">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              calendar_month
            </span>
            <p className="font-serif text-lg">1–2 Weeks</p>
          </div>

          <div className="space-y-2">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              landscape
            </span>
            <p className="font-serif text-lg">Nature</p>
          </div>

          <div className="space-y-2">
            <span className="material-symbols-outlined text-3xl text-heritage-primary">
              verified
            </span>
            <p className="font-serif text-lg">Paid Program</p>
          </div>
        </div>
      </section>

      {/* LIFE AT KULA – FEELINGS, NOT FEATURES */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-14 text-center">
            Life at Kula
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                groups
              </span>
              <p className="font-serif text-lg">Living Together</p>
            </div>

            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                self_improvement
              </span>
              <p className="font-serif text-lg">Mind & Body Balance</p>
            </div>

            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                menu_book
              </span>
              <p className="font-serif text-lg">Stories & Wisdom</p>
            </div>

            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                forest
              </span>
              <p className="font-serif text-lg">Nature Immersion</p>
            </div>

            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                diversity_3
              </span>
              <p className="font-serif text-lg">Belonging</p>
            </div>

            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl text-heritage-primary">
                psychology
              </span>
              <p className="font-serif text-lg">Inner Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR – CHIPS */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Who Is Kula For?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Children & Teens",
              "School Holidays",
              "Value-Oriented Families",
              "Nature Lovers",
              "Cultural Curiosity",
              "Reflective Learners",
            ].map((item, i) => (
              <span
                key={i}
                className="px-5 py-2 border border-heritage-stone/40 rounded-full font-serif"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Join the Kula</h2>
        <p className="text-heritage-deepStone/70 mb-10">
          A home-like learning journey.
        </p>

        <button className="bg-heritage-primary text-white px-10 py-4 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-heritage-primary/90 transition">
          Enquire for Kula Program
        </button>
      </section>
    </main>
  );
};

export default KulaPage;
