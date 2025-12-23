import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40); // threshold
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-8 py-6 md:px-16
        transition-all duration-300 ease-out
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm  "
            : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 relative flex items-center justify-center">
          <div className="absolute inset-0 border border-heritage-dark rotate-45 transition-transform group-hover:rotate-90"></div>
          <div className="w-2 h-2 bg-heritage-primary rounded-full"></div>
        </div>
        <span className="font-serif text-2xl font-bold tracking-tight">
          Shoonyagram
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-heritage-dark/70">
        <a
          href="#vision"
          className="hover:text-heritage-primary transition-colors"
        >
          Vision
        </a>
        <a
          href="#pathways"
          className="hover:text-heritage-primary transition-colors"
        >
          Pathways
        </a>
        <a
          href="#sangha"
          className="hover:text-heritage-primary transition-colors"
        >
          Contact
        </a>
        <button className="border border-heritage-primary/40 px-6 py-2.5 italic font-serif text-sm tracking-normal normal-case text-heritage-primary hover:bg-heritage-primary hover:text-orange-800 transition-all">
          Join the Movement
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
