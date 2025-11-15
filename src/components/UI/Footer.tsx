import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 px-6 py-3 text-[11px] text-slate-500 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>InLine Access Studio</span>
        <span className="text-slate-600">
          React · TypeScript · Tailwind · Vite · Vercel
        </span>
      </div>
    </footer>
  );
};

export default Footer;