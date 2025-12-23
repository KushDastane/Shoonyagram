import React from "react";

const PathwayCard = ({
  title,
  subtitle,
  frontIcon,
  backTitle,
  backDesc,
  cta,
  image,
  link,
}) => {
  return (
    <div className="group relative h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-8 md:p-10 text-white">
        {/* Icon */}
        <div className="mb-auto">
          <span className="material-icons text-5xl md:text-6xl opacity-90 group-hover:opacity-100 transition-opacity">
            {frontIcon}
          </span>
        </div>

        {/* Main Title Section */}
        <div className="mb-6">
          <h3 className="font-serif text-3xl md:text-4xl mb-2 tracking-wide">
            {title}
          </h3>
          <p className="text-white/70 text-lg font-light tracking-wider mb-4">
            {subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-200" />
        </div>

        {/* Description - Shows on hover for desktop, always visible on mobile */}
        <div className="mb-6 opacity-0 md:group-hover:opacity-100 md:max-h-0 md:group-hover:max-h-40 transition-all duration-500 md:opacity-100 md:max-h-40">
          <h4 className="font-semibold text-xl mb-2 text-amber-100">
            {backTitle}
          </h4>
          <p className="text-white/80 text-sm leading-relaxed">{backDesc}</p>
        </div>

        {/* CTA Button */}
        <a
          href={link}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group/btn"
        >
          {cta}
          <span className="material-icons text-xl transition-transform group-hover/btn:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
};

const PathwaysSection = () => {
  const pathways = [
    {
      title: "Ancient Trails",
      subtitle: "Learning Through Journeys",
      frontIcon: "explore",
      backTitle: "Travel & Workshops",
      backDesc:
        "Interactive sessions, hands-on workshops, and heritage visits designed for schools.",
      cta: "Know More",
      image: "trip.png",
      link: "/pathways/yatra",
    },
    {
      title: "Holiday School",
      subtitle: "Learning, Living, Growing Together",
      frontIcon: "filter_vintage",
      backTitle: "Family & Community",
      backDesc:
        "Residential holiday programs where children learn values, culture, and skills in nature.",
      cta: "Know More",
      image: "camp.jpg",
      link: "/pathways/kula",
    },
    {
      title: "Ekatva Meet-ups",
      subtitle: "Learning Through Conversation",
      frontIcon: "menu_book",
      backTitle: "Philosophy & Study",
      backDesc:
        "Offline gatherings for creators, thinkers, and culture lovers at heritage locations.",
      cta: "Know More",
      image: "meet.png",
      link: "/pathways/jnana",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section
        id="pathways"
        className="py-24 md:py-32 px-6 md:px-8 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600" />
              <span className="text-amber-700 text-2xl mx-4">❖</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600" />
            </div>

            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-4 tracking-tight">
              Ways to Learn With Us
            </h2>

            <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Select a path to begin your immersion into heritage and wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {pathways.map((pathway, idx) => (
              <PathwayCard key={idx} {...pathway} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-500 text-sm italic">
              Each pathway offers a unique doorway to cultural rediscovery
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PathwaysSection;
