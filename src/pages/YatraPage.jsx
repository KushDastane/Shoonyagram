import React from "react";

const YatraPage = () => {
  return (
    <main className="bg-[#fdfbf7] text-heritage-dark">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-heritage-primary mb-4 block">
              Yatra Pathway
            </span>

            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              Learn History
              <br />
              <span className="italic text-heritage-deepStone/50">
                By Being There
              </span>
            </h1>

            <p className="text-lg text-heritage-deepStone/70 leading-relaxed max-w-xl">
              Yatra is Shoonyagram’s experiential journey program where Indian
              heritage is understood through travel, storytelling, and lived
              moments — not textbooks.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3 mt-8 text-[10px] uppercase tracking-widest">
              <span className="px-4 py-2 border border-heritage-primary/30 rounded-full text-heritage-primary">
                Interactive
              </span>
              <span className="px-4 py-2 border border-heritage-primary/30 rounded-full">
                Experience-Based
              </span>
              <span className="px-4 py-2 border border-heritage-primary/30 rounded-full">
                All Age Groups
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/temple.jpg"
              alt="Heritage Walk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FREE / PAID STRUCTURE */}
      <section className="py-20 px-6 md:px-10 bg-white border-y border-heritage-stone/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-14">
            How Yatra Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* FREE */}
            <div className="p-8 rounded-2xl border border-heritage-primary/30 bg-heritage-primary/5">
              <span className="inline-block mb-4 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-heritage-primary border border-heritage-primary/40 bg-green-300 rounded-full">
                Free
              </span>

              <h3 className="font-serif text-xl mb-3">
                Interactive Introduction
              </h3>

              <ul className="text-sm text-heritage-deepStone/70 space-y-2">
                <li>• Duration: 30–45 minutes</li>
                <li>• Visual storytelling session</li>
                <li>• Live interaction & Q&A</li>
                <li>• No payment required</li>
              </ul>
            </div>

            {/* PAID */}
            <div className="p-8 rounded-2xl border border-heritage-stone/40 bg-white">
              <span className="inline-block bg-orange-500 mb-4 px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-heritage-stone/40 rounded-full">
                Paid
              </span>

              <h3 className="font-serif text-xl mb-3">Hands-on Workshops</h3>

              <ul className="text-sm text-heritage-deepStone/70 space-y-2">
                <li>• Half-day or full-day</li>
                <li>• Art, craft, rituals & food</li>
                <li>• Conducted at schools or venues</li>
                <li>• Fully customizable</li>
              </ul>
            </div>

            {/* OPTIONAL PAID */}
            <div className="p-8 rounded-2xl border border-heritage-stone/40 bg-white">
              <span className="inline-block bg-orange-300 mb-4 px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-heritage-stone/40 rounded-full">
                Paid · Optional
              </span>

              <h3 className="font-serif text-xl mb-3">
                Curated Heritage Trails
              </h3>

              <ul className="text-sm text-heritage-deepStone/70 space-y-2">
                <li>• One-day or two-day trips</li>
                <li>• Archaeological & cultural sites</li>
                <li>• Storytelling on location</li>
                <li>• School-tied or open groups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TYPES */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Heritage Walks",
              img: "/trail.jpg",
              desc: "Guided walks through temples, forts, streets, and cultural spaces.",
            },
            {
              title: "Immersive Workshops",
              img: "/rangoli.jpg",
              desc: "Learning through art, craft, performance, and traditional practices.",
            },
            {
              title: "Interactive Art",
              img: "/stage.jpg",
              desc: "Stage Play based on Indian history, mythology, or forgotten heroes",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6 bg-white">
                <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                <p className="text-sm text-heritage-deepStone/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Begin a Yatra</h2>
        <p className="text-heritage-deepStone/70 mb-10">
          Start with a free introduction. Continue if it resonates.
        </p>

        <button className="bg-heritage-primary text-white px-10 py-4 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-heritage-primary/90 transition">
          Enquire for Yatra
        </button>
      </section>
    </main>
  );
};

export default YatraPage;
