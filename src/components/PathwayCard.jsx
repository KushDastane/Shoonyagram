import React from "react";
import { Link } from "react-router-dom";

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
    <div className="group relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
      {/* BACK CONTENT */}
      <div className="absolute inset-0 z-30 bg-heritage-stone/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10">
        <span className="material-symbols-outlined text-4xl text-heritage-primary mb-6">
          {frontIcon}
        </span>

        <h4 className="font-serif text-2xl font-bold text-heritage-dark mb-4">
          {backTitle}
        </h4>

        <p className="font-serif italic text-heritage-deepStone/80 mb-8 max-w-sm">
          {backDesc}
        </p>

        <Link
          to={link}
          className="text-[10px] font-bold uppercase tracking-widest border-b border-heritage-primary pb-1 text-heritage-primary hover:text-heritage-dark hover:border-heritage-dark transition-colors"
        >
          {cta}
        </Link>
      </div>

      {/* FRONT IMAGE (visual only) */}
      <div className="absolute inset-0 z-10 pointer-events-none transition-all duration-700 group-hover:opacity-40 group-hover:scale-[1.03]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
      </div>

      {/* FRONT TEXT */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center text-center p-8 transition-opacity duration-500 group-hover:opacity-0">
        <span className="material-symbols-outlined text-5xl text-white/80 mb-6">
          {frontIcon}
        </span>
        <h3 className="font-serif text-5xl text-white italic">{title}</h3>
        <p className="text-[10px] uppercase tracking-[0.35em] text-heritage-gold mt-4">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PathwayCard;
