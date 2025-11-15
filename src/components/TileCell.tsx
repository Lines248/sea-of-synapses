import React from "react";

interface Props {
  elevated?: boolean;
  children?: React.ReactNode;
}

export const TileCell = ({ elevated = false, children }: Props) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-xl
        border border-white/5
        bg-white/[0.025]
        backdrop-blur-[14px]
        shadow-[0_0_25px_rgba(0,0,0,0.25)]
        transition-all duration-500
        hover:bg-white/[0.06]
        will-change-transform
      "
      onMouseMove={(e) => {
        const t = e.currentTarget;
        const rect = t.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dx = (x - rect.width / 2) / 40;
        const dy = (y - rect.height / 2) / 40;

        t.style.transform = `
          perspective(700px)
          rotateX(${dy * -1}deg)
          rotateY(${dx}deg)
          translateZ(0)
        `;

        t.style.setProperty("--mx", `${x}px`);
        t.style.setProperty("--my", `${y}px`);

        t.style.setProperty("--px", `${dx * 8}px`);
        t.style.setProperty("--py", `${dy * 8}px`);
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget;
        t.style.transform = `
          perspective(700px)
          rotateX(0deg)
          rotateY(0deg)
          translateZ(0)
        `;
        t.style.setProperty("--px", `0px`);
        t.style.setProperty("--py", `0px`);
      }}
    >

     
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        "
        style={{
          background: `radial-gradient(
            550px circle at var(--mx) var(--my),
            rgba(255,255,255,0.18),
            transparent 70%
          )`,
        }}
      />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br from-white/15 via-transparent to-white/5
          mix-blend-screen
          opacity-20
        "
        style={{
          transform: `translate3d(var(--px), var(--py), 0)`,
          transition: "transform 0.25s ease-out",
        }}
      />

      {children}
    </div>
  );
};