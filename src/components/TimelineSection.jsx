import React from "react";

const TimelineSection = () => {
  const steps = [
    {
      id: "01",
      title: "Our Roots",
      desc: "Indian culture once explored life deeply — through practice, not theory.",
      align: "right",
    },
    {
      id: "02",
      title: "The Disconnect",
      desc: "Speed and noise replaced balance. Meaning slowly faded from daily life.",
      align: "left",
    },
    {
      id: "03",
      title: "The Bridge",
      desc: "Shoonyagram reconnects wisdom with modern life — simply and clearly.",
      align: "right",
      pulse: true,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#fdfbf7] text-heritage-dark relative">
      {/* subtle warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,140,80,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-2">
            What We Forgot Along the Way
          </h2>
          <p className="text-heritage-deepStone/70 text-sm max-w-xl mx-auto">
            Understanding where we drifted — and how to return
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-heritage-primary/20 -translate-x-1/2" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative mb-10 last:mb-0 md:flex md:items-center ${
                step.align === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div
                className={`md:w-[44%] ${
                  step.align === "right"
                    ? "md:text-right md:pr-8"
                    : "md:text-left md:pl-8"
                }`}
              >
                <div className="bg-white/80 border border-heritage-stone/30 rounded-xl p-5 shadow-sm">
                  <h3 className="font-serif text-lg md:text-xl mb-1">
                    {step.title}
                  </h3>
                  <p className="text-heritage-deepStone/70 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Center marker */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div className="relative">
                  {step.pulse && (
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-heritage-primary/30 animate-ping" />
                  )}
                </div>
              </div>

              {/* Step number */}
              <div
                className={`hidden md:block md:w-[44%] ${
                  step.align === "right" ? "md:pl-8" : "md:pr-3 md:text-right"
                }`}
              >
                <span className="text-5xl font-serif text-heritage-dark/5 select-none">
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
